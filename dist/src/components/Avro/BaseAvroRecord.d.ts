import { AvroRecord } from "./AvroRecord";
export declare abstract class BaseAvroRecord implements AvroRecord {
    static readonly subject: string;
    static readonly schema: {};
    abstract schema(): any;
    abstract subject(): string;
}
