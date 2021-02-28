"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var subsplease_http_client_1 = require("./subsplease-http-client");
var subsplease_cache_1 = require("./subsplease-cache");
var searchEvents = __importStar(require("./subsplease-events"));
var SubsPleaseXdccSearch = /** @class */ (function (_super) {
    __extends(SubsPleaseXdccSearch, _super);
    function SubsPleaseXdccSearch() {
        return _super.call(this) || this;
    }
    SubsPleaseXdccSearch.prototype.search = function (terms, cache) {
        var _this = this;
        if (!terms) {
            return Promise.reject('no search temrs provided');
        }
        if (cache) {
            var results = subsplease_cache_1.horribleSubsCache.get(terms);
            if (results && results.length) {
                this.emit(searchEvents.completed, { terms: terms, results: results });
                return Promise.resolve(results);
            }
        }
        return subsplease_http_client_1.horribleSubsClient.get(terms)
            .then(function (results) {
            if (cache) {
                subsplease_cache_1.horribleSubsCache.set(terms, results);
            }
            _this.emit(searchEvents.completed, { terms: terms, results: results });
            return Promise.resolve(results);
        })
            .catch(function (error) {
            _this.emit(searchEvents.error, { terms: terms, error: error });
            return Promise.reject(error);
        });
    };
    return SubsPleaseXdccSearch;
}(events_1.EventEmitter));
exports.SubsPleaseXdccSearch = SubsPleaseXdccSearch;
;
//# sourceMappingURL=subsplease-xdcc-search.js.map