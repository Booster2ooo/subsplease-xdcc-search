"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cache = {};
const getKey = (terms) => terms.replace(/\s/g, '+'), horribleSubsCache = {
    set: (terms, results) => {
        const k = getKey(terms);
        cache[k] = results;
        return cache[k];
    },
    get: (terms) => {
        const k = getKey(terms);
        return cache.hasOwnProperty(k) ? cache[k] : null;
    },
    remove: (terms) => {
        const k = getKey(terms);
        if (cache.hasOwnProperty(k)) {
            delete cache[k];
        }
    },
    clear: (terms) => {
        cache = {};
    }
};
exports.horribleSubsCache = horribleSubsCache;
//# sourceMappingURL=subsplease-cache.js.map