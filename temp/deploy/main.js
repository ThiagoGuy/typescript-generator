(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.75rem;\r\n    margin: 0 0 5px 0.75rem 0;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n    max-height: 100%;\r\n}\r\n\r\nbutton {\r\n    background-color: #1287c2;\r\n}\r\n\r\n.section {\r\n    height: 100vh;\r\n}\r\n\r\n.section-options {\r\n    padding: 30px 120px;\r\n}\r\n\r\n.section-menu {\r\n    background-color: #101e29;\r\n    padding: 50px;\r\n    padding-left: 175px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.section-menu input[type=\"radio\"],\r\n.section-menu input[type=\"checkbox\"] {\r\n    display: none;\r\n}\r\n\r\n.container-menu {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.container-menu label {\r\n    position: relative;\r\n}\r\n\r\n.container-menu span::before,\r\n.container-menu span::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.container-menu span.radio:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.container-menu span.radio::before {\r\n    left: -52px;\r\n    width: 45px;\r\n    height: 25px;\r\n    background-color: #A8AAC1;\r\n    border-radius: 50px;\r\n}\r\n\r\n.container-menu span.radio::after {\r\n    left: -49px;\r\n    width: 17px;\r\n    height: 17px;\r\n    border-radius: 10px;\r\n    background-color: #6C788A;\r\n    transition: left .3s, background-color .3s;\r\n}\r\n\r\n.container-menu input {\r\n    margin-left: -100px;\r\n    height: 25px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked+label span.radio::after {\r\n    left: -27px;\r\n    background-color: rgb(233, 108, 6);\r\n}\r\n\r\ninput {\r\n    margin: 5px;\r\n}\r\n\r\n.btn {\r\n    font-size: 14px;\r\n    padding: 8px 24px;\r\n    margin: 2px;\r\n    border: none;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-default {\r\n    color: black;\r\n    background-color: #e7e7e7;\r\n    box-shadow: 0 1px 1px #90007e;\r\n}\r\n\r\n.btn-default:hover {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.container {\r\n    text-align: center;\r\n    display: flex;\r\n    padding: 5px;\r\n    margin: 0 5%;\r\n}\r\n\r\n.left-half {\r\n    background-color: #6395bd;\r\n    flex: 1;\r\n    padding: 1rem;\r\n    border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.right-half {\r\n    background-color: #174a71;\r\n    flex: 1;\r\n    padding: 1rem;\r\n    border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.title-menu {\r\n    text-align: left;\r\n    padding: 20px;\r\n    padding-left: 50px;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.footer {\r\n    text-align: center;\r\n    padding: 10px 0;\r\n}\r\n\r\n#optionButton {\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n}\r\n\r\n#topButton {\r\n    position: fixed;\r\n    top: 10px;\r\n    right: 10px;\r\n}\r\n\r\n@media (max-width: 920px) {\r\n    textarea {\r\n        max-height: 50%;\r\n    }\r\n    .container {\r\n        display: inline;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    .section-options {\r\n        padding: 0;\r\n    }\r\n\r\n    .left-half {\r\n        flex: none;\r\n        border-radius: 5px 5px 0 0;\r\n    }\r\n    .right-half {\r\n        flex: none;\r\n        border-radius: 0 0 5px 5px;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"title\">\n    <h3>Typescript Generator</h3>\n  </div>\n\n  <section class=\"container\">\n    <div class=\"left-half\">\n      <article>\n        <h1>Put your JSON</h1>\n\n        <input #rootClassInput id=\"rootClass\" type=\"text\" [(ngModel)]=\"rootClass\" style=\"width: 80%\" placeholder=\"Class name\" />\n        <textarea id=\"json\" type=\"text\" [(ngModel)]=\"json\" rows=\"25\" style=\"width: 80%\" placeholder=\"Paste your JSON here..\"></textarea>\n        <p>\n          <input id=\"clearBtn\" type=\"button\" value=\"Clear\" (click)=\"resetFields()\" class=\"btn btn-default\" />\n          <input id=\"generateBtn\" type=\"button\" value=\"Generate\" (click)=\"generate()\" class=\"btn btn-default\" />\n        </p>\n      </article>\n    </div>\n    <div class=\"right-half\">\n      <article>\n        <h1>Watch the result</h1>\n        <textarea #resultInput id=\"result\" type=\"text\" [(ngModel)]=\"result\" rows=\"25\" style=\"width: 80%\" readonly></textarea>\n        <p>\n          <input id=\"copyBtn\" type=\"button\" value=\"Copy\" (click)=\"copy()\" class=\"btn btn-default\" />\n          <input id=\"downloadBtn\" type=\"button\" value=\"Download\" (click)=\"downloadContents()\" class=\"btn btn-default\" />\n        </p>\n      </article>\n    </div>\n  </section>\n\n  <section class=\"section-options\">\n\n    <div class=\"title-menu\">\n      <h4>What kind of generator do you need?</h4>\n    </div>\n\n    <section class=\"section-menu\">\n      <div class=\"container-menu\" *ngFor=\"let genType of generatorTypes | enumToArray\">\n        <input type=\"radio\" id=\"radio-{{ genType.key }}-generator\" name=\"generatorType\" [value]=\"genType.val\" [(ngModel)]=\"generatorType\"\n          (change)=\"changeGenerator()\">\n        <label for=\"radio-{{ genType.key }}-generator\">\n          <span class=\"radio\">{{ genType.val }}</span>\n        </label>\n      </div>\n    </section>\n\n    <div id=\"assignmentOption\" *ngIf=\"options.supportAssignment()\">\n      <div class=\"title-menu\">\n        <h4>What kind of assignment do you need?</h4>\n      </div>\n      <section class=\"section-menu\">\n        <div class=\"container-menu\" *ngFor=\"let assign of assignments | enumToArray\">\n          <input type=\"radio\" id=\"radio-{{ assign.key }}\" name=\"assignments\" [value]=\"assign.val\" [(ngModel)]=\"options.assignment\">\n          <label for=\"radio-{{ assign.key }}\">\n            <span class=\"radio\">{{ assign.val }}</span>\n          </label>\n        </div>\n      </section>\n    </div>\n\n    <div id=\"arrayInstantiationOption\" *ngIf=\"options.supportArrayInstantiation()\">\n      <div class=\"title-menu\">\n        <h4>Do you need to instantiate arrays?</h4>\n      </div>\n      <section class=\"section-menu\">\n        <div class=\"container-menu\" *ngFor=\"let arrInstant of arrayInstantiation | enumToArray\">\n          <input type=\"radio\" id=\"radio-array-{{ arrInstant.key }}\" name=\"array-instantiation\" [value]=\"arrInstant.val\" [(ngModel)]=\"options.arrayInstantiation\">\n          <label for=\"radio-array-{{ arrInstant.key }}\">\n            <span class=\"radio\">{{ arrInstant.val }}</span>\n          </label>\n        </div>\n      </section>\n    </div>\n\n\n    <div id=\"stringDataTypeOption\" *ngIf=\"options.supportStrigDataTypeOnly()\">\n      <div class=\"title-menu\">\n        <h4>Do you need to work only with the string data type?</h4>\n      </div>\n      <section class=\"section-menu\">\n        <div class=\"container-menu\" *ngFor=\"let strDtType of stringDataTypeOnly | enumToArray\">\n          <input type=\"radio\" id=\"radio-string-{{ strDtType.key }}\" name=\"string-data-type\" [value]=\"strDtType.val\" [(ngModel)]=\"options.stringDataTypeOnly\">\n          <label for=\"radio-string-{{ strDtType.key }}\">\n            <span class=\"radio\">{{ strDtType.val }}</span>\n          </label>\n        </div>\n      </section>\n    </div>\n\n\n    <div id=\"emptyStringOption\" *ngIf=\"options.supportEmptyString()\">\n      <div class=\"title-menu\">\n        <h4>Do you need to work only with empty string?</h4>\n      </div>\n      <section class=\"section-menu\">\n        <div class=\"container-menu\" *ngFor=\"let emptyStr of emptyString | enumToArray\">\n          <input type=\"radio\" id=\"radio-empty-string-{{ emptyStr.key }}\" name=\"empty-string\" [value]=\"emptyStr.val\" [(ngModel)]=\"options.emptyString\">\n          <label for=\"radio-empty-string-{{ emptyStr.key }}\">\n            <span class=\"radio\">{{ emptyStr.val }}</span>\n          </label>\n        </div>\n      </section>\n    </div>\n\n\n    <div id=\"encryptionAnnotationOption\" *ngIf=\"options.supportEncryptionAnnotation()\">\n      <div class=\"title-menu\">\n        <h4>What kind of encryption annotation do you need?</h4>\n      </div>\n      <section class=\"section-menu\">\n        <div class=\"container-menu\" *ngFor=\"let encrypt of encryptions | enumToArray\">\n          <input type=\"radio\" id=\"radio-encryptionAnnotation-{{ encrypt.key }}\" name=\"encryptionAnnotation\" [value]=\"encrypt.val\" [(ngModel)]=\"options.encryption\">\n          <label for=\"radio-encryptionAnnotation-{{ encrypt.key }}\">\n            <span class=\"radio\">{{ encrypt.val }}</span>\n          </label>\n        </div>\n      </section>\n\n      <div class=\"title-menu\">\n        <h4>Where is the encryption annotation located?</h4>\n      </div>\n      <section class=\"section-menu\">\n        <div class=\"container-menu\">\n          <input id=\"encryptionAnnotationPath\" type=\"text\" [(ngModel)]=\"options.encryptionPath\" placeholder=\"Path\" />\n        </div>\n      </section>\n    </div>\n\n  </section>\n\n  <div class=\"footer\">\n    <h5>version 5.0.0</h5>\n  </div>\n\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generator_writers_setterWriter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator/writers/setterWriter */ "./src/app/generator/writers/setterWriter.ts");
/* harmony import */ var _generator_options_setterOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator/options/setterOptions */ "./src/app/generator/options/setterOptions.ts");
/* harmony import */ var _generator_writers_classWriter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generator/writers/classWriter */ "./src/app/generator/writers/classWriter.ts");
/* harmony import */ var _generator_writers_interfaceWriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generator/writers/interfaceWriter */ "./src/app/generator/writers/interfaceWriter.ts");
/* harmony import */ var _generator_options_interfaceOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator/options/interfaceOptions */ "./src/app/generator/options/interfaceOptions.ts");
/* harmony import */ var _generator_options_classOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generator/options/classOptions */ "./src/app/generator/options/classOptions.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/alert.service */ "./src/app/service/alert.service.ts");
/* harmony import */ var _generator_enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generator/enums/generatorTypes.enum */ "./src/app/generator/enums/generatorTypes.enum.ts");
/* harmony import */ var _generator_enums_assignments_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generator/enums/assignments.enum */ "./src/app/generator/enums/assignments.enum.ts");
/* harmony import */ var _generator_enums_question_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generator/enums/question.enum */ "./src/app/generator/enums/question.enum.ts");
/* harmony import */ var _generator_enums_encryption_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generator/enums/encryption.enum */ "./src/app/generator/enums/encryption.enum.ts");
/* harmony import */ var _service_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/utils.service */ "./src/app/service/utils.service.ts");
/* harmony import */ var _generator_generatorFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generator/generatorFactory */ "./src/app/generator/generatorFactory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.generatorTypes = _generator_enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_8__["GeneratorTypesEnum"];
        this.assignments = _generator_enums_assignments_enum__WEBPACK_IMPORTED_MODULE_9__["AssignmentsEnum"];
        this.arrayInstantiation = _generator_enums_question_enum__WEBPACK_IMPORTED_MODULE_10__["QuestionEnum"];
        this.stringDataTypeOnly = _generator_enums_question_enum__WEBPACK_IMPORTED_MODULE_10__["QuestionEnum"];
        this.emptyString = _generator_enums_question_enum__WEBPACK_IMPORTED_MODULE_10__["QuestionEnum"];
        this.encryptions = _generator_enums_encryption_enum__WEBPACK_IMPORTED_MODULE_11__["EncryptionEnum"];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.contents = new Array();
        this.generatorType = _generator_enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_8__["GeneratorTypesEnum"].CLASS;
        this.changeGenerator();
    };
    AppComponent.prototype.changeGenerator = function () {
        if (this.generatorType === _generator_enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_8__["GeneratorTypesEnum"].CLASS) {
            this.options = new _generator_options_classOptions__WEBPACK_IMPORTED_MODULE_6__["ClassOptions"]();
            this.writer = new _generator_writers_classWriter__WEBPACK_IMPORTED_MODULE_3__["ClassWriter"]();
        }
        else if (this.generatorType === _generator_enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_8__["GeneratorTypesEnum"].INTERFACE) {
            this.options = new _generator_options_interfaceOptions__WEBPACK_IMPORTED_MODULE_5__["InterfaceOptions"]();
            this.writer = new _generator_writers_interfaceWriter__WEBPACK_IMPORTED_MODULE_4__["InterfaceWriter"]();
        }
        else if (this.generatorType === _generator_enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_8__["GeneratorTypesEnum"].SETTER) {
            this.options = new _generator_options_setterOptions__WEBPACK_IMPORTED_MODULE_2__["SetterOptions"]();
            this.writer = new _generator_writers_setterWriter__WEBPACK_IMPORTED_MODULE_1__["SetterWriter"]();
        }
        else {
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"].showError("Generator type was not found: " + this.generatorType + ".");
        }
    };
    AppComponent.prototype.generate = function () {
        var jsonParsed;
        this.clearConsole();
        try {
            jsonParsed = _service_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].parseJson(this.json);
            var generator = _generator_generatorFactory__WEBPACK_IMPORTED_MODULE_13__["GeneratorFactory"].create(this.generatorType, this.options, this.writer);
            generator.create(jsonParsed, this.rootClass);
            this.contents = generator.build();
        }
        catch (error) {
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"].showError('The generator failed to generate the code.', error);
        }
        this.printContentsToConsole();
    };
    AppComponent.prototype.downloadContents = function () {
        if (_service_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].isEmpty(this.contents)) {
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"].showError('No content found.');
        }
        this.contents.forEach(function (content) { return _service_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].downloadText(content.name + ".ts", content.text); });
    };
    AppComponent.prototype.resetFields = function () {
        this.rootClass = '';
        this.json = '';
        this.result = '';
        this.rootClassInput.nativeElement.focus();
    };
    AppComponent.prototype.copy = function () {
        this.copyContent(this.resultInput);
        this.clearAllSelections();
    };
    AppComponent.prototype.printContentsToConsole = function () {
        var _this = this;
        if (_service_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"].isEmpty(this.contents)) {
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"].showError('No content was generated.');
        }
        this.contents.forEach(function (content) { return _this.result += content.text; });
    };
    AppComponent.prototype.clearConsole = function () {
        this.result = '';
    };
    AppComponent.prototype.copyContent = function (element) {
        try {
            element.nativeElement.select();
            document.execCommand('Copy');
        }
        catch (error) {
            _service_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"].showError('Cannot copy the selected content.', error);
        }
    };
    AppComponent.prototype.clearAllSelections = function () {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
        else if (document.getSelection) {
            document.getSelection().empty();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rootClassInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "rootClassInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "resultInput", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipe_enumToArray_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/enumToArray.pipe */ "./src/app/pipe/enumToArray.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pipe_enumToArray_pipe__WEBPACK_IMPORTED_MODULE_4__["EnumToArrayPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generator/classGenerator.ts":
/*!*********************************************!*\
  !*** ./src/app/generator/classGenerator.ts ***!
  \*********************************************/
/*! exports provided: ClassGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassGenerator", function() { return ClassGenerator; });
/* harmony import */ var _service_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/utils.service */ "./src/app/generator/service/utils.service.ts");
/* harmony import */ var _models_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/class */ "./src/app/generator/models/class.ts");
/* harmony import */ var _models_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/import */ "./src/app/generator/models/import.ts");
/* harmony import */ var _models_arrayAttribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/arrayAttribute */ "./src/app/generator/models/arrayAttribute.ts");
/* harmony import */ var _models_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/attribute */ "./src/app/generator/models/attribute.ts");
/* harmony import */ var _enums_encryption_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/encryption.enum */ "./src/app/generator/enums/encryption.enum.ts");
/* harmony import */ var _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/assignments.enum */ "./src/app/generator/enums/assignments.enum.ts");
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/content */ "./src/app/generator/models/content.ts");








var ClassGenerator = /** @class */ (function () {
    function ClassGenerator(options, writer) {
        if (!options) {
            throw new Error('Options cannot be empty.');
        }
        if (!writer) {
            throw new Error('The writer cannot be null.');
        }
        this.options = options;
        this.writer = writer;
        this.classList = new Array();
    }
    ClassGenerator.prototype.create = function (json, fieldName) {
        if (!json) {
            return;
        }
        if (_service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].isBlank(fieldName)) {
            throw new Error('Class name cannot be blank.');
        }
        var className = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getClassName(fieldName);
        var clazz = new _models_class__WEBPACK_IMPORTED_MODULE_1__["Class"](className);
        this.classList.push(clazz);
        var isEncryptionImportApplied;
        for (var field in json) {
            if (_service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].isBlank(field)) {
                throw new Error('Field name cannot be blank.');
            }
            var val = json[field];
            var isFieldAnArray = Array.isArray(val);
            field = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].fixFieldName(field);
            if (isFieldAnArray) {
                var isFieldAnObject = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].isObject(val[0]);
                var fieldType = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getType(val[0]);
                if (isFieldAnObject) {
                    clazz.imports.push(new _models_import__WEBPACK_IMPORTED_MODULE_2__["Import"](_service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getClassName(field), "./" + field));
                    clazz.arrayAttributes.push(new _models_arrayAttribute__WEBPACK_IMPORTED_MODULE_3__["ArrayAttribute"](field, _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getClassName(field)));
                    this.create(val[0], field);
                }
                else {
                    clazz.arrayAttributes.push(new _models_arrayAttribute__WEBPACK_IMPORTED_MODULE_3__["ArrayAttribute"](field, fieldType));
                }
            }
            else {
                var isFieldAnObject = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].isObject(val);
                var fieldType = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getType(val);
                if (isFieldAnObject) {
                    clazz.imports.push(new _models_import__WEBPACK_IMPORTED_MODULE_2__["Import"](_service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getClassName(field), "./" + field));
                    clazz.attributes.push(new _models_attribute__WEBPACK_IMPORTED_MODULE_4__["Attribute"](field, _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].getClassName(field)));
                    this.create(val, field);
                }
                else {
                    var isEncrypted = _service_utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"].isBase64(val);
                    if (this.options.encryption === _enums_encryption_enum__WEBPACK_IMPORTED_MODULE_5__["EncryptionEnum"].ENCRYPT && isEncrypted) {
                        clazz.attributes.push(new _models_attribute__WEBPACK_IMPORTED_MODULE_4__["Attribute"](field, fieldType, this.options.encryption));
                        if (!isEncryptionImportApplied && this.options.encryptionPath) {
                            clazz.imports.push(new _models_import__WEBPACK_IMPORTED_MODULE_2__["Import"](this.options.encryption, this.options.encryptionPath));
                            isEncryptionImportApplied = true;
                        }
                    }
                    else {
                        clazz.attributes.push(new _models_attribute__WEBPACK_IMPORTED_MODULE_4__["Attribute"](field, fieldType));
                    }
                }
            }
        }
    };
    ClassGenerator.prototype.build = function () {
        var _this = this;
        var contents = new Array();
        this.classList.forEach(function (clazz) {
            clazz.imports.forEach(function (imp) {
                _this.writer.writeImport(imp);
            });
            _this.writer.writeLine();
            _this.writer.writeStartClass(clazz);
            if (_this.options.assignment === _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_6__["AssignmentsEnum"].SETTER_METHOD) {
                clazz.attributes.forEach(function (attr) {
                    if (attr.annotation) {
                        _this.writer.writeAnnotation(attr.annotation);
                    }
                    _this.writer.writeSetterAttribute(attr);
                });
                clazz.arrayAttributes.forEach(function (arrAttr) { return _this.writer.writeSetterArrayAttribute(arrAttr); });
                _this.writer.writeLine();
                clazz.attributes.forEach(function (attr) {
                    _this.writer.writeGetter(attr);
                    _this.writer.writeSetter(attr);
                });
                clazz.arrayAttributes.forEach(function (arrAttr) {
                    _this.writer.writeArrayGetter(arrAttr);
                    _this.writer.writeArraySetter(arrAttr);
                });
            }
            else {
                clazz.attributes.forEach(function (attr) {
                    if (attr.annotation) {
                        _this.writer.writeAnnotation(attr.annotation);
                    }
                    _this.writer.writeAttribute(attr);
                });
                clazz.arrayAttributes.forEach(function (arrAttr) { return _this.writer.writeArrayAttribute(arrAttr); });
            }
            _this.writer.writeEndClass();
            _this.writer.writeLine();
            contents.push(new _models_content__WEBPACK_IMPORTED_MODULE_7__["Content"](clazz.className, _this.writer.toString()));
            _this.writer.reset();
        });
        return contents;
    };
    return ClassGenerator;
}());



/***/ }),

/***/ "./src/app/generator/enums/assignments.enum.ts":
/*!*****************************************************!*\
  !*** ./src/app/generator/enums/assignments.enum.ts ***!
  \*****************************************************/
/*! exports provided: AssignmentsEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsEnum", function() { return AssignmentsEnum; });
var AssignmentsEnum;
(function (AssignmentsEnum) {
    AssignmentsEnum["ASSIGNMENT_SIGNAL"] = "Assignment signal";
    AssignmentsEnum["SETTER_METHOD"] = "Setter method";
})(AssignmentsEnum || (AssignmentsEnum = {}));


/***/ }),

/***/ "./src/app/generator/enums/encryption.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/generator/enums/encryption.enum.ts ***!
  \****************************************************/
/*! exports provided: EncryptionEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionEnum", function() { return EncryptionEnum; });
var EncryptionEnum;
(function (EncryptionEnum) {
    EncryptionEnum["NONE"] = "None";
    EncryptionEnum["ENCRYPT"] = "Encrypt";
    EncryptionEnum["DESCRYPT"] = "Descrypt";
})(EncryptionEnum || (EncryptionEnum = {}));


/***/ }),

/***/ "./src/app/generator/enums/generatorTypes.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/generator/enums/generatorTypes.enum.ts ***!
  \********************************************************/
/*! exports provided: GeneratorTypesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorTypesEnum", function() { return GeneratorTypesEnum; });
var GeneratorTypesEnum;
(function (GeneratorTypesEnum) {
    GeneratorTypesEnum["CLASS"] = "Class";
    GeneratorTypesEnum["INTERFACE"] = "Interface";
    GeneratorTypesEnum["SETTER"] = "Setter";
})(GeneratorTypesEnum || (GeneratorTypesEnum = {}));


/***/ }),

/***/ "./src/app/generator/enums/question.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/generator/enums/question.enum.ts ***!
  \**************************************************/
/*! exports provided: QuestionEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEnum", function() { return QuestionEnum; });
var QuestionEnum;
(function (QuestionEnum) {
    QuestionEnum["YES"] = "Yes";
    QuestionEnum["NO"] = "No, thanks";
})(QuestionEnum || (QuestionEnum = {}));


/***/ }),

/***/ "./src/app/generator/generatorFactory.ts":
/*!***********************************************!*\
  !*** ./src/app/generator/generatorFactory.ts ***!
  \***********************************************/
/*! exports provided: GeneratorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorFactory", function() { return GeneratorFactory; });
/* harmony import */ var _enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/generatorTypes.enum */ "./src/app/generator/enums/generatorTypes.enum.ts");
/* harmony import */ var _setterGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setterGenerator */ "./src/app/generator/setterGenerator.ts");
/* harmony import */ var _classGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classGenerator */ "./src/app/generator/classGenerator.ts");



var GeneratorFactory = /** @class */ (function () {
    function GeneratorFactory() {
    }
    GeneratorFactory.create = function (generatorType, options, writer) {
        switch (generatorType) {
            case _enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_0__["GeneratorTypesEnum"].CLASS:
            case _enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_0__["GeneratorTypesEnum"].INTERFACE:
                return new _classGenerator__WEBPACK_IMPORTED_MODULE_2__["ClassGenerator"](options, writer);
            case _enums_generatorTypes_enum__WEBPACK_IMPORTED_MODULE_0__["GeneratorTypesEnum"].SETTER:
                return new _setterGenerator__WEBPACK_IMPORTED_MODULE_1__["SetterGenerator"](options, writer);
            default:
                throw new Error("Generator was not found: " + generatorType);
        }
    };
    return GeneratorFactory;
}());



/***/ }),

/***/ "./src/app/generator/models/arrayAttribute.ts":
/*!****************************************************!*\
  !*** ./src/app/generator/models/arrayAttribute.ts ***!
  \****************************************************/
/*! exports provided: ArrayAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayAttribute", function() { return ArrayAttribute; });
var ArrayAttribute = /** @class */ (function () {
    function ArrayAttribute(fieldName, fieldType) {
        this.fieldName = fieldName;
        this.fieldType = fieldType;
    }
    return ArrayAttribute;
}());



/***/ }),

/***/ "./src/app/generator/models/arrayInstance.ts":
/*!***************************************************!*\
  !*** ./src/app/generator/models/arrayInstance.ts ***!
  \***************************************************/
/*! exports provided: ArrayInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayInstance", function() { return ArrayInstance; });
var ArrayInstance = /** @class */ (function () {
    function ArrayInstance(fieldName, fieldType) {
        this.fieldName = fieldName;
        this.fieldType = fieldType;
    }
    return ArrayInstance;
}());



/***/ }),

/***/ "./src/app/generator/models/arraySetter.ts":
/*!*************************************************!*\
  !*** ./src/app/generator/models/arraySetter.ts ***!
  \*************************************************/
/*! exports provided: ArraySetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySetter", function() { return ArraySetter; });
var ArraySetter = /** @class */ (function () {
    function ArraySetter(fieldName, value) {
        this.fieldName = fieldName;
        this.value = value;
    }
    return ArraySetter;
}());



/***/ }),

/***/ "./src/app/generator/models/attribute.ts":
/*!***********************************************!*\
  !*** ./src/app/generator/models/attribute.ts ***!
  \***********************************************/
/*! exports provided: Attribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
var Attribute = /** @class */ (function () {
    function Attribute(fieldName, fieldType, annotation) {
        this.fieldName = fieldName;
        this.fieldType = fieldType;
        this.annotation = annotation;
    }
    return Attribute;
}());



/***/ }),

/***/ "./src/app/generator/models/class.ts":
/*!*******************************************!*\
  !*** ./src/app/generator/models/class.ts ***!
  \*******************************************/
/*! exports provided: Class */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
var Class = /** @class */ (function () {
    function Class(className) {
        this.className = className;
        this.imports = new Array();
        this.attributes = new Array();
        this.arrayAttributes = new Array();
    }
    return Class;
}());



/***/ }),

/***/ "./src/app/generator/models/content.ts":
/*!*********************************************!*\
  !*** ./src/app/generator/models/content.ts ***!
  \*********************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
var Content = /** @class */ (function () {
    function Content(name, text) {
        this.name = name;
        this.text = text;
    }
    return Content;
}());



/***/ }),

/***/ "./src/app/generator/models/import.ts":
/*!********************************************!*\
  !*** ./src/app/generator/models/import.ts ***!
  \********************************************/
/*! exports provided: Import */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Import", function() { return Import; });
var Import = /** @class */ (function () {
    function Import(className, path) {
        this.className = className;
        this.path = path;
    }
    return Import;
}());



/***/ }),

/***/ "./src/app/generator/models/instance.ts":
/*!**********************************************!*\
  !*** ./src/app/generator/models/instance.ts ***!
  \**********************************************/
/*! exports provided: Instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instance", function() { return Instance; });
var Instance = /** @class */ (function () {
    function Instance(fieldName, className) {
        this.fieldName = fieldName;
        this.className = className;
    }
    return Instance;
}());



/***/ }),

/***/ "./src/app/generator/models/setter.ts":
/*!********************************************!*\
  !*** ./src/app/generator/models/setter.ts ***!
  \********************************************/
/*! exports provided: Setter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setter", function() { return Setter; });
var Setter = /** @class */ (function () {
    function Setter(fieldName, methodName, value) {
        this.fieldName = fieldName;
        this.methodName = methodName;
        this.value = value;
    }
    return Setter;
}());



/***/ }),

/***/ "./src/app/generator/options/classOptions.ts":
/*!***************************************************!*\
  !*** ./src/app/generator/options/classOptions.ts ***!
  \***************************************************/
/*! exports provided: ClassOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassOptions", function() { return ClassOptions; });
/* harmony import */ var _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/assignments.enum */ "./src/app/generator/enums/assignments.enum.ts");
/* harmony import */ var _enums_encryption_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/encryption.enum */ "./src/app/generator/enums/encryption.enum.ts");


var ClassOptions = /** @class */ (function () {
    function ClassOptions() {
        this.assignment = _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_0__["AssignmentsEnum"].ASSIGNMENT_SIGNAL;
        this.encryption = _enums_encryption_enum__WEBPACK_IMPORTED_MODULE_1__["EncryptionEnum"].NONE;
    }
    ClassOptions.prototype.supportAssignment = function () {
        return true;
    };
    ClassOptions.prototype.supportStrigDataTypeOnly = function () {
        return false;
    };
    ClassOptions.prototype.supportArrayInstantiation = function () {
        return false;
    };
    ClassOptions.prototype.supportEmptyString = function () {
        return false;
    };
    ClassOptions.prototype.supportEncryptionAnnotation = function () {
        return true;
    };
    return ClassOptions;
}());



/***/ }),

/***/ "./src/app/generator/options/interfaceOptions.ts":
/*!*******************************************************!*\
  !*** ./src/app/generator/options/interfaceOptions.ts ***!
  \*******************************************************/
/*! exports provided: InterfaceOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceOptions", function() { return InterfaceOptions; });
var InterfaceOptions = /** @class */ (function () {
    function InterfaceOptions() {
    }
    InterfaceOptions.prototype.supportAssignment = function () {
        return false;
    };
    InterfaceOptions.prototype.supportStrigDataTypeOnly = function () {
        return false;
    };
    InterfaceOptions.prototype.supportArrayInstantiation = function () {
        return false;
    };
    InterfaceOptions.prototype.supportEmptyString = function () {
        return false;
    };
    InterfaceOptions.prototype.supportEncryptionAnnotation = function () {
        return false;
    };
    return InterfaceOptions;
}());



/***/ }),

/***/ "./src/app/generator/options/setterOptions.ts":
/*!****************************************************!*\
  !*** ./src/app/generator/options/setterOptions.ts ***!
  \****************************************************/
/*! exports provided: SetterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetterOptions", function() { return SetterOptions; });
/* harmony import */ var _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/assignments.enum */ "./src/app/generator/enums/assignments.enum.ts");
/* harmony import */ var _enums_question_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/question.enum */ "./src/app/generator/enums/question.enum.ts");


var SetterOptions = /** @class */ (function () {
    function SetterOptions() {
        this.assignment = _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_0__["AssignmentsEnum"].ASSIGNMENT_SIGNAL;
        this.arrayInstantiation = _enums_question_enum__WEBPACK_IMPORTED_MODULE_1__["QuestionEnum"].YES;
        this.stringDataTypeOnly = _enums_question_enum__WEBPACK_IMPORTED_MODULE_1__["QuestionEnum"].YES;
        this.emptyString = _enums_question_enum__WEBPACK_IMPORTED_MODULE_1__["QuestionEnum"].YES;
    }
    SetterOptions.prototype.supportAssignment = function () {
        return true;
    };
    SetterOptions.prototype.supportStrigDataTypeOnly = function () {
        return true;
    };
    SetterOptions.prototype.supportArrayInstantiation = function () {
        return true;
    };
    SetterOptions.prototype.supportEmptyString = function () {
        return true;
    };
    SetterOptions.prototype.supportEncryptionAnnotation = function () {
        return false;
    };
    return SetterOptions;
}());



/***/ }),

/***/ "./src/app/generator/service/utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/generator/service/utils.service.ts ***!
  \****************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.getListFieldName = function (fieldName, value) {
        if (fieldName) {
            return Array.isArray(value) ? fieldName.concat('List') : fieldName.replace('List', '');
        }
    };
    UtilService.getNumberFromString = function (str) {
        if (str) {
            var valuesFound = str.match(/\d+/g);
            if (valuesFound) {
                return Number.parseInt(valuesFound.join(''));
            }
        }
    };
    UtilService.isEmpty = function (obj) {
        return !obj || obj.length == 0;
    };
    UtilService.getClassName = function (name) {
        var result;
        if (name) {
            result = name.charAt(0).toUpperCase();
            if (name.length > 1) {
                result += name.substring(1);
            }
        }
        return result;
    };
    UtilService.getType = function (val) {
        return val ? typeof val : 'string';
    };
    UtilService.fixFieldName = function (name) {
        var result;
        if (name) {
            result = name.charAt(0).toLowerCase();
            if (name.length > 1) {
                result += name.substring(1);
            }
        }
        return result;
    };
    UtilService.fixValue = function (val, useOnlyStringDataType) {
        var valFixed;
        if (!val) {
            valFixed = "''";
        }
        else if (useOnlyStringDataType || typeof val == 'string') {
            valFixed = "'" + val + "'";
        }
        else {
            valFixed = val;
        }
        return valFixed;
    };
    UtilService.fixMethodName = function (name) {
        var result;
        if (name) {
            result = name.charAt(0).toUpperCase();
            if (name.length > 1) {
                result += name.substring(1);
            }
        }
        return result;
    };
    UtilService.isBlank = function (val) {
        return val ? val.indexOf(' ') != -1 : true;
    };
    UtilService.isObject = function (val) {
        return typeof val == 'object';
    };
    UtilService.isBase64 = function (str) {
        try {
            return str ? btoa(atob(str)) == str : false;
        }
        catch (e) {
            return false;
        }
    };
    return UtilService;
}());



/***/ }),

/***/ "./src/app/generator/setterGenerator.ts":
/*!**********************************************!*\
  !*** ./src/app/generator/setterGenerator.ts ***!
  \**********************************************/
/*! exports provided: SetterGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetterGenerator", function() { return SetterGenerator; });
/* harmony import */ var _models_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/instance */ "./src/app/generator/models/instance.ts");
/* harmony import */ var _models_arrayInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/arrayInstance */ "./src/app/generator/models/arrayInstance.ts");
/* harmony import */ var _models_arraySetter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/arraySetter */ "./src/app/generator/models/arraySetter.ts");
/* harmony import */ var _service_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/utils.service */ "./src/app/generator/service/utils.service.ts");
/* harmony import */ var _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/assignments.enum */ "./src/app/generator/enums/assignments.enum.ts");
/* harmony import */ var _enums_question_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/question.enum */ "./src/app/generator/enums/question.enum.ts");
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/content */ "./src/app/generator/models/content.ts");
/* harmony import */ var _models_setter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/setter */ "./src/app/generator/models/setter.ts");








var SetterGenerator = /** @class */ (function () {
    function SetterGenerator(options, writer) {
        if (!options) {
            throw new Error('Options cannot be empty.');
        }
        if (!writer) {
            throw new Error('The writer cannot be null.');
        }
        this.options = options;
        this.writer = writer;
        this.fieldNameMap = new Map();
        this.instances = new Array();
        this.arrayInstances = new Array();
        this.instanceSetters = new Array();
        this.arrayInstanceSetters = new Array();
        this.arraySetters = new Array();
        this.setters = new Array();
    }
    SetterGenerator.prototype.create = function (json, fieldName, className) {
        if (!json) {
            return;
        }
        if (_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].isBlank(fieldName)) {
            throw new Error('Field name cannot be blank.');
        }
        fieldName = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].fixFieldName(fieldName);
        className = className || _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getClassName(fieldName);
        var isArray = Array.isArray(json);
        var nextFieldName = this.memorizeNextFieldName(fieldName);
        if (isArray) {
            var fieldType = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getType(json[0]);
            if (fieldType === 'object') {
                fieldType = className;
            }
            this.arrayInstances.push(new _models_arrayInstance__WEBPACK_IMPORTED_MODULE_1__["ArrayInstance"](fieldName, fieldType));
        }
        else {
            this.instances.push(new _models_instance__WEBPACK_IMPORTED_MODULE_0__["Instance"](nextFieldName, className));
        }
        for (var field in json) {
            if (_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].isBlank(field)) {
                throw new Error('Field name cannot be blank.');
            }
            var val = json[field];
            var isFieldAnObject = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].isObject(val);
            var isFieldAnArray = Array.isArray(val);
            if (this.options.arrayInstantiation === _enums_question_enum__WEBPACK_IMPORTED_MODULE_5__["QuestionEnum"].NO && isFieldAnArray)
                continue;
            field = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].fixFieldName(field);
            if (isArray) {
                if (isFieldAnObject) {
                    var name_1 = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getListFieldName(fieldName, val);
                    this.arrayInstanceSetters.push(new _models_arraySetter__WEBPACK_IMPORTED_MODULE_2__["ArraySetter"](fieldName, this.generateNextFieldName(name_1)));
                    this.create(val, name_1, _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getClassName(name_1));
                }
                else {
                    this.arraySetters.push(new _models_arraySetter__WEBPACK_IMPORTED_MODULE_2__["ArraySetter"](nextFieldName, _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].fixValue(val, this.options.stringDataTypeOnly === _enums_question_enum__WEBPACK_IMPORTED_MODULE_5__["QuestionEnum"].YES)));
                }
            }
            else {
                if (isFieldAnObject) {
                    var name_2 = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getListFieldName(field, val);
                    this.instanceSetters.push(new _models_setter__WEBPACK_IMPORTED_MODULE_7__["Setter"](nextFieldName, field, name_2));
                    this.create(val, name_2, _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getClassName(field));
                }
                else {
                    if (this.options.emptyString === _enums_question_enum__WEBPACK_IMPORTED_MODULE_5__["QuestionEnum"].YES || val) {
                        this.setters.push(new _models_setter__WEBPACK_IMPORTED_MODULE_7__["Setter"](nextFieldName, field, _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].fixValue(val, this.options.stringDataTypeOnly === _enums_question_enum__WEBPACK_IMPORTED_MODULE_5__["QuestionEnum"].YES)));
                    }
                }
            }
        }
    };
    SetterGenerator.prototype.build = function () {
        var _this = this;
        var contents = new Array();
        this.instances.forEach(function (i) { return _this.writer.writeInstance(i); });
        this.arrayInstances.forEach(function (ai) { return _this.writer.writeArrayInstance(ai); });
        this.writer.writeLine();
        if (this.options.assignment === _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_4__["AssignmentsEnum"].SETTER_METHOD) {
            this.instanceSetters.forEach(function (is) { return _this.writer.writeSetter(is); });
        }
        else {
            this.instanceSetters.forEach(function (is) { return _this.writer.writeAssignment(is); });
        }
        if (!_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].isEmpty(this.instanceSetters))
            this.writer.writeLine();
        this.arrayInstanceSetters.forEach(function (ais) { return _this.writer.writeArraySetter(ais); });
        if (!_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].isEmpty(this.arrayInstanceSetters))
            this.writer.writeLine();
        this.arraySetters.forEach(function (as) { return _this.writer.writeArraySetter(as); });
        if (!_service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].isEmpty(this.arraySetters))
            this.writer.writeLine();
        if (this.options.assignment === _enums_assignments_enum__WEBPACK_IMPORTED_MODULE_4__["AssignmentsEnum"].SETTER_METHOD) {
            this.setters.forEach(function (s) { return _this.writer.writeSetter(s); });
        }
        else {
            this.setters.forEach(function (s) { return _this.writer.writeAssignment(s); });
        }
        contents.push(new _models_content__WEBPACK_IMPORTED_MODULE_6__["Content"]('Setters', this.writer.toString()));
        this.writer.reset();
        return contents;
    };
    SetterGenerator.prototype.memorizeNextFieldName = function (fieldName) {
        var nextFieldName = this.generateNextFieldName(fieldName);
        this.fieldNameMap.set(fieldName, nextFieldName);
        return nextFieldName;
    };
    SetterGenerator.prototype.generateNextFieldName = function (fieldName) {
        var nextFieldName = fieldName;
        if (this.fieldNameMap.has(fieldName)) {
            var fieldCounter = void 0;
            var fieldNameFromMap = this.fieldNameMap.get(fieldName);
            if (fieldCounter = _service_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getNumberFromString(fieldNameFromMap)) {
                nextFieldName = fieldNameFromMap.replace(fieldCounter.toString(), (fieldCounter + 1).toString());
            }
            else {
                nextFieldName = fieldNameFromMap + '1';
            }
        }
        return nextFieldName;
    };
    return SetterGenerator;
}());



/***/ }),

/***/ "./src/app/generator/writers/classWriter.ts":
/*!**************************************************!*\
  !*** ./src/app/generator/writers/classWriter.ts ***!
  \**************************************************/
/*! exports provided: ClassWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassWriter", function() { return ClassWriter; });
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writer */ "./src/app/generator/writers/writer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ClassWriter = /** @class */ (function (_super) {
    __extends(ClassWriter, _super);
    function ClassWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // import { className } from 'path';
    ClassWriter.prototype.writeImport = function (imp) {
        var syntax = "import { " + imp.className + " } from '" + imp.path + "';";
        this.write(syntax);
        this.writeLine();
    };
    // class className {
    ClassWriter.prototype.writeStartClass = function (clazz) {
        var syntax = "export class " + clazz.className + " {";
        this.write(syntax);
        this.writeLine();
    };
    // }
    ClassWriter.prototype.writeEndClass = function () {
        var syntax = '}';
        this.write(syntax);
        this.writeLine();
    };
    // @name
    ClassWriter.prototype.writeAnnotation = function (name) {
        var syntax = "\t@" + name;
        this.write(syntax);
        this.writeLine();
    };
    // fieldName: fieldType;
    ClassWriter.prototype.writeAttribute = function (attribute) {
        var syntax = "\t" + attribute.fieldName + ": " + attribute.fieldType + ";";
        this.write(syntax);
        this.writeLine();
    };
    // private _fieldName: fieldType;
    ClassWriter.prototype.writeSetterAttribute = function (attribute) {
        var syntax = "\tprivate _" + attribute.fieldName + ": " + attribute.fieldType + ";";
        this.write(syntax);
        this.writeLine();
    };
    // fieldName: Array<fieldType> = [];
    ClassWriter.prototype.writeArrayAttribute = function (arrayAttribute) {
        var syntax = "\t" + arrayAttribute.fieldName + ": Array<" + arrayAttribute.fieldType + "> = [];";
        this.write(syntax);
        this.writeLine();
    };
    // private _fieldName: Array<fieldType> = [];
    ClassWriter.prototype.writeSetterArrayAttribute = function (arrayAttribute) {
        var syntax = "\tprivate _" + arrayAttribute.fieldName + ": Array<" + arrayAttribute.fieldType + "> = [];";
        this.write(syntax);
        this.writeLine();
    };
    // get fieldName(): fieldType {
    //	return this._fieldName;
    // }
    ClassWriter.prototype.writeGetter = function (attribute) {
        var startSyntax = "\tget " + attribute.fieldName + "(): " + attribute.fieldType + " {";
        var middleSyntax = "\t\treturn this._" + attribute.fieldName + ";";
        var endSyntax = '	}';
        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    };
    // get fieldName(): fieldType[] {
    //	return this._fieldName;
    // }
    ClassWriter.prototype.writeArrayGetter = function (arrayAttribute) {
        var startSyntax = "\tget " + arrayAttribute.fieldName + "(): " + arrayAttribute.fieldType + "[] {";
        var middleSyntax = "\t\treturn this._" + arrayAttribute.fieldName + ";";
        var endSyntax = '	}';
        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    };
    // set fieldName(fieldName: fieldType): void {
    //	this._fieldName = fieldName;
    // }
    ClassWriter.prototype.writeSetter = function (attribute) {
        var startSyntax = "\tset " + attribute.fieldName + "(" + attribute.fieldName + ": " + attribute.fieldType + "): void {";
        var middleSyntax = "\t\tthis._" + attribute.fieldName + " = " + attribute.fieldName + ";";
        var endSyntax = '	}';
        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    };
    // set fieldName(fieldName: fieldType[]): void {
    //	this._fieldName = fieldName;
    // }
    ClassWriter.prototype.writeArraySetter = function (arrayAttribute) {
        var startSyntax = "\tset " + arrayAttribute.fieldName + "(" + arrayAttribute.fieldName + ": " + arrayAttribute.fieldType + "[]): void {";
        var middleSyntax = "\t\tthis._" + arrayAttribute.fieldName + " = " + arrayAttribute.fieldName;
        var endSyntax = "\t}";
        this.write(startSyntax);
        this.writeLine();
        this.write(middleSyntax);
        this.writeLine();
        this.write(endSyntax);
        this.writeLine();
    };
    return ClassWriter;
}(_writer__WEBPACK_IMPORTED_MODULE_0__["Writer"]));



/***/ }),

/***/ "./src/app/generator/writers/interfaceWriter.ts":
/*!******************************************************!*\
  !*** ./src/app/generator/writers/interfaceWriter.ts ***!
  \******************************************************/
/*! exports provided: InterfaceWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceWriter", function() { return InterfaceWriter; });
/* harmony import */ var _classWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classWriter */ "./src/app/generator/writers/classWriter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InterfaceWriter = /** @class */ (function (_super) {
    __extends(InterfaceWriter, _super);
    function InterfaceWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // interface className {
    InterfaceWriter.prototype.writeStartClass = function (clazz) {
        var syntax = "export interface " + clazz.className + " {";
        this.write(syntax);
        this.writeLine();
    };
    // fieldName: Array<fieldType>;
    InterfaceWriter.prototype.writeArrayAttribute = function (arrayAttribute) {
        var syntax = "\t" + arrayAttribute.fieldName + ": Array<" + arrayAttribute.fieldType + ">;";
        this.write(syntax);
        this.writeLine();
    };
    return InterfaceWriter;
}(_classWriter__WEBPACK_IMPORTED_MODULE_0__["ClassWriter"]));



/***/ }),

/***/ "./src/app/generator/writers/setterWriter.ts":
/*!***************************************************!*\
  !*** ./src/app/generator/writers/setterWriter.ts ***!
  \***************************************************/
/*! exports provided: SetterWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetterWriter", function() { return SetterWriter; });
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writer */ "./src/app/generator/writers/writer.ts");
/* harmony import */ var _service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/utils.service */ "./src/app/generator/service/utils.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SetterWriter = /** @class */ (function (_super) {
    __extends(SetterWriter, _super);
    function SetterWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // const fieldName: className = new className();
    SetterWriter.prototype.writeInstance = function (instance) {
        var syntax = "const " + instance.fieldName + ": " + instance.className + " = new " + instance.className + "();";
        this.write(syntax);
        this.writeLine();
    };
    // const fieldName: Array<fieldType> = [];
    SetterWriter.prototype.writeArrayInstance = function (arrayInstance) {
        var syntax = "const " + arrayInstance.fieldName + ": Array<" + arrayInstance.fieldType + "> = [];";
        this.write(syntax);
        this.writeLine();
    };
    // fieldName.push(value);
    SetterWriter.prototype.writeArraySetter = function (arraySetter) {
        var syntax = arraySetter.fieldName + ".push(" + arraySetter.value + ");";
        this.write(syntax);
        this.writeLine();
    };
    // fieldName.methodName = value;
    SetterWriter.prototype.writeAssignment = function (setter) {
        var syntax = setter.fieldName + "." + setter.methodName + " = " + setter.value + ";";
        this.write(syntax);
        this.writeLine();
    };
    // fieldName.methodName = value;
    SetterWriter.prototype.writeSetter = function (setter) {
        var syntax = setter.fieldName + ".set" + _service_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].fixMethodName(setter.methodName) + "(" + setter.value + ");";
        this.write(syntax);
        this.writeLine();
    };
    return SetterWriter;
}(_writer__WEBPACK_IMPORTED_MODULE_0__["Writer"]));



/***/ }),

/***/ "./src/app/generator/writers/writer.ts":
/*!*********************************************!*\
  !*** ./src/app/generator/writers/writer.ts ***!
  \*********************************************/
/*! exports provided: Writer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Writer", function() { return Writer; });
var Writer = /** @class */ (function () {
    function Writer() {
        this.text = '';
    }
    Writer.prototype.writeLine = function () {
        this.write('\n');
    };
    Writer.prototype.write = function (str) {
        this.text += str;
    };
    Writer.prototype.reset = function () {
        this.text = '';
    };
    Writer.prototype.toString = function () {
        return this.text;
    };
    return Writer;
}());



/***/ }),

/***/ "./src/app/pipe/enumToArray.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/enumToArray.pipe.ts ***!
  \******************************************/
/*! exports provided: EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }
    EnumToArrayPipe.prototype.transform = function (data) {
        var returnArray = new Array();
        var keys = Object.keys(data);
        var values = Object.values(data);
        for (var i = 0; i < keys.length; i++) {
            returnArray.push({
                key: keys[i],
                val: values[i]
            });
        }
        return returnArray;
    };
    EnumToArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'enumToArray' })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());



/***/ }),

/***/ "./src/app/service/alert.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/alert.service.ts ***!
  \******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.showError = function (message, error) {
        if (error) {
            console.error(error);
        }
        this.showMessage('Error: ' + message);
        throw new Error(message);
    };
    AlertService.showMessage = function (message) {
        alert(message);
    };
    return AlertService;
}());



/***/ }),

/***/ "./src/app/service/utils.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/utils.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.downloadText = function (fileName, text) {
        this.download(fileName, text, 'text/plain');
    };
    UtilService.download = function (fileName, content, type) {
        var contentAsBlob = new Blob([content], { type: type });
        this.downloadLink = document.createElement('a');
        this.downloadLink.download = fileName;
        this.downloadLink.href = window.URL.createObjectURL(contentAsBlob);
        this.downloadLink.click();
    };
    UtilService.isEmpty = function (obj) {
        return !obj || obj.length == 0;
    };
    UtilService.isBlank = function (val) {
        return val ? val.indexOf(' ') != -1 : true;
    };
    UtilService.isObject = function (val) {
        return typeof val == 'object';
    };
    UtilService.parseJson = function (json) {
        var jsonParsed = JSON.parse(json);
        if (jsonParsed && this.isObject(jsonParsed)) {
            return jsonParsed;
        }
    };
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\development\typescript-generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map