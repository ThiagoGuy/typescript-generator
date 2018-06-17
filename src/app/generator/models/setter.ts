export class Setter {
    fieldName: string;
    methodName: string;
    value: string;

    constructor(fieldName: string, methodName: string, value: string) {
        this.fieldName = fieldName;
        this.methodName = methodName;
        this.value = value;
    }
}