// 1. Singleton class
class IAMlogger{
    private static instance:any = null;
    private static user: any = null;

    private constructor(user:any){
        IAMlogger.user = user;
    }


    static login(credentials:any){
        if (IAMlogger.instance == null){
            let myLogger = new IAMlogger(credentials['data']);
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
        return IAMlogger.user
    }
}


IAMlogger.login({data:{username:"senjack", password:"password"}});
console.log(IAMlogger.getUserDetails());

IAMlogger.login({data:{username:"demetira", password:"demetira1"}});
console.log(IAMlogger.getUserDetails());

IAMlogger.login({data:{username:"josiah", password:"sk"}});
console.log(IAMlogger.getUserDetails());

IAMlogger.login({data:{username:"hajat", password:"nisha"}});
console.log(IAMlogger.getUserDetails());
