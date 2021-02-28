"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubsPleaseXdccResult {
    constructor(result) {
        if (result) {
            this.botNick = result.b;
            this.packId = result.n;
            this.fileSize = result.s;
            this.fileName = result.f;
        }
    }
}
exports.SubsPleaseXdccResult = SubsPleaseXdccResult;
//# sourceMappingURL=subsplease-xdcc-result.js.map