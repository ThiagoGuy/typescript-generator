import { AssignmentsEnum } from '../enums/assignments.enum';
import { QuestionEnum } from '../enums/question.enum';
import { EncryptionEnum } from '../enums/encryption.enum';

export interface Options {
    supportAssignment(): boolean;
    supportStrigDataTypeOnly(): boolean;
    supportEmptyString(): boolean;
    supportArrayInstantiation(): boolean;
    supportEncryptionAnnotation(): boolean;

    assignment: AssignmentsEnum;
    stringDataTypeOnly: QuestionEnum;
    emptyString: QuestionEnum;
    arrayInstantiation: QuestionEnum;
    encryption: EncryptionEnum;
    encryptionPath: string;
}