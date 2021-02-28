import { SubsPleaseXdccResult } from "./subsplease-xdcc-result";

let cache: any = {};
const getKey = (terms: string) => terms.replace(/\s/g,'+')
    , horribleSubsCache = {
          set: (terms: string, results: SubsPleaseXdccResult[]): SubsPleaseXdccResult[] => {
            const k = getKey(terms);
            cache[k] = results;
            return cache[k];
          }
        , get: (terms: string): SubsPleaseXdccResult[]|null|undefined => {
            const k = getKey(terms);
            return cache.hasOwnProperty(k) ? cache[k] : null;
          }
        , remove: (terms: string) => {
            const k = getKey(terms);
            if (cache.hasOwnProperty(k)) {
              delete cache[k];
            }
          }
        , clear: (terms: string) => {
            cache = {};
          }
      }
    ;

export { horribleSubsCache };