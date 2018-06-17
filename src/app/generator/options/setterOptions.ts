import { Options } from './options.interface';
import { AssignmentsEnum } from '../enums/assignments.enum';
import { QuestionEnum } from '../enums/question.enum';
import { EncryptionEnum } from '../enums/encryption.enum';

export class SetterOptions implements Options {
    assignment: AssignmentsEnum;
    stringDataTypeOnly: QuestionEnum;
    emptyString: QuestionEnum;
    arrayInstantiation: QuestionEnum;
    encryption: EncryptionEnum;
    encryptionPath: string;
    
    constructor() {
        this.assignment = AssignmentsEnum.ASSIGNMENT_SIGNAL;
        this.arrayInstantiation = QuestionEnum.YES;
        this.stringDataTypeOnly = QuestionEnum.YES;
        this.emptyString = QuestionEnum.YES;
    }

    supportAssignment(): boolean {
        return true;
    }

    supportStrigDataTypeOnly(): boolean {
        return true;
    }

    supportArrayInstantiation(): boolean {
        return true;
    }

    supportEmptyString(): boolean {
        return true;
    }

    supportEncryptionAnnotation(): boolean {
        return false;
    }

}