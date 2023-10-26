"use strict";
// Think about the context class and strategy(s)
// In this case context would be the IAMlogger class because this is where the authentication strategies would be used
// Strategy has two parts the abstraction and concretions
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonenumberandPasword = exports.EmailandPasswordStrategy = exports.UsernameAndPasswordStrategy = exports.LoginStrategy = void 0;
var LoginStrategy = /** @class */ (function () {
    function LoginStrategy() {
    }
    return LoginStrategy;
}());
exports.LoginStrategy = LoginStrategy;
// Concrete Strategies
var UsernameAndPasswordStrategy = /** @class */ (function (_super) {
    __extends(UsernameAndPasswordStrategy, _super);
    function UsernameAndPasswordStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsernameAndPasswordStrategy.prototype.login = function (credentials) {
        console.log('Username:' + credentials['username'], 'Password:' + credentials['password']);
    };
    return UsernameAndPasswordStrategy;
}(LoginStrategy));
exports.UsernameAndPasswordStrategy = UsernameAndPasswordStrategy;
var EmailandPasswordStrategy = /** @class */ (function (_super) {
    __extends(EmailandPasswordStrategy, _super);
    function EmailandPasswordStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailandPasswordStrategy.prototype.login = function (credentials) {
        console.log('Email:' + credentials['email'], 'Password:' + credentials['password']);
    };
    return EmailandPasswordStrategy;
}(LoginStrategy));
exports.EmailandPasswordStrategy = EmailandPasswordStrategy;
var PhonenumberandPasword = /** @class */ (function (_super) {
    __extends(PhonenumberandPasword, _super);
    function PhonenumberandPasword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhonenumberandPasword.prototype.login = function (credentials) {
        console.log('Phonenumber:' + credentials['phonenumber'], 'Password:' + credentials['password']);
    };
    return PhonenumberandPasword;
}(LoginStrategy));
exports.PhonenumberandPasword = PhonenumberandPasword;
// module.exports = LoginStrategy
