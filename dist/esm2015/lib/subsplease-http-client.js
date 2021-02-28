"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const https = __importStar(require("https"));
const subsplease_xdcc_result_1 = require("./subsplease-xdcc-result");
const defaultRequestOptions = {
    method: 'GET',
    hostname: 'subsplease.org',
    port: 443,
    path: '/xdcc/'
}, handlers = {
    data: (httpChunks, chuck) => {
        httpChunks.push(chuck);
    },
    end: (httpChunks, cb) => {
        const body = Buffer.concat(httpChunks), content = body.toString(), p = { k: [] };
        eval(content);
        const results = p.k.map((r) => new subsplease_xdcc_result_1.SubsPleaseXdccResult(r));
        return cb(results);
    },
    error: (cb, err) => cb(err)
}, horribleSubsClient = {
    get: (terms) => new Promise((resolve, reject) => {
        const options = Object.assign({}, defaultRequestOptions), httpChunks = [];
        let request;
        options.path += `search.php?t=${terms}`;
        options.path = encodeURI(options.path);
        request = https.request(options, (response) => {
            if (response.statusCode != 200) {
                return reject(`Bad response for ${options.path} - status: ${response.statusCode}`);
            }
            response.on('data', handlers.data.bind(null, httpChunks));
            response.on('end', handlers.end.bind(null, httpChunks, resolve));
        });
        request.on('error', handlers.error.bind(null, reject));
        request.end();
    })
};
exports.horribleSubsClient = horribleSubsClient;
//# sourceMappingURL=subsplease-http-client.js.map