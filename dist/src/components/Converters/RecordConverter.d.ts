import { RecordType, Type } from "../../interfaces/AvroSchema";
import { ExportModel } from "../../models/ExportModel";
import { BaseConverter } from "./base/BaseConverter";
export declare class RecordConverter extends BaseConverter {
    protected interfaceRows: string[];
    protected recordCache: {
        [recordName: string]: any;
    };
    convert(data: any): ExportModel;
    protected extractInterface(data: RecordType): string[];
    protected convertType(type: Type): string;
    protected getField(name: string, type: Type): string;
}
