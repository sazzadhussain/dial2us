webpackJsonp([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, loadingCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.formData = {};
        this.formData.name = 'Sazzad';
        this.formData.password = 'sazzad';
        this.formData.email = 'sazzad@myemail.com';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.formData.email == '') {
            this.presentToast("Email can not be empty");
        }
        else if (this.formData.password == '') {
            this.presentToast("Password can not be empty");
        }
        else if (this.formData.name == '') {
            this.presentToast("Name can not be empty");
        }
        else {
            this.showLoader();
            this.authService.register(this.formData).then(function (result) {
                _this.loading.dismiss();
                _this.data = result;
                console.log("Success:" + _this.data);
                _this.presentToast("Registration Successful");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }, function (err) {
                _this.loading.dismiss();
                _this.data = err;
                _this.presentToast(_this.data.errors.email[0]);
            });
        }
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Creating account...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false,
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Registration</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding  text-center>\n  \n      <!-- <img src="../../assets/imgs/logo_dial.png" height="90" /> -->\n\n\n  <form (ngSubmit)="register()" name="myForm">\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="formData.name" name="email"  clearInput="true"></ion-input>\n    </ion-item>\n     \n    \n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="formData.email" name="email" clearInput="true"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="formData.password" name="password" clearInput="true"></ion-input>\n\n      <br>\n      \n      <br>\n    </ion-item>\n    <p text-right>\n      <button ion-button clear color="secondary" ng-disabled="myForm.$invalid" type="button" (click)="goToLogin()">Go to Login</button>\n    </p>\n\n    <button ion-button block color="secondary" type="submit">Register</button>\n    <button ion-button block type="button"  color="secondary" outline (click)="goToLogin()">Login</button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/register/register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPassPage = /** @class */ (function () {
    function ForgotPassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPassPage');
    };
    ForgotPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/forgot-pass/forgot-pass.html"*/'<!--\n  Generated template for the ForgotPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forgot-pass</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/forgot-pass/forgot-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());

//# sourceMappingURL=forgot-pass.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillPage = /** @class */ (function () {
    function BillPage(authService, navCtrl, navParams, loadingCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    BillPage.prototype.ionViewDidLoad = function () {
        this.showLoader();
        var userData = JSON.parse(localStorage.getItem('user'));
        var token = localStorage.getItem('token');
        this.user_id = userData.id;
        this.bills = this.loadBill(token);
    };
    BillPage.prototype.loadBill = function (token) {
        var _this = this;
        this.authService.getUserBill(this.user_id, token).then(function (result) {
            _this.bills = result;
            _this.loading.dismiss();
        }, function (err) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            _this.loading.dismiss();
        });
    };
    BillPage.prototype.openBill = function (billid) {
    };
    BillPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading bills...'
        });
        this.loading.present();
    };
    BillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bill',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/bill/bill.html"*/'<ion-header >\n\n  <ion-navbar color="secondary">\n    <ion-title>Bill</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <ion-list >\n    <ion-item *ngFor="let bill of bills">\n\n          <ion-avatar item-start>\n              <img src="assets/imgs/pay.png">\n                  \n            </ion-avatar>\n            <h3 >Date: {{ bill.bill_date }} </h3>\n            <h3 *ngIf="bill.payment_status == 1">Paid <ion-icon name="ios-checkmark-circle" color="secondary"></ion-icon>  </h3>\n            <h3 *ngIf="bill.payment_status == 0">Pending <ion-icon name="ios-close-circle" color="danger"></ion-icon>  </h3>\n            <p>₹ {{bill.amount}}</p>\n            <button ion-button clear item-end *ngIf="bill.payment_status == 0">Pay</button>\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/bill/bill.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], BillPage);
    return BillPage;
}());

//# sourceMappingURL=bill.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ComplaintListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintListPage = /** @class */ (function () {
    function ComplaintListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComplaintListPage.prototype.ionViewDidLoad = function () {
    };
    ComplaintListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaint-list',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/complaint-list/complaint-list.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Complaints</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label color="secondary" floating>Type Complaint Here</ion-label>\n        <ion-textarea></ion-textarea>\n      </ion-item>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/complaint-list/complaint-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ComplaintListPage);
    return ComplaintListPage;
}());

//# sourceMappingURL=complaint-list.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bill-details/bill-details.module": [
		287,
		6
	],
	"../pages/bill/bill.module": [
		288,
		5
	],
	"../pages/complaint-details/complaint-details.module": [
		289,
		4
	],
	"../pages/complaint-list/complaint-list.module": [
		290,
		3
	],
	"../pages/forgot-pass/forgot-pass.module": [
		291,
		2
	],
	"../pages/register-complaint/register-complaint.module": [
		292,
		1
	],
	"../pages/register/register.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 5; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BillDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillDetailsPage = /** @class */ (function () {
    function BillDetailsPage(authService, navCtrl, navParams, loadingCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    BillDetailsPage.prototype.ionViewDidLoad = function () {
        this.bill_id = this.navParams.get("bill_id");
        this.showLoader();
        var token = localStorage.getItem('token');
        this.loadBillDetails(this.bill_id, token);
    };
    BillDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading bill details...'
        });
        this.loading.present();
    };
    BillDetailsPage.prototype.loadBillDetails = function (bill_id, token) {
        var _this = this;
        this.authService.loadBillDetails(bill_id, token).then(function (result) {
            _this.billData = result;
            _this.loading.dismiss();
        }, function (err) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            _this.loading.dismiss();
        });
    };
    BillDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bill-details',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/bill-details/bill-details.html"*/'<!--\n  Generated template for the BillDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bill details for ID: {{ bill_id }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        Recent Conversations\n      </ion-list-header>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/pay.png">\n        </ion-avatar>\n        <h2>Finn</h2>\n        <h3>I\'m a big deal</h3>\n        <p>Listen, I\'ve had a pretty messed up day...</p>\n      </ion-item>\n      <ion-list-header>\n          Recent Conversations\n        </ion-list-header>\n  \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/pay.png">\n          </ion-avatar>\n          <h2>Finn</h2>\n          <h3>I\'m a big deal</h3>\n          <p>Listen, I\'ve had a pretty messed up day...</p>\n        </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/bill-details/bill-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], BillDetailsPage);
    return BillDetailsPage;
}());

//# sourceMappingURL=bill-details.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ComplaintDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintDetailsPage = /** @class */ (function () {
    function ComplaintDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComplaintDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintDetailsPage');
    };
    ComplaintDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaint-details',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/complaint-details/complaint-details.html"*/'<!--\n  Generated template for the ComplaintDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>complaint-details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/complaint-details/complaint-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ComplaintDetailsPage);
    return ComplaintDetailsPage;
}());

//# sourceMappingURL=complaint-details.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterComplaintPage = /** @class */ (function () {
    function RegisterComplaintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterComplaintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterComplaintPage');
    };
    RegisterComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-complaint',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/register-complaint/register-complaint.html"*/'<!--\n  Generated template for the RegisterComplaintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register-complaint</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/register-complaint/register-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterComplaintPage);
    return RegisterComplaintPage;
}());

//# sourceMappingURL=register-complaint.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bill_bill__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgot_pass_forgot_pass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bill_details_bill_details__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_complaint_list_complaint_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_complaint_register_complaint__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_complaint_details_complaint_details__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bill_bill__["a" /* BillPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bill_details_bill_details__["a" /* BillDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_complaint_list_complaint_list__["a" /* ComplaintListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_complaint_register_complaint__["a" /* RegisterComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_complaint_details_complaint_details__["a" /* ComplaintDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bill-details/bill-details.module#BillDetailsPageModule', name: 'BillDetailsPage', segment: 'bill-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bill/bill.module#BillPageModule', name: 'BillPage', segment: 'bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaint-details/complaint-details.module#ComplaintDetailsPageModule', name: 'ComplaintDetailsPage', segment: 'complaint-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaint-list/complaint-list.module#ComplaintListPageModule', name: 'ComplaintListPage', segment: 'complaint-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-pass/forgot-pass.module#ForgotPassPageModule', name: 'ForgotPassPage', segment: 'forgot-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-complaint/register-complaint.module#RegisterComplaintPageModule', name: 'RegisterComplaintPage', segment: 'register-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bill_bill__["a" /* BillPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bill_details_bill_details__["a" /* BillDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_complaint_list_complaint_list__["a" /* ComplaintListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_complaint_register_complaint__["a" /* RegisterComplaintPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_complaint_details_complaint_details__["a" /* ComplaintDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bill_bill__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_complaint_list_complaint_list__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] },
            { title: 'Test', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var token = localStorage.getItem('token');
            if (token != '' && token != null) {
                _this.authService.checkToken(token).then(function (result) {
                    console.log(result);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                }, function (err) {
                    console.log("not found");
                    // this.nav.setRoot(LoginPage);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                });
            }
            else {
                // console.log('not found');
                // this.nav.setRoot(LoginPage);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.navLogout = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this.authService.logout({ 'token': token }).then(function (result) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], { message: "Logged Out" });
        }, function (err) {
            console.log("Error ->");
            console.log(err);
        });
    };
    MyApp.prototype.navBill = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_bill_bill__["a" /* BillPage */]);
    };
    MyApp.prototype.navComplaint = function () {
        console.log('called');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_complaint_list_complaint_list__["a" /* ComplaintListPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/app/app.html"*/'<ion-menu [content]="content" >\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="secondary">\n    <ion-list>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button> -->\n      <!-- <img src="../../assets/imgs/logo_dial.png" height="90" /> -->\n      \n      <button menuClose ion-item>\n         <ion-icon name="ios-home-outline"></ion-icon> \n  Home\n      </button>\n      <button menuClose ion-item (click)="navComplaint()">\n        <ion-icon name="ios-build-outline"></ion-icon>\n  Complaints\n      </button>\n      <button menuClose ion-item >\n         <ion-icon name="ios-clipboard-outline"></ion-icon>\n\n  Payments\n      </button>\n\n      <button menuClose ion-item (click)="navBill()">\n         <ion-icon name="ios-card-outline"></ion-icon>\n  Bills\n      </button>\n\n\n      <button menuClose ion-item (click)="navLogout()">\n         <ion-icon name="ios-exit-outline"></ion-icon>\n  Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'https://app.web/api/';
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                // this.isLoggedIn = true;
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getUserBill = function (data, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);
            _this.http.post(apiUrl + 'bills', { 'user_id': data }, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    //get bill details from bill id
    AuthServiceProvider.prototype.loadBillDetails = function (bill_id, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);
            _this.http.post(apiUrl + 'billdetails', { 'bill_id': bill_id }, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.logout = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            _this.http.post(apiUrl + 'logout', token, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            _this.http.post(apiUrl + 'register', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider.prototype.checkToken = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.get(apiUrl + 'me?token=' + token, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err.json());
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_pass_forgot_pass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.formData = {};
        this.formData.email = 'sazzadh88@gmail.com';
        this.formData.password = 'sazzad';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.presentToast(this.navParams.get('message'));
    };
    // LOGIN TASKS
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.formData.email == '') {
            this.presentToast("Email can not be empty");
        }
        else if (this.formData.password == '') {
            this.presentToast("Password can not be empty");
        }
        else {
            this.showLoader();
            this.authService.login(this.formData).then(function (result) {
                _this.data = result;
                _this.presentToast("Login Successful");
                localStorage.setItem('token', _this.data.access_token);
                localStorage.setItem('user', JSON.stringify(_this.data.user));
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast("Login Failed");
            });
        }
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    // GO TO FORGOT PASSWORD PAGE
    LoginPage.prototype.goToForgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_pass_forgot_pass__["a" /* ForgotPassPage */]);
    };
    // GO TO REGISTER PAGE
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding  text-center>\n  \n      <!-- <img src="../../assets/imgs/logo_dial.png" height="90" /> -->\n\n\n  <form (ngSubmit)="login()" name="myForm">\n\n    \n     \n    \n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="formData.email" name="email" value="sazzadh88@gmail.com" clearInput="true"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="formData.password" value="sazzad" name="password" clearInput="true"></ion-input>\n\n      <br>\n      <label ng-show="myForm.name.$invalid"> Check Fields</label>\n      <br>\n    </ion-item>\n    <p text-right>\n      <button ion-button clear color="secondary" ng-disabled="myForm.$invalid" type="button" (click)="goToForgotPass()">Forgot password</button>\n    </p>\n\n    <button ion-button block color="secondary" type="submit">Login</button>\n    <button ion-button block type="button"  color="secondary" outline (click)="goToRegister()">Register</button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.token = '';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var access_token = localStorage.getItem('token');
        this.token = access_token;
        var userData = JSON.parse(localStorage.getItem('user'));
        console.log(userData);
        this.username = userData.name;
        this.userid = userData.id;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu sStarter</h3>\n\n  <p>\n    If you get lostsss, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <h2>Welcome {{ username }}</h2>\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary"><ion-icon name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Cyb3rX/ionic_projects/dial2us/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map