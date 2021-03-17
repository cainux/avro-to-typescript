"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function dataDir() {
    return __dirname.match("/dist/")
        ? path.join(__dirname, "..", "..", "test", "data")
        : path.join(__dirname, "data");
}
exports.dataDir = dataDir;
//# sourceMappingURL=utils.js.map