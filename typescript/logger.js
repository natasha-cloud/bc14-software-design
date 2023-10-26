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
    IAMlogger.logout = function () {
        IAMlogger.instance = null;
    };
    IAMlogger.getInstance = function () {
        return IAMlogger.instance;
    };
    IAMlogger.getUserDetails = function () {
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
console.log(IAMlogger.getUserDetails());
