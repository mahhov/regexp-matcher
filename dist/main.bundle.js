webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/DefaultContentProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultContentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultContentProvider = /** @class */ (function () {
    function DefaultContentProvider() {
    }
    DefaultContentProvider.prototype.betterNavBarDirective = function () {
        return "\n      angular.module('CSSRedesign.common')\n        .directive('betterNavBar', function ($window, $cookieStore, commonService, esignatureService, externalLinkService, sortPoliciesFactory, billingService) {\n          return {\n            restrict: 'E',\n            replace: true,\n            templateUrl: $window.UIC.sitePrefix + 'components/megamenu/navbar/betternavbar.html',\n            scope: {\n              chatdocid: \"=\",\n              chatpagename: \"=\"\n            },\n            controller: function ($scope, $state, $location, getCookieService, createloginIdCookie, liveChatService) {\n              $scope.isLiveChatOpen = liveChatService.isLiveChatOpen;\n      \n              $scope.sitePrefix = (window.sitePrefix) ? window.sitePrefix : \"\";\n              $scope.signOutUrl = externalLinkService.externalLink('UserSignout');\n      \n              $scope.initMenuItems = function () {\n                $scope.menuItems = [\n                  {text: 'Homepage', path: 'policysummary', disabled: false, gtm: 'CSS_Homepage_Menu_Click'},\n                  {text: 'Policies', path: 'policydetails', disabled: false, gtm: 'CSS_Policies_Menu_Click'},\n                  {text: 'Payments', path: 'billingsummary', disabled: false, gtm: 'CSS_Payments_Menu_Click'},\n                  {text: 'Claims', path: 'claims', disabled: false, gtm: 'CSS_Claims_Menu_Click'},\n                  {text: 'My Profile', path: 'editprofile', disabled: false, gtm: 'CSS_MyProfile_Menu_Click'},\n                  {text: 'Help', path: 'contactus', disabled: false, gtm: 'CSS_Help_Menu_Click'}\n                ];\n              };\n      \n              $scope.initMenuItems();\n      \n              $scope.menuSelect = function (menu) {\n                if (!menu.disabled) {\n                  $scope.hideMenu();\n                  $location.path(menu.path);\n                }\n              };\n      \n              $scope.selected = function (menu) {\n                return $location.path() === '/' + menu.path;\n              };\n      \n              $scope.hideMenu = function () {\n                $('#main-header, #mainNav, .navbar-collapse').removeClass('openslide');\n                $('.better-nav-bar .fixed-position .row').addClass('mobile-hidden');\n              };\n      \n              $scope.eSignOrSignOut = function () {\n                $scope.hideMenu();\n                $cookieStore.remove('eSignInProgress');\n      \n                commonService.loggedInfo()\n                  .then($scope.getEsignSummaryInfo)\n                  .then(function (data) {\n                    if ($scope.userHasEsignPackagesToSign(data)) {\n                      $scope.showEsignModal();\n                    } else {\n                      $scope.signOut();\n                    }\n                  }).catch($scope.signOut);\n              };\n      \n              $scope.getEsignSummaryInfo = function (policyResponse) {\n                policyResponse = _.isArray(policyResponse) ? policyResponse[0] : policyResponse;\n                var policyContractList = sortPoliciesFactory.getEsignatureServiceInput(policyResponse.policyList);\n                return esignatureService.geteSignSummaryInfo({\n                  \"userId\": window.userId,\n                  \"policyContractList\": policyContractList,\n                  \"futurePolicyList\": $scope.futurePolicyList,\n                  \"emailType\": (window.emailType) ? window.emailType : 'N'\n                });\n              };\n      \n              $scope.userHasEsignPackagesToSign = function (data) {\n                return angular.lowercase(data.transactionStatus) === 's' && angular.lowercase(data.isValid) === 'y' && !data.hasNonHoHPackages;\n              };\n      \n              $scope.showEsignModal = function () {\n                angular.element('#donealreadyModal').modal('show');\n              };\n      \n              $scope.signOut = function () {\n                window.onbeforeunload = null;\n                getCookieService.getCookie('farmersSurveyCustinfo').then(function (data) {\n                  createloginIdCookie.storeRememberCookie(data, 'farmersSurveyCustinfo');\n                  $scope.setSignOutUrl();\n                }, function () {\n                  $scope.setSignOutUrl();\n                });\n              };\n      \n              $scope.setSignOutUrl = function () {\n                window.location.href = $scope.signOutUrl;\n              };\n      \n              $scope.disablePayments = function () {\n                var paymentMenuItem = _.find($scope.menuItems, function (menuItem) {\n                  return menuItem.path === 'billingsummary';\n                });\n                if (paymentMenuItem) {\n                  paymentMenuItem.disabled = true;\n                }\n              };\n      \n              billingService.getHasNoSavedPayments().then(function (noSavedPayments) {\n                if (noSavedPayments) {\n                  $scope.disablePayments();\n                }\n              });\n      \n              billingService.isOnlyLifePolicy().then(function (result) {\n                $scope.onlyLifePolicy = result;\n              });\n      \n              $scope.$on('disableMenu', function () {\n                _.each($scope.menuItems, function (item) {\n                  item.disabled = true;\n                });\n                $scope.farmersLogoLinkDisabled = true;\n              });\n      \n              $scope.$on('enableMenu', function () {\n                $scope.initMenuItems();\n                $scope.farmersLogoLinkDisabled = false;\n                billingService.getHasNoSavedPayments().then(function (noSavedPayments) {\n                  if (noSavedPayments) {\n                    $scope.disablePayments();\n                  }\n                });\n              });\n            }\n          };\n        });";
    };
    DefaultContentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], DefaultContentProvider);
    return DefaultContentProvider;
}());



/***/ }),

/***/ "./src/app/Generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Generator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.prototype.doExpression = function (expression, input) {
        try {
            var regexp = RegExp(expression, 'g');
            return input.match(regexp);
        }
        catch (error) {
            return null;
        }
    };
    Generator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], Generator);
    return Generator;
}());



/***/ }),

/***/ "./src/app/app.css":
/***/ (function(module, exports) {

module.exports = ".full-height {\n  height: 100vh;\n  padding: 20px;\n  padding-bottom: 140px;\n}\n\n.full-row {\n  margin-top: 20px;\n  height: 100%;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n}\n\npre {\n  height: 100%;\n  background-color: whitesmoke;\n}\n\nbutton {\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/app.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <input (keyup)=\"update()\" [(ngModel)]=\"expression\"/>\n    </div>\n  </div>\n  <div class=\"row full-row\">\n    <div class=\"col-6\">\n      <textarea (keyup)=\"update()\" [(ngModel)]=\"input\"></textarea>\n    </div>\n    <div class=\"col-6\">\n      <pre id=\"output\">{{output}}</pre>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6 offset-6\">\n      <button class=\"btn btn-primary\" (click)=\"copy()\">Copy</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__("./src/app/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DefaultContentProvider__ = __webpack_require__("./src/app/DefaultContentProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Generator__ = __webpack_require__("./src/app/Generator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app__["a" /* App */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__DefaultContentProvider__["a" /* DefaultContentProvider */],
                __WEBPACK_IMPORTED_MODULE_5__Generator__["a" /* Generator */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app__["a" /* App */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultContentProvider__ = __webpack_require__("./src/app/DefaultContentProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Generator__ = __webpack_require__("./src/app/Generator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var App = /** @class */ (function () {
    function App(defaultContentProvider, generator) {
        this.defaultContentProvider = defaultContentProvider;
        this.generator = generator;
        this.input = defaultContentProvider.betterNavBarDirective();
        this.update();
    }
    App.prototype.update = function () {
        var outputs = this.generator.doExpression(this.expression, this.input);
        if (outputs)
            this.output = __WEBPACK_IMPORTED_MODULE_1_underscore__["reduce"](outputs, function (aggregate, output) {
                return '{0}\n{1}'.formatUnicorn(aggregate, output);
            });
    };
    App.prototype.copy = function () {
        var output = document.getElementById('output');
        var range = window.document.createRange();
        range.selectNodeContents(output);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    };
    App = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.html"),
            styles: [__webpack_require__("./src/app/app.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__DefaultContentProvider__["a" /* DefaultContentProvider */], __WEBPACK_IMPORTED_MODULE_3__Generator__["a" /* Generator */]])
    ], App);
    return App;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
String.prototype.formatUnicorn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map