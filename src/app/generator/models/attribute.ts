export class Attribute {
    fieldName: string;
    fieldType: string;
    annotation: string;

    constructor(fieldName: string, fieldType: string, annotation?: string) {
        this.fieldName = fieldName;
        this.fieldType = fieldType;
        this.annotation = annotation;
    }
}