(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./dashboard/loginPage/loginPage.module": [
		"./src/app/dashboard/loginPage/loginPage.module.ts",
		"dashboard-loginPage-loginPage-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_auth/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/_auth/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_auth/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/user/ */ "./src/app/_models/user/index.ts");






/**
 * This class intercept route change and check for security
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, 
    //private http: HttpClient,
    authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    /**
     * Check routes permission
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // Get authorized roles for route
        var roles = [];
        Object.keys(route.data).forEach(function (key) { return roles.push(route.data[key]); });
        // Return observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (ob) {
            // Get logged user
            _this.authenticationService.getUser().subscribe(function (user) {
                if (!user) {
                    // Not logged
                    ob.next(false);
                    ob.complete();
                    _this.redirectAdmin(roles);
                }
                else {
                    // Logged user
                    var userObj = new _models_user___WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.username, user.token, user.roles);
                    if (roles && roles.length > 0) {
                        // Check roles
                        if (userObj.hasRole(roles)) {
                            ob.next(true);
                            ob.complete();
                        }
                        else {
                            ob.next(false);
                            ob.complete();
                            _this.redirectAdmin(roles);
                        }
                    }
                    ob.next(true);
                    ob.complete();
                }
            }); //*/
        });
    };
    AuthGuard.prototype.redirectAdmin = function (roles) {
        if (roles.find(function (rol) { return rol == "ADMIN"; })) {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, route.params.id);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var found = true; // this.authenticationService.isLoggedIn ;
        if (found) {
            return true;
        }
        return false;
        /*
            // Store the attempted URL for redirecting
            this.authenticationService.redirectUrl = url;
        
            // Create a dummy session id
            let sessionId = 123456789;
        
            // Set our navigation extras object
            // that contains our global query params and fragment
            let navigationExtras: NavigationExtras = {
              queryParams: { 'session_id': sessionId },
              fragment: 'anchor'
            };
        
            // Navigate to the login page with extras
            this.router.navigate(['/login'], navigationExtras);
            return false;
            //*/
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_auth/auth.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/_auth/auth.interceptor.ts ***!
  \*******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * This interceptor get token from sessionStorage if it is set and put the JWT token in the header Authorization var
 */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get token
        var token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/_auth/authentication.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_auth/authentication.service.ts ***!
  \*************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-user */ "./src/app/_auth/current-user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








/**
 * This service manage the Authentication
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(
    //private securityService: SecurityService,
    router, http) {
        this.router = router;
        this.http = http;
        this.isLoggedIn = false;
        this.contextUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].endpoint; //+'user';
    }
    /**
     * Get the logged user
     */
    AuthenticationService.prototype.getUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (ob) {
            // Get JWT token from browser storage
            var token = sessionStorage.getItem('token') || localStorage.getItem('token');
            // Get user from store
            _current_user__WEBPACK_IMPORTED_MODULE_3__["store"].currentUser$.subscribe(function (user) {
                if (token && user) {
                    // User logged and stored token
                    //this.isLoggedIn = true; 
                    //console.log(this.isLoggedIn);this.isLoggedIn = true;console.log(this.isLoggedIn)
                    ob.next(user);
                }
                else if (token && !user) {
                    // If refresh page and have token but not logged user
                    // Verify token and get user
                    _this.verifyToken(token).subscribe(function (usr) {
                        if (!usr || (!usr._id && !usr.success)) {
                            ob.next(undefined);
                        }
                        else {
                            //this.isLoggedIn = true; 
                            //console.log(this.isLoggedIn);this.isLoggedIn = true;console.log(this.isLoggedIn)
                            _current_user__WEBPACK_IMPORTED_MODULE_3__["store"].setUser(usr);
                            ob.next(usr);
                        }
                    });
                }
                else {
                    // Logged user
                    ob.next(user);
                }
            });
        });
    };
    /**
     * Logout function
     */
    AuthenticationService.prototype.logout = function () {
        // Clear token and remove user from local storage to log user logout
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        _current_user__WEBPACK_IMPORTED_MODULE_3__["store"].setUser(null);
    };
    /**
     * Login by username and SHA-3 password
     *
     * @param {string} username username for login
     * @param {string} password password in SHA-3
     * @param {boolean} remember store token in local storage
     * @returns {Observable<User>} logged user
     */
    AuthenticationService.prototype.login = function (username, password, remember) {
        var _this = this;
        return this.http.post(this.contextUrl + '/login', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) { _this.isLoggedIn = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) { _this.setSession(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) { if (remember)
            _this.setLocal(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) { return user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["shareReplay"])());
    };
    /**
     * Sign up
     */
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        return this.http.post(this.contextUrl + "/user/signup", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) { return _this.setSession(user.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) { return user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["shareReplay"])());
        /*
        .pipe(map(data  => { data })
        );
        //*/
    };
    /**
     * Verify JWT token
     *
     * @param {string} token JWT token to verify
     * @returns {Observable<any>} logged user or error message
     */
    AuthenticationService.prototype.verifyToken = function (token) {
        return this.http.post(this.contextUrl + '/verifyToken', { token: token })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) { return user; }));
    };
    /**
     * Change password of current user
     *
     * @param {string} passwordNew New password to set in SHA-3
     * @param {string} passwordOld Old password to check in SHA-3
     * @returns {Observable<void>} Success or error
     */
    AuthenticationService.prototype.changePassword = function (passwordNew, passwordOld) {
        return this.http
            .post(this.contextUrl + '/changePassword', {
            passwordNew: passwordNew,
            passwordOld: passwordOld
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) { return response; }));
    };
    /**
     * Set token in sessionStorage
     *
     * @private
     * @param {*} token JWT token to set in sessionStorage
     */
    AuthenticationService.prototype.setSession = function (token) {
        sessionStorage.setItem('token', token);
    };
    /**
     * Set token in localStorage
     *
     * @private
     * @param {*} token JWT token to set in localStorage
     */
    AuthenticationService.prototype.setLocal = function (token) {
        localStorage.setItem('token', token);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_auth/current-user.ts":
/*!***************************************!*\
  !*** ./src/app/_auth/current-user.ts ***!
  \***************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Store the current user
 */
var CurrentUser = /** @class */ (function () {
    function CurrentUser() {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    CurrentUser.prototype.setUser = function (user) {
        this.currentUserSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](user));
    };
    return CurrentUser;
}());
var store = new CurrentUser();


/***/ }),

/***/ "./src/app/_auth/index.ts":
/*!********************************!*\
  !*** ./src/app/_auth/index.ts ***!
  \********************************/
/*! exports provided: AuthGuard, AuthenticationService, store, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_auth/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/_auth/auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"]; });

/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-user */ "./src/app/_auth/current-user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _current_user__WEBPACK_IMPORTED_MODULE_3__["store"]; });







/***/ }),

/***/ "./src/app/_auth/login/login-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_auth/login/login-form.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sha3 */ "./node_modules/sha3/index.js");
/* harmony import */ var sha3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sha3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_auth_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/_auth/current-user */ "./src/app/_auth/current-user.ts");
/* harmony import */ var _models_user_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_models/user/user */ "./src/app/_models/user/user.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication.service */ "./src/app/_auth/authentication.service.ts");







var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(//private securityService: SecurityService,
    authenticationService) {
        this.authenticationService = authenticationService;
        this.submitEM = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = new _models_user_user__WEBPACK_IMPORTED_MODULE_5__["User"](null, null, null, null);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        }); //*/
    }
    LoginFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            var hash = new sha3__WEBPACK_IMPORTED_MODULE_3___default.a(512);
            hash.update(this.form.value.password);
            var sha3pass = hash.digest('hex');
            this.authenticationService.login(this.form.value.username, sha3pass, this.form.value.remember)
                .subscribe(function (data) {
                _this.setUser(data);
                //this.submitEM.emit(this.authenticationService.isLoggedIn);
                _this.submitEM.emit(data);
                //this.router.navigate([this.returnUrl]);
            }, function (error) {
                //this.submitEM.emit(this.authenticationService.isLoggedIn);
                _this.submitEM.emit(error);
                //console.log(error);
                //this.setMessage(error);
                //this.alertService.error(error);
                //this.loading = false;
            });
            //store.setUser(user);
        }
    };
    LoginFormComponent.prototype.setUser = function (user) {
        _app_auth_current_user__WEBPACK_IMPORTED_MODULE_4__["store"].setUser(user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginFormComponent.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "submitEM", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-login-form',
            template: "\n  <form  [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  \n    <p class=\"h4 mb-4\">Sign in </p>\n  \n    <!-- Email -->\n    <div class=\"form-group \">\n    <label class=\"pull-left\">Correo</label>\n    <input type=\"email\" id=\"defaultLoginFormEmail\" formControlName=\"username\"  class=\"form-control mb-4\" placeholder=\"E-mail\" >\n    </div>\n  \n    <!-- Password -->\n    <div class=\"form-group \">\n    <label class=\"pull-left\">Password</label>\n    <input type=\"password\" id=\"defaultLoginFormPassword\" formControlName=\"password\"  class=\"form-control mb-4\" placeholder=\"Password\" >\n    </div>\n  \n    <div class=\"form-group \">\n    <input type=\"checkbox\" class=\"pull-right mt-8\" formControlName=\"remember\" name=\"remember\">\n    <label class=\"pull-right\">Remember login&nbsp;</label>\n    </div>\n    <!-- Sign in button -->\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\" >Sign in</button>\n  </form>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/_config/config.ts":
/*!***********************************!*\
  !*** ./src/app/_config/config.ts ***!
  \***********************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var GLOBAL = {
    "url": "http://localhost:8000/api/",
    "urlproject1": "http://localhost:8000/",
    "url1": "http://localhost:8000/"
};


/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_models/user/index.ts":
/*!***************************************!*\
  !*** ./src/app/_models/user/index.ts ***!
  \***************************************/
/*! exports provided: User, UserConfig, UserBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-config */ "./src/app/_models/user/user-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserConfig", function() { return _user_config__WEBPACK_IMPORTED_MODULE_0__["UserConfig"]; });

/* harmony import */ var _user_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.base */ "./src/app/_models/user/user.base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserBase", function() { return _user_base__WEBPACK_IMPORTED_MODULE_1__["UserBase"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/_models/user/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["User"]; });






/***/ }),

/***/ "./src/app/_models/user/user-config.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/user/user-config.ts ***!
  \*********************************************/
/*! exports provided: UserConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfig", function() { return UserConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





//Campos necesarios
var config = [
    {
        type: 'input',
        label: 'Nombre del usuario',
        name: 'username',
        placeholder: 'Introduzca el nombre',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    },
    {
        type: 'input',
        label: 'Nombre completo',
        name: 'name',
        placeholder: 'Introduzca el nombre',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
    },
    {
        type: 'input',
        label: 'Correo electronico',
        name: 'mail',
        placeholder: 'Introduzca correo',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
    },
    {
        type: 'password',
        label: 'contraseña',
        name: 'password',
        placeholder: 'Introduzca contraseña',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]
    },
    {
        type: 'multiselect',
        label: 'Tipo de usuario',
        name: 'roles',
        options: [],
        placeholder: 'Escoja el tipo de usuario',
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        value: []
    },
    {
        label: 'Submit',
        name: 'submit',
        type: 'button'
    },
];
var UserConfig = /** @class */ (function () {
    function UserConfig(http) {
        this.http = http;
        //get config() { return config.filter(({type}) => type !== 'button'); }
        this.contextUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint;
        this.user = config;
        this.getRoles();
        console.log(this.user);
    }
    UserConfig.prototype.getRoles = function () {
        var _this = this;
        this.http.get("" + this.contextUrl + '/roles')
            .subscribe(function (data) {
            _this.user = config.filter(function (userConfig) {
                if ("roles" == userConfig.name) {
                    userConfig.options = data.map(function (a, i) { return { key: a["name"], name: a["name"] }; });
                    userConfig.value = userConfig.options.map(function (a) { return a.name; });
                }
                return userConfig;
            });
        });
    };
    ;
    //setValues(user: UserBase){
    UserConfig.prototype.setValues = function (_a) {
        var _this = this;
        var user = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, []);
        Object.keys(user).forEach(function (key) {
            return _this.user = config.filter(function (userConfig) {
                if (key == userConfig.name) {
                    userConfig.value = user[key];
                    return userConfig.value;
                }
            });
        });
    };
    UserConfig.prototype.config = function () {
        return this.user;
    };
    UserConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserConfig);
    return UserConfig;
}());



/***/ }),

/***/ "./src/app/_models/user/user.base.ts":
/*!*******************************************!*\
  !*** ./src/app/_models/user/user.base.ts ***!
  \*******************************************/
/*! exports provided: UserBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBase", function() { return UserBase; });
var UserBase = /** @class */ (function () {
    function UserBase() {
    }
    return UserBase;
}());



/***/ }),

/***/ "./src/app/_models/user/user.ts":
/*!**************************************!*\
  !*** ./src/app/_models/user/user.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.base */ "./src/app/_models/user/user.base.ts");


/**
 * YOU CAN OVERRIDE HERE UserBase.ts
 */
var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    function User(_id, username, token, roles) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this.username = username;
        _this.token = token;
        _this.roles = roles;
        return _this;
    }
    // UTILS FUNCTIONS
    /**
     * Check if logged user is admin
     */
    User.prototype.isAdmin = function () {
        if (!this.roles)
            return false;
        return this.roles.indexOf('ADMIN') === 0;
    };
    /**
     * Check if logged user has one role
     */
    User.prototype.hasRole = function (role) {
        var _this = this;
        if (!this.roles)
            return false;
        if (typeof role === 'string') {
            return (this.roles.indexOf(role) !== -1);
        }
        else {
            var found = role.filter(function (rol) {
                return (_this.roles.indexOf(rol) !== -1);
            });
            return found.length > 0;
        }
    };
    return User;
}(_user_base__WEBPACK_IMPORTED_MODULE_1__["UserBase"]));



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, UserService, RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.service */ "./src/app/_services/roles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return _roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]; });






/***/ }),

/***/ "./src/app/_services/roles.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/roles.service.ts ***!
  \********************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_config/config */ "./src/app/_config/config.ts");





//import { config } from 'rxjs';
var RolesService = /** @class */ (function () {
    function RolesService(http) {
        this.http = http;
        this.contextUrl = _config_config__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url + 'roles';
    }
    RolesService.prototype.getAll = function () {
        return this.http.get("" + this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    RolesService.prototype.getById = function (id) {
        return this.http
            .get(this.contextUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    RolesService.prototype.register = function (roles) {
        return this.http.post(this.contextUrl + "/", roles)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
        ;
    };
    RolesService.prototype.update = function (roles) {
        return this.http.put(this.contextUrl + "/" + roles._id, roles)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    RolesService.prototype.delete = function (id) {
        return this.http.delete(this.contextUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    RolesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_config/config */ "./src/app/_config/config.ts");





//import { config } from 'rxjs';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.contextUrl = _config_config__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url + 'user';
    }
    UserService.prototype.getAll = function () {
        return this.http.get("" + this.contextUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    UserService.prototype.getById = function (id) {
        return this.http
            .get(this.contextUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.contextUrl + "/", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
        ;
    };
    UserService.prototype.update = function (user) {
        return this.http.post(this.contextUrl + "/" + user._id, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.contextUrl + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    UserService.prototype.changePassword = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return this.http.put(this.contextUrl + "/{id}/changePassword", {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_auth/auth.guard */ "./src/app/_auth/auth.guard.ts");
/* harmony import */ var _pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound.component */ "./src/app/pagenotfound.component.ts");





var routes = [
    //*/,
    {
        path: 'login',
        loadChildren: './dashboard/loginPage/loginPage.module#loginPageModule',
    },
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: '**', component: _pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'picasino-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");







//import { AuthenticationService } from './_auth/authentication.service';


//import { AuthGuard, AuthInterceptor, AuthenticationService}  from  './_auth'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                //...APP_MODULE_IMPORTS,
                //MaterialModule,
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_7__["RolesService"]
                // SECURITY
                /*
                AuthGuard,
                AuthenticationService,
                SecurityService//*/
            ],
            exports: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


//import { BrowserModule } from '@angular/platform-browser';

var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: modules,
            exports: modules,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pagenotfound.component.ts":
/*!*******************************************!*\
  !*** ./src/app/pagenotfound.component.ts ***!
  \*******************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/Http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_login_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_auth/login/login-form.component */ "./src/app/_auth/login/login-form.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_auth */ "./src/app/_auth/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagenotfound.component */ "./src/app/pagenotfound.component.ts");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_Http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()],
            declarations: [_directives__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _auth_login_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"],
                _pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_Http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
                    multi: true,
                },
                _services__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_8__["UserService"]
            ],
            exports: [
                _directives__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _auth_login_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoint: 'http://localhost:8000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map