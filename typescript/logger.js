// 1. Singleton class
var IAMlogger = /** @class */ (function () {
    function IAMlogger(user) {
        IAMlogger.user = user;
    }
    IAMlogger.login = function (credentials) {
        if (IAMlogger.instance == null) {
            var myLogger = new IAMlogger(credentials['data']);
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
        return IAMlogger.user;
    };
    IAMlogger.instance = null;
    IAMlogger.user = null;
    return IAMlogger;
}());
IAMlogger.login({ data: { username: "senjack", password: "password" } });
console.log(IAMlogger.getUserDetails());
IAMlogger.login({ data: { username: "demetira", password: "demetira1" } });
console.log(IAMlogger.getUserDetails());
IAMlogger.login({ data: { username: "josiah", password: "sk" } });
console.log(IAMlogger.getUserDetails());
IAMlogger.login({ data: { username: "hajat", password: "nisha" } });
console.log(IAMlogger.getUserDetails());
