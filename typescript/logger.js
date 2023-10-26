<<<<<<< HEAD
// 1. create singleton class
var IAMlogger = /** @class */ (function () {
    function IAMlogger(username, password) {
        IAMlogger.username = username;
        IAMlogger.password = password;
    }
    IAMlogger.login = function (username, password) {
        if (IAMlogger.instance == null) {
            var myLogger = new IAMlogger(username, password);
            IAMlogger.instance = myLogger;
        }
        return IAMlogger.instance;
    };
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_strategy_1 = require("../typescript/login_strategy");
// const LoginStrategy = require('../typescript/login_strategies')
// 1. Singleton class
var IAMlogger = /** @class */ (function () {
    function IAMlogger(user) {
        IAMlogger.user = user;
    }
    IAMlogger.login = function (credentials) {
        if (IAMlogger.instance == null) {
            var myLogger = new IAMlogger(credentials);
            IAMlogger.instance = myLogger;
            IAMlogger.login_strategy.login(credentials);
        }
        return IAMlogger.instance;
    };
    IAMlogger.getLoginStrategy = function () {
        return IAMlogger.login_strategy;
    };
    IAMlogger.setLoginStrategy = function (login_strategy) {
        IAMlogger.login_strategy = login_strategy;
    };
>>>>>>> b2080d61b0d584f1cf392861b3273c6030f37dbd
    IAMlogger.logout = function () {
        IAMlogger.instance = null;
    };
    IAMlogger.getInstance = function () {
        return IAMlogger.instance;
    };
    IAMlogger.getUserDetails = function () {
<<<<<<< HEAD
        return {
            username: IAMlogger.username,
            password: IAMlogger.password
        };
    };
    IAMlogger.instance = null;
    return IAMlogger;
}());
IAMlogger.login("senjack", "password");
console.log(IAMlogger.getUserDetails());
IAMlogger.login("demetira", "demetira1");
console.log(IAMlogger.getUserDetails());
IAMlogger.login("josiah", "sk");
console.log(IAMlogger.getUserDetails());
IAMlogger.login("hajat", "nisha");
=======
        return IAMlogger.user;
    };
    IAMlogger.instance = null;
    IAMlogger.user = null;
    return IAMlogger;
}());
// set login strategy first 
IAMlogger.setLoginStrategy(new login_strategy_1.UsernameAndPasswordStrategy());
IAMlogger.login({ username: "senjack", password: "password" });
console.log(IAMlogger.getUserDetails());
IAMlogger.logout();
IAMlogger.setLoginStrategy(new login_strategy_1.PhonenumberandPasword());
IAMlogger.login({ phonenumber: "0706747874", password: "demetira1" });
console.log(IAMlogger.getUserDetails());
IAMlogger.logout();
IAMlogger.setLoginStrategy(new login_strategy_1.EmailandPasswordStrategy());
IAMlogger.login({ email: "josiah52@gmail.com", password: "sk" });
console.log(IAMlogger.getUserDetails());
IAMlogger.login({ username: "hajat", password: "nisha" });
>>>>>>> b2080d61b0d584f1cf392861b3273c6030f37dbd
console.log(IAMlogger.getUserDetails());
