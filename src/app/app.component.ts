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
import { Content } from './generator/models/content';
import { Generator } from './generator/generator.interface';
import { GeneratorFactory } from './generator/generatorFactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('rootClassInput')
  private rootClassInput: ElementRef;

  @ViewChild('resultInput')
  private resultInput: ElementRef;

  public rootClass: string;
  public json: string;
  public result: string;
  private contents: Array<Content>;

  /* OPTIONS */
  private writer: Writer;
  public options: Options;
  public generatorType: GeneratorTypesEnum;
  public generatorTypes = GeneratorTypesEnum;
  public assignments = AssignmentsEnum;
  public arrayInstantiation = QuestionEnum;
  public stringDataTypeOnly = QuestionEnum;
  public emptyString = QuestionEnum;
  public encryptions = EncryptionEnum;

  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.contents = new Array<Content>();
    this.generatorType = GeneratorTypesEnum.CLASS;
    this.changeGenerator();
  }

  public changeGenerator() {

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

  public generate() {
    this.clearConsole();
    
    try {
      const jsonParsed: any = this.utilService.parseJson(this.json);
      const generator: Generator = GeneratorFactory.create(this.generatorType, this.options, this.writer);

      generator.create(jsonParsed, this.rootClass);
      this.contents = generator.build();
    } catch (error) {
      AlertService.showError('The generator failed to generate the code.', error);
    }
    this.printContentsToConsole();
  }

  public downloadContents() {
    if (this.utilService.isEmpty(this.contents)) {
      AlertService.showError('No content found.');
    }

    this.contents.forEach(content => this.utilService.downloadText(`${content.name}.ts`, content.text));
  }

  public resetFields() {
    this.rootClass = '';
    this.json = '';
    this.result = '';
    this.rootClassInput.nativeElement.focus();
  }

  public copy() {
    this.copyContent(this.resultInput);
    this.clearAllSelections();
  }

  private printContentsToConsole() {
    if (this.utilService.isEmpty(this.contents)) {
      AlertService.showError('No content was generated.');
    }

    this.contents.forEach(content => this.result += content.text);
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
