import * as https from 'https';
import { SubsPleaseXdccResult } from './subsplease-xdcc-result';

const defaultRequestOptions = {
      method: 'GET'
      , hostname: 'subsplease.org'
      , port: 443
      , path: '/xdcc/'
    }
   , handlers = {
      data: (httpChunks: any[], chuck: any) => {
        httpChunks.push(chuck);
      }
    , end: (httpChunks: any[], cb: Function) => {
        const body = Buffer.concat(httpChunks)
            , content = body.toString()
            , p = { k: [] }
            ;
        eval(content);
        const results = p.k.map((r: any) => new SubsPleaseXdccResult(r));
        return cb(results);
      }
    , error: (cb: Function, err: Error) => cb(err)
   }
  , horribleSubsClient = {
      get: (terms: string): Promise<SubsPleaseXdccResult[]> => new Promise((resolve, reject) => {
          const options = Object.assign({}, defaultRequestOptions)
              , httpChunks: any[] = []
              ;
          let request;
          options.path += `search.php?t=${terms}`;
          options.path = encodeURI(options.path);
          request = https.request(options, (response) => {
            if (response.statusCode  != 200) {
                return reject(`Bad response for ${options.path} - status: ${response.statusCode}`);
            }
            response.on('data', handlers.data.bind(null, httpChunks) );
            response.on('end', handlers.end.bind(null, httpChunks, resolve) );
          });
          request.on('error', handlers.error.bind(null, reject) );
          request.end();
      })
    }
  ;

export { horribleSubsClient };