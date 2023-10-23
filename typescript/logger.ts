// 1. Singleton class
class IAMlogger{
    private static instance:any = null;
    private static username:string;
    private static password:string;

    private constructor(username:string, password:string){
        IAMlogger.username = username;
        IAMlogger.password = password;
    }


    static login(username:string, password:string){
        if (IAMlogger.instance == null){
            let myLogger = new IAMlogger(username, password);
            IAMlogger.instance = myLogger;   
        }
        return IAMlogger.instance;
    }

    static logout(){
        IAMlogger.instance = null;
    }

    static getInstance(){
        return IAMlogger.instance;
    }

    static getUserDetails(){
        return {
            username: IAMlogger.username,
            password: IAMlogger.password
        }
    }
}


IAMlogger.login("senjack", "password");
console.log(IAMlogger.getUserDetails());

IAMlogger.login("demetira", "demetira1");
console.log(IAMlogger.getUserDetails());

IAMlogger.login("josiah", "sk");
console.log(IAMlogger.getUserDetails());

IAMlogger.login("hajat", "nisha");
console.log(IAMlogger.getUserDetails());
