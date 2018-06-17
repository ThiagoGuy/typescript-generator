import { Import } from './import';
import { Attribute } from './attribute';
import { ArrayAttribute } from './arrayAttribute';

export class Class {
    className: string;
    imports:Array<Import>;
    attributes:Array<Attribute>;
    arrayAttributes:Array<ArrayAttribute>;

    constructor(className: string) {
        this.className = className;
        this.imports = new Array<Import>();
        this.attributes = new Array<Attribute>()
        this.arrayAttributes = new Array<ArrayAttribute>()
    }
}