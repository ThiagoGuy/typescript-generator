import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetterWriter } from './generator/writers/setterWriter';
import { SetterOptions } from './generator/options/setterOptions';
import { ClassWriter } from './generator/writers/classWriter';
import { InterfaceWriter } from './generator/writers/interfaceWriter';
import { InterfaceOptions } from './generator/options/interfaceOptions';
import { ClassOptions } from './generator/options/classOptions';
import { Options } from './generator/options/options.interface';
import { AlertService } from './service/alert.service';
import { GeneratorTypesEnum } from './generator/enums/generatorTypes.enum';
import { Writer } from './generator/writers/writer';
import { AssignmentsEnum } from './generator/enums/assignments.enum';
import { QuestionEnum } from './generator/enums/question.enum';
import { EncryptionEnum } from './generator/enums/encryption.enum';
import { UtilService } from './service/utils.service';
import { SetterGenerator } from './generator/setterGenerator';
import { ClassGenerator } from './generator/classGenerator';
import { Content } from './generator/models/content';
import { Generator } from './generator/generator.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /* FIELDS */
  @ViewChild('rootClassInput')
  private rootClassInput: ElementRef;

  @ViewChild('resultInput')
  private resultInput: ElementRef;

  private rootClass: string;
  private json: string;
  private result: string;

  /* OPTIONS */
  private options: Options;
  private writer: Writer;
  private generatorType: GeneratorTypesEnum;
  private generatorTypes = GeneratorTypesEnum;
  private assignments = AssignmentsEnum;
  private arrayInstantiation = QuestionEnum;
  private stringDataTypeOnly = QuestionEnum;
  private emptyString = QuestionEnum;
  private encryptions = EncryptionEnum;

  private contents: Array<Content>;

  ngOnInit(): void {
    this.contents = new Array<Content>();
    this.generatorType = GeneratorTypesEnum.CLASS;
    this.changeGenerator();
  }

  private changeGenerator() {

    if (this.generatorType === GeneratorTypesEnum.CLASS) {
      this.options = new ClassOptions();
      this.writer = new ClassWriter();
    } else if (this.generatorType === GeneratorTypesEnum.INTERFACE) {
      this.options = new InterfaceOptions();
      this.writer = new InterfaceWriter();
    } else if (this.generatorType === GeneratorTypesEnum.SETTER) {
      this.options = new SetterOptions();
      this.writer = new SetterWriter();
    } else {
      AlertService.showError(`Generator type was not found: ${this.generatorType}.`);
    }

  }

  private generate() {
    let jsonParsed: any;
    this.clearConsole();

    if (jsonParsed = UtilService.parseJson(this.json)) {
      let generator: Generator;

      if (this.generatorType === GeneratorTypesEnum.SETTER) {
        generator = new SetterGenerator(this.options, this.writer as SetterWriter);
      } else {
        generator = new ClassGenerator(this.options, this.writer as ClassWriter);
      }

      try {
        generator.create(jsonParsed, this.rootClass);
        this.contents = generator.build();
      } catch (error) {
        AlertService.showError('The generator failed to generate the code.', error);
      }
    } else {
      AlertService.showError('Invalid JSON was detected.');
    }

    this.printContentsToConsole();
  }

  private downloadContents() {
    if (UtilService.isEmpty(this.contents)) {
      AlertService.showError('No content found.');
    }

    this.contents.forEach(content => UtilService.downloadText(`${content.name}.ts`, content.text));
  }

  private copy() {
    this.copyContent(this.resultInput);
    this.clearAllSelections();
  }

  private printContentsToConsole() {
    if (UtilService.isEmpty(this.contents)) {
      AlertService.showError('No content was generated.');
    }

    this.contents.forEach(content => this.result += content.text);
  }

  private resetFields() {
    this.rootClass = '';
    this.json = '';
    this.result = '';
    this.rootClassInput.nativeElement.focus();
  }

  private clearConsole() {
    this.result = '';
  }

  private copyContent(element: ElementRef) {
    try {
      element.nativeElement.select();
      document.execCommand('Copy');
    } catch (error) {
      AlertService.showError('Cannot copy the selected content.', error);
    }
  }

  private clearAllSelections() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.getSelection) {
      document.getSelection().empty();
    }
  }

}
