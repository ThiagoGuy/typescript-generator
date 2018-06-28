import { UtilService } from './service/utils.service';
import { Class } from './models/class';
import { Import } from './models/import';
import { ArrayAttribute } from './models/arrayAttribute';
import { Attribute } from './models/attribute';
import { Options } from './options/options.interface';
import { ClassWriter } from './writers/classWriter';
import { EncryptionEnum } from './enums/encryption.enum';
import { AssignmentsEnum } from './enums/assignments.enum';
import { Content } from './models/content';
import { Generator } from './generator.interface';

export class ClassGenerator implements Generator {

    private classList: Array<Class>;
    private options: Options;
    private writer: ClassWriter;

    constructor(options: Options, writer: ClassWriter) {

        if (!options) {
            throw new Error('Options cannot be empty.');
        }

        if (!writer) {
            throw new Error('The writer cannot be null.');
        }

        this.options = options;
        this.writer = writer as ClassWriter;
        this.classList = new Array<Class>();
    }

    create(json: any, fieldName: string) {

        if (!json) {
            return;
        }

        if (UtilService.isBlank(fieldName)) {
            throw new Error('Class name cannot be blank.');
        }

        const className: string = UtilService.getClassName(fieldName);
        const clazz: Class = new Class(className);
        this.classList.push(clazz);
        let isEncryptionImportApplied;

        for (let field in json) {

            if (UtilService.isBlank(field)) {
                throw new Error('Field name cannot be blank.');
            }

            const val: any = json[field];
            const isFieldAnArray: boolean = Array.isArray(val);
            field = UtilService.fixFieldName(field);

            if (isFieldAnArray) {
                const isFieldAnObject: boolean = UtilService.isObject(val[0]);
                const fieldType: string = UtilService.getType(val[0]);

                if (isFieldAnObject) {
                    clazz.imports.push(new Import(UtilService.getClassName(field), `./${field}`));
                    clazz.arrayAttributes.push(new ArrayAttribute(field, UtilService.getClassName(field)));
                    this.create(val[0], field);
                } else {
                    clazz.arrayAttributes.push(new ArrayAttribute(field, fieldType));
                }

            } else {
                const isFieldAnObject: boolean = UtilService.isObject(val);
                const fieldType: string = UtilService.getType(val);

                if (isFieldAnObject) {
                    clazz.imports.push(new Import(UtilService.getClassName(field), `./${field}`));
                    clazz.attributes.push(new Attribute(field, UtilService.getClassName(field)));
                    this.create(val, field);
                } else {
                    const isEncrypted: boolean = UtilService.isBase64(val);

                    if (this.options.encryption !== EncryptionEnum.NONE && isEncrypted) {
                        clazz.attributes.push(new Attribute(field, fieldType, this.options.encryption));

                        if (!isEncryptionImportApplied && this.options.encryptionPath) {
                            clazz.imports.push(new Import(this.options.encryption, this.options.encryptionPath));
                            isEncryptionImportApplied = true;
                        }
                    } else {
                        clazz.attributes.push(new Attribute(field, fieldType));
                    }
                }

            }
        }

    }

    build(): Array<Content> {
        const contents: Array<Content> = new Array<Content>();

        this.classList.forEach((clazz: Class) => {

            clazz.imports.forEach((imp: Import) => {
                this.writer.writeImport(imp);
            });

            this.writer.writeLine();
            this.writer.writeStartClass(clazz);

            if (this.options.assignment === AssignmentsEnum.SETTER_METHOD) {
                clazz.attributes.forEach((attr: Attribute) => {
                    if (attr.annotation) {
                        this.writer.writeAnnotation(attr.annotation);
                    }
                    this.writer.writeSetterAttribute(attr);
                });
                clazz.arrayAttributes.forEach((arrAttr: ArrayAttribute) => this.writer.writeSetterArrayAttribute(arrAttr));
                this.writer.writeLine();

                clazz.attributes.forEach((attr: Attribute) => {
                    this.writer.writeGetter(attr);
                    this.writer.writeSetter(attr);
                });

                clazz.arrayAttributes.forEach((arrAttr: ArrayAttribute) => {
                    this.writer.writeArrayGetter(arrAttr);
                    this.writer.writeArraySetter(arrAttr);
                });

            } else {
                clazz.attributes.forEach((attr: Attribute) => {
                    if (attr.annotation) {
                        this.writer.writeAnnotation(attr.annotation);
                    }
                    this.writer.writeAttribute(attr);
                });
                clazz.arrayAttributes.forEach((arrAttr: ArrayAttribute) => this.writer.writeArrayAttribute(arrAttr));
            }

            this.writer.writeEndClass();
            this.writer.writeLine();

            contents.push(new Content(UtilService.fixFieldName(clazz.className), this.writer.toString()));
            this.writer.reset();
        });

        return contents;
    }

}