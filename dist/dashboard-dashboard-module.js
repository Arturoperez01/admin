(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/_directives/dynamic-form/componentes/dynamic-field/dynamic-field.directive.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/dynamic-field/dynamic-field.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/app/_directives/dynamic-form/componentes/index.ts");




var components = {
    button: ___WEBPACK_IMPORTED_MODULE_3__["FormButtonComponent"],
    input: ___WEBPACK_IMPORTED_MODULE_3__["FormInputComponent"],
    select: ___WEBPACK_IMPORTED_MODULE_3__["FormSelectComponent"],
    password: ___WEBPACK_IMPORTED_MODULE_3__["FormPasswordComponent"],
    tags: ___WEBPACK_IMPORTED_MODULE_3__["FormTagsComponent"],
    multiselect: ___WEBPACK_IMPORTED_MODULE_3__["FormMultiComponent"]
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.type]) {
            var supportedTypes = Object.keys(components).join(', ');
            throw new Error("Trying to use an unsupported type (" + this.config.type + ").\n        Supported types: " + supportedTypes);
        }
        //const component = components[this.config.type];
        var factory = this.resolver.resolveComponentFactory(components[this.config.type]);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicFieldDirective.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[dynamicField]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-button/form-button.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-button/form-button.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2R5bmFtaWMtZm9ybS9jb21wb25lbnRlcy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-button/form-button.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-button/form-button.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormButtonComponent", function() { return FormButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-button',
            template: "\n   <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\">\n      <button\n      mdbBtn \n      color=\"primary\"\n      [disabled]=\"config.disabled\"\n      type=\"submit\"\n      mdbWavesEffect>\n        {{ config.label }}\n      </button>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./form-button.component.scss */ "./src/app/_directives/dynamic-form/componentes/form-button/form-button.component.scss")]
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-input/form-input.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-input/form-input.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2R5bmFtaWMtZm9ybS9jb21wb25lbnRlcy9mb3JtLWlucHV0L2Zvcm0taW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-input/form-input.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-input/form-input.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputComponent", function() { return FormInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormInputComponent = /** @class */ (function () {
    function FormInputComponent() {
    }
    Object.defineProperty(FormInputComponent.prototype, "validate", {
        get: function () { return this.group.get(this.config.name); },
        enumerable: true,
        configurable: true
    });
    FormInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-input',
            template: "\n    <div \n      class=\"md-form\" \n      [formGroup]=\"group\">\n      <label class=\"float-left\">{{ config.label }}</label>\n      <input\n        mdbInput\n        mdbValidate \n        type=\"text\" \n        class=\"form-control\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\" />          \n      <mat-error *ngIf=\"validate.invalid && (validate.dirty || validate.touched)\">Input invalid</mat-error>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./form-input.component.scss */ "./src/app/_directives/dynamic-form/componentes/form-input/form-input.component.scss")]
        })
    ], FormInputComponent);
    return FormInputComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-multiselect/form-multiselect.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-multiselect/form-multiselect.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2R5bmFtaWMtZm9ybS9jb21wb25lbnRlcy9mb3JtLW11bHRpc2VsZWN0L2Zvcm0tbXVsdGlzZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-multiselect/form-multiselect.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-multiselect/form-multiselect.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FormMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMultiComponent", function() { return FormMultiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormMultiComponent = /** @class */ (function () {
    function FormMultiComponent() {
    }
    FormMultiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-select',
            template: "\n    <mat-form-field\n      [formGroup]=\"group\">\n      <mat-label>{{ config.label }}</mat-label>\n      <mat-select [formControlName]=\"config.name\"  multiple>\n        <mat-option *ngFor=\"let option of config.options\" [value]=\"option.key\">\n          {{ option.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
            styles: [__webpack_require__(/*! ./form-multiselect.component.scss */ "./src/app/_directives/dynamic-form/componentes/form-multiselect/form-multiselect.component.scss")]
        })
    ], FormMultiComponent);
    return FormMultiComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-password/form-password.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-password/form-password.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FormPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPasswordComponent", function() { return FormPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormPasswordComponent = /** @class */ (function () {
    function FormPasswordComponent() {
    }
    Object.defineProperty(FormPasswordComponent.prototype, "validate", {
        get: function () { return this.group.get(this.config.name); },
        enumerable: true,
        configurable: true
    });
    FormPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-password',
            template: "\n    <div \n      class=\"md-form\" \n      [formGroup]=\"group\">\n      \n      <label class=\"float-left\">{{ config.label }}</label>\n      <input\n        mdbInput\n        type=\"password\"\n        class=\"form-control\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\" />\n        <mat-error *ngIf=\"validate.invalid && (validate.dirty || validate.touched)\">Input invalid</mat-error>\n    </div>\n  ",
        })
    ], FormPasswordComponent);
    return FormPasswordComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-select/form-select.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-select/form-select.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2R5bmFtaWMtZm9ybS9jb21wb25lbnRlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-select/form-select.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-select/form-select.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectComponent", function() { return FormSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-select',
            template: "\n    <mat-form-field\n      [formGroup]=\"group\">\n      <mat-label>{{ config.label }}</mat-label>\n      <mat-select [formControlName]=\"config.name\">\n        <mat-option [value]=\"\">{{ config.placeholder }}</mat-option>\n        <mat-option *ngFor=\"let option of config.options\" [value]=\"option.key\">\n          {{ option.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  ",
            styles: [__webpack_require__(/*! ./form-select.component.scss */ "./src/app/_directives/dynamic-form/componentes/form-select/form-select.component.scss")]
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-tags/form-tags.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-tags/form-tags.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2R5bmFtaWMtZm9ybS9jb21wb25lbnRlcy9mb3JtLXRhZ3MvZm9ybS10YWdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/form-tags/form-tags.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/form-tags/form-tags.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTagsComponent", function() { return FormTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



//Todo: poder colocar multiples tags
var FormTagsComponent = /** @class */ (function () {
    function FormTagsComponent(fb) {
        this.fb = fb;
    }
    Object.defineProperty(FormTagsComponent.prototype, "tagsArray", {
        get: function () {
            //console.log(this.group.get('preguntasPlantilla'));
            //console.log(this.config['name'],this.group.get(this.config['name']));
            return this.group.get(this.config['name']);
        },
        enumerable: true,
        configurable: true
    });
    //*/
    FormTagsComponent.prototype.addTags = function (tag) {
        //this.group.get(this.config['name']).push(tag);
        console.log(tag);
        this.tagsArray.push(this.getTagFormGroup(tag.value));
        console.log(this.tagsArray);
    };
    ;
    FormTagsComponent.prototype.getTagFormGroup = function (tag) {
        return this.fb.control(tag);
        /*
        return this.fb.group({
          tag
        });
        //*/
    };
    //*/
    FormTagsComponent.prototype.removeRole = function (index) {
        this.tagsArray.removeAt(index);
    };
    ;
    FormTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-tags',
            template: "\n  <div class=\"row\" [formGroup]=\"group\">\n      <div class=\"form-group col-md-12\">\n      <h3 class=\"text-left\">{{this.config['name']}}</h3>\n        <div class=\"row\">\n          <div class=\"col-md-10\" >\n                <input \n                mdbInput\n                [attr.placeholder]=\"config.placeholder\"\n                 type=\"text\" class=\"form-control mt-2\" id=\"{{this.config['name']}}Tags\" name=\"{{this.config['name']}}Tags\" #newTags>\n          </div>\n          <div clas=\"col-md-2\">\n            <span class=\"round btn-sm primary-color float-right \" (click)=\"addTags(newTags)\">\n                <i class=\"fa fa-plus\"></i>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n      <label class=\"text-left\" *ngIf=\"!tagsArray || tagsArray.length==0; else empty\">\n          No {{this.config['name']}} assigned\n      </label>\n    </div>\n\n    <!-- NO tags -->\n      <ng-template #empty>\n        <div formArrayName=\"{{this.config['name']}}\" class=\"col-md-12\">\n          \n          <div *ngFor=\"let address of tagsArray.controls; let i=index\" class=\"row\" >\n            <!-- The repeated alias template -->\n            <div class=\"col-md-10 mt-2\">\n              tag:\n              <input type=\"text\" [formControlName]=\"i\">\n            <span class=\"round btn-sm danger-color float-right\" (click)=\"removeRole(i)\"><i class=\"fa fa-trash\"></i></span>\n            </div>\n          </div>\n        </div>\n    </ng-template>\n  </div>\n  ",
            styles: [__webpack_require__(/*! ./form-tags.component.scss */ "./src/app/_directives/dynamic-form/componentes/form-tags/form-tags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormTagsComponent);
    return FormTagsComponent;
}());



/***/ }),

/***/ "./src/app/_directives/dynamic-form/componentes/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/componentes/index.ts ***!
  \***************************************************************/
/*! exports provided: FormButtonComponent, FormInputComponent, FormPasswordComponent, FormSelectComponent, FormTagsComponent, FormMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_button_form_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-button/form-button.component */ "./src/app/_directives/dynamic-form/componentes/form-button/form-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormButtonComponent", function() { return _form_button_form_button_component__WEBPACK_IMPORTED_MODULE_0__["FormButtonComponent"]; });

/* harmony import */ var _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-input/form-input.component */ "./src/app/_directives/dynamic-form/componentes/form-input/form-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormInputComponent", function() { return _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_1__["FormInputComponent"]; });

/* harmony import */ var _form_password_form_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-password/form-password.component */ "./src/app/_directives/dynamic-form/componentes/form-password/form-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPasswordComponent", function() { return _form_password_form_password_component__WEBPACK_IMPORTED_MODULE_2__["FormPasswordComponent"]; });

/* harmony import */ var _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-select/form-select.component */ "./src/app/_directives/dynamic-form/componentes/form-select/form-select.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSelectComponent", function() { return _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_3__["FormSelectComponent"]; });

/* harmony import */ var _form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-tags/form-tags.component */ "./src/app/_directives/dynamic-form/componentes/form-tags/form-tags.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormTagsComponent", function() { return _form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_4__["FormTagsComponent"]; });

/* harmony import */ var _form_multiselect_form_multiselect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-multiselect/form-multiselect.component */ "./src/app/_directives/dynamic-form/componentes/form-multiselect/form-multiselect.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormMultiComponent", function() { return _form_multiselect_form_multiselect_component__WEBPACK_IMPORTED_MODULE_5__["FormMultiComponent"]; });









/***/ }),

/***/ "./src/app/_directives/dynamic-form/dynamic-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/dynamic-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/_directives/dynamic-form/dynamic-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_directives/dynamic-form/dynamic-form.component.ts ***!
  \********************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.config = [];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(DynamicFormComponent.prototype, "controls", {
        get: function () { return this.config.filter(function (_a) {
            var type = _a.type;
            return type !== 'button';
        }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "changes", {
        get: function () { return this.form.valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "valid", {
        get: function () { return this.form.valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "value", {
        get: function () { return this.form.value; },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.createGroup();
    };
    DynamicFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.form) {
            var controls_1 = Object.keys(this.form.controls);
            var configControls_1 = this.controls.map(function (item) { return item.name; });
            controls_1
                .filter(function (control) { return !configControls_1.includes(control); })
                .forEach(function (control) { return _this.form.removeControl(control); });
            configControls_1
                .filter(function (control) { return !controls_1.includes(control); })
                .forEach(function (name) {
                var config = _this.config.find(function (control) { return control.name === name; });
                _this.form.addControl(name, _this.createControl(config));
            });
        }
    };
    DynamicFormComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({});
        this.controls.forEach(function (control) { return group.addControl(control.name, _this.createControl(control)); });
        //this.config.forEach(control => group.addControl(control.name, this.fb.control({ disabled: control.disabled, value: control.value },control.validation)) );
        return group;
    };
    DynamicFormComponent.prototype.createControl = function (config) {
        var disabled = config.disabled, validation = config.validation, value = config.value;
        //if (Array.isArray(value)){return this.fb.array(value)};
        return this.fb.control({ disabled: disabled, value: value }, validation);
    };
    DynamicFormComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    DynamicFormComponent.prototype.setDisabled = function (name, disable) {
        if (this.form.controls[name]) {
            var method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }
        this.config = this.config.map(function (item) {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    };
    DynamicFormComponent.prototype.setValue = function (name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DynamicFormComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DynamicFormComponent.prototype, "submit", void 0);
    DynamicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            exportAs: 'dynamicForm',
            selector: 'dynamic-form',
            template: "\n    <form\n      class=\"dynamic-form\"\n      [formGroup]=\"form\"\n      (submit)=\"handleSubmit($event)\">\n        <ng-container\n          *ngFor=\"let field of config;\"\n          dynamicField\n          [config]=\"field\"\n          [group]=\"form\">\n        </ng-container>\n    </form>\n  ",
            styles: [__webpack_require__(/*! ./dynamic-form.component.scss */ "./src/app/_directives/dynamic-form/dynamic-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/_models/roles/roles-config.ts":
/*!***********************************************!*\
  !*** ./src/app/_models/roles/roles-config.ts ***!
  \***********************************************/
/*! exports provided: RolesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesConfig", function() { return RolesConfig; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

//Campos necesarios
var config = [
    {
        type: 'input',
        label: 'Nombre completo',
        name: 'nombre',
        placeholder: 'Introduzca el nombre',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
    },
    {
        label: 'Submit',
        name: 'submit',
        type: 'button'
    },
];
var RolesConfig = /** @class */ (function () {
    function RolesConfig() {
        this.roles = config;
    }
    RolesConfig.prototype.setValues = function (roles) {
        var _this = this;
        Object.keys(roles).forEach(function (keys) {
            return _this.roles = config.filter(function (rolesConfig) {
                if (keys == rolesConfig.name) {
                    rolesConfig.value = roles[keys];
                }
                return roles;
            });
        });
    };
    RolesConfig.prototype.config = function () {
        return this.roles;
    };
    return RolesConfig;
}());



/***/ }),

/***/ "./src/app/dashboard/componentes/footer/footer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/componentes/footer/footer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\">\r\n      <b>Version</b> 1.0.1\r\n    </div>\r\n    <strong>Copyright © 2018-19 Konecta.</strong> Todos los derechos reservados.\r\n</footer--> \r\n\r\n    <!--Footer-->\r\n    <footer class=\"page-footer text-center font-small primary-color-dark darken-2 mt-4 wow fadeIn  \">\r\n\r\n      <!--Call to action-->\r\n      <!--/.Call to action-->\r\n\r\n      <hr class=\"my-4\">\r\n\r\n      <!--Copyright-->\r\n      <div class=\"footer-copyright py-3\">\r\n          © 2018-19 Copyright:\r\n          <strong>Copyright © 2018-19 Arturo Perez.</strong> Todos los derechos reservados.\r\n      </div>\r\n      <!--/.Copyright-->\r\n\r\n  </footer>\r\n  <!--/.Footer-->"

/***/ }),

/***/ "./src/app/dashboard/componentes/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/componentes/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/dashboard/componentes/footer/footer.component.html")
            //styleUrls: ['./footer.component.scss']
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/componentes/navigation/navigation.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/componentes/navigation/navigation.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\r\n    \r\n        <!-- Sidebar -->\r\n    <!-- div class=\"sidebar-fixed position-fixed collapse\">\r\n\r\n        <a class=\"logo-wrapper waves-effect\">\r\n            <img src=\"../../../../assets/img/angular-mdb.png\" class=\"img-fluid\" alt=\"\">\r\n        </a>\r\n\r\n        <div class=\"list-group list-group-flush\">\r\n\r\n            <a routerLink=\"dashboards/v1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n                <mdb-icon fas icon=\"users\" class=\"mr-3\"></mdb-icon>Users\r\n            </a>\r\n            <a routerLink=\"profiles/profile1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n                <mdb-icon fas icon=\"user\" class=\"mr-3\"></mdb-icon>Profile</a>\r\n            <a routerLink=\"tables/table1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n                <mdb-icon fas icon=\"table\" class=\"mr-3\"></mdb-icon>Tables</a>\r\n            <a routerLink=\"maps/map1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n                <mdb-icon far icon=\"map\" class=\"mr-3\"></mdb-icon>Maps</a>\r\n            <a routerLink=\"nonExistingPath\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n                <mdb-icon fas icon=\"exclamation\" class=\"mr-3\"></mdb-icon>404</a>\r\n\r\n        </div>\r\n\r\n    </div -->\r\n    <!-- Sidebar -->\r\n\r\n    <!--Navbar-->\r\n    <div class=\"navbar navbar-expand-lg fixed-top primary-color\">\r\n        \r\n            <!-- ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <button class=\"nav-link\" (click)=\"side.toggle()\" >\r\n                        <mdb-icon fas icon=\"bars\"></mdb-icon>\r\n                    </button>\r\n                </li>\r\n                <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n                  Toggle sidenav\r\n                </button>\r\n            <ul-->\r\n\r\n            <div class=\"example-sidenav-content\">\r\n                    <button type=\"button\" mat-button (click)=\"side.toggle()\">\r\n                        <mdb-icon fas icon=\"bars\"></mdb-icon>\r\n                    </button>\r\n            </div>\r\n\r\n            <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n                    <li class=\"nav-item avatar dropdown\" mdbDropdown *ngIf=\"login!=null\">\r\n                      <a mdbDropdownToggle type=\"button\"  color=\"primary\" class=\"dropdown-toggle nav-link waves-light\"\r\n                      mdbWavesEffect>\r\n                          Welcome {{login.username}}\r\n                      </a>\r\n                      <div class=\"dropdown-menu dropdown-primary\">\r\n                          <!--a class=\"dropdown-item\" routerLink=\"perfil\">Perfil</a>\r\n                          <div class=\"dropdown-divider\"></div-->\r\n                          <a class=\"dropdown-item\" (click)=\"logOff()\">Logout</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n    </div>\r\n    <!--/.Navbar-->\r\n\r\n    <mat-drawer #side class=\"example-sidenav\" mode=\"side\" opened=\"true\">\r\n        <aside class=\"main-sidebar sidebar-fixed\" >\r\n            <section class=\"sidebar-menu tree\" data-widget=\"tree\" >\r\n                \r\n                    <a class=\"logo-wrapper waves-effect\" [routerLink]=\"['dashboard']\">\r\n                            <img src=\"/assets/angular-mdb.png\" class=\"img-fluid\" alt=\"\">\r\n                        </a>\r\n                    <!-- logo class=\"ml-3\">\r\n                            <a class=\"navbar-brand\" [routerLink]=\"['dashboard']\">\r\n                                <strong class=\"blue-text\">MDB</strong>\r\n                            </a>\r\n                    </logo -->\r\n                    <div class=\"sidebar-menu tree list-group list-group-flush\">\r\n                            <a  class=\"list-group-item list-group-item-action waves-effect\" (click)=\"user.toggle()\">\r\n                            <mdb-icon fas icon=\"cogs\" class=\"mr-3\"></mdb-icon>Administracion\r\n                            </a>          \r\n                            <div class=\"sidebar-menu tree list-group\" mdbCollapse #user=\"bs-collapse\">\r\n                            \r\n                                        <a [routerLink]=\"['user']\" class=\"list-group-item list-group-item-action waves-effect\" >\r\n                                            Usuarios\r\n                                        </a>\r\n                                        <a [routerLink]=\"['servicios']\" class=\"list-group-item list-group-item-action waves-effect\" >\r\n                                            Servicio\r\n                                        </a>\r\n                                        <a [routerLink]=\"['roles']\" class=\"list-group-item list-group-item-action waves-effect\">\r\n                                            Roles\r\n                                        </a>\r\n                            </div>\r\n\r\n                            <a  class=\"list-group-item list-group-item-action waves-effect\" (click)=\"evento.toggle()\">\r\n                                <mdb-icon fas icon=\"calendar-alt\" class=\"mr-3\"></mdb-icon>Eventos                               \r\n                            </a>          \r\n                            <div class=\"sidebar-menu tree list-group\" data-widget=\"tree\" mdbCollapse #evento=\"bs-collapse\">\r\n                                \r\n                                <a [routerLink]=\"['eventos']\" class=\"list-group-item list-group-item-action waves-effect\" >\r\n                                    lista de Eventos\r\n                                </a>\r\n                            </div>\r\n                    </div>\r\n            </section>\r\n        </aside>\r\n    </mat-drawer>\r\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/dashboard/componentes/navigation/navigation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/componentes/navigation/navigation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 56px !important;\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0) !important; }\n\n.sidebar-fixed {\n  height: 100vh;\n  width: 270px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1250 !important;\n  background-color: #fff;\n  padding-top: 0.5rem;\n  position: fixed !important; }\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px; }\n\n.sidebar-fixed .logo-wrapper {\n  padding: 2.5rem; }\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 50px; }\n\n@media (min-width: 1200px) {\n  .navbar,\n  .page-footer,\n  main {\n    padding-left: 270px; } }\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none; } }\n\n.main-sidebar {\n  background-color: #FFFFFF;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 56px;\n  min-height: 100%;\n  width: 230px;\n  z-index: 750;\n  -webkit-transition: -webkit-transform .3s ease-in-out,width .3s ease-in-out;\n  -webkit-transition: width .3s ease-in-out,-webkit-transform .3s ease-in-out;\n  transition: width .3s ease-in-out,-webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out,width .3s ease-in-out;\n  transition: transform .3s ease-in-out,width .3s ease-in-out,-webkit-transform .3s ease-in-out; }\n\n.aside {\n  display: block; }\n\n.sidebar-menu {\n  white-space: nowrap;\n  overflow: hidden;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudGVzL25hdmlnYXRpb24vQzpcXHByb2plY3RzXFxhZG1pbi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxjb21wb25lbnRlc1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNFLHdCQUF1QjtFQUN2QixvREFBbUQsRUFDcEQ7O0FBRUQ7RUFDQSxjQUFhO0VBQ2IsYUFBWTtFQUVaLDhFQUE2RTtFQUM3RSx5QkFBd0I7RUFDeEIsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQiwyQkFBMEIsRUFDekI7O0FBRUQ7RUFFQSw4RUFBNkU7RUFFN0UsbUJBQWtCLEVBQUc7O0FBRXJCO0VBQ0EsZ0JBQWUsRUFBRzs7QUFFbEI7RUFDQSxpQkFBZ0IsRUFBRzs7QUFFckI7RUFDRTs7O0lBR0Usb0JBQW1CLEVBQUcsRUFBQTs7QUFHMUI7RUFDRTtJQUNFLGNBQWEsRUFBRyxFQUFBOztBQUdoQjtFQUNFLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixhQUFZO0VBQ1osNEVBQTJFO0VBRzNFLDRFQUEyRDtFQUEzRCxvRUFBMkQ7RUFBM0QsNERBQTJEO0VBQTNELDhGQUEyRCxFQUM5RDs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixVQUFTO0VBQ1QsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudGVzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAubmF2YmFyIHtcclxuICAgICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci1maXhlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgei1pbmRleDogMTI1MCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07IFxyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXItZml4ZWQgLmxpc3QtZ3JvdXAgLmFjdGl2ZSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxyXG4gIFxyXG4gICAgLnNpZGViYXItZml4ZWQgLmxvZ28td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW07IH1cclxuICBcclxuICAgIC5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7IH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubmF2YmFyLFxyXG4gICAgLnBhZ2UtZm9vdGVyLFxyXG4gICAgbWFpbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjcwcHg7IH0gfVxyXG4gIFxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgICAuc2lkZWJhci1maXhlZCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gXHJcbiAgICB9XHJcblxyXG4gICAgICAubWFpbi1zaWRlYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTZweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICB6LWluZGV4OiA3NTA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsd2lkdGggLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LHdpZHRoIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LHdpZHRoIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LHdpZHRoIC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuYXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZWJhci1tZW51IHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/componentes/navigation/navigation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/componentes/navigation/navigation.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_auth/current-user */ "./src/app/_auth/current-user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_auth/authentication.service */ "./src/app/_auth/authentication.service.ts");





var NavigationComponent = /** @class */ (function () {
    // mode = new FormControl('over');
    function NavigationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        ///   this.clicked = this.clicked === undefined ? false : true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.login = this.authService.getUser().subscribe(function (user) { return _this.login = user; }, function (err) { return _this.login = null; });
        _auth_current_user__WEBPACK_IMPORTED_MODULE_2__["store"].currentUser$.subscribe(function (user) { return _this.login = user; });
        //this.router.navigate(['dashboard/login']);
    };
    NavigationComponent.prototype.logOff = function () {
        this.authService.logout();
        location.reload();
        this.router.navigateByUrl('/dashboard/login');
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/dashboard/componentes/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/dashboard/componentes/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homePage/homePage.component */ "./src/app/dashboard/homePage/homePage.component.ts");
/* harmony import */ var _userPage_userPage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userPage/userPage.component */ "./src/app/dashboard/userPage/userPage.component.ts");
/* harmony import */ var _userPage_edit_user_userEdit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userPage/edit-user/userEdit.component */ "./src/app/dashboard/userPage/edit-user/userEdit.component.ts");
/* harmony import */ var _rolesPage_rolesPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rolesPage/rolesPage.component */ "./src/app/dashboard/rolesPage/rolesPage.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_auth/auth.guard */ "./src/app/_auth/auth.guard.ts");
/* harmony import */ var _pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pagenotfound.component */ "./src/app/pagenotfound.component.ts");

// layput-routing.module.ts









var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], data: ['ADMIN'],
        children: [
            { path: 'home', component: _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
            //{ path: 'perfil', loadChildren: '../home/perfil/perfil.module#PerfilModule' },
            { path: 'user', component: _userPage_userPage_component__WEBPACK_IMPORTED_MODULE_5__["UserPageComponent"] },
            { path: 'roles', component: _rolesPage_rolesPage_component__WEBPACK_IMPORTED_MODULE_7__["RolesPageComponent"] },
            { path: 'user/:id', component: _userPage_edit_user_userEdit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"] },
            { path: '**', component: _pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] }
            /*
            { path: '', component: HomePageComponent , //canActivateChild: [AuthGuard] ,
              children:
                [
                  { path: 'home', component: HomePageComponent },
                  { path: 'user', component: UserPageComponent },
                  { path: 'user/:id', component: UserEditComponent }
                ]
            }//*/
        ] //*/
    }
    /*,
    {
      path: 'login',
      component: LoginPageComponent
    }
    //*/
    //{ path: 'modals', component: ModalsComponent},
    //{ path: '**', component: NotFoundComponent },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
declare var $: any
declare var require: any;

import {GLOBAL} from './../../config/config'
import { Services } from './../services/services';
import {Observable} from 'rxjs/Observable';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ConsolidadoModel } from '../ausentismo/ausentismo/consolidado.model';
//*/
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.html */ "./src/app/dashboard/dashboard.html"),
            providers: [],
            styles: ["./dashboard.component.scss"]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.html":
/*!******************************************!*\
  !*** ./src/app/dashboard/dashboard.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n  \r\n<main class=\"content-wrapper\">    \r\n    <div class=\"p-5\">\r\n        <alert class=\"mt-3\"></alert>  \r\n        <router-outlet>              \r\n        </router-outlet>    \r\n    </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "./src/app/dashboard/componentes/footer/footer.component.ts");
/* harmony import */ var _componentes_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/navigation/navigation.component */ "./src/app/dashboard/componentes/navigation/navigation.component.ts");
/* harmony import */ var _userPage_userPage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userPage/userPage.component */ "./src/app/dashboard/userPage/userPage.component.ts");
/* harmony import */ var _userPage_edit_user_userEdit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userPage/edit-user/userEdit.component */ "./src/app/dashboard/userPage/edit-user/userEdit.component.ts");
/* harmony import */ var _rolesPage_rolesPage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rolesPage/rolesPage.component */ "./src/app/dashboard/rolesPage/rolesPage.component.ts");
/* harmony import */ var _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homePage/homePage.component */ "./src/app/dashboard/homePage/homePage.component.ts");
/* harmony import */ var _userPage_UserForm_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userPage/UserForm.service */ "./src/app/dashboard/userPage/UserForm.service.ts");
/* harmony import */ var _dynamic_form_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dynamic-form.module */ "./src/app/dynamic-form.module.ts");



















/*
import { AuthService } from '../auth/auth.service';
import { AuthGuard }                          from '../auth/auth.guard';
//*/
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                //...APP_MODULE_IMPORTS,
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                //MaterialModule,
                //MatSidenavModule,
                _dynamic_form_module__WEBPACK_IMPORTED_MODULE_17__["DynamicFormModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["InputsModule"].forRoot()
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _componentes_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _userPage_userPage_component__WEBPACK_IMPORTED_MODULE_12__["UserPageComponent"],
                _userPage_edit_user_userEdit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"],
                _rolesPage_rolesPage_component__WEBPACK_IMPORTED_MODULE_14__["RolesPageComponent"],
                _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"]
            ],
            providers: [_userPage_UserForm_service__WEBPACK_IMPORTED_MODULE_16__["UserFormService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/homePage/homePage.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/homePage/homePage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\r\n<div class=\"card mb-4 wow fadeIn\">\r\n\r\n    <!--Card content-->\r\n    <div class=\"card-body d-sm-flex justify-content-between\">\r\n    \r\n        <h4 class=\"mb-sm-0 pt-3\">\r\n        <a href=\"#\" target=\"_blank\">Home Page</a>\r\n        <span>/</span>\r\n        <span>Dashboard</span>\r\n        </h4>\r\n    \r\n    \r\n    </div>\r\n      \r\n</div>\r\n<!-- Heading -->"

/***/ }),

/***/ "./src/app/dashboard/homePage/homePage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/homePage/homePage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lUGFnZS9ob21lUGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/homePage/homePage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/homePage/homePage.component.ts ***!
  \**********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_auth */ "./src/app/_auth/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");





var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(route, router, authenticationService, alertService) {
        //this.setMessage();
        //$(".loader").fadeOut("slow");
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard/';
    }
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homePage',
            template: __webpack_require__(/*! ./homePage.component.html */ "./src/app/dashboard/homePage/homePage.component.html"),
            providers: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]],
            styles: [__webpack_require__(/*! ./homePage.component.scss */ "./src/app/dashboard/homePage/homePage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/rolesPage/rolesPage.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/rolesPage/rolesPage.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- div class=\"full\">\r\n    <h3>All registered users:</h3>\r\n    <ul>\r\n        <li *ngFor=\"let user of users\">\r\n            {{user.email}} ({{user.name}}\r\n            - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\r\n        </li>\r\n    </ul>\r\n</div-->\r\n    \r\n<mdb-card class=\"rounded\" cascade=\"true\" narrower=\"true\">\r\n\r\n    <!--Card image>\r\n    <div class=\"view view-cascade  gradient-card-header purple-gradient text-left\" >\r\n            <h4 class=\"card-header-title\"><strong>Usuarios</strong></h4>\r\n            <p>Todos los usuarios registrados: </p>\r\n    </div>\r\n    \r\n    <Card image-->\r\n\r\n    <div class=\"view view-cascade overlay blue-gradient lighten-1\">\r\n            <a class=\"round btn-lg success-color float-right\" (click)=\"test.toggle()\"><i class=\"fa-plus fas\"></i></a>\r\n            <h4 class=\"card-header-title pt-3 px-3\"><strong>Roles</strong></h4>\r\n            <p class=\"px-3\">Todos los roles registrados:</p>\r\n            <!-- mdb-icon far icon=\"money-bill-alt\" class=\"Secondary-color text-right\"></mdb-icon-->\r\n    </div>\r\n    \r\n    <mdb-card-body cascade=\"true\" class=\"text-center\">\r\n            \r\n        <div mdbCollapse #test=\"bs-collapse\">\r\n            \r\n            <div class=\"col-xs-12 col-md-4 offset-md-4 mb-4\">\r\n                    <h3 *ngIf=\"roles.length==0\">\r\n                        Agregar nuevo rol:\r\n                    </h3>\r\n                    <dynamic-form [config]=\"config\"  \r\n                    #form=\"dynamicForm\"\r\n                    (submit)=\"formSubmit($event)\"> </dynamic-form>\r\n            </div>\r\n            <hr>\r\n        </div>\r\n            <h1 class=\"p-3 mb-5 mt-5\" *ngIf=\"roles.length==0\">\r\n                No existen entradas en la base de datos\r\n            </h1>\r\n            <table *ngIf=\"roles.length!=0\" mdbTable>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr mdbTableCol *ngFor=\"let rol of roles\">\r\n                    <td>{{rol.name}}</td>\r\n                    <td><a class=\"round btn-sm danger-color\" (click)=\"deleteRoles(rol._id)\"><i class=\"fa-minus fas\"></i></a></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n    </mdb-card-body>\r\n</mdb-card>\r\n"

/***/ }),

/***/ "./src/app/dashboard/rolesPage/rolesPage.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/rolesPage/rolesPage.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9yb2xlc1BhZ2Uvcm9sZXNQYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/rolesPage/rolesPage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/rolesPage/rolesPage.component.ts ***!
  \************************************************************/
/*! exports provided: RolesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesPageComponent", function() { return RolesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models_roles_roles_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_models/roles/roles-config */ "./src/app/_models/roles/roles-config.ts");
/* harmony import */ var _directives_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_directives/dynamic-form/dynamic-form.component */ "./src/app/_directives/dynamic-form/dynamic-form.component.ts");






var RolesPageComponent = /** @class */ (function () {
    function RolesPageComponent(rolesService, alertService, rolesConfig) {
        this.rolesService = rolesService;
        this.alertService = alertService;
        this.rolesConfig = rolesConfig;
        this.roles = [];
        this.rolesConfig = new _models_roles_roles_config__WEBPACK_IMPORTED_MODULE_3__["RolesConfig"]();
        this.config = this.rolesConfig.config();
        this.getRoles();
    }
    RolesPageComponent.prototype.formSubmit = function (value) {
        var _this = this;
        this.rolesService.register(value)
            .subscribe(function (data) {
            _this.alertService.success("Se agrego un nuevo roles");
            _this.getRoles();
            //this.form.controls;
        }, function (error) {
            _this.alertService.error(error);
        });
        //*/
    };
    RolesPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var previousValid = this.form.valid;
        this.form.changes.subscribe(function () {
            if (_this.form.valid !== previousValid) {
                previousValid = _this.form.valid;
                _this.form.setDisabled('submit', !previousValid);
            }
        });
        this.form.setDisabled('submit', true);
    };
    RolesPageComponent.prototype.getRoles = function () {
        var _this = this;
        this.rolesService.getAll()
            .subscribe(function (data) {
            // console.log(data);
            _this.roles = data;
        }, function (error) {
            // console.log(error);
            _this.alertService.error(error);
        });
    };
    RolesPageComponent.prototype.deleteRoles = function (id) {
        var _this = this;
        this.rolesService.delete(id)
            .subscribe(function (data) {
            _this.alertService.success("Eliminado Exitoso");
            _this.getRoles();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directives_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directives_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"])
    ], RolesPageComponent.prototype, "form", void 0);
    RolesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rolesPage',
            template: __webpack_require__(/*! ./rolesPage.component.html */ "./src/app/dashboard/rolesPage/rolesPage.component.html"),
            providers: [src_app_services__WEBPACK_IMPORTED_MODULE_2__["RolesService"], _models_roles_roles_config__WEBPACK_IMPORTED_MODULE_3__["RolesConfig"]],
            styles: [__webpack_require__(/*! ./rolesPage.component.scss */ "./src/app/dashboard/rolesPage/rolesPage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["RolesService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _models_roles_roles_config__WEBPACK_IMPORTED_MODULE_3__["RolesConfig"]])
    ], RolesPageComponent);
    return RolesPageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/userPage/UserForm.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/userPage/UserForm.service.ts ***!
  \********************************************************/
/*! exports provided: UserFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormService", function() { return UserFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/roles.service */ "./src/app/_services/roles.service.ts");



//import { PreguntaFormValidatorsService } from './pregunta-form-validators.service';

//import { IExamenFormInterface, IRespuestaVOFEnum, IRespuestaSeleccionEnum, PreguntaTipoEnum, IRespuestaItem, IPreguntaItem } from './examen-form.interface';
//import { identifierModuleUrl } from '@angular/compiler';
//const GLOBAL =  require('./../../assets/cunix.json')
var UserFormService = /** @class */ (function () {
    function UserFormService(
    //private preguntaValidatorsService: PreguntaFormValidatorsService,
    fb, rolesSercvicio
    //, public _service: Services
    ) {
        this.fb = fb;
        this.rolesSercvicio = rolesSercvicio;
        this.form = this.fb.group({
            _id: [],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            servicios: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            perfiles: this.fb.array([])
        } /*, { validator: this.preguntaValidatorsService.formValidator()  }//*/);
    }
    UserFormService.prototype.getRoles = function () {
        return this.rolesSercvicio.getAll();
    };
    ;
    UserFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_roles_service__WEBPACK_IMPORTED_MODULE_3__["RolesService"]
            //, public _service: Services
        ])
    ], UserFormService);
    return UserFormService;
}());



/***/ }),

/***/ "./src/app/dashboard/userPage/edit-user/userEdit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/userPage/edit-user/userEdit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\r\n<div class=\"mb-40 mt-40\">\r\n    <h1>Edit User</h1>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form #editForm=\"ngForm\" *ngIf=\"user\">\r\n            <div class=\"row justify-content-md-center\">\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\">Username</label>\r\n                        <input mdbInput mdbValidate type=\"text\" id=\"username\" [(ngModel)]=\"user.username\" class=\"form-control\" name=\"username\" #username=\"ngModel\" required [disabled]=\"user._id\"><!--formControlName=\"username\"  class=\"form-control\"-->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\">Correo</label>\r\n                        <input mdbInput mdbValidate type=\"email\" id=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" required><!--formControlName=\"email\" class=\"form-control\"-->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\">name</label>\r\n                        <input mdbInput mdbValidate type=\"text\"  id=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" name=\"name\" #name=\"ngModel\" required><!-- formControlName=\"name\"  class=\"form-control\"-->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"form-control\">\r\n                        <mat-label>Servicios</mat-label>\r\n                        <mat-select  [(ngModel)]=\"user.servicios\" name=\"userservicios\" #userservicios=\"ngModel\" required multiple> \r\n                            <mat-option *ngFor=\"let servicio of servicios\" [value]=\"servicio.nombre\">\r\n                            {{ servicio.nombre }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n          \r\n                    <div class=\"form-group \" *ngIf=\"roles\">\r\n                      <mat-form-field appearance=\"form-control\" >\r\n                        <mat-label>Roles</mat-label>\r\n                        <mat-select [(ngModel)]=\"user.roles\" name=\"userroles\" #userroles=\"ngModel\" required multiple>\r\n                          <mat-option *ngFor=\"let rol of roles\" [value]=\"rol.name\">\r\n                            {{ rol.name }}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"!user._id\">\r\n                        <label for=\"name\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\"  class=\"form-control mb-4\" placeholder=\"Colocar contraseña\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required><!--formControlName=\"password\"-->\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"!user._id\">\r\n                        <label for=\"name\">Password confirm</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"passwordConfirm\" [(ngModel)]=\"user.passwordConfirm\" name=\"passwordConfirm\" #passwordConfirm=\"ngModel\" required>\r\n                    </div>\r\n                    <div class=\"mt-40\">\r\n                        <button class=\"btn btn-info\" *ngIf=\"user._id\" data-toggle=\"modal\" data-target=\"#changePasswordModal\">Change Password</button>\r\n                        <button class=\"btn btn-primary pull-right\" color=\"primary\" [disabled]=\"editForm.invalid\" (click)=\"save()\">Save</button>\r\n                        <button class=\"btn btn-secondary pull-right mr-2\" [routerLink]=\"['/dashboard/user']\">Back To User List</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"changePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\"><i class=\"fa fa-lock\"></i>&nbsp;&nbsp;Change password</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n            </div>\r\n            <form #changePasswordForm=\"ngForm\" class=\"container-fluid\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row justify-content-md-center\">\r\n                        <div class=\"col-10\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"passwordAdmin\">Password Admin</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"passwordAdmin\" [(ngModel)]=\"passwordAdmin\" name=\"passwordAdmin\" #passwordAdminForm=\"ngModel\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"passwordNew\">New Password</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"passwordNew\" [(ngModel)]=\"passwordNew\" name=\"passwordNew\" #passwordNewForm=\"ngModel\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"passwordNewConfirm\">Confirm New Password</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"passwordNewConfirm\" [(ngModel)]=\"passwordNewConfirm\" name=\"passwordNewConfirm\" #passwordNewConfirmForm=\"ngModel\" [ngClass]=\"{'is-invalid': passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm}\"\r\n                                    required>\r\n                                <p *ngIf=\"passwordNew && passwordNewConfirm && passwordNew !== passwordNewConfirm\" class=\"help-block\">Passwords missmatch</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div *ngIf=\"showError\" class=\"row justify-content-md-center\">\r\n                <div class=\"alert alert-danger text-left\">\r\n                    <strong>Error!</strong> Admin passsword not valid\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" #closeModal class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"changePasswordForm.invalid || (passwordAdmin && passwordNewConfirm && passwordNew !== passwordNewConfirm)\" (click)=\"changePassword()\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/userPage/edit-user/userEdit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/userPage/edit-user/userEdit.component.ts ***!
  \********************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_models/user/user */ "./src/app/_models/user/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_auth/authentication.service */ "./src/app/_auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sha3 */ "./node_modules/sha3/index.js");
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sha3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _UserForm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UserForm.service */ "./src/app/dashboard/userPage/UserForm.service.ts");










/**
 * Edit user by Admin
 */
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(fb, userFormService, userService, authenticationService, router, route) {
        var _this = this;
        this.fb = fb;
        this.userFormService = userFormService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.userFormService.getRoles().subscribe(function (response) {
            _this.roles = response;
        });
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id === 'new') {
                // New User
                _this.user = new _models_user_user__WEBPACK_IMPORTED_MODULE_2__["User"](null, null, null, []);
            }
            else {
                // Get User
                _this.userService.getById(params.id).subscribe(function (user) {
                    _this.user = user;
                });
            }
        });
    };
    /**
     * Save or create User
     */
    UserEditComponent.prototype.save = function () {
        var _this = this;
        if (this.user._id) {
            // Save
            this.userService.update(this.user).subscribe(function (data) { return _this.router.navigateByUrl('/dashboard/user'); });
        }
        else {
            // Create
            var hash = new sha3__WEBPACK_IMPORTED_MODULE_6__["SHA3"](512);
            hash.update(this.user.password);
            this.user.password = hash.digest('hex');
            this.userService.register(this.user).subscribe(function (data) { return _this.router.navigateByUrl('/dashboard/user'); });
        }
    };
    /**
     * Delete user
     */
    UserEditComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.delete(this.user._id).subscribe(function (data) { return _this.router.navigateByUrl('/dashboard/user'); });
    };
    UserEditComponent.prototype.changePassword = function () {
        var _this = this;
        var hashNewPwd = new sha3__WEBPACK_IMPORTED_MODULE_6__["SHA3"](512);
        hashNewPwd.update(this.passwordNew);
        var passwordNew = hashNewPwd.digest('hex');
        var hash = new sha3__WEBPACK_IMPORTED_MODULE_6__["SHA3"](512);
        hash.update(this.passwordAdmin);
        var passwordAdmin = hash.digest('hex');
        this.userService.changePassword(this.user._id, passwordNew, passwordAdmin).subscribe(function (data) {
            _this.passwordAdmin = null;
            _this.passwordNew = null;
            _this.passwordNewConfirm = null;
            _this.showError = false;
            _this.closeModal.nativeElement.click();
        }, function (err) {
            _this.showError = true;
        });
    };
    UserEditComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserEditComponent.prototype, "closeModal", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./userEdit.component.html */ "./src/app/dashboard/userPage/edit-user/userEdit.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _UserForm_service__WEBPACK_IMPORTED_MODULE_8__["UserFormService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/userPage/userPage.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/userPage/userPage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- div class=\"full\">\r\n    <h3>All registered users:</h3>\r\n    <ul>\r\n        <li *ngFor=\"let user of users\">\r\n            {{user.email}} ({{user.name}}\r\n            - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\r\n        </li>\r\n    </ul>\r\n</div-->\r\n    \r\n<mdb-card class=\"rounded\" cascade=\"true\" narrower=\"true\">\r\n\r\n    <!--Card image>\r\n    <div class=\"view view-cascade  gradient-card-header purple-gradient text-left\" >\r\n            <h4 class=\"card-header-title\"><strong>Usuarios</strong></h4>\r\n            <p>Todos los usuarios registrados: </p>\r\n    </div>\r\n    \r\n    <Card image-->\r\n\r\n    <div class=\"view view-cascade overlay blue-gradient lighten-1\">\r\n            <a class=\"round btn-lg success-color float-right\" [routerLink]=\"['new']\"><i class=\"fa-plus fas\"></i></a>\r\n            <h4 class=\"card-header-title pt-3 px-3\"><strong>Usuarios</strong></h4>\r\n            <p class=\"px-3\">Todos los usuarios registrados:</p>\r\n            <!-- mdb-icon far icon=\"money-bill-alt\" class=\"Secondary-color text-right\"></mdb-icon-->\r\n    </div>\r\n    \r\n    <mdb-card-body cascade=\"true\" class=\"text-center\">\r\n            \r\n            <h1 class=\"p-3 mb-5 mt-5\" *ngIf=\"users.length==0\">\r\n                No existen entradas en la base de datos\r\n            </h1>\r\n            <table *ngIf=\"users.length!=0\" mdbTable>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Correo</th>\r\n                        <th>name</th>\r\n                        <th>rol</th>\r\n                        <th>perfil</th>\r\n                        <th>servicio</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr mdbTableCol *ngFor=\"let user of users\">\r\n                    <td>{{user.email}}</td>\r\n                    <td>{{user.username}}</td>\r\n                    <td><span *ngFor=\"let rol of user.roles\" class=\"badge badge-primary mx-1\">{{rol}}</span>&nbsp;</td>\r\n                    <td><span *ngFor=\"let perfile of user.perfiles\" class=\"badge badge-primary mx-1\">{{perfile}}</span> </td>\r\n                    <td><span *ngFor=\"let servicio of user.servicios\" class=\"badge badge-primary mx-1\">{{servicio}}</span> </td>\r\n                    <td>\r\n                        <a class=\"round btn-sm danger-color float-right mx-1\" (click)=\"deleteUser(user._id)\"><i class=\"fa-minus fas\"></i></a>\r\n                        <a class=\"round btn-sm success-color float-right mx-1\" [routerLink]=\"[user._id]\"><i class=\"fa-pencil-alt fas\"></i></a>\r\n                    </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>    \r\n    </mdb-card-body>\r\n</mdb-card>\r\n"

/***/ }),

/***/ "./src/app/dashboard/userPage/userPage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/userPage/userPage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem; }\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0; }\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px; }\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5; }\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7; }\n\n.table-ui {\n  border: 1px solid #e0e0e9; }\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4); }\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n  max-height: 105px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJQYWdlL0M6XFxwcm9qZWN0c1xcYWRtaW4vc3JjXFxhcHBcXGRhc2hib2FyZFxcdXNlclBhZ2VcXHVzZXJQYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUVEO0VBQ0ksVUFBUztFQUNULGFBQVksRUFDZjs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUVJLHFEQUFvRCxFQUN2RDs7QUFFRDtFQUVRLCtFQUE4RTtFQUM5RSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdXNlclBhZ2UvdXNlclBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMC45cmVtO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmEge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi50YWJsZS11aSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xyXG59XHJcblxyXG4uYmx1ZS1ncmFkaWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLWNhc2NhZGUge1xyXG4gICAgLnZpZXcge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/userPage/userPage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/userPage/userPage.component.ts ***!
  \**********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");


//import { UserFormService} from './userForm.service';

var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(alertService, userService) {
        this.alertService = alertService;
        this.userService = userService;
        this.users = [];
        //this.userConfig = new UserConfig();
        this.getUsers();
    }
    UserPageComponent.prototype.formSubmit = function (value) {
        var _this = this;
        this.userService.register(value)
            .subscribe(function (data) {
            _this.alertService.success("Se agrego un nuevo usuario");
            _this.getUsers();
        }, function (error) {
            _this.alertService.error("Error al agregar usuario");
        });
        //*/
    };
    UserPageComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            // console.log(data);
            _this.users = data;
        }, function (error) {
            // console.log(error);
            _this.alertService.error(error);
        });
    };
    UserPageComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id)
            .subscribe(function (data) {
            _this.alertService.success("Eliminado Exitoso");
            _this.getUsers();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userPage',
            template: __webpack_require__(/*! ./userPage.component.html */ "./src/app/dashboard/userPage/userPage.component.html"),
            styles: [__webpack_require__(/*! ./userPage.component.scss */ "./src/app/dashboard/userPage/userPage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form.module.ts":
/*!****************************************!*\
  !*** ./src/app/dynamic-form.module.ts ***!
  \****************************************/
/*! exports provided: DynamicFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormModule", function() { return DynamicFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _directives_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives/dynamic-form/dynamic-form.component */ "./src/app/_directives/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directives/dynamic-form/componentes */ "./src/app/_directives/dynamic-form/componentes/index.ts");
/* harmony import */ var _directives_dynamic_form_componentes_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_directives/dynamic-form/componentes/dynamic-field/dynamic-field.directive */ "./src/app/_directives/dynamic-form/componentes/dynamic-field/dynamic-field.directive.ts");










var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["InputsModule"].forRoot()
            ],
            declarations: [_directives_dynamic_form_componentes_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_9__["DynamicFieldDirective"], _directives_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFormComponent"], _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormButtonComponent"], _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormInputComponent"], _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormSelectComponent"], _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormPasswordComponent"], _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormTagsComponent"], _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormMultiComponent"]],
            exports: [_directives_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFormComponent"]],
            entryComponents: [
                _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormButtonComponent"],
                _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormInputComponent"],
                _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormSelectComponent"],
                _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormPasswordComponent"],
                _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormTagsComponent"],
                _directives_dynamic_form_componentes__WEBPACK_IMPORTED_MODULE_8__["FormMultiComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map