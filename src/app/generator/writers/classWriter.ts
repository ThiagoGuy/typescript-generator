import { Writer } from './writer';
import { Import } from '../models/import';
import { Class } from '../models/class';
import { Attribute } from '../models/attribute';
import { ArrayAttribute } from '../models/arrayAttribute';

export class ClassWriter extends Writer {

    // import { className } from 'path';
    writeImport(imp: Import): void {
        const syntax = `import { ${imp.className} } from '${imp.path}';`;

        this.write(syntax);
        this.writeLine();
    }

    // class className {
    writeStartClass(clazz: Class): void {
        const syntax = `export class ${clazz.className} {`;

        this.write(syntax);
        this.writeLine();
    }

    // }
    writeEndClass(): void {
        const syntax = '}';

        this.write(syntax);
        this.writeLine();
    }

    // @name
    writeAnnotation(name: string): void {
        const syntax = `	@${name}`;

        this.write(syntax);
        this.writeLine();
    }

    // fieldName: fieldType;
    writeAttribute(attribute: Attribute): void {
        const syntax = `	${attribute.fieldName}: ${attribute.fieldType};`;

        this.write(syntax);
        this.writeLine();
    }

    // private _fieldName: fieldType;
    writeSetterAttribute(attribute: Attribute): void {
        const syntax = `	private _${attribute.fieldName}: ${attribute.fieldType};`;

        this.write(syntax);
        this.writeLine();
    }

    // fieldName: Array<fieldType> = [];
    writeArrayAttribute(arrayAttribute: ArrayAttribute): void {
        const syntax = `	${arrayAttribute.fieldName}: Array<${arrayAttribute.fieldType}> = [];`;

        this.write(syntax);
        this.writeLine();
    }

    // private _fieldName: Array<fieldType> = [];
    writeSetterArrayAttribute(arrayAttribute: ArrayAttribute): void {
        const syntax = `	private _${arrayAttribute.fieldName}: Array<${arrayAttribute.fieldType}> = [];`;

        this.write(syntax);
        this.writeLine();
    }

    // get fieldName(): fieldType {
    //	return this._fieldName;
    // }
    writeGetter(attribute: Attribute): void {
        const startSyntax = `	get ${attribute.fieldName}(): ${attribute.fieldType} {`;
        const middleSyntax = `		return this._${attribute.fieldName};`;
        const endSyntax = '	}';

        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    }

    // get fieldName(): fieldType[] {
    //	return this._fieldName;
    // }
    writeArrayGetter(arrayAttribute: ArrayAttribute): void {
        const startSyntax = `	get ${arrayAttribute.fieldName}(): ${arrayAttribute.fieldType}[] {`;
        const middleSyntax = `		return this._${arrayAttribute.fieldName};`;
        const endSyntax = '	}';

        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    }

    // set fieldName(fieldName: fieldType): void {
    //	this._fieldName = fieldName;
    // }
    writeSetter(attribute: Attribute): void {
        const startSyntax = `	set ${attribute.fieldName}(${attribute.fieldName}: ${attribute.fieldType}): void {`;
        const middleSyntax = `		this._${attribute.fieldName} = ${attribute.fieldName};`;
        const endSyntax = '	}';

        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    }

    // set fieldName(fieldName: fieldType[]): void {
    //	this._fieldName = fieldName;
    // }
    writeArraySetter(arrayAttribute: ArrayAttribute): void {
        const startSyntax = `	set ${arrayAttribute.fieldName}(${arrayAttribute.fieldName}: ${arrayAttribute.fieldType}[]): void {`;
        const middleSyntax = `		this._${arrayAttribute.fieldName} = ${arrayAttribute.fieldName}`;
        const endSyntax = `	}`;

        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    }

}