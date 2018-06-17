import { Options } from './options.interface';
import { AssignmentsEnum } from '../enums/assignments.enum';
import { QuestionEnum } from '../enums/question.enum';
import { EncryptionEnum } from '../enums/encryption.enum';

export class ClassOptions implements Options {
    assignment: AssignmentsEnum;
    stringDataTypeOnly: QuestionEnum;
    emptyString: QuestionEnum;
    arrayInstantiation: QuestionEnum;
    encryption: EncryptionEnum;
    encryptionPath: string;

    constructor() {
        this.assignment = AssignmentsEnum.ASSIGNMENT_SIGNAL;
        this.encryption = EncryptionEnum.NONE;
    }

    supportAssignment(): boolean {
        return true;
    }

    supportStrigDataTypeOnly(): boolean {
        return false;
    }

    supportArrayInstantiation(): boolean {
        return false;
    }

    supportEmptyString(): boolean {
        return false;
    }

    supportEncryptionAnnotation(): boolean {
        return true;
    }

}