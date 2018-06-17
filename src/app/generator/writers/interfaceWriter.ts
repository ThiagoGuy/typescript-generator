import { ClassWriter } from './classWriter';
import { Class } from '../models/class';
import { ArrayAttribute } from '../models/arrayAttribute';

export class InterfaceWriter extends ClassWriter {

    // interface className {
    writeStartClass(clazz: Class): void {
        const syntax = `export interface ${clazz.className} {`;

        this.write(syntax);
        this.writeLine();
    }

    // fieldName: Array<fieldType>;
    writeArrayAttribute(arrayAttribute: ArrayAttribute): void {
        const syntax = `	${arrayAttribute.fieldName}: Array<${arrayAttribute.fieldType}>;`;

        this.write(syntax);
        this.writeLine();
    }

}