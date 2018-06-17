import { AlertService } from '../service/alert.service';
import { Options } from './options/options.interface';
import { Instance } from './models/instance';
import { ArrayInstance } from './models/arrayInstance';
import { ArraySetter } from './models/arraySetter';
import { UtilService } from '../service/utils.service';
import { SetterWriter } from './writers/setterWriter';
import { AssignmentsEnum } from './enums/assignments.enum';
import { QuestionEnum } from './enums/question.enum';
import { Content } from './models/content';
import { Setter } from './models/setter';
import { Generator } from './generator.interface';

export class SetterGenerator implements Generator {

    private fieldNameMap: Map<string, string>;
    private instances: Array<Instance>;
    private arrayInstances: Array<ArrayInstance>;
    private instanceSetters: Array<Setter>;
    private arrayInstanceSetters: Array<ArraySetter>;
    private arraySetters: Array<ArraySetter>;
    private setters: Array<Setter>;
    private options: Options;
    private writer: SetterWriter;

    constructor(options: Options, writer: SetterWriter) {
        
        if (!options) {
            AlertService.showError('Options cannot be empty.');
        }

        if (!writer) {
            AlertService.showError('The writer cannot be null.');
        }
        
        this.options = options;
        this.writer = writer;
        this.fieldNameMap = new Map<string, string>();
        this.instances = new Array<Instance>();
        this.arrayInstances = new Array<ArrayInstance>();
        this.instanceSetters = new Array<Setter>();
        this.arrayInstanceSetters = new Array<ArraySetter>();
        this.arraySetters = new Array<ArraySetter>();
        this.setters = new Array<Setter>();
    }

    create(json: any, fieldName: string, className?: string): void {

        if (!json) {
            return;
        }

        if (UtilService.isBlank(fieldName)) {
            AlertService.showError('Field name cannot be blank.');
        }

        fieldName = UtilService.fixFieldName(fieldName);
        className = className || UtilService.getClassName(fieldName);
        const isArray: boolean = Array.isArray(json);
        const nextFieldName: string = this.memorizeNextFieldName(fieldName);

        if (isArray) {
            let fieldType: string = UtilService.getType(json[0]);

            if (fieldType === 'object') {
                fieldType = className;
            }

            this.arrayInstances.push(new ArrayInstance(fieldName, fieldType));
        } else {
            this.instances.push(new Instance(nextFieldName, className));
        }

        for (let field in json) {

            if (UtilService.isBlank(field)) {
                AlertService.showError('Field name cannot be blank.');
            }

            const val: any = json[field];
            const isFieldAnObject: boolean = UtilService.isObject(val);
            const isFieldAnArray: boolean = Array.isArray(val);

            if (this.options.arrayInstantiation === QuestionEnum.NO && isFieldAnArray)
                continue;

            field = UtilService.fixFieldName(field);

            if (isArray) {
                if (isFieldAnObject) {
                    const name: string = UtilService.getListFieldName(fieldName, val);
                    this.arrayInstanceSetters.push(new ArraySetter(fieldName, this.generateNextFieldName(name)));
                    this.create(val, name, UtilService.getClassName(name));
                } else {
                    this.arraySetters.push(new ArraySetter(nextFieldName,
                        UtilService.fixValue(val, this.options.stringDataTypeOnly === QuestionEnum.YES)));
                }

            } else {
                if (isFieldAnObject) {
                    const name: string = UtilService.getListFieldName(field, val);
                    this.instanceSetters.push(new Setter(nextFieldName, field, name));
                    this.create(val, name, UtilService.getClassName(field));
                } else {
                    if (this.options.emptyString === QuestionEnum.YES || val) {
                        this.setters.push(new Setter(nextFieldName, field,
                            UtilService.fixValue(val, this.options.stringDataTypeOnly === QuestionEnum.YES)));
                    }
                }

            }

        }
    }

    build(): Array<Content> {
        const contents: Array<Content> = new Array<Content>();

        this.instances.forEach((i: Instance) => this.writer.writeInstance(i));
        this.arrayInstances.forEach((ai: ArrayInstance) => this.writer.writeArrayInstance(ai));
        this.writer.writeLine();

        if (this.options.assignment === AssignmentsEnum.SETTER_METHOD) {
            this.instanceSetters.forEach((is: Setter) => this.writer.writeSetter(is));
        } else {
            this.instanceSetters.forEach((is: Setter) => this.writer.writeAssignment(is));
        }
        if (!UtilService.isEmpty(this.instanceSetters)) this.writer.writeLine();

        this.arrayInstanceSetters.forEach((ais: ArraySetter) => this.writer.writeArraySetter(ais));
        if (!UtilService.isEmpty(this.arrayInstanceSetters)) this.writer.writeLine();

        this.arraySetters.forEach((as: ArraySetter) => this.writer.writeArraySetter(as));
        if (!UtilService.isEmpty(this.arraySetters)) this.writer.writeLine();

        if (this.options.assignment === AssignmentsEnum.SETTER_METHOD) {
            this.setters.forEach((s: Setter) => this.writer.writeSetter(s));
        } else {
            this.setters.forEach((s: Setter) => this.writer.writeAssignment(s));
        }

        contents.push(new Content('Setters', this.writer.toString()));
        this.writer.reset();

        return contents;
    }

    private memorizeNextFieldName(fieldName: string): string {
        let nextFieldName: string = this.generateNextFieldName(fieldName);
        this.fieldNameMap.set(fieldName, nextFieldName);
        return nextFieldName;
    }

    private generateNextFieldName(fieldName: string): string {
        let nextFieldName: string = fieldName;
        
        if (this.fieldNameMap.has(fieldName)) {
            let fieldCounter: number;
            const fieldNameFromMap = this.fieldNameMap.get(fieldName);

            if (fieldCounter = UtilService.getNumberFromString(fieldNameFromMap)) {
                nextFieldName = fieldNameFromMap.replace(fieldCounter.toString(), (fieldCounter + 1).toString());
            } else {
                nextFieldName = fieldNameFromMap + '1';
            }
        }
        return nextFieldName;
    }

}