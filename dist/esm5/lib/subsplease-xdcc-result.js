"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubsPleaseXdccResult = /** @class */ (function () {
    function SubsPleaseXdccResult(result) {
        if (result) {
            this.botNick = result.b;
            this.packId = result.n;
            this.fileSize = result.s;
            this.fileName = result.f;
        }
    }
    return SubsPleaseXdccResult;
}());
exports.SubsPleaseXdccResult = SubsPleaseXdccResult;
//# sourceMappingURL=subsplease-xdcc-result.js.map