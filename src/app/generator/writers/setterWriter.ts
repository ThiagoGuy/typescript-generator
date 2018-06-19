import { Writer } from './writer';
import { UtilService } from '../service/utils.service';
import { Instance } from '../models/instance';
import { ArrayInstance } from '../models/arrayInstance';
import { ArraySetter } from '../models/arraySetter';
import { Setter } from '../models/setter';

export class SetterWriter extends Writer {

    // const fieldName: className = new className();
    writeInstance(instance: Instance): void {
        const syntax = `const ${instance.fieldName}: ${instance.className} = new ${instance.className}();`;

        this.write(syntax);
        this.writeLine();
    }

    // const fieldName: Array<fieldType> = [];
    writeArrayInstance(arrayInstance: ArrayInstance): void {
        const syntax = `const ${arrayInstance.fieldName}: Array<${arrayInstance.fieldType}> = [];`;

        this.write(syntax);
        this.writeLine();
    }

    // fieldName.push(value);
    writeArraySetter(arraySetter: ArraySetter): void {
        const syntax = `${arraySetter.fieldName}.push(${arraySetter.value});`;

        this.write(syntax);
        this.writeLine();
    }

    // fieldName.methodName = value;
    writeAssignment(setter: Setter): void {
        const syntax = `${setter.fieldName}.${setter.methodName} = ${setter.value};`;

        this.write(syntax);
        this.writeLine();
    }

    // fieldName.methodName = value;
    writeSetter(setter: Setter): void {
        const syntax = `${setter.fieldName}.set${UtilService.fixMethodName(setter.methodName)}(${setter.value});`;

        this.write(syntax);
        this.writeLine();
    }

}