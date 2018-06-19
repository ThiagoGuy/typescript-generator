import { GeneratorTypesEnum } from "./enums/generatorTypes.enum";
import { SetterGenerator } from "./setterGenerator";
import { SetterWriter } from "./writers/setterWriter";
import { ClassWriter } from "./writers/classWriter";
import { ClassGenerator } from "./classGenerator";
import { Options } from "./options/options.interface";
import { Writer } from "./writers/writer";
import { Generator } from "./generator.interface";

export class GeneratorFactory {

    static create(generatorType: GeneratorTypesEnum, options: Options, writer: Writer): Generator {


        switch (generatorType) {
            case GeneratorTypesEnum.CLASS:
            case GeneratorTypesEnum.INTERFACE:
                return new ClassGenerator(options, writer as ClassWriter);
            case GeneratorTypesEnum.SETTER:
                return new SetterGenerator(options, writer as SetterWriter);
            default:
                throw new Error(`Generator was not found: ${generatorType}`);
        }
    }
}