(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../social-login/social-login.component */ "P9um");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0, a1) { return { successLoginMessage: a0, errorLoginMessage: a1 }; };
class LoginComponent {
    constructor(userService, router, toaster, toast) {
        this.userService = userService;
        this.router = router;
        this.toaster = toaster;
        this.toast = toast;
        this.toastConfig = {
            timeOut: 1000,
        };
    }
    ngOnInit() { }
    loginUser() {
        const userData = {
            loginId: this.loginId,
            password: this.password,
        };
        this.userService.loginService(userData).subscribe((response) => {
            console.debug('login res:', response);
            this.loginResponse = `${response.message} --taking you to dashboard`;
            this.responseType = true;
            const { name, email, username, userId, authToken } = response.data;
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('name', name);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('email', email);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('username', username);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('userId', userId);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('authToken', authToken);
            this.userService.setUserAuth(response.data);
            // this.toaster.open({ text: response.message, type: 'success' });
            this.toast.success(`${response.message}`, 'Login', this.toastConfig);
            setTimeout(() => this.router.navigate(['/dashboard']), 2000);
        }, (error) => {
            console.warn('Error Login', error);
            this.loginResponse = error.error.message + '- Try Again';
            this.responseType = false;
            // this.toaster.open({ text: 'Login Error', type: 'danger' });
            this.toast.error('Login Error', 'Login', this.toastConfig);
            setTimeout(() => {
                (this.loginId = ''), (this.password = '');
                this.loginResponse = '';
            }, 3000);
        });
    }
    navigateToHome() {
        console.debug('navigation');
        this.router.navigate(['/home']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 8, consts: [[1, "login"], ["src", "assets/virus.png", "alt", ""], [1, "login__inputs", 3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "text", "name", "username", "placeholder", "username or email", "required", "", "autofocus", "", 3, "ngModel", "ngModelChange"], ["_loginId", "ngModel"], ["type", "password", "name", "password", "placeholder", "your secret", "required", "", 3, "ngModel", "ngModelChange"], ["_pwd", "ngModel"], ["mat-raised-button", "", 1, "button__login", 3, "disabled"], [1, ""], [3, "click"], [1, "login__response", 3, "ngClass"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login to iTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.loginId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_h4_click_14_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "or Login Using");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-social-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.responseType, !ctx.responseType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginResponse, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_8__["SocialLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  --tracker-color: #50b7f5;\n  --tracker-bg: #cad4dd;\n  font-family: \"Montserrat\", sans-serif;\n}\n.login[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  padding: 20px;\n  margin: 20px;\n  margin-top: 25px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.login[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.login__inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  width: 500px;\n  margin-bottom: 20px;\n}\ninput[type=\"text\"][_ngcontent-%COMP%] {\n  outline: none;\n}\ninput[type=\"password\"][_ngcontent-%COMP%] {\n  outline: none;\n}\n.login__inputs[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  flex: 1 1;\n  margin-left: 20px;\n  font-size: 20px;\n  border: none;\n  margin-top: 10px;\n  margin-bottom: 25px;\n  border-bottom: 1px solid var(--tracker-color);\n}\n.button__login[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  font-weight: 900 !important;\n  text-transform: inherit !important;\n  height: 50px !important;\n  margin-top: 20px !important;\n  cursor: pointer !important;\n  margin-left: 20px;\n  background-color: var(--tracker-color) !important;\n}\n.login__inputs[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(64, 148, 175) !important;\n  color: aliceblue !important;\n}\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid var(--tracker-color) !important;\n  background-color: #f8f4e3 !important;\n  font-weight: 900 !important;\n  color: #000 !important;\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--tracker-color);\n  cursor: pointer;\n  margin-top: 1px;\n  font-size: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\nh4[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\ncode[_ngcontent-%COMP%] {\n  margin: 1px 0px 1px 0px;\n  font-size: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.login__response[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.successMessage[_ngcontent-%COMP%] {\n  color: green;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (max-width: 800px) {\n  .login[_ngcontent-%COMP%] {\n    display: grid;\n    padding: 1px;\n    margin: 1px;\n    margin-top: 25px;\n    width: 200px;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-left: 11px;\n  }\n  .login[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 7px;\n  }\n  .login__inputs[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 46px;\n    width: 350px;\n    margin-bottom: 64px;\n    margin-left: 10px;\n  }\n  code[_ngcontent-%COMP%] {\n    margin: 12px 0px 34px 0px;\n    font-size: 15px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLDhDQUE4QztFQUM5QywyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSxpREFBaUQ7RUFDakQsb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIC0tdHJhY2tlci1jb2xvcjogIzUwYjdmNTtcbiAgLS10cmFja2VyLWJnOiAjY2FkNGRkO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4ubG9naW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubG9naW4gPiBoMiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW5fX2lucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW5fX2lucHV0cyA+IGlucHV0IHtcbiAgZmxleDogMSAxO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cmFja2VyLWNvbG9yKTtcbn1cbi5idXR0b25fX2xvZ2luIHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFja2VyLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX19pbnB1dHMgPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAxNDgsIDE3NSkgIWltcG9ydGFudDtcbiAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xufVxuYnV0dG9uOmRpc2FibGVkLFxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRyYWNrZXItY29sb3IpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY0ZTMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuaDQge1xuICBjb2xvcjogdmFyKC0tdHJhY2tlci1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5oNDpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuY29kZSB7XG4gIG1hcmdpbjogMXB4IDBweCAxcHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubG9naW5fX3Jlc3BvbnNlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zdWNjZXNzTWVzc2FnZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5lcnJvck1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuLyoqcmVzcG9uc2l2ZSBzdHlsZXMqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubG9naW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIG1hcmdpbjogMXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICB9XG4gIC5sb2dpbiA+IGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgfVxuICAubG9naW5fX2lucHV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDQ2cHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgY29kZSB7XG4gICAgbWFyZ2luOiAxMnB4IDBweCAzNHB4IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_4__["Toaster"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/saurabh/Documents/Angular/iTracker/iTracker-app/src/main.ts */"zUnb");


/***/ }),

/***/ "0pRC":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotfoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLogin() {
        this.router.navigate(['/home']);
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 2, vars: 0, consts: [[1, "page__not__found"], ["src", "assets/pageng.jpg", "alt", "", 3, "click"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotfoundComponent_Template_img_click_1_listener() { return ctx.navigateToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page__not__found[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100hh;\n}\nimg[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9fbm90X19mb3VuZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDBoaDtcbn1cbmltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1kQ6":
/*!***************************************************************!*\
  !*** ./src/app/issues/single-issue/single-issue.component.ts ***!
  \***************************************************************/
/*! exports provided: SingleIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleIssueComponent", function() { return SingleIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues.service */ "FULy");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _save_cancel_save_cancel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../save-cancel/save-cancel.component */ "LSbn");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _watchers_watchers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../watchers/watchers.component */ "UZgX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../editor/editor.component */ "uFVw");














function SingleIssueComponent_div_0_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.issueDetails.attachment.length);
} }
function SingleIssueComponent_div_0_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_div_52_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const att_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.deleteAttachment(att_r11.filename); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const att_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("href", "", ctx_r2.getImageUrl, "userId=", ctx_r2.userId, "&filename=", att_r11.filename, "&authToken=", ctx_r2.authToken, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("src", "", ctx_r2.getImageUrl, "userId=", ctx_r2.userId, "&filename=", att_r11.filename, "&authToken=", ctx_r2.authToken, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SingleIssueComponent_div_0_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_div_59_div_1_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const co_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.showUpdateField("edit-comment", co_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_div_59_div_1_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const co_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.handleComments("delete", co_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const co_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, co_r15.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", co_r15.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SingleIssueComponent_div_0_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleIssueComponent_div_0_div_59_div_1_Template, 15, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.issueDetails.comments);
} }
const _c0 = function () { return { standalone: true }; };
function SingleIssueComponent_div_0_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-editor", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeEvent", function SingleIssueComponent_div_0_div_60_Template_app_editor_changeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onChange($event, "comment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-save-cancel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveOps", function SingleIssueComponent_div_0_div_60_Template_app_save_cancel_saveOps_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.handleComments("edit"); })("cancelOps", function SingleIssueComponent_div_0_div_60_Template_app_save_cancel_cancelOps_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.showUpdateField("edit-comment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.showCommentUpdateEditor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("data", ctx_r4.selectedComment.text);
} }
function SingleIssueComponent_div_0_form_75_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assig_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", assig_r25.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", assig_r25.name, " ");
} }
function SingleIssueComponent_div_0_form_75_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 57, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SingleIssueComponent_div_0_form_75_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.updateField("assignee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingleIssueComponent_div_0_form_75_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.currentAssignee = $event; })("change", function SingleIssueComponent_div_0_form_75_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.updateField("assignee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select Another");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SingleIssueComponent_div_0_form_75_option_6_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r5.showAssigneeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.currentAssignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.issueDetails.assigneeOptions);
} }
function SingleIssueComponent_div_0_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_div_77_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.updateField("watch"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_div_77_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.updateField("unwatch"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_div_77_Template_i_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.showUpdateField("watchlist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.issueDetails.isWatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.issueDetails.watchList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r6.issueDetails.isWatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.issueDetails.watchList.length);
} }
function SingleIssueComponent_div_0_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r34, " ");
} }
function SingleIssueComponent_div_0_option_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r35, " ");
} }
const _c1 = function () { return ["Bold", "Italic", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { toolbar: a0 }; };
function SingleIssueComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Created On-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reported By-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "tour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bug");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_p_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.showUpdateField("title"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SingleIssueComponent_div_0_Template_input_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onChange($event, "title"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-save-cancel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveOps", function SingleIssueComponent_div_0_Template_app_save_cancel_saveOps_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.updateField("title"); })("cancelOps", function SingleIssueComponent_div_0_Template_app_save_cancel_cancelOps_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.showUpdateField("title"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_p_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.showUpdateField("desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ckeditor", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SingleIssueComponent_div_0_Template_ckeditor_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onChange($event, "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-save-cancel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveOps", function SingleIssueComponent_div_0_Template_app_save_cancel_saveOps_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.updateField("desc"); })("cancelOps", function SingleIssueComponent_div_0_Template_app_save_cancel_cancelOps_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.showUpdateField("desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Attachments (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SingleIssueComponent_div_0_span_43_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SingleIssueComponent_div_0_Template_input_change_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.handleUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SingleIssueComponent_div_0_div_52_Template, 7, 8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, SingleIssueComponent_div_0_div_59_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SingleIssueComponent_div_0_div_60_Template, 3, 4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_input_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.showUpdateField("comment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ckeditor", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SingleIssueComponent_div_0_Template_ckeditor_change_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onChange($event, "comment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "app-save-cancel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveOps", function SingleIssueComponent_div_0_Template_app_save_cancel_saveOps_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.handleComments("add"); })("cancelOps", function SingleIssueComponent_div_0_Template_app_save_cancel_cancelOps_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.showUpdateField("comment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Assignee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_p_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.showUpdateField("assignee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SingleIssueComponent_div_0_form_75_Template, 7, 4, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SingleIssueComponent_div_0_div_77_Template, 17, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "app-watchers", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedWatchers", function SingleIssueComponent_div_0_Template_app_watchers_updatedWatchers_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.onChange($event, "watchlist"); })("addWatchers", function SingleIssueComponent_div_0_Template_app_watchers_addWatchers_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.addWatchersId($event); })("removeWatchers", function SingleIssueComponent_div_0_Template_app_watchers_removeWatchers_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.removeWatcherId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.showUpdateField("watchlist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_p_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.showUpdateField("priority"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "form", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SingleIssueComponent_div_0_Template_form_ngSubmit_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.updateField("priority"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingleIssueComponent_div_0_Template_select_ngModelChange_90_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.currentPriority = $event; })("change", function SingleIssueComponent_div_0_Template_select_change_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.updateField("priority"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Select Another");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SingleIssueComponent_div_0_option_93_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleIssueComponent_div_0_Template_p_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.showUpdateField("status"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form", 57, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SingleIssueComponent_div_0_Template_form_ngSubmit_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.updateField("status"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingleIssueComponent_div_0_Template_select_ngModelChange_102_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.currentStatus = $event; })("change", function SingleIssueComponent_div_0_Template_select_change_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.updateField("status"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Select Another");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, SingleIssueComponent_div_0_option_105_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.issueDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 40, ctx_r0.issueDetails.createDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.issueDetails.reporter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.issueDetails.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.showTitleInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.issueDetails.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showTitleInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.issueDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.showDescEditor)("innerHtml", ctx_r0.issueDetails.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showDescEditor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0))("data", ctx_r0.issueDetails.description)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.issueDetails.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.issueDetails.attachment.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.issueDetails.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.issueDetails.comments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.issueDetails.comments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.showCommentEditor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showCommentEditor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0))("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c1))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.issueDetails.assigneeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.issueDetails.assigneeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.issueDetails.watchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showUpdateWatchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("watchListOptions", ctx_r0.issueDetails.watchListOptions)("existingWatchList", ctx_r0.issueDetails.watchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.issueDetails.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showPriorityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentPriority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.priorityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.issueDetails.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showStatusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusOptions);
} }
class SingleIssueComponent {
    constructor(issueService, toaster, toast) {
        this.issueService = issueService;
        this.toaster = toaster;
        this.toast = toast;
        this.toastConfig = {
            timeOut: 1000,
        };
        this.showTitleInput = true;
        this.showDescEditor = true;
        this.showCommentEditor = true;
        this.showCommentUpdateEditor = true;
        this.showAssigneeList = true;
        this.showUpdateWatchList = true;
        this.showPriorityList = true;
        this.showStatusList = true;
        this.name = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('name');
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('userId');
        // this.getImageUrl = 'http://localhost:3001/api/v1/issue/attachment?';
        this.getImageUrl =
            'http://api.itracker.kanbanboard.co.in/api/v1/issue/attachment?';
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.statusOptions = ['Backlogs', 'Progress', 'Test', 'Done'];
        this.priorityOptions = ['High', 'Medium', 'Low'];
    }
    ngOnInit() {
        if (this.issueDetails) {
            console.debug('UPDATING I?P FIELDS::', this.issueDetails);
            this.updatedTitle = this.issueDetails.title;
            this.editorDesc = this.issueDetails.description;
            this.commentsList = this.issueDetails.comments;
        }
    }
    // fetch all users
    fetchAllUsers() {
        console.debug('user id from dashboard', this.userId);
        const authDetails = {
            userId: this.userId,
        };
        this.issueService.getAllUsers(authDetails).subscribe(
        // handle success response
        (response) => {
            if (response.status === 200) {
                this.assigneeOptions = response.data;
                this.watchListOptions = response.data;
                // update the assignee name
                const assigneeName = this.getAssigneeName(this.watchListOptions, this.issueDetails.assignee);
                this.issueDetails.assigneeName = assigneeName;
            }
        }, 
        // handle error response
        (error) => {
            console.warn('Error fetching user details', error);
            this.toaster.open({ text: 'Something went wrong', type: 'danger' });
        });
    }
    getAssigneeName(userList, assigneeId) {
        // update the assignee name
        console.debug('get assignee name user list:', userList, assigneeId);
        const currentAssigneeObject = userList.find((usr) => {
            return usr.userId === assigneeId;
        });
        return currentAssigneeObject.name;
    }
    getUsersObjectIds(userList) {
        const objectIdList = userList.map((usr) => {
            return usr._id;
        });
        return objectIdList;
    }
    // hide and show update fields
    showUpdateField(field, selectedObj) {
        console.debug('hide/show update options', selectedObj);
        switch (field) {
            case 'title':
                this.showTitleInput = !this.showTitleInput;
                break;
            case 'desc':
                this.showDescEditor = !this.showDescEditor;
                break;
            case 'comment':
                this.showCommentEditor = !this.showCommentEditor;
                this.commentsList = this.issueDetails.comments;
                break;
            case 'edit-comment':
                this.showCommentUpdateEditor = !this.showCommentUpdateEditor;
                this.selectedComment = selectedObj;
                break;
            case 'assignee':
                this.showAssigneeList = !this.showAssigneeList;
                break;
            case 'watchlist':
                this.showUpdateWatchList = !this.showUpdateWatchList;
                break;
            case 'priority':
                this.showPriorityList = !this.showPriorityList;
                break;
            case 'status':
                this.showStatusList = !this.showStatusList;
                break;
        }
    }
    // capture the editor's content
    onChange(event, field) {
        console.debug(event.data);
        console.debug('event__change--watch,', event, field);
        switch (field) {
            case 'title':
                this.updatedTitle = event.target.value;
                break;
            case 'desc':
                this.editorDesc = event.editor.getData();
                break;
            case 'comment':
                this.commentText = event.editor.getData();
                break;
            case 'watchlist':
                this.updatedWatchList = event;
                break;
            case 'unwatchlist':
                this.updatedWatchList = event;
        }
    }
    // update fields
    updateField(field, operation) {
        console.debug('updating field', field);
        let updateIssue = {
            userId: this.userId,
            issueId: this.issueDetails.issueId,
            updates: {},
        };
        switch (field) {
            case 'title':
                console.debug('title updated,', this.updatedTitle);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: { title: this.updatedTitle } });
                // call update api
                this.updateFieldServiceCall(updateIssue, field);
                break;
            case 'desc':
                console.debug('description updated', this.editorDesc);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        description: this.editorDesc === undefined
                            ? this.issueDetails.description
                            : this.editorDesc,
                    } });
                // call update api
                this.updateFieldServiceCall(updateIssue, field);
                break;
            case 'assignee':
                console.debug('updating assignee', this.currentAssignee);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        assignee: this.currentAssignee,
                    } });
                // call update api
                this.updateFieldServiceCall(updateIssue, field);
                break;
            case 'watchlist':
                console.debug('updating watchlist', this.updatedWatchList);
                const updatedWatchListIds = this.getUsersObjectIds(this.updatedWatchList);
                console.debug('watchlist ids to be updated', updatedWatchListIds);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        operation: 'watch',
                        watchList: updatedWatchListIds,
                    } });
                // call update api
                this.updateFieldServiceCall(updateIssue, field);
                break;
            case 'watch':
                console.debug('add current user to watchlist');
                const currentUserObject = this.getCurrentObjectId(this.issueDetails.watchListOptions);
                console.debug('currentuserobjectid', currentUserObject);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        watchList: currentUserObject._id,
                        operation: 'watch',
                    } });
                console.debug('add to watch list:', updateIssue);
                // call update api
                this.updateFieldServiceCall(updateIssue, field, currentUserObject);
                break;
            case 'unwatch':
                console.debug('remove current user to watchlist');
                const currentUserWatchObject = this.getCurrentObjectId(this.issueDetails.watchListOptions);
                console.debug('currentuserobjectid', currentUserWatchObject);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        watchList: currentUserWatchObject._id,
                        operation: 'unwatch',
                    } });
                console.debug('add to watch list:', updateIssue);
                // call update api
                this.updateFieldServiceCall(updateIssue, field, currentUserWatchObject);
                break;
            case 'priority':
                console.debug('updating priority', this.currentPriority);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        priority: this.currentPriority,
                    } });
                // call update api
                this.updateFieldServiceCall(updateIssue, field);
                break;
            case 'status':
                console.debug('updating status', this.currentStatus);
                updateIssue = Object.assign(Object.assign({}, updateIssue), { updates: {
                        status: this.currentStatus,
                    } });
                // call update api
                this.updateFieldServiceCall(updateIssue, field);
                break;
        }
    }
    getCurrentObjectId(watchListOptions) {
        const currentUserObject = watchListOptions.find((usr) => {
            if (usr.userId === this.userId) {
                return usr;
            }
        });
        return currentUserObject;
    }
    /**
     * These methods will add/ remove users in watchlist
     * as soon as they added as chips
     *
     */
    // add watchlist standalone rule
    addWatchersId(toAddList) {
        console.debug('to add watchlist:', toAddList);
        const { _id } = toAddList;
        const updateIssue = {
            userId: this.userId,
            issueId: this.issueDetails.issueId,
            updates: {
                watchList: _id,
                operation: 'watch',
            },
        };
        // call update api
        this.updateFieldServiceCall(updateIssue, 'watch', toAddList);
    }
    // remove watchlist standalone rule
    removeWatcherId(toRemoveList) {
        console.debug('to remove watchlist:', toRemoveList);
        const { _id } = toRemoveList;
        console.debug(_id);
        const updateWatchList = {
            userId: this.userId,
            issueId: this.issueDetails.issueId,
            updates: {
                watchList: _id,
                operation: 'unwatch',
            },
        };
        console.debug('updateissue:', updateWatchList);
        // call update api
        this.updateFieldServiceCall(updateWatchList, 'unwatch', toRemoveList);
    }
    updateFieldServiceCall(updateIssue, field, currentObject) {
        console.debug('update options body:', updateIssue);
        this.issueService.updateIssue(updateIssue).subscribe((response) => {
            console.debug('update issue response:', response);
            if (response.status === 200) {
                // this.toaster.open({ text: 'Issue Updated', type: 'info' });
                const toasterObj = this.toast.success(`${field} updated`, 'Issue Updated');
                toasterObj.onTap.subscribe(() => {
                    this.toaster.open({ text: 'Issue Updated', type: 'info' });
                });
                // close the edit option
                this.showUpdateField(field);
                // update the current issue Object
                this.updateCurrentIssueObject(field, updateIssue, currentObject);
            }
        }, (error) => {
            console.warn('Error Updating Issue:', error.error);
            this.toaster.open({ text: error.error.message, type: 'danger' });
        });
    }
    updateCurrentIssueObject(field, updateIssue, currentObject) {
        console.debug('updating current object', updateIssue);
        let message = ''; // for socket notification
        switch (field) {
            case 'title':
                this.issueDetails = Object.assign(Object.assign({}, this.issueDetails), { title: updateIssue.updates.title });
                message = `${this.name} updated title to ${this.issueDetails.title}`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'desc':
                this.issueDetails = Object.assign(Object.assign({}, this.issueDetails), { description: updateIssue.updates.description });
                message = `${this.name} added description`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'assignee':
                // get name for assignee id
                const { assigneeOptions } = this.issueDetails;
                const assigneeName = this.getAssigneeName(assigneeOptions, this.currentAssignee);
                console.debug('assigneename upating to ', assigneeName);
                this.issueDetails = Object.assign(Object.assign({}, this.issueDetails), { assigneeName });
                message = `${this.name} changed assignee to ${assigneeName}`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'watchlist':
                console.debug(' upating current issue with new watchlist', this.issueDetails.watchList);
                this.issueDetails.watchList.push(this.updatedWatchList);
                console.debug('after new watchlist added,', this.issueDetails.watchList);
                message = `${this.name} updated watchlist`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'watch':
                console.debug('update currentuser as watchlist');
                this.issueDetails.watchList.push(currentObject);
                if (currentObject.userId === this.userId) {
                    console.debug('set iswatcher flag');
                    this.issueDetails.isWatcher = true;
                }
                message = `${this.name} updated watchlist`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'unwatch':
                console.debug('remove watcher', currentObject.userId);
                this.issueDetails.watchList = this.issueDetails.watchList.filter((usr) => usr.userId !== currentObject.userId);
                if (currentObject.userId === this.userId) {
                    console.debug('set iswatcher flag');
                    this.issueDetails.isWatcher = false;
                }
                console.debug('updated watchlist after removal', this.issueDetails.watchList);
                message = `${this.name} updated watchlist`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'priority':
                this.issueDetails = Object.assign(Object.assign({}, this.issueDetails), { priority: updateIssue.updates.priority });
                message = `${this.name} updated priority to ${this.issueDetails.status}`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
            case 'status':
                this.issueDetails = Object.assign(Object.assign({}, this.issueDetails), { status: updateIssue.updates.status });
                message = `${this.name} updated status to ${this.issueDetails.status}`;
                // emit update event
                this.emitIssueUpdateEvent(updateIssue, field, message);
                break;
        }
    }
    // comments
    handleComments(operation, selectedObj) {
        let commentDetails = {};
        switch (operation) {
            case 'add':
                commentDetails = Object.assign(Object.assign({}, commentDetails), { userId: this.userId, text: this.commentText, issueId: this.issueDetails.issueId, operation: 'add', name: this.name });
                this.manageComments(commentDetails);
                this.showUpdateField('comment');
                break;
            case 'edit':
                commentDetails = Object.assign(Object.assign({}, commentDetails), { userId: this.userId, text: this.commentText, issueId: this.issueDetails.issueId, commentId: this.selectedComment.commentId, operation: 'edit' });
                this.manageComments(commentDetails);
                this.updateCurrentCommentObject(commentDetails);
                this.showUpdateField('edit-comment');
                break;
            case 'delete':
                commentDetails = Object.assign(Object.assign({}, commentDetails), { commentId: selectedObj.commentId, userId: this.userId, operation: 'delete' });
                this.manageComments(commentDetails);
                this.updateCurrentCommentObject(commentDetails);
                break;
        }
    }
    manageComments(commentDetails) {
        const { operation } = commentDetails;
        this.issueService.manageCommentService(commentDetails).subscribe((response) => {
            console.debug('add comment res:', response);
            if (response.status === 200) {
                // this.toaster.open({ text: response.message, type: 'secondary' });
                this.toast.success(`${response.message}`, 'Comments', this.toastConfig);
                console.debug('created/new comments to be updated', response.data);
                if (operation === 'add') {
                    this.updateCurrentCommentObject(Object.assign(Object.assign({}, response.data), { operation }));
                }
            }
        }, (error) => {
            console.warn('Error adding comment', error);
            // this.toaster.open({ text: error.error.message, type: 'danger' });
            this.toast.error(`${error.error.message}`, 'Comments', this.toastConfig);
        });
    }
    updateCurrentCommentObject(newCommentObject) {
        console.debug('update current comment object', newCommentObject);
        const { operation, userId, commentId, text } = newCommentObject;
        let message = '';
        switch (operation) {
            case 'add':
                // add whole object to cuurent issues's comments's array
                this.issueDetails.comments.push(newCommentObject);
                this.selectedComment = this.issueDetails.comments;
                message = `${this.name} commented on a issue`;
                this.emitIssueUpdateEvent(Object.assign(Object.assign({}, newCommentObject), { issueId: this.issueDetails.issueId }), 'comment', message);
                break;
            case 'edit':
                // find the current issue's commentsid and update the text
                this.issueDetails.comments = this.issueDetails.comments.map((iss) => iss.commentId === commentId ? Object.assign(Object.assign({}, iss), { text }) : iss);
                console.debug('new comments list:', this.issueDetails.comments);
                break;
            case 'delete':
                // filter out the current comment id object
                this.issueDetails.comments = this.issueDetails.comments.filter((iss) => iss.commentId !== commentId);
                break;
        }
    }
    // upload attachments
    handleUpload(value) {
        console.debug('handle upload', value.target.files);
        const data = new FormData();
        data.append('file', value.target.files[0]);
        const fileDetails = {
            userId: this.userId,
            issueId: this.issueDetails.issueId,
            formData: data,
        };
        this.issueService.uploadAttachment(fileDetails).subscribe((response) => {
            console.debug('upload response:', response);
            if (response.status === 200) {
                // this.toaster.open({ text: response.message, type: 'success' });
                this.toast.success(`${response.message}`, 'Attachment', this.toastConfig);
                // update the current arrachment array of the issue
                this.issueDetails.attachment.push(response.data);
            }
        }, (error) => {
            console.warn('Upload Error:', error);
            // this.toaster.open({ text: error.error.message, type: 'danger' });
            this.toast.success(`${error.error.message}`, 'Attachment', this.toastConfig);
        });
    }
    // opens image in new tab when clicked on
    openImage(filename) {
        const fileDetails = {
            userId: this.userId,
            filename,
        };
        this.issueService.openImageService(fileDetails).subscribe((response) => {
            if (response) {
                return response;
            }
        }, (error) => {
            console.warn('Error Fecthing image', error);
            // this.toaster.open({ text: 'Something went Wrong', type: 'danger' });
            this.toast.success(`${error.error.message}`, 'Image View', this.toastConfig);
        });
    }
    // handles delete attachment function
    deleteAttachment(filename) {
        const fileDetails = {
            userId: this.userId,
            filename,
        };
        this.issueService.deleteAttachmentService(fileDetails).subscribe((response) => {
            console.debug('Delete Attachment Response:', response);
            if (response.status === 200) {
                // this.toaster.open({ text: response.message, type: 'success' });
                this.toast.success(`${response.message}`, 'Attachment', this.toastConfig);
                // filter the current attachment array
                this.issueDetails.attachment = this.issueDetails.attachment.filter((iss) => iss.filename !== filename);
            }
        }, (error) => {
            console.warn('Error Deleting image', error);
            // this.toaster.open({ text: 'Something went Wrong', type: 'danger' });
            this.toast.success('Something went Wrong', 'Attachment', this.toastConfig);
        });
    }
    // emitt event on issueUpdate for notification to watchlists
    emitIssueUpdateEvent(upadtedIssueDetails, field, message) {
        // get watchlist userids
        const watchListUsersIds = this.issueDetails.watchList.map((usr) => {
            return usr.userId;
        });
        console.debug('watchlist with userids', watchListUsersIds);
        upadtedIssueDetails = Object.assign(Object.assign({}, upadtedIssueDetails), { field,
            message, watchList: watchListUsersIds.filter((ids) => ids !== this.userId) });
        console.debug('emit event from client::issuedetails', upadtedIssueDetails);
        this.issueService.notifyWatchListOnIssueUpdates(upadtedIssueDetails);
    }
}
SingleIssueComponent.ɵfac = function SingleIssueComponent_Factory(t) { return new (t || SingleIssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SingleIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleIssueComponent, selectors: [["app-single-issue"]], inputs: { issueDetails: "issueDetails" }, decls: 1, vars: 1, consts: [["class", "issue__main__content", 4, "ngIf"], [1, "issue__main__content"], [1, "issue__details__card"], [1, "issue__card"], [1, "title"], [1, "created"], [1, "reporter"], [1, "medium", "reporter"], [1, "issue__bug__div"], [1, "material-icons", "icon"], [1, "bug"], [1, "issue__edit__options"], [1, "options__list"], [1, "issue__edit__option_1"], [1, "edit__title__div"], [1, "title__para", 3, "hidden", "click"], [3, "hidden"], ["type", "text", "name", "title", 1, "title__input", 3, "value", "change"], [3, "saveOps", "cancelOps"], [1, "edit__desc__div"], [1, "desc__label"], [1, "desc__para", 3, "hidden", "innerHtml", "click"], [3, "ngModelOptions", "data", "config", "change"], [1, "attachment__section"], [1, "attachment__header__div"], [1, "attachment__header"], [4, "ngIf"], [1, "upload_cover"], ["for", "file-upload", 1, "custom-file-upload"], ["title", "Upload Attachment", 1, "material-icons"], ["id", "file-upload", "type", "file", "name", "attachment", 3, "change"], [1, "col__break__line"], [1, "attachment__display__img", 3, "hidden"], [4, "ngFor", "ngForOf"], [1, "comments__section"], [1, "comment__header"], [1, "comments__list__section", 3, "hidden"], ["class", "comments__list", 4, "ngIf"], [3, "hidden", 4, "ngIf"], [1, "add__comment__section"], [1, "add__comments__header", 3, "hidden"], [1, "material-icons", "face__icon"], ["type", "text", "name", "addcomment", "placeholder", "Add a comment...", 1, "add__comment__input", 3, "click"], [3, "ngModelOptions", "config", "change"], [1, "issue__edit__option_2"], [1, "assignee__details__div"], [1, "assignee__header"], ["title", "update assignee", 1, "assignee__content", 3, "click"], [3, "hidden", "ngSubmit", 4, "ngIf"], [1, "watchlist__options__div"], ["class", "watchlist__header", 4, "ngIf"], [1, "watchlist__content", 3, "hidden"], [3, "watchListOptions", "existingWatchList", "updatedWatchers", "addWatchers", "removeWatchers"], ["mat-raised-button", "", "color", "secondary", "title", "cancel", 1, "button__cancel", 3, "click"], [1, "priority__details__div"], [1, "priority__header"], ["title", "update priority", 1, "priority__content", 3, "click"], [3, "hidden", "ngSubmit"], ["updatepriorityForm", "ngForm"], [1, "form-group"], ["name", "currentPriorityName", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange", "change"], ["disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "status__details__div"], [1, "status__header"], ["title", "update status", 1, "status__content", 3, "click"], ["updatestatusForm", "ngForm"], ["name", "currentStatusName", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange", "change"], ["target", "_blank", 3, "href"], ["alt", "attachment", 1, "attachment__img", 3, "src"], ["title", "delete", 1, "material-icons", "delete__icon", 3, "click"], [1, "comments__list"], [1, "comments__list__header"], [1, "comment__date"], [1, "comments__text", 3, "innerHtml"], [1, "comment__edit__div"], [1, "span_edit", 3, "click"], [1, "span_delete", 3, "click"], [3, "ngModelOptions", "data", "changeEvent"], ["updateAssigneeForm", "ngForm"], ["name", "currentAssigneeName", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [1, "watchlist__header"], [1, "watchlist__label"], ["title", "start watching", 1, "material-icons", "visibility__icon", 3, "click"], [1, "watchers__no"], ["title", "stop watching", 1, "material-icons", "visibility__icon", 3, "click"], [1, "unwatchers__no"], ["title", "manage watchlist", 1, "material-icons", "visibility__icon", 3, "click"]], template: function SingleIssueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SingleIssueComponent_div_0_Template, 106, 54, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issueDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _save_cancel_save_cancel_component__WEBPACK_IMPORTED_MODULE_7__["SaveCancelComponent"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _watchers_watchers_component__WEBPACK_IMPORTED_MODULE_9__["WatchersComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".issue__main__content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.issue__details__card[_ngcontent-%COMP%] {\n  flex: 0.26;\n  min-width: 100px;\n}\n\n.issue__edit__options[_ngcontent-%COMP%] {\n  flex: 0.8;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  overflow-y: scroll;\n}\n\n\n\n.issue__edit__options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.issue__edit__options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -ms-overflow-style: none; \n  scrollbar-width: none; \n}\n\n.options__list[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  max-width: 332px;\n  margin-left: 38px;\n  margin-right: auto;\n}\n\n.issue__edit__option_1[_ngcontent-%COMP%] {\n  flex: 0.5;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  margin: 24px;\n}\n\n.issue__edit__option_2[_ngcontent-%COMP%] {\n  flex: 0.5;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.issue__card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 240px;\n  height: 341px;\n  margin-left: 17px;\n  margin-right: auto;\n  margin-top: 22px;\n  margin-bottom: 16px;\n  word-break: keep-all;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 18px;\n  color: blue;\n  margin: 20px 0px 20px 0px;\n}\n\n.created[_ngcontent-%COMP%] {\n  margin: 1px 0px 28px 0px;\n}\n\n.reporter[_ngcontent-%COMP%] {\n  margin: 1px 0px 28px 0px;\n}\n\n.issue__bug__div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 35px;\n  color: red;\n  margin-left: -3px;\n}\n\n.bug[_ngcontent-%COMP%] {\n  margin: 20px 0px 20px 0px;\n  margin-top: 1px;\n  margin-left: 6px;\n  font-size: 16px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\ncode[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.edit__title__div[_ngcontent-%COMP%] {\n  margin: 3px;\n  margin-top: 3px;\n}\n\n.title__para[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  padding: 3px;\n  font-size: 17px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n}\n\n.title__para[_ngcontent-%COMP%]:hover {\n  background-color: #d9d3d3;\n  border-radius: 3px;\n}\n\n.title__input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%] {\n  height: 35px;\n  outline: none;\n  width: 100%;\n  padding-left: 4px;\n}\n\n.edit__desc__div[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.desc__label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0353a4;\n}\n\n.desc__para[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  padding: 3px;\n  font-size: 17px;\n  cursor: pointer;\n  width: 100%;\n  word-break: break-all;\n}\n\n.desc__para[_ngcontent-%COMP%]:hover {\n  background-color: #d9d3d3;\n  border-radius: 3px;\n}\n\n[_nghost-%COMP%]     .ck-editor__editable_inline {\n  min-height: 700px;\n}\n\n.col__break__line[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: gray;\n  width: 100%;\n  margin: 2px 0px 2px 0px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.comments__section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 3px;\n}\n\n.comment__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 7px 0px 4px 0px;\n  padding-top: 5px;\n  font-weight: 800;\n  font-size: 14px;\n  color: #0353a4;\n}\n\n.comments__list__section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.comments__list__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 5px;\n}\n\n.face__icon[_ngcontent-%COMP%] {\n  font-size: 36px !important;\n}\n\n.comments__list__header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #797367;\n  font-weight: 700;\n  font-size: 15px;\n  margin-top: 8px;\n  margin-left: 10px;\n}\n\n.comment__date[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #797367;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-size: 12px;\n}\n\n.add__comment__section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 5px;\n}\n\n.add__comments__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.add__comments__header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #797367;\n  font-weight: 700;\n  font-size: 15px;\n  margin-top: 8px;\n  margin-left: 10px;\n}\n\n.add__comment__input[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n.add__comments__header[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:hover {\n  outline: none !important;\n  color: #0353a4 !important;\n}\n\n.comments__text[_ngcontent-%COMP%] {\n  margin-left: 46px;\n}\n\n.comment__edit__div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: -9px;\n  margin-bottom: 12px;\n}\n\n.comment__edit__div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #797367;\n  margin-left: 45px;\n  cursor: pointer;\n}\n\n.span_delete[_ngcontent-%COMP%]:hover {\n  font-size: larger;\n  color: gray;\n  text-decoration: underline;\n}\n\n.span_edit[_ngcontent-%COMP%]:hover {\n  font-size: larger;\n  color: gray;\n  text-decoration: underline;\n}\n\n\n\n.attachment__section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 5px;\n}\n\n.attachment__header__div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.attachment__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 7px 0px 4px 0px;\n  padding-top: 5px;\n  font-weight: 800;\n  font-size: 14px;\n  color: #0353a4;\n}\n\n.upload_cover[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.coverpic_label[_ngcontent-%COMP%] {\n  margin-top: -26px;\n  margin-left: 30px;\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n  color: blue;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.attachment__display__img[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 14px;\n}\n\n.attachment__img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 84px;\n  cursor: pointer;\n}\n\n.attachment__display__img[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.delete__icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  position: relative;\n  top: -26px;\n  left: -20px;\n  cursor: pointer;\n}\n\n.delete__icon[_ngcontent-%COMP%]:hover {\n  color: rgb(209, 0, 0);\n}\n\n\n\n.assignee__details__div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 23px;\n}\n\n.assignee__header[_ngcontent-%COMP%] {\n  margin: 7px 0px 4px 0px;\n  padding-top: 5px;\n  font-weight: 800;\n  font-size: 15px;\n  color: #0353a4;\n}\n\n.assignee__content[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n\n\n.watchlist__options__div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 23px;\n}\n\n.watchlist__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 7px 0px 4px 0px;\n  padding-top: 5px;\n  font-weight: 800;\n  font-size: 15px;\n  color: #0353a4;\n}\n\n.visibility__icon[_ngcontent-%COMP%] {\n  color: black !important;\n  cursor: pointer;\n  margin-top: -2px;\n}\n\n.watchers__no[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  position: relative;\n  top: -20%;\n}\n\n.unwatchers__no[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  position: relative;\n  top: -20%;\n}\n\n.watchlist__content[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.button[_ngcontent-%COMP%] {\n  text-transform: inherit !important;\n  cursor: pointer !important;\n  margin: 5px;\n}\n\n\n\n.priority__details__div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 23px;\n}\n\n.priority__header[_ngcontent-%COMP%] {\n  margin: 7px 0px 4px 0px;\n  padding-top: 5px;\n  font-weight: 800;\n  font-size: 15px;\n  color: #0353a4;\n}\n\n.priority__content[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n\n\n.status__details__div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 23px;\n}\n\n.status__header[_ngcontent-%COMP%] {\n  margin: 7px 0px 4px 0px;\n  padding-top: 5px;\n  font-weight: 800;\n  font-size: 15px;\n  color: #0353a4;\n}\n\n.status__content[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n\n\n@media (max-width: 800px) {\n  .issue__main__content[_ngcontent-%COMP%] {\n    display: block;\n    height: 100vh;\n    min-width: 300px;\n    margin-left: auto;\n    margin-right: auto;\n    overflow-y: scroll;\n  }\n  .issue__details__card[_ngcontent-%COMP%] {\n    display: block;\n    min-width: 100px;\n    flex: 0;\n  }\n  .issue__edit__options[_ngcontent-%COMP%] {\n    display: block;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n    overflow: hidden;\n    flex: 0;\n  }\n  .options__list[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 300px;\n    margin-left: 38px;\n    margin-right: auto;\n    flex: 0;\n  }\n  .issue__edit__option_1[_ngcontent-%COMP%] {\n    display: block;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n    margin: 24px;\n    flex: 0;\n  }\n  .issue__edit__option_2[_ngcontent-%COMP%] {\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n    flex: 0;\n  }\n  .issue__card[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 10px;\n    padding: 15px;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n    width: 318px;\n    height: 118px;\n    margin-left: 27px;\n    margin-right: auto;\n    margin-top: 6px;\n    margin-bottom: 16px;\n    word-break: keep-all;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 15px;\n    color: blue;\n    margin: -1px 0px 4px 4px;\n  }\n  .created[_ngcontent-%COMP%] {\n    margin: -5px 0px -4px 4px;\n  }\n  .reporter[_ngcontent-%COMP%] {\n    margin: -3px 0px 28px 4px;\n  }\n  .issue__card[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 4px;\n  }\n  .issue__bug__div[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 35px;\n    color: red;\n    margin-left: -3px;\n    position: absolute;\n    top: 91px;\n    left: 263px;\n  }\n  .medium[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 53px;\n    left: 258px;\n    display: none;\n  }\n  .edit__title__div[_ngcontent-%COMP%] {\n    margin: 0px 0px 10px -31px;\n  }\n  .edit__desc__div[_ngcontent-%COMP%] {\n    margin: 0px 0px 10px -31px;\n  }\n  .attachment__section[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    margin: 0px 0px 10px -31px;\n  }\n  .comments__section[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    margin: 0px 0px 10px -31px;\n  }\n  .assignee__details__div[_ngcontent-%COMP%], .priority__details__div[_ngcontent-%COMP%], .watchlist__options__div[_ngcontent-%COMP%], .priority__header[_ngcontent-%COMP%], .priority__content[_ngcontent-%COMP%], .status__details__div[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzL3NpbmdsZS1pc3N1ZS9zaW5nbGUtaXNzdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsU0FBUztFQUNULDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsYUFBYTtBQUNmOztBQUNBLHFDQUFxQzs7QUFDckM7RUFDRSx3QkFBd0IsRUFBRSxZQUFZO0VBQ3RDLHFCQUFxQixFQUFFLFlBQVk7QUFDckM7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsU0FBUztFQUNULDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QiwwQ0FBMEM7QUFDNUM7O0FBQ0EscUJBQXFCOztBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFDQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0Esd0JBQXdCOztBQUN4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0EseUJBQXlCOztBQUN6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjs7QUFDQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFDQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixPQUFPO0VBQ1Q7RUFDQTtJQUNFLGNBQWM7SUFDZCw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsT0FBTztFQUNUO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztFQUNUO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLE9BQU87RUFDVDtFQUNBO0lBQ0UsOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsT0FBTztFQUNUO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtFQUM1QjtFQUNBOzs7Ozs7SUFNRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9zaW5nbGUtaXNzdWUvc2luZ2xlLWlzc3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXNzdWVfX21haW5fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmlzc3VlX19kZXRhaWxzX19jYXJkIHtcbiAgZmxleDogMC4yNjtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5pc3N1ZV9fZWRpdF9fb3B0aW9ucyB7XG4gIGZsZXg6IDAuODtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLypIaWRlIHNjcm9sbGJhciBmb3IgY2hyb21lLHNhZmFyaSovXG4uaXNzdWVfX2VkaXRfX29wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qSGlkZSBzY3JvbGxiYXIgZm9yIElFLEVkZ2UsRmlyZWZveCovXG4uaXNzdWVfX2VkaXRfX29wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKklFICYgRWRnZSovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZUZveCAqL1xufVxuLm9wdGlvbnNfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDMzMnB4O1xuICBtYXJnaW4tbGVmdDogMzhweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmlzc3VlX19lZGl0X19vcHRpb25fMSB7XG4gIGZsZXg6IDAuNTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4uaXNzdWVfX2VkaXRfX29wdGlvbl8yIHtcbiAgZmxleDogMC41O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmlzc3VlX19jYXJkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDM0MXB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsdWU7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XG59XG4uY3JlYXRlZCB7XG4gIG1hcmdpbjogMXB4IDBweCAyOHB4IDBweDtcbn1cbi5yZXBvcnRlciB7XG4gIG1hcmdpbjogMXB4IDBweCAyOHB4IDBweDtcbn1cbi5pc3N1ZV9fYnVnX19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuLmJ1ZyB7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmljb24ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbmNvZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZWRpdF9fdGl0bGVfX2RpdiB7XG4gIG1hcmdpbjogM3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4udGl0bGVfX3BhcmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGVfX3BhcmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkM2QzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4udGl0bGVfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGhlaWdodDogMzVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmVkaXRfX2Rlc2NfX2RpdiB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmRlc2NfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAzNTNhNDtcbn1cbi5kZXNjX19wYXJhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4uZGVzY19fcGFyYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQzZDM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbn1cbi5jb2xfX2JyZWFrX19saW5lIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDJweCAwcHggMnB4IDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLyoqQ29tbWVudHMgc2VjdGlvbioqL1xuLmNvbW1lbnRzX19zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzcHg7XG59XG4uY29tbWVudF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDdweCAwcHggNHB4IDBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAzNTNhNDtcbn1cblxuLmNvbW1lbnRzX19saXN0X19zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb21tZW50c19fbGlzdF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZmFjZV9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMzZweCAhaW1wb3J0YW50O1xufVxuLmNvbW1lbnRzX19saXN0X19oZWFkZXIgPiBwIHtcbiAgY29sb3I6ICM3OTczNjc7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb21tZW50X19kYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzc5NzM2NztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmFkZF9fY29tbWVudF9fc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5hZGRfX2NvbW1lbnRzX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYWRkX19jb21tZW50c19faGVhZGVyID4gcCB7XG4gIGNvbG9yOiAjNzk3MzY3O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYWRkX19jb21tZW50X19pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuLmFkZF9fY29tbWVudHNfX2hlYWRlciA+IGlucHV0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAzNTNhNCAhaW1wb3J0YW50O1xufVxuLmNvbW1lbnRzX190ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDQ2cHg7XG59XG4uY29tbWVudF9fZWRpdF9fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmNvbW1lbnRfX2VkaXRfX2RpdiA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzk3MzY3O1xuICBtYXJnaW4tbGVmdDogNDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNwYW5fZGVsZXRlOmhvdmVyIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zcGFuX2VkaXQ6aG92ZXIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLyoqYXR0YWNtZW50IHN0eWxlcyoqL1xuLmF0dGFjaG1lbnRfX3NlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDVweDtcbn1cbi5hdHRhY2htZW50X19oZWFkZXJfX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hdHRhY2htZW50X19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogN3B4IDBweCA0cHggMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDM1M2E0O1xufVxuLnVwbG9hZF9jb3ZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY292ZXJwaWNfbGFiZWwge1xuICBtYXJnaW4tdG9wOiAtMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgY29sb3I6IGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdHRhY2htZW50X19kaXNwbGF5X19pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4uYXR0YWNobWVudF9faW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDg0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdHRhY2htZW50X19kaXNwbGF5X19pbWcgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRlbGV0ZV9faWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI2cHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGVsZXRlX19pY29uOmhvdmVyIHtcbiAgY29sb3I6IHJnYigyMDksIDAsIDApO1xufVxuLyoqYXNzaWduZWUgZGl2IHN0eWxlcyoqL1xuLmFzc2lnbmVlX19kZXRhaWxzX19kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIzcHg7XG59XG4uYXNzaWduZWVfX2hlYWRlciB7XG4gIG1hcmdpbjogN3B4IDBweCA0cHggMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDM1M2E0O1xufVxuLmFzc2lnbmVlX19jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKip3YXRjaGxpc3QgZGl2IHN0eWxlcyoqL1xuLndhdGNobGlzdF9fb3B0aW9uc19fZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyM3B4O1xufVxuLndhdGNobGlzdF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDdweCAwcHggNHB4IDBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAzNTNhNDtcbn1cbi52aXNpYmlsaXR5X19pY29uIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi53YXRjaGVyc19fbm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjAlO1xufVxuLnVud2F0Y2hlcnNfX25vIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwJTtcbn1cbi53YXRjaGxpc3RfX2NvbnRlbnQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuLyoqcHJpb3JpdHkgZGl2IHN0eWxlcyoqL1xuLnByaW9yaXR5X19kZXRhaWxzX19kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIzcHg7XG59XG4ucHJpb3JpdHlfX2hlYWRlciB7XG4gIG1hcmdpbjogN3B4IDBweCA0cHggMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDM1M2E0O1xufVxuLnByaW9yaXR5X19jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKipzdGF0dXMgZGl2IHN0eWxlcyoqL1xuLnN0YXR1c19fZGV0YWlsc19fZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyM3B4O1xufVxuLnN0YXR1c19faGVhZGVyIHtcbiAgbWFyZ2luOiA3cHggMHB4IDRweCAwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMzUzYTQ7XG59XG4uc3RhdHVzX19jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qKnJlc3BvbnNpdmUgc3R5bGVzKiovXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmlzc3VlX19tYWluX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAuaXNzdWVfX2RldGFpbHNfX2NhcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgZmxleDogMDtcbiAgfVxuICAuaXNzdWVfX2VkaXRfX29wdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAwO1xuICB9XG4gIC5vcHRpb25zX19saXN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzOHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmbGV4OiAwO1xuICB9XG4gIC5pc3N1ZV9fZWRpdF9fb3B0aW9uXzEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAyNHB4O1xuICAgIGZsZXg6IDA7XG4gIH1cbiAgLmlzc3VlX19lZGl0X19vcHRpb25fMiB7XG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmbGV4OiAwO1xuICB9XG4gIC5pc3N1ZV9fY2FyZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB3aWR0aDogMzE4cHg7XG4gICAgaGVpZ2h0OiAxMThweDtcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBtYXJnaW46IC0xcHggMHB4IDRweCA0cHg7XG4gIH1cbiAgLmNyZWF0ZWQge1xuICAgIG1hcmdpbjogLTVweCAwcHggLTRweCA0cHg7XG4gIH1cbiAgLnJlcG9ydGVyIHtcbiAgICBtYXJnaW46IC0zcHggMHB4IDI4cHggNHB4O1xuICB9XG4gIC5pc3N1ZV9fY2FyZCA+IGNvZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICB9XG4gIC5pc3N1ZV9fYnVnX19kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDkxcHg7XG4gICAgbGVmdDogMjYzcHg7XG4gIH1cbiAgLm1lZGl1bSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTNweDtcbiAgICBsZWZ0OiAyNThweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5lZGl0X190aXRsZV9fZGl2IHtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAtMzFweDtcbiAgfVxuICAuZWRpdF9fZGVzY19fZGl2IHtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAtMzFweDtcbiAgfVxuICAuYXR0YWNobWVudF9fc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IC0zMXB4O1xuICB9XG4gIC5jb21tZW50c19fc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IC0zMXB4O1xuICB9XG4gIC5hc3NpZ25lZV9fZGV0YWlsc19fZGl2LFxuICAucHJpb3JpdHlfX2RldGFpbHNfX2RpdixcbiAgLndhdGNobGlzdF9fb3B0aW9uc19fZGl2LFxuICAucHJpb3JpdHlfX2hlYWRlcixcbiAgLnByaW9yaXR5X19jb250ZW50LFxuICAuc3RhdHVzX19kZXRhaWxzX19kaXYge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-issue',
                templateUrl: './single-issue.component.html',
                styleUrls: ['./single-issue.component.css'],
            }]
    }], function () { return [{ type: _issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { issueDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "+rn0");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "KNqQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "VGjC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social-login/social-login.component */ "P9um");











class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__["SocialLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__["SocialLoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ],
                providers: [_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/signup"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 4, consts: [[1, "home"], [1, "home__box"], [1, "home__box__icon"], ["src", "assets/virus.png", "alt", ""], [1, "home__box__intro"], [1, "home__box__navigation"], ["mat-raised-button", "", 1, "button__login", 3, "routerLink"], ["mat-stroked-button", "", 1, "button__signup", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "iTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Plan, track, and manage your agile and software development projects in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tracker. Collaborate and build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SignUp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  --twitter-color: #50b7f5;\n  --twitter-bg: #cad4dd;\n  font-family: \"Montserrat\", sans-serif;\n}\n.home[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  margin: 100px;\n  padding: 20px;\n  margin-top: 100px;\n}\n.home__box__icon[_ngcontent-%COMP%] {\n  display: flex;\n}\n.home__box__icon[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n}\ncode[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px;\n  font-weight: 900;\n  font-size: 20px;\n}\n.home__box__intro[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 40px;\n  font-weight: 900;\n  font-size: 18px;\n}\nspan[_ngcontent-%COMP%] {\n  color: var(--twitter-color);\n}\n.home__box__navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.button__login[_ngcontent-%COMP%], .button__signup[_ngcontent-%COMP%] {\n  font-weight: 900 !important;\n  font-size: 19px !important;\n  text-transform: inherit !important;\n  height: 50px !important;\n  margin-top: 20px !important;\n}\n.button__signup[_ngcontent-%COMP%] {\n  background-color: var(--twitter-color) !important;\n  border: none !important;\n  color: #fff !important;\n}\n.home__box__navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(64, 148, 175) !important;\n  color: aliceblue !important;\n}\n\n@media (max-width: 800px) {\n  .home[_ngcontent-%COMP%] {\n    display: block;\n    width: 265px;\n    margin: 56px;\n    padding: 0px;\n    margin-top: 135px;\n    height: 60vh;\n  }\n\n  .home__box__intro[_ngcontent-%COMP%] {\n    margin-top: 66px;\n    margin-bottom: 76px;\n    font-weight: 900;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxpREFBaUQ7RUFDakQsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLDJCQUEyQjtBQUM3QjtBQUNBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAtLXR3aXR0ZXItY29sb3I6ICM1MGI3ZjU7XG4gIC0tdHdpdHRlci1iZzogI2NhZDRkZDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDEwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmhvbWVfX2JveF9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaG9tZV9fYm94X19pY29uID4gaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cbmNvZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmhvbWVfX2JveF9faW50cm8ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5zcGFuIHtcbiAgY29sb3I6IHZhcigtLXR3aXR0ZXItY29sb3IpO1xufVxuLmhvbWVfX2JveF9fbmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYnV0dG9uX19sb2dpbixcbi5idXR0b25fX3NpZ251cCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uX19zaWdudXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5ob21lX19ib3hfX25hdmlnYXRpb24gPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDE0OCwgMTc1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG4vKipyZXNwb25zaXZlIHN0eWxlcyoqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ob21lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjY1cHg7XG4gICAgbWFyZ2luOiA1NnB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMzVweDtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gIH1cblxuICAuaG9tZV9fYm94X19pbnRybyB7XG4gICAgbWFyZ2luLXRvcDogNjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "FULy":
/*!******************************************!*\
  !*** ./src/app/issues/issues.service.ts ***!
  \******************************************/
/*! exports provided: IssuesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function() { return IssuesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "VGjC");







class IssuesService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.httpHeaderOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                authToken: this.userService.getUserAuth().authToken,
            }),
        };
        // intiliaze
        // public baseUrl = 'http://localhost:3001/api/v1';
        // public socketUrl = 'http://localhost:3001/issue/notify';
        this.baseUrl = 'http://api.itracker.kanbanboard.co.in/api/v1';
        this.socketUrl = 'http://api.itracker.kanbanboard.co.in/issue/notify';
        // socket emitters and listeners
        // listen to intiate authentication event
        this.initSocketAuthentication = () => {
            console.debug('listen to init authentication');
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                this.socket.on('authenticate', (data) => {
                    observer.next(data);
                });
            });
        };
        // emit authenticate user event
        this.authenticateUser = (authDetails) => {
            console.debug('EMit Authenticate User Event', authDetails);
            this.socket.emit('auth', authDetails);
        };
        // listen to authenticated event
        this.isUserSocketVerified = () => {
            console.debug('Auth Status Listener');
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                this.socket.on('authStatus', (data) => {
                    observer.next(data);
                });
            });
        };
        // emit issue update event
        this.notifyWatchListOnIssueUpdates = (issueDetails) => {
            console.debug('Emit issue update event:', issueDetails);
            this.socket.emit('issue-updates-client', issueDetails);
        };
        // listen to issue update event for notifying watchlist users
        this.issueUpdatesForWatchListListener = () => {
            console.debug('issueupdates listener');
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                this.socket.on('issue-updates-server', (data) => {
                    observer.next(data);
                });
            });
        };
        // initialize socket client
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.socketUrl, {
            'auto connect': true,
            'max reconnection attempts': 10,
            multiplex: false,
            'try multiple transports': true,
        });
    }
    // handle exceptions
    handleError(error) {
        console.error('Http Error:', error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message);
    }
    // get all issues for a id
    getAllIssuesByIdService(userInfo) {
        console.debug('Get All Issue Service', userInfo);
        const allIssuesRes = this.http.get(`${this.baseUrl}/issue/allIssues?userId=${userInfo.userId}`, this.httpHeaderOptions);
        return allIssuesRes;
    }
    // get allIssues in the system
    getFilteredIssues(filterOptions) {
        console.debug('filter issues in the system', filterOptions);
        const { userId, name, option, type } = filterOptions;
        const allIssues = this.http.get(`${this.baseUrl}/issue/filter?userId=${userId}&name=${name}&option=${option}&type=${type}`, this.httpHeaderOptions);
        return allIssues;
    }
    // get watchlist/assignee list
    getAllUsers(authDetails) {
        console.debug('Get all users service', authDetails);
        const { userId } = authDetails;
        const allUsers = this.http.get(`${this.baseUrl}/user/all?userId=${userId}`, this.httpHeaderOptions);
        return allUsers;
    }
    // create issue
    createIssue(issueDetails) {
        console.debug('Create issue service', issueDetails);
        const { userId } = issueDetails;
        const createdIssue = this.http.post(`${this.baseUrl}/issue/create?userId=${userId}`, issueDetails, this.httpHeaderOptions);
        return createdIssue;
    }
    // search Issue
    searchIssues(searchDeatils) {
        console.debug('Issue Search', searchDeatils);
        const { userId, search } = searchDeatils;
        const searchResults = this.http.get(`${this.baseUrl}/issue/search?userId=${userId}&search=${search}`, this.httpHeaderOptions);
        return searchResults;
    }
    // upload attachment
    uploadAttachment(fileDetails) {
        console.debug('Attachment upload:', fileDetails);
        const { userId, issueId, formData } = fileDetails;
        const uploadResults = this.http.post(`${this.baseUrl}/issue/upload?userId=${userId}&issueId=${issueId}`, formData, this.httpHeaderOptions);
        return uploadResults;
    }
    // update issue
    updateIssue(issueDetails) {
        console.debug('Update Issue:', issueDetails);
        const { userId } = issueDetails;
        const updatedIssues = this.http.post(`${this.baseUrl}/issue/update?userId=${userId}`, issueDetails, this.httpHeaderOptions);
        return updatedIssues;
    }
    // add comment
    manageCommentService(commentDetails) {
        console.debug('add comment:', commentDetails);
        const { userId, issueId, text, name, operation, commentId, } = commentDetails;
        let commentsOpsUrl = '';
        let body = {};
        if (operation === 'add') {
            commentsOpsUrl = `${this.baseUrl}/issue/comment?userId=${userId}&issueId=${issueId}&name=${name}`;
            body = Object.assign(Object.assign({}, body), { text });
        }
        else if (operation === 'edit') {
            commentsOpsUrl = `${this.baseUrl}/issue/edit/comment?userId=${userId}`;
            body = Object.assign(Object.assign({}, body), { text, commentId });
        }
        else if (operation === 'delete') {
            commentsOpsUrl = `${this.baseUrl}/issue/delete/comment?userId=${userId}&commentId=${commentId}`;
        }
        const commentActionResult = this.http.post(commentsOpsUrl, body, this.httpHeaderOptions);
        return commentActionResult;
    }
    openImageService(imageDetails) {
        const { userId, filename } = imageDetails;
        const img = this.http.get(`${this.baseUrl}/issue/attachment?userId=${userId}&filename=${filename}`, this.httpHeaderOptions);
        return img;
    }
    deleteAttachmentService(fileDetails) {
        const { filename, userId } = fileDetails;
        const deletedAttachment = this.http.delete(`${this.baseUrl}/issue/delete/attachment?userId=${userId}&filename=${filename}`, this.httpHeaderOptions);
        return deletedAttachment;
    }
}
IssuesService.ɵfac = function IssuesService_Factory(t) { return new (t || IssuesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
IssuesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IssuesService, factory: IssuesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssuesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "FbZd":
/*!*********************************************************!*\
  !*** ./src/app/issues/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issues.service */ "FULy");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng_social_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-social-login-module */ "Zm4g");









function DashboardComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_59_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const issue_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.viewSingleIssue(issue_r4.issueId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const issue_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r4.reporter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, issue_r4.createDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r4.status);
} }
function DashboardComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You are creating an Issue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-create-issue", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeModal", function DashboardComponent_ng_template_70_Template_app_create_issue_closeModal_4_listener() { const modal_r7 = ctx.$implicit; return modal_r7.close(); })("newCreatedIssue", function DashboardComponent_ng_template_70_Template_app_create_issue_newCreatedIssue_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateNewIssue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_70_Template_button_click_6_listener() { const modal_r7 = ctx.$implicit; return modal_r7.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r2.userId)("username", ctx_r2.userName)("name", ctx_r2.name);
} }
function DashboardComponent_tr_133_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_133_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const issue_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.viewSingleIssue(issue_r12.issueId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const issue_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12.reporter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, issue_r12.createDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12.status);
} }
class DashboardComponent {
    constructor(issueService, toaster, router, modalService, toast, authService) {
        this.issueService = issueService;
        this.toaster = toaster;
        this.router = router;
        this.modalService = modalService;
        this.toast = toast;
        this.authService = authService;
        this.allIssues = [];
        this.datasource = [];
        this.activePageDataChunks = [];
        // sort
        this.sortedData = [];
        this.dataSource = [];
        // single issue fields
        this.showSingleIssue = true;
        this.toastConfig = {
            timeOut: 1000,
        };
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('username');
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('userId');
        this.name = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('name');
        this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.pageSizeOptions = [5, 10];
        this.sortedData = this.activePageDataChunks.slice();
        this.showProgressBar = true;
        this.showSidebarMenu = true;
        if (this.userName == null ||
            this.userId == null ||
            this.userName === undefined ||
            this.userId === undefined) {
            this.router.navigate(['/login']);
            this.authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        }
    }
    // mobile implementation
    toggleSideMenu() {
        this.showSidebarMenu = !this.showSidebarMenu;
    }
    // init socket auth
    handShakeAuthentication() {
        this.issueService.initSocketAuthentication().subscribe((data) => {
            // emit authentication with authToken
            const authDetails = { userId: this.userId, authToken: this.authToken };
            this.issueService.authenticateUser(authDetails);
        });
        this.checkSocketStatus();
    }
    // auth status listener
    checkSocketStatus() {
        console.debug('Checking for auth--status');
        this.issueService.isUserSocketVerified().subscribe((data) => {
            // this.toaster.open({ text: data, type: 'info' });
            this.toast.success(`${data}`, 'Notification', this.toastConfig);
        });
        this.listenForAnyIssueUpdates();
    }
    // listen for any issue updates and notify to the users
    listenForAnyIssueUpdates() {
        console.debug('listen for any issue updates');
        this.issueService
            .issueUpdatesForWatchListListener()
            .subscribe((data) => {
            const { issueId, field, message, watchList } = data;
            console.debug('issue update listener:', data);
            if (watchList.includes(this.userId)) {
                // current user is in the watchlist ,show notification
                const notification = this.toast.info(`${message}`, 'Issue Updated');
                // observer function when notification is clicked - show the updated issueId
                notification.onTap.subscribe(() => {
                    // fetch all the issues
                    // this.filterIssues(this.userId, 'all', 'status', this.name);
                    this.viewSingleIssue(issueId, 'notification');
                });
            }
        });
    }
    getAllAvalableIssues() {
        const filterOptions = {
            name: this.name,
            userId: this.userId,
            option: 'all',
            type: 'status',
        };
        this.issueService.getFilteredIssues(filterOptions).subscribe(
        // success
        (response) => {
            if (response.status === 200) {
                // clear any previous data
                this.allAvailableIssues = response.data;
            }
        }, 
        // error
        (error) => {
            console.warn('Error Login', error);
            // this.toaster.open({ text: error.error.message, type: 'danger' });
        });
    }
    // set page chunks
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput
            .split(',')
            .map((str) => +str);
    }
    ngOnInit() {
        this.getAllIssues();
        this.fetchAllUsers();
        this.showFilteredIssues = false;
        this.handShakeAuthentication();
        setTimeout(() => this.getAllAvalableIssues(), 1200);
    }
    // page event change
    onPageChanged(e) {
        const firstCut = e.pageIndex * e.pageSize;
        const secondCut = firstCut + e.pageSize;
        this.activePageDataChunks = this.allIssues.slice(firstCut, secondCut);
    }
    // listener for new issue creates
    updateNewIssue(values) {
        console.debug('new issue from create-issue-compoennet', values);
        this.activePageDataChunks.push(values);
    }
    // logout user
    logout() {
        console.debug('logout clicks');
        this.showProgressBar = false;
        console.debug('show progress bar:', this.showProgressBar);
        // delete cookies
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('name');
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('email');
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('username');
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('userId');
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('authToken');
        // delete localstorage
        localStorage.removeItem('userInfo');
        // this.signOut();
        setTimeout(() => this.router.navigate(['/login']), 1500);
        this.showProgressBar = true;
    }
    signOut() {
        this.authService.signOut();
    }
    getAllIssues() {
        console.debug('get all issue api call');
        const userInfo = {
            userId: this.userId,
        };
        console.debug(userInfo);
        this.issueService.getAllIssuesByIdService(userInfo).subscribe(
        // success response
        (response) => {
            console.debug('All issues response');
            this.allIssues = response.data;
            if (response.status === 200) {
                // conditional render the issue table
                this.showSingleIssue = true;
                if (this.allIssues.length <= 0) {
                    this.showCategorizedIssues = true;
                    this.isIssueListEmpty = true;
                    this.emptyIssueMessage = 'No Issues Found';
                    this.displayFilterType = 'your assgined issues';
                }
                else {
                    this.showCategorizedIssues = false;
                    this.displayFilterType = 'your assgined issues';
                    this.isIssueListEmpty = false;
                }
                // init pagination values
                this.pageSize = 5;
                this.length = this.allIssues.length;
                // chunks
                this.activePageDataChunks = this.allIssues.slice(0, this.pageSize);
                console.debug('active page chunks:', this.activePageDataChunks);
                // toast
                // this.toaster.open({ text: 'Issues Fetched', type: 'success' });
                this.toast.success(`${response.message}`, 'Issue', this.toastConfig);
            }
        }, 
        // error handler
        (error) => {
            console.warn('Error Login', error);
            // this.toaster.open({ text: 'Something went wrong', type: 'danger' });
            this.toast.error('Something went wrong', 'Issue', this.toastConfig);
        });
    }
    // filter issues based on conditions
    filterIssues(userId, option, type, name, view) {
        const filterOptions = {
            userId,
            option,
            type,
            name,
        };
        console.debug(filterOptions);
        switch (option) {
            case 'all':
                this.displayFilterType = 'All issues in the tracker';
                break;
            case 'reportedByMe':
                this.displayFilterType = 'issues reported by you';
                break;
            case 'openIssues':
                this.displayFilterType = 'your open issues';
                break;
            case 'closedIssues':
                this.displayFilterType = 'your resolved issues';
                break;
            case 'resolvedRecent':
                this.displayFilterType = 'recent resolved issues';
                break;
            case 'updatedRecent':
                this.displayFilterType = 'recent updated issues';
                break;
        }
        this.issueService.getFilteredIssues(filterOptions).subscribe(
        // success
        (response) => {
            if (response.status === 200) {
                // clear any previous data
                this.allIssues = [];
                this.allIssues = response.data;
                // conditional render issue table
                if (this.allIssues.length <= 0) {
                    this.showCategorizedIssues = true;
                    this.emptyIssueMessage = 'No Issues Found';
                    this.isIssueListEmpty = true;
                }
                else {
                    // init pagination values
                    this.pageSize = 5;
                    this.length = this.allIssues.length;
                    // chunks
                    this.activePageDataChunks = this.allIssues.slice(0, this.pageSize);
                    console.debug('active page chunks:', this.activePageDataChunks);
                    // this.toaster.open({ text: 'Filtered Issues', type: 'success' });
                    this.toast.success(`${response.message}`, 'Filter Issue', this.toastConfig);
                    // show categorized view and hide the filtered one
                    this.showCategorizedIssues = false;
                    this.showSingleIssue = true;
                    this.isIssueListEmpty = false;
                }
                if (view === 'mobile') {
                    this.showSidebarMenu = true;
                }
            }
        }, 
        // error
        (error) => {
            console.warn('Error Login', error);
            // this.toaster.open({ text: error.error.message, type: 'danger' });
            this.toast.success(`${error.error.message}`, 'Filter Issue', this.toastConfig);
        });
    }
    // open create modal
    open(content) {
        // console.debug('modal open::', ops, id);
        this.modalService
            .open(content, {
            ariaLabelledBy: 'modal-create',
            size: 'lg',
            scrollable: true,
        })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
        // console.debug('Modal closed::', this.closeResult);
    }
    // sort columns asending and decending
    sortData(sort) {
        const data = this.activePageDataChunks.slice();
        if (!sort.active || sort.direction === '') {
            this.activePageDataChunks = data;
            return;
        }
        this.activePageDataChunks = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'title':
                    return compareIssues(a.title, b.title, isAsc);
                case 'reporter':
                    return compareIssues(a.reporter, b.reporter, isAsc);
                case 'createDate':
                    return compareIssues(a.createDate, b.createDate, isAsc);
                case 'status':
                    return compareIssues(a.status, b.status, isAsc);
                default:
                    return 0;
            }
        });
    }
    // search issues
    searchIssues(search) {
        console.debug('Seach issue service call', search);
        const searchDetails = {
            userId: this.userId,
            search,
        };
        this.issueService.searchIssues(searchDetails).subscribe(
        // success
        (response) => {
            console.debug('Search issue response:', response);
            if (response.status === 200) {
                this.allIssues = response.data;
                // conditional render the issue table
                if (this.allIssues.length <= 0) {
                    this.showCategorizedIssues = true;
                    this.isIssueListEmpty = true;
                    this.emptyIssueMessage = 'No Issues Found';
                    this.displayFilterType = 'Search Results';
                }
                else {
                    this.showCategorizedIssues = false;
                    this.showSingleIssue = true;
                    this.isIssueListEmpty = false;
                    this.displayFilterType = 'Search Results';
                }
                // init pagination values
                this.pageSize = 5;
                this.length = this.allIssues.length;
                // chunks
                this.activePageDataChunks = this.allIssues.slice(0, this.pageSize);
                console.debug('active page chunks:', this.activePageDataChunks);
                // this.toaster.open({ text: 'Searched Issues', type: 'success' });
                this.toast.success(`${response.message}`, 'Search Issue', this.toastConfig);
            }
        }, 
        // error
        (error) => {
            console.warn('Error Fetching Issues', error);
            // this.toaster.open({ text: error.error.message, type: 'danger' });
            this.toast.success(`${error.error.message}`, 'Search Issue', this.toastConfig);
        });
    }
    // fetch all users
    fetchAllUsers() {
        console.debug('user id from dashboard-get allusers', this.userId);
        const authDetails = {
            userId: this.userId,
        };
        this.issueService.getAllUsers(authDetails).subscribe(
        // handle success response
        (response) => {
            if (response.status === 200) {
                this.allUsersList = response.data;
            }
        }, 
        // handle error response
        (error) => {
            console.warn('Error fetching user details', error);
            // this.toaster.open({ text: 'Something went wrong', type: 'danger' });
            this.toast.success('Something went wrong', 'All Users', this.toastConfig);
        });
    }
    // single issue view
    viewSingleIssue(issueId, type) {
        console.debug('View single Issue component', issueId);
        // find the single issue details
        if (type === 'notification') {
            console.debug('type:-notification', this.allAvailableIssues);
            this.issueDetails = this.allAvailableIssues.find((iss) => iss.issueId === issueId);
        }
        else {
            this.issueDetails = this.activePageDataChunks.find((iss) => iss.issueId === issueId);
        }
        console.debug('issueDetails', this.issueDetails);
        this.issueDetails.assigneeOptions = this.allUsersList;
        this.issueDetails.watchListOptions = this.allUsersList;
        console.debug('issuedetails-modifying additional onbj', this.issueDetails);
        // update the assignee name
        const currentAssigneeObject = this.issueDetails.watchListOptions.find((usr) => {
            return usr.userId === this.issueDetails.assignee;
        });
        this.issueDetails.assigneeName = currentAssigneeObject.name;
        // filter unique values of watchers
        const uniqueWatchers = this.removeDuplicates(this.issueDetails.watchList, '_id');
        console.debug('uniquewatchlist', uniqueWatchers);
        this.issueDetails.watchList = uniqueWatchers;
        // compute isWatcher flag for current logged in user
        console.debug('computing isWatcher:', this.issueDetails.watchList, this.userId);
        let isWatcher = false;
        this.issueDetails.watchList.map((usr) => {
            if (usr.userId === this.userId) {
                isWatcher = true;
            }
        });
        this.issueDetails.isWatcher = isWatcher;
        // hide categorized table view
        this.showCategorizedIssues = true;
        this.showSingleIssue = false;
        console.debug('Single Issue details', this.issueDetails);
        /*this.toaster.open({
          text: `openning ${this.issueDetails.title}`,
          type: 'dark',
        });*/
        this.toast.success(`openning ${this.issueDetails.title}`, 'View Issue', this.toastConfig);
    }
    removeDuplicates(array, objectProperty) {
        const newArray = [];
        const lookupObject = {};
        for (const i in array) {
            if (i) {
                lookupObject[array[i][objectProperty]] = array[i];
            }
        }
        for (const i in lookupObject) {
            if (i) {
                newArray.push(lookupObject[i]);
            }
        }
        return newArray;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_social_login_module__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 145, vars: 25, consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "dashboard"], [1, "dashboard__navbar"], [1, "navbar__icons"], ["src", "assets/virus.png", "alt", "", 3, "click"], [1, "dashboard__navbar__welcome"], ["mat-raised-button", "", "color", "primary", "title", "create a issue", 1, "navbar__button__create", 3, "click"], ["type", "search", "name", "search", "placeholder", "Search title,desc or reporter", "title", "search by keywords", 1, "navbar__input__search", 3, "change"], ["src", "assets/shutdown-96.png", "title", "logout", "alt", "", 3, "click"], [3, "hidden"], ["mode", "indeterminate"], [1, "dashboard__main__content"], [1, "dasboard__filter__sidebar"], [1, "dasboard__username"], [1, "option__bold__text"], [1, "div__break__line"], [1, "dashboard__filter__list"], [1, "filters", 3, "click"], [1, "dashboard__issue__list", 3, "hidden"], [1, "issue__table__header"], [2, "color", "blueviolet"], [1, "issue__table"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "title"], ["mat-sort-header", "reporter"], ["mat-sort-header", "createDate"], ["mat-sort-header", "status"], [4, "ngFor", "ngForOf"], [1, "paginator__div"], [1, "issues__paginator", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "issuee__not__found"], [1, "material-icons"], [1, "dashboard__footbar"], [3, "issueDetails"], ["createModal", ""], [1, "dashboard__mobile"], [1, "menu__bar", 3, "hidden"], ["title", "menu", 1, "material-icons", "menu__bar__icon", 3, "click"], [1, "dashboard__sideBar", 3, "hidden"], [1, "sidebar__responsive"], [1, "sidebar_responsive_header"], [1, "close__icon"], ["title", "close", 1, "material-icons", 3, "click"], [1, "sidebar_responsive__userinfo"], ["mat-raised-button", "", "color", "primary", "title", "create a issue", 1, "navbar__button__responsive", 3, "click"], [1, "sidebar__input"], ["type", "search", "name", "search", "placeholder", "Search title,desc", "title", "search by keywords", 1, "navbar__input__search__res", 3, "change"], [1, "sidebar__filters"], [1, "logout__btn"], [1, "issue_list__mobile", 3, "hidden"], [1, "issue__table__mobile"], [1, "paginator__div__mobile"], [1, "issues__paginator__mobile", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "issuee__not__found__mobile"], [1, "title__col", 3, "click"], [1, "modal-header"], ["id", "modal-create", 1, "modal-title", "mt-3", "ml-3", "font-weight-bold"], [1, "modal-body", "modal__size"], [3, "userId", "username", "name", "closeModal", "newCreatedIssue"], [1, "modal-footer"], ["type", "button", "mat-raised-button", "", "color", "warn", 1, "mt-2", "mr-2", "mb-2", 3, "click"], [1, "title__col__mobile", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_4_listener() { return ctx.getAllIssues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcome To iTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx.open(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_Template_input_change_14_listener($event) { return ctx.searchIssues($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_27_listener() { return ctx.getAllIssues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Main view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_29_listener() { return ctx.filterIssues(ctx.userId, "all", "status", ctx.userName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " All Issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_31_listener() { return ctx.filterIssues(ctx.userId, "reportedByMe", "status", ctx.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Reported by me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_33_listener() { return ctx.filterIssues(ctx.userId, "openIssues", "status", ctx.userName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " My Open Issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_35_listener() { return ctx.filterIssues(ctx.userId, "closedIssues", "status", ctx.userName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Done Issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_37_listener() { return ctx.filterIssues(ctx.userId, "resolvedRecent", "time", ctx.userName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Resolved recently ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_39_listener() { return ctx.filterIssues(ctx.userId, "updatedRecent", "time", ctx.userName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Updated recently ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Currently showing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function DashboardComponent_Template_table_matSortChange_49_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "created On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, DashboardComponent_tr_59_Template, 10, 6, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DashboardComponent_Template_mat_paginator_page_61_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-single-issue", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, DashboardComponent_ng_template_70_Template, 8, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_i_click_74_listener() { return ctx.toggleSideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_79_listener() { return ctx.getAllIssues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Welcome To iTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_i_click_83_listener() { return ctx.toggleSideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx.open(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_Template_input_change_93_listener($event) { return ctx.searchIssues($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_98_listener() { return ctx.getAllIssues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Main view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_100_listener() { return ctx.filterIssues(ctx.userId, "all", "status", ctx.userName, "mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " All Issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_102_listener() { return ctx.filterIssues(ctx.userId, "reportedByMe", "status", ctx.name, "mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Reported by me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_104_listener() { return ctx.filterIssues(ctx.userId, "openIssues", "status", ctx.userName, "mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " My Open Issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_106_listener() { return ctx.filterIssues(ctx.userId, "closedIssues", "status", ctx.userName, "mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Done Issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_108_listener() { return ctx.filterIssues(ctx.userId, "resolvedRecent", "time", ctx.userName, "mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Resolved recently ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_110_listener() { return ctx.filterIssues(ctx.userId, "updatedRecent", "time", ctx.userName, "mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Updated recently ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_114_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Currently showing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function DashboardComponent_Template_table_matSortChange_123_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Reporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "created On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, DashboardComponent_tr_133_Template, 10, 6, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-paginator", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DashboardComponent_Template_mat_paginator_page_135_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "app-single-issue", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showProgressBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showCategorizedIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayFilterType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activePageDataChunks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isIssueListEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.emptyIssueMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showSingleIssue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("issueDetails", ctx.issueDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSidebarMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showSidebarMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showCategorizedIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayFilterType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activePageDataChunks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isIssueListEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.emptyIssueMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showSingleIssue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("issueDetails", ctx.issueDetails);
    } }, styles: ["*[_ngcontent-%COMP%] {\n  --tracker-color: #50b7f5;\n  --tracker-bg: #cad4dd;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0px;\n  padding: 0px;\n  --navbar-grad: radial-gradient(\n    circle at top left,\n    rgb(195, 195, 195) 0%,\n    rgb(195, 195, 195) 2%,\n    rgb(202, 202, 202) 2%,\n    rgb(202, 202, 202) 23%,\n    rgb(209, 209, 209) 23%,\n    rgb(209, 209, 209) 55%,\n    rgb(217, 217, 217) 55%,\n    rgb(217, 217, 217) 80%,\n    rgb(224, 224, 224) 80%,\n    rgb(224, 224, 224) 86%,\n    rgb(231, 231, 231) 86%,\n    rgb(231, 231, 231) 96%,\n    rgb(238, 238, 238) 96%,\n    rgb(238, 238, 238) 100%\n  );\n  --bg-grad: linear-gradient(\n      158deg,\n      rgba(84, 84, 84, 0.03) 0%,\n      rgba(84, 84, 84, 0.03) 20%,\n      rgba(219, 219, 219, 0.03) 20%,\n      rgba(219, 219, 219, 0.03) 40%,\n      rgba(54, 54, 54, 0.03) 40%,\n      rgba(54, 54, 54, 0.03) 60%,\n      rgba(99, 99, 99, 0.03) 60%,\n      rgba(99, 99, 99, 0.03) 80%,\n      rgba(92, 92, 92, 0.03) 80%,\n      rgba(92, 92, 92, 0.03) 100%\n    ),\n    linear-gradient(\n      45deg,\n      rgba(221, 221, 221, 0.02) 0%,\n      rgba(221, 221, 221, 0.02) 14.286%,\n      rgba(8, 8, 8, 0.02) 14.286%,\n      rgba(8, 8, 8, 0.02) 28.572%,\n      rgba(52, 52, 52, 0.02) 28.572%,\n      rgba(52, 52, 52, 0.02) 42.858%,\n      rgba(234, 234, 234, 0.02) 42.858%,\n      rgba(234, 234, 234, 0.02) 57.144%,\n      rgba(81, 81, 81, 0.02) 57.144%,\n      rgba(81, 81, 81, 0.02) 71.42999999999999%,\n      rgba(239, 239, 239, 0.02) 71.43%,\n      rgba(239, 239, 239, 0.02) 85.71600000000001%,\n      rgba(187, 187, 187, 0.02) 85.716%,\n      rgba(187, 187, 187, 0.02) 100.002%\n    ),\n    linear-gradient(\n      109deg,\n      rgba(33, 33, 33, 0.03) 0%,\n      rgba(33, 33, 33, 0.03) 12.5%,\n      rgba(147, 147, 147, 0.03) 12.5%,\n      rgba(147, 147, 147, 0.03) 25%,\n      rgba(131, 131, 131, 0.03) 25%,\n      rgba(131, 131, 131, 0.03) 37.5%,\n      rgba(151, 151, 151, 0.03) 37.5%,\n      rgba(151, 151, 151, 0.03) 50%,\n      rgba(211, 211, 211, 0.03) 50%,\n      rgba(211, 211, 211, 0.03) 62.5%,\n      rgba(39, 39, 39, 0.03) 62.5%,\n      rgba(39, 39, 39, 0.03) 75%,\n      rgba(55, 55, 55, 0.03) 75%,\n      rgba(55, 55, 55, 0.03) 87.5%,\n      rgba(82, 82, 82, 0.03) 87.5%,\n      rgba(82, 82, 82, 0.03) 100%\n    ),\n    linear-gradient(\n      348deg,\n      rgba(42, 42, 42, 0.02) 0%,\n      rgba(42, 42, 42, 0.02) 20%,\n      rgba(8, 8, 8, 0.02) 20%,\n      rgba(8, 8, 8, 0.02) 40%,\n      rgba(242, 242, 242, 0.02) 40%,\n      rgba(242, 242, 242, 0.02) 60%,\n      rgba(42, 42, 42, 0.02) 60%,\n      rgba(42, 42, 42, 0.02) 80%,\n      rgba(80, 80, 80, 0.02) 80%,\n      rgba(80, 80, 80, 0.02) 100%\n    ),\n    linear-gradient(\n      120deg,\n      rgba(106, 106, 106, 0.03) 0%,\n      rgba(106, 106, 106, 0.03) 14.286%,\n      rgba(67, 67, 67, 0.03) 14.286%,\n      rgba(67, 67, 67, 0.03) 28.572%,\n      rgba(134, 134, 134, 0.03) 28.572%,\n      rgba(134, 134, 134, 0.03) 42.858%,\n      rgba(19, 19, 19, 0.03) 42.858%,\n      rgba(19, 19, 19, 0.03) 57.144%,\n      rgba(101, 101, 101, 0.03) 57.144%,\n      rgba(101, 101, 101, 0.03) 71.42999999999999%,\n      rgba(205, 205, 205, 0.03) 71.43%,\n      rgba(205, 205, 205, 0.03) 85.71600000000001%,\n      rgba(53, 53, 53, 0.03) 85.716%,\n      rgba(53, 53, 53, 0.03) 100.002%\n    ),\n    linear-gradient(\n      45deg,\n      rgba(214, 214, 214, 0.03) 0%,\n      rgba(214, 214, 214, 0.03) 16.667%,\n      rgba(255, 255, 255, 0.03) 16.667%,\n      rgba(255, 255, 255, 0.03) 33.334%,\n      rgba(250, 250, 250, 0.03) 33.334%,\n      rgba(250, 250, 250, 0.03) 50.001000000000005%,\n      rgba(231, 231, 231, 0.03) 50.001%,\n      rgba(231, 231, 231, 0.03) 66.668%,\n      rgba(241, 241, 241, 0.03) 66.668%,\n      rgba(241, 241, 241, 0.03) 83.33500000000001%,\n      rgba(31, 31, 31, 0.03) 83.335%,\n      rgba(31, 31, 31, 0.03) 100.002%\n    ),\n    linear-gradient(\n      59deg,\n      rgba(224, 224, 224, 0.03) 0%,\n      rgba(224, 224, 224, 0.03) 12.5%,\n      rgba(97, 97, 97, 0.03) 12.5%,\n      rgba(97, 97, 97, 0.03) 25%,\n      rgba(143, 143, 143, 0.03) 25%,\n      rgba(143, 143, 143, 0.03) 37.5%,\n      rgba(110, 110, 110, 0.03) 37.5%,\n      rgba(110, 110, 110, 0.03) 50%,\n      rgba(34, 34, 34, 0.03) 50%,\n      rgba(34, 34, 34, 0.03) 62.5%,\n      rgba(155, 155, 155, 0.03) 62.5%,\n      rgba(155, 155, 155, 0.03) 75%,\n      rgba(249, 249, 249, 0.03) 75%,\n      rgba(249, 249, 249, 0.03) 87.5%,\n      rgba(179, 179, 179, 0.03) 87.5%,\n      rgba(179, 179, 179, 0.03) 100%\n    ),\n    linear-gradient(\n      241deg,\n      rgba(58, 58, 58, 0.02) 0%,\n      rgba(58, 58, 58, 0.02) 25%,\n      rgba(124, 124, 124, 0.02) 25%,\n      rgba(124, 124, 124, 0.02) 50%,\n      rgba(254, 254, 254, 0.02) 50%,\n      rgba(254, 254, 254, 0.02) 75%,\n      rgba(52, 52, 52, 0.02) 75%,\n      rgba(52, 52, 52, 0.02) 100%\n    ),\n    linear-gradient(90deg, #ffffff, #ffffff);\n}\n.dashboard[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.dashboard__mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.dashboard__navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  background-image: var(--navbar-grad);\n}\n.dashboard__navbar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.navbar__icons[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.navbar__icons[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 15px;\n  font-weight: 800;\n  margin-left: 3px;\n}\ncode[_ngcontent-%COMP%] {\n  color: blue;\n  display: inline-block;\n  margin-left: 2px;\n  font-size: 15px;\n  font-weight: 800;\n}\n.dashboard__navbar__welcome[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 18px;\n  font-weight: 800;\n  color: #171a21;\n}\n.navbar__button__create[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  font-weight: 700 !important;\n  text-transform: inherit !important;\n  cursor: pointer !important;\n  margin-left: 370px !important;\n}\n.navbar__input__search[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border-color: #7a93ac;\n  font-size: 15px;\n  padding-left: 10px;\n}\n.dashboard__navbar[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(64, 148, 175) !important;\n  color: aliceblue !important;\n}\n.dashboard__main__content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.dasboard__filter__sidebar[_ngcontent-%COMP%] {\n  flex: 0.2;\n  min-width: 250px;\n  padding-left: 20px;\n  padding-right: 10px;\n  padding-top: 50px;\n  background-image: var(--navbar-grad);\n  border-right: 1px solid var(--bg-grad);\n}\n.option__bold__text[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n.div__break__line[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: gray;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.dashboard__filter__list[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n.filters[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  padding-top: 16px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.filters[_ngcontent-%COMP%]:hover {\n  background-image: var(--bg-grad);\n  color: blue;\n  font-size: 20px;\n  font-weight: 900;\n  border-radius: 9px;\n  margin-left: 5px;\n  transition: color 400ms ease-out;\n}\n.dashboard__issue__list[_ngcontent-%COMP%] {\n  flex: 0.8;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  background-image: var(--bg-grad);\n}\n.issue__list__main__div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  max-width: 130px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.issue__table[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 10px;\n}\n.title__col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: blue;\n  cursor: pointer;\n}\n.title__col[_ngcontent-%COMP%]:hover {\n  font-weight: 900;\n  font-size: 16px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #dddddd;\n  background-image: var(--bg-grad);\n}\n.issue__table__header[_ngcontent-%COMP%] {\n  padding-top: 17px;\n  margin-top: 20px;\n  margin-bottom: 4px;\n  margin-left: 10px;\n  font-weight: 800;\n  font-size: 14px;\n}\n.table__header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.sort__icon[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: flex-end;\n  margin-top: -25px;\n}\n.dashboard__issue__filtered__list[_ngcontent-%COMP%] {\n  flex: 0.8;\n  background-image: var(--bg-grad);\n}\n.issue__list__filtered__div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.issue__card__filtered[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 210px;\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.issue__list__backlog[_ngcontent-%COMP%] {\n  flex: 0.25;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-right: 1px solid var(--twitter-bg);\n}\n.issue__list__progress[_ngcontent-%COMP%] {\n  flex: 0.25;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-right: 1px solid var(--twitter-bg);\n}\n.issue__list__test[_ngcontent-%COMP%] {\n  flex: 0.25;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-right: 1px solid var(--twitter-bg);\n}\n.issue__list__resolved[_ngcontent-%COMP%] {\n  flex: 0.25;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-right: 1px solid var(--twitter-bg);\n}\n.issue__card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 210px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 22px;\n  margin-bottom: 16px;\n  word-break: keep-all;\n}\n.issue__column__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0px;\n  padding-top: 5px;\n  padding-left: 28px;\n  padding-right: 5px;\n  font-weight: 800;\n  font-size: 14px;\n  margin-top: 7px;\n}\n.col__break__line[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: gray;\n  width: 238px;\n  margin-left: 8px;\n  margin-right: 0px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.issue__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  color: #202c59;\n}\n.issue__priority__high[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  color: #931f1d;\n}\n.issue__priority__medium[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  color: green;\n}\n.issue__priority__low[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  color: black;\n}\n.mat-paginator-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 8px;\n  flex-wrap: wrap-reverse;\n  width: 50% !important;\n}\n.issues__paginator[_ngcontent-%COMP%] {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding: 0px !important;\n  background-image: var(--bg-grad) !important;\n}\n.paginator__div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 900px;\n  top: 550px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  width: 500px !important;\n}\n.issuee__not__found[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 230px;\n  font-weight: 900;\n  font-size: 20px;\n  color: #931f1d;\n}\n\n@media (max-width: 800px) {\n  .dashboard__mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dashboard[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard__navbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dasboard__filter__sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard__issue__list[_ngcontent-%COMP%] {\n    display: block;\n    width: 300px;\n    background-image: var(--bg-grad);\n  }\n  .issue__list__main__div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    max-width: 130px;\n    margin-left: auto;\n    margin-right: auto;\n    overflow-x: auto;\n  }\n  .issue__table[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .dashboard__mobile[_ngcontent-%COMP%] {\n    height: 100vh;\n    background-image: var(--bg-grad);\n  }\n  \n  .menu__bar__icon[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    margin: 1px 0px 0px 1px !important;\n    font-size: xx-large;\n  }\n  .sidebar__responsive_menubar[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar__responsive[_ngcontent-%COMP%] {\n    display: block;\n    border-right: 1px solid gray;\n    min-width: 300px;\n    margin-top: -58px;\n    padding-left: 20px;\n    padding-right: 10px;\n    position: fixed;\n    z-index: 1;\n    top: 58px;\n    left: 0;\n    overflow-x: hidden;\n    transition: 0.9s;\n    background-image: var(--navbar-grad);\n  }\n  img[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin: 6px 0px 0px 0px;\n  }\n  .close__icon[_ngcontent-%COMP%] {\n    margin: 5px 0px 0px 0px;\n  }\n  .sidebar_responsive_header[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom: 1px solid var(--twitter-color);\n    justify-content: space-between;\n    margin: 2px 0px 9px 0px;\n  }\n  .sidebar_responsive__userinfo[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    font-weight: 800;\n    display: flex;\n    justify-content: space-between;\n  }\n  .sidebar_responsive__userinfo[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    margin: 14px 1px 12px 1px;\n  }\n  .navbar__button__responsive[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    font-weight: 700 !important;\n    text-transform: inherit !important;\n    cursor: pointer !important;\n    margin: 8px 1px 12px 1px;\n  }\n  .navbar__input__search__res[_ngcontent-%COMP%] {\n    border-radius: 6px;\n    border-color: #7a93ac;\n    font-size: 17px;\n    line-height: 2;\n  }\n  .sidebar__input[_ngcontent-%COMP%] {\n    margin: 8px 1px 12px 1px;\n  }\n  .sidebar__filters[_ngcontent-%COMP%] {\n    margin-top: 18px;\n  }\n  .filters[_ngcontent-%COMP%] {\n    padding-bottom: 16px;\n    padding-top: 1px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .logout__btn[_ngcontent-%COMP%] {\n    margin-bottom: 4px;\n  }\n  .logout__btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .issue__table__mobile[_ngcontent-%COMP%] {\n    margin: 52px 9px 0px 8px;\n  }\n  .issue__table__header[_ngcontent-%COMP%] {\n    padding-top: 17px;\n    margin-top: 0px;\n    margin-bottom: 4px;\n    margin-left: 10px;\n    font-weight: 800;\n    font-size: 14px;\n  }\n  table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n    border: 1px solid #ddd;\n  }\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 6px;\n  }\n  .title__col__mobile[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: blue;\n    cursor: pointer;\n  }\n  .title__col__mobile[_ngcontent-%COMP%]:hover {\n    font-weight: 900;\n    font-size: 16px;\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline;\n  }\n  .issues__paginator__mobile[_ngcontent-%COMP%] {\n    width: -webkit-fit-content !important;\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n    padding: 0px !important;\n    background-image: var(--bg-grad) !important;\n  }\n\n  .paginator__div__mobile[_ngcontent-%COMP%] {\n    margin: 4px 0px 0px 0px;\n  }\n  .issuee__not__found__mobile[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    font-weight: 900;\n    font-size: 20px;\n    color: #931f1d;\n    position: absolute;\n    top: 300px;\n    left: 86px;\n  }\n\n  .sidebar_responsive_header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-weight: 800;\n    font-size: 15px;\n    padding: 5px;\n    margin-bottom: 9px;\n  }\n\n  .sidebar__responsive__profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 10px;\n    margin-left: -43px;\n  }\n  .sidebar__responsive__span[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    color: gray;\n    font-size: 14px;\n  }\n  .sidebar__responsive__number[_ngcontent-%COMP%] {\n    font-weight: 200;\n    font-size: 14px;\n    margin-left: 0px;\n  }\n  .sideBarOptions[_ngcontent-%COMP%]    > .MuiSvgIcon-root[_ngcontent-%COMP%] {\n    padding: 15px 15px 15px 0px;\n  }\n  .sideBarOptions[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    font-weight: 450;\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkM7RUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0E0SDBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDhDQUE4QztFQUM5QywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsU0FBUztFQUNULDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUNBQTZCO0VBQTdCLGtDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQUM3QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0Esc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQ0FBZ0M7RUFDbEM7RUFDQSxvQkFBb0I7RUFDcEI7SUFDRSxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDhCQUE4QjtJQUM5Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUNBQStCO1lBQS9CLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UscUNBQTZCO0lBQTdCLGtDQUE2QjtJQUE3Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgLS10cmFja2VyLWNvbG9yOiAjNTBiN2Y1O1xuICAtLXRyYWNrZXItYmc6ICNjYWQ0ZGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS1uYXZiYXItZ3JhZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSBhdCB0b3AgbGVmdCxcbiAgICByZ2IoMTk1LCAxOTUsIDE5NSkgMCUsXG4gICAgcmdiKDE5NSwgMTk1LCAxOTUpIDIlLFxuICAgIHJnYigyMDIsIDIwMiwgMjAyKSAyJSxcbiAgICByZ2IoMjAyLCAyMDIsIDIwMikgMjMlLFxuICAgIHJnYigyMDksIDIwOSwgMjA5KSAyMyUsXG4gICAgcmdiKDIwOSwgMjA5LCAyMDkpIDU1JSxcbiAgICByZ2IoMjE3LCAyMTcsIDIxNykgNTUlLFxuICAgIHJnYigyMTcsIDIxNywgMjE3KSA4MCUsXG4gICAgcmdiKDIyNCwgMjI0LCAyMjQpIDgwJSxcbiAgICByZ2IoMjI0LCAyMjQsIDIyNCkgODYlLFxuICAgIHJnYigyMzEsIDIzMSwgMjMxKSA4NiUsXG4gICAgcmdiKDIzMSwgMjMxLCAyMzEpIDk2JSxcbiAgICByZ2IoMjM4LCAyMzgsIDIzOCkgOTYlLFxuICAgIHJnYigyMzgsIDIzOCwgMjM4KSAxMDAlXG4gICk7XG4gIC0tYmctZ3JhZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTU4ZGVnLFxuICAgICAgcmdiYSg4NCwgODQsIDg0LCAwLjAzKSAwJSxcbiAgICAgIHJnYmEoODQsIDg0LCA4NCwgMC4wMykgMjAlLFxuICAgICAgcmdiYSgyMTksIDIxOSwgMjE5LCAwLjAzKSAyMCUsXG4gICAgICByZ2JhKDIxOSwgMjE5LCAyMTksIDAuMDMpIDQwJSxcbiAgICAgIHJnYmEoNTQsIDU0LCA1NCwgMC4wMykgNDAlLFxuICAgICAgcmdiYSg1NCwgNTQsIDU0LCAwLjAzKSA2MCUsXG4gICAgICByZ2JhKDk5LCA5OSwgOTksIDAuMDMpIDYwJSxcbiAgICAgIHJnYmEoOTksIDk5LCA5OSwgMC4wMykgODAlLFxuICAgICAgcmdiYSg5MiwgOTIsIDkyLCAwLjAzKSA4MCUsXG4gICAgICByZ2JhKDkyLCA5MiwgOTIsIDAuMDMpIDEwMCVcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDQ1ZGVnLFxuICAgICAgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjAyKSAwJSxcbiAgICAgIHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4wMikgMTQuMjg2JSxcbiAgICAgIHJnYmEoOCwgOCwgOCwgMC4wMikgMTQuMjg2JSxcbiAgICAgIHJnYmEoOCwgOCwgOCwgMC4wMikgMjguNTcyJSxcbiAgICAgIHJnYmEoNTIsIDUyLCA1MiwgMC4wMikgMjguNTcyJSxcbiAgICAgIHJnYmEoNTIsIDUyLCA1MiwgMC4wMikgNDIuODU4JSxcbiAgICAgIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4wMikgNDIuODU4JSxcbiAgICAgIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4wMikgNTcuMTQ0JSxcbiAgICAgIHJnYmEoODEsIDgxLCA4MSwgMC4wMikgNTcuMTQ0JSxcbiAgICAgIHJnYmEoODEsIDgxLCA4MSwgMC4wMikgNzEuNDI5OTk5OTk5OTk5OTklLFxuICAgICAgcmdiYSgyMzksIDIzOSwgMjM5LCAwLjAyKSA3MS40MyUsXG4gICAgICByZ2JhKDIzOSwgMjM5LCAyMzksIDAuMDIpIDg1LjcxNjAwMDAwMDAwMDAxJSxcbiAgICAgIHJnYmEoMTg3LCAxODcsIDE4NywgMC4wMikgODUuNzE2JSxcbiAgICAgIHJnYmEoMTg3LCAxODcsIDE4NywgMC4wMikgMTAwLjAwMiVcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEwOWRlZyxcbiAgICAgIHJnYmEoMzMsIDMzLCAzMywgMC4wMykgMCUsXG4gICAgICByZ2JhKDMzLCAzMywgMzMsIDAuMDMpIDEyLjUlLFxuICAgICAgcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjAzKSAxMi41JSxcbiAgICAgIHJnYmEoMTQ3LCAxNDcsIDE0NywgMC4wMykgMjUlLFxuICAgICAgcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjAzKSAyNSUsXG4gICAgICByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMDMpIDM3LjUlLFxuICAgICAgcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjAzKSAzNy41JSxcbiAgICAgIHJnYmEoMTUxLCAxNTEsIDE1MSwgMC4wMykgNTAlLFxuICAgICAgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjAzKSA1MCUsXG4gICAgICByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMDMpIDYyLjUlLFxuICAgICAgcmdiYSgzOSwgMzksIDM5LCAwLjAzKSA2Mi41JSxcbiAgICAgIHJnYmEoMzksIDM5LCAzOSwgMC4wMykgNzUlLFxuICAgICAgcmdiYSg1NSwgNTUsIDU1LCAwLjAzKSA3NSUsXG4gICAgICByZ2JhKDU1LCA1NSwgNTUsIDAuMDMpIDg3LjUlLFxuICAgICAgcmdiYSg4MiwgODIsIDgyLCAwLjAzKSA4Ny41JSxcbiAgICAgIHJnYmEoODIsIDgyLCA4MiwgMC4wMykgMTAwJVxuICAgICksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgMzQ4ZGVnLFxuICAgICAgcmdiYSg0MiwgNDIsIDQyLCAwLjAyKSAwJSxcbiAgICAgIHJnYmEoNDIsIDQyLCA0MiwgMC4wMikgMjAlLFxuICAgICAgcmdiYSg4LCA4LCA4LCAwLjAyKSAyMCUsXG4gICAgICByZ2JhKDgsIDgsIDgsIDAuMDIpIDQwJSxcbiAgICAgIHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4wMikgNDAlLFxuICAgICAgcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjAyKSA2MCUsXG4gICAgICByZ2JhKDQyLCA0MiwgNDIsIDAuMDIpIDYwJSxcbiAgICAgIHJnYmEoNDIsIDQyLCA0MiwgMC4wMikgODAlLFxuICAgICAgcmdiYSg4MCwgODAsIDgwLCAwLjAyKSA4MCUsXG4gICAgICByZ2JhKDgwLCA4MCwgODAsIDAuMDIpIDEwMCVcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEyMGRlZyxcbiAgICAgIHJnYmEoMTA2LCAxMDYsIDEwNiwgMC4wMykgMCUsXG4gICAgICByZ2JhKDEwNiwgMTA2LCAxMDYsIDAuMDMpIDE0LjI4NiUsXG4gICAgICByZ2JhKDY3LCA2NywgNjcsIDAuMDMpIDE0LjI4NiUsXG4gICAgICByZ2JhKDY3LCA2NywgNjcsIDAuMDMpIDI4LjU3MiUsXG4gICAgICByZ2JhKDEzNCwgMTM0LCAxMzQsIDAuMDMpIDI4LjU3MiUsXG4gICAgICByZ2JhKDEzNCwgMTM0LCAxMzQsIDAuMDMpIDQyLjg1OCUsXG4gICAgICByZ2JhKDE5LCAxOSwgMTksIDAuMDMpIDQyLjg1OCUsXG4gICAgICByZ2JhKDE5LCAxOSwgMTksIDAuMDMpIDU3LjE0NCUsXG4gICAgICByZ2JhKDEwMSwgMTAxLCAxMDEsIDAuMDMpIDU3LjE0NCUsXG4gICAgICByZ2JhKDEwMSwgMTAxLCAxMDEsIDAuMDMpIDcxLjQyOTk5OTk5OTk5OTk5JSxcbiAgICAgIHJnYmEoMjA1LCAyMDUsIDIwNSwgMC4wMykgNzEuNDMlLFxuICAgICAgcmdiYSgyMDUsIDIwNSwgMjA1LCAwLjAzKSA4NS43MTYwMDAwMDAwMDAwMSUsXG4gICAgICByZ2JhKDUzLCA1MywgNTMsIDAuMDMpIDg1LjcxNiUsXG4gICAgICByZ2JhKDUzLCA1MywgNTMsIDAuMDMpIDEwMC4wMDIlXG4gICAgKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYmEoMjE0LCAyMTQsIDIxNCwgMC4wMykgMCUsXG4gICAgICByZ2JhKDIxNCwgMjE0LCAyMTQsIDAuMDMpIDE2LjY2NyUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDE2LjY2NyUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDMzLjMzNCUsXG4gICAgICByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMDMpIDMzLjMzNCUsXG4gICAgICByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMDMpIDUwLjAwMTAwMDAwMDAwMDAwNSUsXG4gICAgICByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuMDMpIDUwLjAwMSUsXG4gICAgICByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuMDMpIDY2LjY2OCUsXG4gICAgICByZ2JhKDI0MSwgMjQxLCAyNDEsIDAuMDMpIDY2LjY2OCUsXG4gICAgICByZ2JhKDI0MSwgMjQxLCAyNDEsIDAuMDMpIDgzLjMzNTAwMDAwMDAwMDAxJSxcbiAgICAgIHJnYmEoMzEsIDMxLCAzMSwgMC4wMykgODMuMzM1JSxcbiAgICAgIHJnYmEoMzEsIDMxLCAzMSwgMC4wMykgMTAwLjAwMiVcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDU5ZGVnLFxuICAgICAgcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjAzKSAwJSxcbiAgICAgIHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4wMykgMTIuNSUsXG4gICAgICByZ2JhKDk3LCA5NywgOTcsIDAuMDMpIDEyLjUlLFxuICAgICAgcmdiYSg5NywgOTcsIDk3LCAwLjAzKSAyNSUsXG4gICAgICByZ2JhKDE0MywgMTQzLCAxNDMsIDAuMDMpIDI1JSxcbiAgICAgIHJnYmEoMTQzLCAxNDMsIDE0MywgMC4wMykgMzcuNSUsXG4gICAgICByZ2JhKDExMCwgMTEwLCAxMTAsIDAuMDMpIDM3LjUlLFxuICAgICAgcmdiYSgxMTAsIDExMCwgMTEwLCAwLjAzKSA1MCUsXG4gICAgICByZ2JhKDM0LCAzNCwgMzQsIDAuMDMpIDUwJSxcbiAgICAgIHJnYmEoMzQsIDM0LCAzNCwgMC4wMykgNjIuNSUsXG4gICAgICByZ2JhKDE1NSwgMTU1LCAxNTUsIDAuMDMpIDYyLjUlLFxuICAgICAgcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjAzKSA3NSUsXG4gICAgICByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuMDMpIDc1JSxcbiAgICAgIHJnYmEoMjQ5LCAyNDksIDI0OSwgMC4wMykgODcuNSUsXG4gICAgICByZ2JhKDE3OSwgMTc5LCAxNzksIDAuMDMpIDg3LjUlLFxuICAgICAgcmdiYSgxNzksIDE3OSwgMTc5LCAwLjAzKSAxMDAlXG4gICAgKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAyNDFkZWcsXG4gICAgICByZ2JhKDU4LCA1OCwgNTgsIDAuMDIpIDAlLFxuICAgICAgcmdiYSg1OCwgNTgsIDU4LCAwLjAyKSAyNSUsXG4gICAgICByZ2JhKDEyNCwgMTI0LCAxMjQsIDAuMDIpIDI1JSxcbiAgICAgIHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4wMikgNTAlLFxuICAgICAgcmdiYSgyNTQsIDI1NCwgMjU0LCAwLjAyKSA1MCUsXG4gICAgICByZ2JhKDI1NCwgMjU0LCAyNTQsIDAuMDIpIDc1JSxcbiAgICAgIHJnYmEoNTIsIDUyLCA1MiwgMC4wMikgNzUlLFxuICAgICAgcmdiYSg1MiwgNTIsIDUyLCAwLjAyKSAxMDAlXG4gICAgKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmZmZmYsICNmZmZmZmYpO1xufVxuLmRhc2hib2FyZCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uZGFzaGJvYXJkX19tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRhc2hib2FyZF9fbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1uYXZiYXItZ3JhZCk7XG59XG4uZGFzaGJvYXJkX19uYXZiYXIgPiBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyX19pY29ucyA+IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXJfX2ljb25zID4gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuY29kZSB7XG4gIGNvbG9yOiBibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5kYXNoYm9hcmRfX25hdmJhcl9fd2VsY29tZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzE3MWEyMTtcbn1cbi5uYXZiYXJfX2J1dHRvbl9fY3JlYXRlIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzNzBweCAhaW1wb3J0YW50O1xufVxuLm5hdmJhcl9faW5wdXRfX3NlYXJjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWNvbG9yOiAjN2E5M2FjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5kYXNoYm9hcmRfX25hdmJhciA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgMTQ4LCAxNzUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmRfX21haW5fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5kYXNib2FyZF9fZmlsdGVyX19zaWRlYmFyIHtcbiAgZmxleDogMC4yO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1uYXZiYXItZ3JhZCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJnLWdyYWQpO1xufVxuLm9wdGlvbl9fYm9sZF9fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRpdl9fYnJlYWtfX2xpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmRhc2hib2FyZF9fZmlsdGVyX19saXN0IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmlsdGVyczpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJnLWdyYWQpO1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDQwMG1zIGVhc2Utb3V0O1xufVxuLmRhc2hib2FyZF9faXNzdWVfX2xpc3Qge1xuICBmbGV4OiAwLjg7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJnLWdyYWQpO1xufVxuLmlzc3VlX19saXN0X19tYWluX19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmlzc3VlX190YWJsZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRkLFxudGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnRpdGxlX19jb2wge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IGJsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50aXRsZV9fY29sOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmctZ3JhZCk7XG59XG4uaXNzdWVfX3RhYmxlX19oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYmxlX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNvcnRfX2ljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4uZGFzaGJvYXJkX19pc3N1ZV9fZmlsdGVyZWRfX2xpc3Qge1xuICBmbGV4OiAwLjg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJnLWdyYWQpO1xufVxuLmlzc3VlX19saXN0X19maWx0ZXJlZF9fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5pc3N1ZV9fY2FyZF9fZmlsdGVyZWQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmlzc3VlX19saXN0X19iYWNrbG9nIHtcbiAgZmxleDogMC4yNTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdHdpdHRlci1iZyk7XG59XG4uaXNzdWVfX2xpc3RfX3Byb2dyZXNzIHtcbiAgZmxleDogMC4yNTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdHdpdHRlci1iZyk7XG59XG4uaXNzdWVfX2xpc3RfX3Rlc3Qge1xuICBmbGV4OiAwLjI1O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10d2l0dGVyLWJnKTtcbn1cbi5pc3N1ZV9fbGlzdF9fcmVzb2x2ZWQge1xuICBmbGV4OiAwLjI1O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10d2l0dGVyLWJnKTtcbn1cbi5pc3N1ZV9fY2FyZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHdpZHRoOiAyMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbn1cbi5pc3N1ZV9fY29sdW1uX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4uY29sX19icmVha19fbGluZSB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB3aWR0aDogMjM4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlzc3VlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyMDJjNTk7XG59XG4uaXNzdWVfX3ByaW9yaXR5X19oaWdoIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzkzMWYxZDtcbn1cbi5pc3N1ZV9fcHJpb3JpdHlfX21lZGl1bSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmlzc3VlX19wcmlvcml0eV9fbG93IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cbi5pc3N1ZXNfX3BhZ2luYXRvciB7XG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmctZ3JhZCkgIWltcG9ydGFudDtcbn1cblxuLnBhZ2luYXRvcl9fZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5MDBweDtcbiAgdG9wOiA1NTBweDtcbn1cbi5tb2RhbC1jb250ZW50IHtcbiAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG4uaXNzdWVlX19ub3RfX2ZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM5MzFmMWQ7XG59XG4vKipyZXNwb25zaXZlIHN0eWxlcyoqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kYXNoYm9hcmRfX21vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZGFzaGJvYXJkX19uYXZiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmRhc2JvYXJkX19maWx0ZXJfX3NpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmRhc2hib2FyZF9faXNzdWVfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZy1ncmFkKTtcbiAgfVxuICAuaXNzdWVfX2xpc3RfX21haW5fX2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLmlzc3VlX190YWJsZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cblxuICAuZGFzaGJvYXJkX19tb2JpbGUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmctZ3JhZCk7XG4gIH1cbiAgLyoqc2lkZSBiYXIgc3R5bGVzKiovXG4gIC5tZW51X19iYXJfX2ljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMXB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgfVxuICAuc2lkZWJhcl9fcmVzcG9uc2l2ZV9tZW51YmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuc2lkZWJhcl9fcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01OHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogNThweDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjlzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLW5hdmJhci1ncmFkKTtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDZweCAwcHggMHB4IDBweDtcbiAgfVxuICAuY2xvc2VfX2ljb24ge1xuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xuICB9XG4gIC5zaWRlYmFyX3Jlc3BvbnNpdmVfaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10d2l0dGVyLWNvbG9yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAycHggMHB4IDlweCAwcHg7XG4gIH1cbiAgLnNpZGViYXJfcmVzcG9uc2l2ZV9fdXNlcmluZm8ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5zaWRlYmFyX3Jlc3BvbnNpdmVfX3VzZXJpbmZvID4gcCB7XG4gICAgbWFyZ2luOiAxNHB4IDFweCAxMnB4IDFweDtcbiAgfVxuICAubmF2YmFyX19idXR0b25fX3Jlc3BvbnNpdmUge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogOHB4IDFweCAxMnB4IDFweDtcbiAgfVxuICAubmF2YmFyX19pbnB1dF9fc2VhcmNoX19yZXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItY29sb3I6ICM3YTkzYWM7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICB9XG4gIC5zaWRlYmFyX19pbnB1dCB7XG4gICAgbWFyZ2luOiA4cHggMXB4IDEycHggMXB4O1xuICB9XG4gIC5zaWRlYmFyX19maWx0ZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICB9XG4gIC5maWx0ZXJzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5sb2dvdXRfX2J0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC5sb2dvdXRfX2J0biA+IGltZyB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG4gIC5pc3N1ZV9fdGFibGVfX21vYmlsZSB7XG4gICAgbWFyZ2luOiA1MnB4IDlweCAwcHggOHB4O1xuICB9XG4gIC5pc3N1ZV9fdGFibGVfX2hlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIHRkLFxuICB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgfVxuICAudGl0bGVfX2NvbF9fbW9iaWxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudGl0bGVfX2NvbF9fbW9iaWxlOmhvdmVyIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICB9XG4gIC5pc3N1ZXNfX3BhZ2luYXRvcl9fbW9iaWxlIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZy1ncmFkKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2luYXRvcl9fZGl2X19tb2JpbGUge1xuICAgIG1hcmdpbjogNHB4IDBweCAwcHggMHB4O1xuICB9XG4gIC5pc3N1ZWVfX25vdF9fZm91bmRfX21vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzkzMWYxZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMDBweDtcbiAgICBsZWZ0OiA4NnB4O1xuICB9XG5cbiAgLnNpZGViYXJfcmVzcG9uc2l2ZV9oZWFkZXIgPiBwIHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICB9XG5cbiAgLnNpZGViYXJfX3Jlc3BvbnNpdmVfX3Byb2ZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDNweDtcbiAgfVxuICAuc2lkZWJhcl9fcmVzcG9uc2l2ZV9fc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnNpZGViYXJfX3Jlc3BvbnNpdmVfX251bWJlciB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2lkZUJhck9wdGlvbnMgPiAuTXVpU3ZnSWNvbi1yb290IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAwcHg7XG4gIH1cbiAgLnNpZGVCYXJPcHRpb25zID4gaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css'],
            }]
    }], function () { return [{ type: _issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: ng_social_login_module__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();
function compareIssues(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "KNqQ":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0, a1) { return { successMessage: a0, errorMessage: a1 }; };
class SignupComponent {
    constructor(userService, router, toaster, toast) {
        this.userService = userService;
        this.router = router;
        this.toaster = toaster;
        this.toast = toast;
        this.toastConfig = {
            timeOut: 1000,
        };
        this.passwordError = `Password should have at least 1 Lowercase,Uppercase,Special
    Character & of min length 8 `;
    }
    ngOnInit() { }
    // register user
    registerUser() {
        const userData = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
        };
        this.userService.signUpService(userData).subscribe((response) => {
            console.debug('register user', userData);
            if (response.status === 200) {
                this.responseType = true;
            }
            this.signUpResponse = response.message + 'Redirecting to Login page';
            // this.toaster.open({ text: 'SignUp Succes', type: 'success' });
            this.toast.success(`${response.message}`, 'Signup', this.toastConfig);
            setTimeout(() => this.router.navigate(['/login']), 2000);
        }, (error) => {
            console.warn('Error Login', error);
            this.signUpResponse = error.error.message + '- Try Again';
            this.responseType = false;
            // this.toaster.open({ text: 'SignUp Error', type: 'danger' });
            this.toast.error('SignUp Error', 'Signup', this.toastConfig);
            setTimeout(() => {
                this.name = '';
                this.password = '';
                this.username = '';
                this.password = '';
                this.cfnPassword = '';
                this.signUpResponse = '';
            }, 3000);
        });
    }
    comparePassword() {
        this.equalPwd = this.password === this.cfnPassword;
        return this.equalPwd;
    }
    validatePassword() {
        const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
        if (this.password === undefined) {
            return true;
        }
        this.acceptedPwd = pattern.test(this.password.toString());
        return this.acceptedPwd;
    }
    // naviagation
    navigateToHome() {
        console.debug('navigation');
        this.router.navigate(['/home']);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 25, vars: 14, consts: [[1, "signup"], [1, "signup__content"], [1, "signup__nav"], ["src", "assets/virus.png", "alt", ""], [3, "ngSubmit"], ["signUpForm", "ngForm"], ["name", "name", "type", "text", "placeholder", "name", "required", "", "value", "", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "text", "placeholder", "email", "value", "", 3, "ngModel", "ngModelChange"], ["name", "username", "type", "text", "placeholder", "create a username", "value", "", "required", "", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "your secret", "value", "", 3, "ngModel", "ngModelChange"], [1, "alert", "alert-danger", 3, "hidden"], ["name", "cfnPassword", "type", "password", "placeholder", "confirm your secret", "value", "", 3, "ngModel", "ngModelChange"], ["tabindex", "0", 1, "mat-raised-button", 3, "disabled"], [1, "signup__response", 3, "ngClass"], [3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.cfnPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Password doesn't match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_h4_click_23_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.validatePassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passwordError, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cfnPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.comparePassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid || !ctx.acceptedPwd || !ctx.equalPwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.responseType, !ctx.responseType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.signUpResponse, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  --tracker-color: #50b7f5;\n  --tracker-bg: #cad4dd;\n  font-family: \"Montserrat\", sans-serif;\n}\n.signup[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 20px;\n  margin: 20px;\n  margin-top: 25px;\n  justify-items: center;\n}\n.signup__content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 15px;\n  padding: 25px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n  width: 400px;\n  height: 568px;\n}\n.signup__nav[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n}\n.signup__content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 30px;\n}\n.signup__content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 300px;\n  border: none;\n  font-size: 20px;\n  border-bottom: 1px solid var(--tracker-color);\n}\n.signup__content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.signup__content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background-color: var(--tracker-color) !important;\n  border: none !important;\n  color: white !important;\n  font-weight: 900 !important;\n  font-size: 19px !important;\n  text-transform: inherit !important;\n  height: 40px !important;\n  margin-top: 20px !important;\n  width: 150px;\n  cursor: pointer !important;\n}\n.signup__content[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background-color: blue;\n}\n.signup__content[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  color: var(--tracker-color);\n  cursor: pointer;\n  margin-top: 1px;\n  font-size: 15px;\n}\n.signup__content[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\n.signup__content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(64, 148, 175) !important;\n  color: aliceblue !important;\n}\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid var(--tracker-color) !important;\n  background-color: #f8f4e3 !important;\n  font-weight: 900 !important;\n  color: #000 !important;\n}\n.signup__response[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.successMessage[_ngcontent-%COMP%] {\n  color: green;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (max-width: 800px) {\n  .signup[_ngcontent-%COMP%] {\n    display: grid;\n    padding: 34px;\n    margin-left: -4px;\n    margin-top: 25px;\n    justify-items: center;\n  }\n  .signup__content[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 15px;\n    padding: 25px;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);\n    width: 300px;\n    height: 568px;\n  }\n\n  .signup__content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    margin-top: 14px;\n    font-size: 24px;\n  }\n  .signup__content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 250px;\n    border: none;\n    font-size: 20px;\n    border-bottom: 1px solid var(--tracker-color);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpREFBaUQ7RUFDakQsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSw4Q0FBOEM7RUFDOUMsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsaURBQWlEO0VBQ2pELG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkNBQTZDO0VBQy9DO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAtLXRyYWNrZXItY29sb3I6ICM1MGI3ZjU7XG4gIC0tdHJhY2tlci1iZzogI2NhZDRkZDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLnNpZ251cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLnNpZ251cF9fY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1NjhweDtcbn1cbi5zaWdudXBfX25hdiA+IGltZyB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uc2lnbnVwX19jb250ZW50ID4gcCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zaWdudXBfX2NvbnRlbnQgPiBmb3JtID4gaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHJhY2tlci1jb2xvcik7XG59XG4uc2lnbnVwX19jb250ZW50ID4gZm9ybSA+IGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zaWdudXBfX2NvbnRlbnQgPiBmb3JtID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhY2tlci1jb2xvcikgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUwcHg7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc2lnbnVwX19jb250ZW50ID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5zaWdudXBfX2NvbnRlbnQgPiBoNCB7XG4gIGNvbG9yOiB2YXIoLS10cmFja2VyLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zaWdudXBfX2NvbnRlbnQgPiBoNDpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuLnNpZ251cF9fY29udGVudCA+IGZvcm0gPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDE0OCwgMTc1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG5idXR0b246ZGlzYWJsZWQsXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhY2tlci1jb2xvcikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjRlMyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uc2lnbnVwX19yZXNwb25zZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zdWNjZXNzTWVzc2FnZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5lcnJvck1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuLyoqcmVzcG9uc2l2ZSBzdHlsZXMqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2lnbnVwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDM0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnNpZ251cF9fY29udGVudCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1NjhweDtcbiAgfVxuXG4gIC5zaWdudXBfX2NvbnRlbnQgPiBwIHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuc2lnbnVwX19jb250ZW50ID4gZm9ybSA+IGlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRyYWNrZXItY29sb3IpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css'],
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "LSbn":
/*!*************************************************************!*\
  !*** ./src/app/issues/save-cancel/save-cancel.component.ts ***!
  \*************************************************************/
/*! exports provided: SaveCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveCancelComponent", function() { return SaveCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class SaveCancelComponent {
    constructor() {
        // component will emit
        this.saveOps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelOps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    save() {
        console.debug('save ops in save-cancel comp');
        this.saveOps.emit();
    }
    cancel() {
        console.debug('cancel ops in save-cancel comp');
        this.cancelOps.emit();
    }
}
SaveCancelComponent.ɵfac = function SaveCancelComponent_Factory(t) { return new (t || SaveCancelComponent)(); };
SaveCancelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveCancelComponent, selectors: [["app-save-cancel"]], outputs: { saveOps: "saveOps", cancelOps: "cancelOps" }, decls: 5, vars: 0, consts: [[1, "save__cancel__main"], ["mat-raised-button", "", "color", "primary", "title", "save", 1, "button__save", 3, "click"], ["mat-raised-button", "", "color", "secondary", "title", "cancel", 1, "button__cancel", 3, "click"]], template: function SaveCancelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveCancelComponent_Template_button_click_1_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveCancelComponent_Template_button_click_3_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".save__cancel__main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: -5px;\n}\nbutton[_ngcontent-%COMP%] {\n  text-transform: inherit !important;\n  cursor: pointer !important;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzL3NhdmUtY2FuY2VsL3NhdmUtY2FuY2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZXMvc2F2ZS1jYW5jZWwvc2F2ZS1jYW5jZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlX19jYW5jZWxfX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveCancelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-save-cancel',
                templateUrl: './save-cancel.component.html',
                styleUrls: ['./save-cancel.component.css'],
            }]
    }], function () { return []; }, { saveOps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancelOps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "P9um":
/*!*************************************************************!*\
  !*** ./src/app/user/social-login/social-login.component.ts ***!
  \*************************************************************/
/*! exports provided: SocialLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginComponent", function() { return SocialLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-social-login-module */ "Zm4g");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0, a1) { return { successLoginMessage: a0, errorLoginMessage: a1 }; };
class SocialLoginComponent {
    constructor(authService, userService, router, toast) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toast = toast;
        this.toastConfig = {
            timeOut: 1200,
        };
        this.loginRes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    googleSignIn() {
        console.debug('login with google');
        this.toast.info('Please user different login methods- ClientId Error- OAuth Rejected', 'Google Login', { timeOut: 10000 });
        this.authService
            .signIn(ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID)
            .then((userdata) => {
            this.user = userdata;
            this.name = userdata.name;
            this.email = userdata.email;
            console.debug('userdata-google', userdata);
        })
            .catch((error) => {
            console.debug('google login error', error);
        });
    }
    fbSignIn() {
        this.authService
            .signIn(ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID)
            .then((userdata) => {
            this.user = userdata;
            this.name = userdata.name;
            this.email = userdata.email;
            console.debug('userdata -fb', userdata);
            this.setUserInfo();
        });
    }
    linkedInSignIn() {
        console.debug(ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__["LinkedinLoginProvider"].PROVIDER_ID);
        this.toast.info('Please user different login methods- OAuth Rejected by linkedin', 'LinkenId Login', { timeOut: 10000 });
        this.authService
            .signIn(ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__["LinkedinLoginProvider"].PROVIDER_ID)
            .then((userdata) => {
            this.user = userdata;
            this.name = userdata.name;
            this.email = userdata.email;
            console.debug('userdata -linked ini', userdata);
        })
            .catch((error) => {
            console.debug('google login error', error);
        });
    }
    setUserInfo() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = user != null;
        });
        // save user info to db
        // check email id in db , if not present trigger signup ,route to dashboard
        // if present route to dashboard
        // const { email, name } = this.user;
        const userDetails = {
            email: this.email,
            name: this.name,
        };
        this.userService.verifySocialLoginService(userDetails).subscribe((response) => {
            console.debug('login res:', response);
            this.responseMsg = `${response.message} --taking you to dashboard`;
            this.responseType = true;
            const { name, email, username, userId, authToken } = response.data;
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('name', name);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('email', email);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('username', username);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('userId', userId);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authToken', authToken);
            this.userService.setUserAuth(response.data);
            this.toast.success('Login Sucess', 'Login', this.toastConfig);
            setTimeout(() => this.router.navigate(['/dashboard']), 2000);
        }, (error) => {
            console.warn('Error Login', error);
            this.responseMsg = error.error.message + '- Try Again';
            this.responseType = false;
            this.toast.error('Login Error', 'Login', this.toastConfig);
        });
    }
}
SocialLoginComponent.ɵfac = function SocialLoginComponent_Factory(t) { return new (t || SocialLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
SocialLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialLoginComponent, selectors: [["app-social-login"]], outputs: { loginRes: "loginRes" }, decls: 10, vars: 5, consts: [[1, "login__response", 3, "ngClass"], [1, "social__login__main"], [1, "fb__social"], ["src", "assets/fb.png", "alt", "", "title", "facebook", 3, "click"], [1, "google__social"], ["src", "assets/google.png", "alt", "", "title", "google", 3, "click"], [1, "linkedin__social"], ["src", "assets/linkedin.png", "alt", "", "title", "linkedin", 3, "click"]], template: function SocialLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialLoginComponent_Template_img_click_5_listener() { return ctx.fbSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialLoginComponent_Template_img_click_7_listener() { return ctx.googleSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialLoginComponent_Template_img_click_9_listener() { return ctx.linkedInSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.responseType, !ctx.responseType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.responseMsg, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".social__login__main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n\n.login__response[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.successMessage[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.errorMessage[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zb2NpYWwtbG9naW4vc29jaWFsLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc29jaWFsLWxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbF9fbG9naW5fX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luX19yZXNwb25zZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc3VjY2Vzc01lc3NhZ2Uge1xuICBjb2xvcjogZ3JlZW47XG59XG4uZXJyb3JNZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-login',
                templateUrl: './social-login.component.html',
                styleUrls: ['./social-login.component.css'],
            }]
    }], function () { return [{ type: ng_social_login_module__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, { loginRes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "QKw5":
/*!***************************************************************!*\
  !*** ./src/app/issues/create-issue/create-issue.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIssueComponent", function() { return CreateIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../issues.service */ "FULy");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function CreateIssueComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r5, " ");
} }
function CreateIssueComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r6);
} }
function CreateIssueComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assig_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", assig_r7.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", assig_r7.name, " ");
} }
const _c0 = function () { return { standalone: true }; };
class CreateIssueComponent {
    constructor(issueService, toaster) {
        this.issueService = issueService;
        this.toaster = toaster;
        // component willemit
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newCreatedIssue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // init select type of fields
        this.statusOptions = ['Backlogs', 'Progress', 'Test', 'Done'];
        this.priorityOptions = ['High', 'Medium', 'Low'];
        // this.userId = Cookie.get('userId');
        console.debug(this.userId);
    }
    ngOnInit() {
        this.fetchAllUsers();
    }
    createIssue() {
        const newIssue = {
            userId: this.userId,
            title: this.title,
            description: this.description,
            status: this.status,
            reporter: this.name,
            priority: this.priority,
            estimates: this.originalEstimates,
            assignee: this.assignee,
        };
        console.debug('Issue __ new:', newIssue);
        this.issueService.createIssue(newIssue).subscribe((response) => {
            console.debug('create issue response:', response);
            if (response.status === 200) {
                console.debug('issue create success');
                this.toaster.open({ text: 'Issue Created', type: 'success' });
                this.closeModal.emit();
                console.debug('New Issue Create event', typeof response.data);
                this.newCreatedIssue.emit('response.data');
            }
        }, (error) => {
            console.error('Error Creating Issue:', error);
            this.toaster.open({ text: error.error.message, type: 'danger' });
            this.closeModal.emit();
        });
    }
    // fetch all users
    fetchAllUsers() {
        console.debug('user id from dashboard', this.userId, this.username);
        const authDetails = {
            userId: this.userId,
        };
        this.issueService.getAllUsers(authDetails).subscribe(
        // handle success response
        (response) => {
            if (response.status === 200) {
                this.assigneeOptions = response.data;
                this.watchList = response.data;
            }
            console.debug(response.data);
        }, 
        // handle error response
        (error) => {
            console.warn('Error fetching user details', error);
            this.toaster.open({ text: 'Something went wrong', type: 'danger' });
        });
    }
}
CreateIssueComponent.ɵfac = function CreateIssueComponent_Factory(t) { return new (t || CreateIssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_issues_service__WEBPACK_IMPORTED_MODULE_1__["IssuesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"])); };
CreateIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateIssueComponent, selectors: [["app-create-issue"]], inputs: { userId: "userId", username: "username", name: "name" }, outputs: { closeModal: "closeModal", newCreatedIssue: "newCreatedIssue" }, decls: 50, vars: 17, consts: [[1, "create__issue"], [1, "create__issue__header"], [1, "create__issue__contents"], [3, "ngSubmit"], ["createIssueForm", "ngForm"], [1, "form-group"], ["for", "title"], [2, "color", "red"], ["name", "title", "required", "", "placeholder", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_title", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "description"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "reporter"], ["name", "reporter", "required", "", "placeholder", "Reporter", "disabled", "", 1, "form-control", "mt-1", 3, "value"], ["for", "priority"], ["name", "priority", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "originalEstimates"], ["name", "originalEstimates", "required", "", "placeholder", "Original Estimate", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["for", "status"], ["name", "status", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], ["for", "assignee"], ["name", "assignee", "required", "", 1, "form-control", "mt-1", 3, "ngModel", "ngModelChange"], [1, "issuee__create__btn"], ["mat-raised-button", "", "color", "primary", 1, "button__create", 3, "disabled"], [3, "value"]], template: function CreateIssueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateIssueComponent_Template_form_ngSubmit_3_listener() { return ctx.createIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateIssueComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Title is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Decription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ckeditor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateIssueComponent_Template_ckeditor_ngModelChange_16_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateIssueComponent_Template_select_ngModelChange_26_listener($event) { return ctx.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateIssueComponent_option_29_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Original Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateIssueComponent_Template_input_ngModelChange_32_listener($event) { return ctx.originalEstimates = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateIssueComponent_Template_select_ngModelChange_37_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CreateIssueComponent_option_40_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateIssueComponent_Template_select_ngModelChange_43_listener($event) { return ctx.assignee = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Add Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateIssueComponent_option_46_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.priorityOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.originalEstimates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.assignee);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assigneeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".create__issue__contents[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-right: 12px;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n.issuee__create__btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 10px;\n}\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\n  border: 1px solid var(--tracker-color) !important;\n  background-color: #f8f4e3 !important;\n  font-weight: 400 !important;\n  color: #000 !important;\n}\n.upload_cover[_ngcontent-%COMP%] {\n  display: flex;\n}\n.coverpic_label[_ngcontent-%COMP%] {\n  margin-top: -26px;\n  margin-left: 30px;\n}\ninput[type=\"file\"][_ngcontent-%COMP%] {\n  display: none;\n}\n.custom-file-upload[_ngcontent-%COMP%] {\n  color: blue;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n.auto_complete[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzL2NyZWF0ZS1pc3N1ZS9jcmVhdGUtaXNzdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7O0VBRUUsaURBQWlEO0VBQ2pELG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvaXNzdWVzL2NyZWF0ZS1pc3N1ZS9jcmVhdGUtaXNzdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGVfX2lzc3VlX19jb250ZW50cyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLmlzc3VlZV9fY3JlYXRlX19idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCxcbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFja2VyLWNvbG9yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmNGUzICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi51cGxvYWRfY292ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvdmVycGljX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGNvbG9yOiBibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXV0b19jb21wbGV0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-issue',
                templateUrl: './create-issue.component.html',
                styleUrls: ['./create-issue.component.css'],
            }]
    }], function () { return [{ type: _issues_service__WEBPACK_IMPORTED_MODULE_1__["IssuesService"] }, { type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newCreatedIssue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'iTracker-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UZgX":
/*!*******************************************************!*\
  !*** ./src/app/issues/watchers/watchers.component.ts ***!
  \*******************************************************/
/*! exports provided: WatchersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchersComponent", function() { return WatchersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











const _c0 = ["watcherInput"];
const _c1 = ["auto"];
function WatchersComponent_mat_chip_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchersComponent_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function WatchersComponent_mat_chip_4_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const watchers_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeWatcher(watchers_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchersComponent_mat_chip_4_mat_icon_2_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const watchers_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", watchers_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.removable);
} }
function WatchersComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const watchers_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", watchers_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", watchers_r9.name, " ");
} }
class WatchersComponent {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.watchersCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.currentWatchList = [];
        this.updatedWatchList = [];
        // @Input() currentWatchList: Array<any>;
        // output , component will emit
        this.removeWatchers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updatedWatchers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addWatchers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.existingWatchList && this.existingWatchList.length > 0) {
            console.debug('constructur update');
            this.currentWatchList = this.existingWatchList;
        }
    }
    ngOnInit() {
        console.debug('nginit update');
        this.currentWatchList = this.existingWatchList;
    }
    addWatcher(event) {
        console.debug('add event', event);
        const input = event.input;
        const value = event.value;
        // Add watchers
        if ((value || '').trim()) {
            this.currentWatchList.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.watchersCtrl.setValue(null);
        console.debug('after addition , current watchlist,', this.currentWatchList);
    }
    removeWatcher(watcher) {
        console.debug('remove', watcher);
        const index = this.currentWatchList.indexOf(watcher);
        if (index >= 0) {
            this.currentWatchList.splice(index, 1);
        }
        this.updatedWatchList = [];
        this.updatedWatchList.push(watcher);
        console.debug('updated list removal:', this.updatedWatchList);
        // emitt removal event
        this.removeWatchers.emit(this.updatedWatchList[0]);
        console.debug('after removing', this.currentWatchList);
        console.debug('current watchlist', this.existingWatchList);
    }
    selectedWatcher(event) {
        // this.currentWatchList = [];
        this.currentWatchList.push(event.option.value);
        console.debug('after addition , current watchlist,', this.currentWatchList);
        this.updatedWatchList.push(event.option.value);
        // emit updated watchlist to parent component
        console.debug('updated list:', this.updatedWatchList);
        this.addWatchers.emit(this.updatedWatchList[0]);
        // this.updatedWatchers.emit(this.updatedWatchList);
        this.watcherInput.nativeElement.value = '';
        this.watchersCtrl.setValue(null);
    }
}
WatchersComponent.ɵfac = function WatchersComponent_Factory(t) { return new (t || WatchersComponent)(); };
WatchersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchersComponent, selectors: [["app-watchers"]], viewQuery: function WatchersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.watcherInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
    } }, inputs: { watchListOptions: "watchListOptions", existingWatchList: "existingWatchList" }, outputs: { removeWatchers: "removeWatchers", updatedWatchers: "updatedWatchers", addWatchers: "addWatchers" }, decls: 10, vars: 6, consts: [["aria-label", "Watchers selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add Watchers...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["watcherInput", ""], [1, "auto_complete", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function WatchersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip-list", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchersComponent_mat_chip_4_Template, 3, 4, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function WatchersComponent_Template_input_matChipInputTokenEnd_5_listener($event) { return ctx.addWatcher($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function WatchersComponent_Template_mat_autocomplete_optionSelected_7_listener($event) { return ctx.selectedWatcher($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WatchersComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentWatchList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.watchersCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.watchListOptions);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy93YXRjaGVycy93YXRjaGVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchers',
                templateUrl: './watchers.component.html',
                styleUrls: ['./watchers.component.css'],
            }]
    }], function () { return []; }, { watchListOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], existingWatchList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeWatchers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updatedWatchers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addWatchers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], watcherInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['watcherInput']
        }], matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['auto']
        }] }); })();


/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
        // initialize
        // public baseUrl = 'http://localhost:3001/api/v1';
        this.baseUrl = 'http://api.itracker.kanbanboard.co.in/api/v1';
    }
    // handle exceptions
    handleError(error) {
        console.error('Http Error:', error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message);
    }
    // user registration service
    signUpService(newUser) {
        console.debug('Signup service apicall', newUser);
        const signUpRes = this.http.post(`${this.baseUrl}/user/register`, newUser);
        return signUpRes;
    }
    // login service
    loginService(userData) {
        console.debug('Login api call', userData);
        const loginRes = this.http.post(`${this.baseUrl}/user/login`, userData);
        return loginRes;
    }
    // store authenticated user info
    setUserAuth(data) {
        console.debug('Set user auth data', data);
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    // get auth info
    getUserAuth() {
        console.debug('get user auth');
        const authInfo = JSON.parse(localStorage.getItem('userInfo'));
        return authInfo === null ? '' : authInfo;
    }
    // social login verification
    verifySocialLoginService(userDetails) {
        console.debug('verify social login serice:', userDetails);
        const { name, email } = userDetails;
        const verficationResult = this.http.get(`${this.baseUrl}/user/social/verify?email=${email}&name=${name}`);
        return verficationResult;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Yyff":
/*!*****************************************!*\
  !*** ./src/app/issues/issues.module.ts ***!
  \*****************************************/
/*! exports provided: IssuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesModule", function() { return IssuesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "FbZd");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issues.service */ "FULy");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-issue/create-issue.component */ "QKw5");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _single_issue_single_issue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./single-issue/single-issue.component */ "1kQ6");
/* harmony import */ var _save_cancel_save_cancel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./save-cancel/save-cancel.component */ "LSbn");
/* harmony import */ var _pipe_parse_html_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipe/parse-html.pipe */ "g2LP");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editor/editor.component */ "uFVw");
/* harmony import */ var _watchers_watchers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./watchers/watchers.component */ "UZgX");
/* harmony import */ var _router_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./router-guard.service */ "hkYZ");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















































class IssuesModule {
}
IssuesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IssuesModule });
IssuesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IssuesModule_Factory(t) { return new (t || IssuesModule)(); }, providers: [_issues_service__WEBPACK_IMPORTED_MODULE_9__["IssuesService"], _router_guard_service__WEBPACK_IMPORTED_MODULE_24__["RouterGuardService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                {
                    path: 'dashboard',
                    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    pathMatch: 'full',
                    canActivate: [_router_guard_service__WEBPACK_IMPORTED_MODULE_24__["RouterGuardService"]],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IssuesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_11__["CreateIssueComponent"],
        _single_issue_single_issue_component__WEBPACK_IMPORTED_MODULE_18__["SingleIssueComponent"],
        _save_cancel_save_cancel_component__WEBPACK_IMPORTED_MODULE_19__["SaveCancelComponent"],
        _pipe_parse_html_pipe__WEBPACK_IMPORTED_MODULE_20__["ParseHtmlPipe"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_22__["EditorComponent"],
        _watchers_watchers_component__WEBPACK_IMPORTED_MODULE_23__["WatchersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        ckeditor4_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssuesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_11__["CreateIssueComponent"],
                    _single_issue_single_issue_component__WEBPACK_IMPORTED_MODULE_18__["SingleIssueComponent"],
                    _save_cancel_save_cancel_component__WEBPACK_IMPORTED_MODULE_19__["SaveCancelComponent"],
                    _pipe_parse_html_pipe__WEBPACK_IMPORTED_MODULE_20__["ParseHtmlPipe"],
                    _editor_editor_component__WEBPACK_IMPORTED_MODULE_22__["EditorComponent"],
                    _watchers_watchers_component__WEBPACK_IMPORTED_MODULE_23__["WatchersComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    ckeditor4_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                        {
                            path: 'dashboard',
                            component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                            pathMatch: 'full',
                            canActivate: [_router_guard_service__WEBPACK_IMPORTED_MODULE_24__["RouterGuardService"]],
                        },
                    ]),
                ],
                providers: [_issues_service__WEBPACK_IMPORTED_MODULE_9__["IssuesService"], _router_guard_service__WEBPACK_IMPORTED_MODULE_24__["RouterGuardService"]],
                exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["Dir"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerMonth"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTextColumn"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatTextareaAutosize"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortHeader"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipTrailingIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteOrigin"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["CdkScrollable"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatOptgroup"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDivider"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBar"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
    _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_11__["CreateIssueComponent"],
    _single_issue_single_issue_component__WEBPACK_IMPORTED_MODULE_18__["SingleIssueComponent"],
    _save_cancel_save_cancel_component__WEBPACK_IMPORTED_MODULE_19__["SaveCancelComponent"],
    _editor_editor_component__WEBPACK_IMPORTED_MODULE_22__["EditorComponent"],
    _watchers_watchers_component__WEBPACK_IMPORTED_MODULE_23__["WatchersComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _pipe_parse_html_pipe__WEBPACK_IMPORTED_MODULE_20__["ParseHtmlPipe"]]);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _issues_issues_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issues/issues.module */ "Yyff");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "0pRC");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-social-login-module */ "Zm4g");


























const CONFIG = new ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"]([
    {
        id: ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["GoogleLoginProvider"]('895741338792-t2t3ndlqu4p11qr6tv7b536dgbfve46g.apps.googleusercontent.com'),
    },
    {
        id: ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["FacebookLoginProvider"]('2442783682683614'),
    },
    {
        id: ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["LinkedinLoginProvider"].PROVIDER_ID,
        provider: new ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["LinkedinLoginProvider"]('86p5fb7z33c0xy'),
    },
], true);
function provideConfig() {
    return CONFIG;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"],
            useFactory: provideConfig,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _issues_issues_module__WEBPACK_IMPORTED_MODULE_9__["IssuesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
            ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastNotificationsModule"].forRoot({
                duration: 1200,
                type: 'primary',
                autoClose: true,
                position: 'top-right',
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                timeOut: 20000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
            ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["SocialLoginModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
        _issues_issues_module__WEBPACK_IMPORTED_MODULE_9__["IssuesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastNotificationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["SocialLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                    _issues_issues_module__WEBPACK_IMPORTED_MODULE_9__["IssuesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                    ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastNotificationsModule"].forRoot({
                        duration: 1200,
                        type: 'primary',
                        autoClose: true,
                        position: 'top-right',
                    }),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                        timeOut: 20000,
                        positionClass: 'toast-top-right',
                        preventDuplicates: true,
                    }),
                    ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["SocialLoginModule"],
                ],
                providers: [
                    {
                        provide: ng_social_login_module__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"],
                        useFactory: provideConfig,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "g2LP":
/*!************************************************!*\
  !*** ./src/app/issues/pipe/parse-html.pipe.ts ***!
  \************************************************/
/*! exports provided: ParseHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseHtmlPipe", function() { return ParseHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



const htmlparser2 = __webpack_require__(/*! htmlparser2 */ "hS6j");
class ParseHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        console.debug('pipe');
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
ParseHtmlPipe.ɵfac = function ParseHtmlPipe_Factory(t) { return new (t || ParseHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ParseHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "parseHtml", type: ParseHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParseHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'parseHtml',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "hkYZ":
/*!************************************************!*\
  !*** ./src/app/issues/router-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouterGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterGuardService", function() { return RouterGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RouterGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(router) {
        console.debug('Guard Route');
        const authToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        if (authToken === null || authToken === undefined || authToken === '') {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
}
RouterGuardService.ɵfac = function RouterGuardService_Factory(t) { return new (t || RouterGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouterGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterGuardService, factory: RouterGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "uFVw":
/*!***************************************************!*\
  !*** ./src/app/issues/editor/editor.component.ts ***!
  \***************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");



const _c0 = function () { return ["Bold", "Italic", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]; };
const _c1 = function (a0) { return [a0]; };
const _c2 = function (a0) { return { toolbar: a0 }; };
class EditorComponent {
    constructor() {
        // component will emit
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveOperation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelOperation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onChange(value) {
        this.changeEvent.emit(value);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], inputs: { hideFlag: "hideFlag", data: "data", type: "type" }, outputs: { changeEvent: "changeEvent", saveOperation: "saveOperation", cancelOperation: "cancelOperation" }, decls: 2, vars: 8, consts: [[3, "hidden"], [3, "data", "config", "change"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ckeditor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditorComponent_Template_ckeditor_change_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))));
    } }, directives: [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_1__["CKEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.css'],
            }]
    }], function () { return []; }, { hideFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], saveOperation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancelOperation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/signup/signup.component */ "KNqQ");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "0pRC");
/* harmony import */ var _issues_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issues/dashboard/dashboard.component */ "FbZd");









const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'signup', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'dashboard', component: _issues_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], pathMatch: 'full' },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map