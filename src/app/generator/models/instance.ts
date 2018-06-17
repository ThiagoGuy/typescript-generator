export class Instance {
    className: string;
    fieldName: string;

    constructor(fieldName: string, className: string) {
        this.fieldName = fieldName;
        this.className = className;
    }
}