"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const fs = require("fs");
const path = require("path");
const src_1 = require("../../../src");
const utils_1 = require("../../utils");
const expect = chai.expect;
chai.should();
const avscDir = path.join(utils_1.dataDir(), "avro", "records");
const expectedDir = path.join(utils_1.dataDir(), "expected");
const getExpectedResult = (file) => {
    return fs.readFileSync(file).toString();
};
describe("New Class Converter test", () => {
    it("should convert a record with default sub-records", () => {
        const converter = new src_1.ClassConverter();
        converter.convert(`${avscDir}/RecordWithRecord.avsc`);
        const actual = converter.joinExports();
        const expected = getExpectedResult(`${expectedDir}/RecordWithRecord.ts.test`);
        expect(actual).to.deep.equal(expected);
    });
    it("should convert a record with default enum field", () => {
        const converter = new src_1.ClassConverter();
        converter.convert(`${avscDir}/RecordWithEnumDefault.avsc`);
        const actual = converter.joinExports();
        const expected = getExpectedResult(`${expectedDir}/RecordWithEnumDefault.ts.test`);
        expect(actual).to.deep.equal(expected);
    });
});
//# sourceMappingURL=ClassConverter.new.js.map