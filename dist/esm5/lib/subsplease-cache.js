"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache = {};
var getKey = function (terms) { return terms.replace(/\s/g, '+'); }, horribleSubsCache = {
    set: function (terms, results) {
        var k = getKey(terms);
        cache[k] = results;
        return cache[k];
    },
    get: function (terms) {
        var k = getKey(terms);
        return cache.hasOwnProperty(k) ? cache[k] : null;
    },
    remove: function (terms) {
        var k = getKey(terms);
        if (cache.hasOwnProperty(k)) {
            delete cache[k];
        }
    },
    clear: function (terms) {
        cache = {};
    }
};
exports.horribleSubsCache = horribleSubsCache;
//# sourceMappingURL=subsplease-cache.js.map