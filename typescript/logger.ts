import { LoginStrategy } from '../typescript/login_strategy';
import { UsernameAndPasswordStrategy, PhonenumberandPasword , EmailandPasswordStrategy} from '../typescript/login_strategy';

// const LoginStrategy = require('../typescript/login_strategies')
// 1. Singleton class

class IAMlogger{
    private static instance:any = null;
    private static user: any = null;
    private static login_strategy: LoginStrategy;

    private constructor(user:any){
        IAMlogger.user = user;
    }


    static login(credentials:any){
        if (IAMlogger.instance == null){
            let myLogger = new IAMlogger(credentials);
            IAMlogger.instance = myLogger;   
            IAMlogger.login_strategy.login(credentials)
        }
        return IAMlogger.instance;
    }

    static getLoginStrategy(){
        return IAMlogger.login_strategy;
    }

   
    static setLoginStrategy(login_strategy: LoginStrategy) {
        IAMlogger.login_strategy = login_strategy;
    }
    

    s
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

// set login strategy first 
IAMlogger.setLoginStrategy(new UsernameAndPasswordStrategy());
IAMlogger.login({username:"senjack", password:"password"});
console.log(IAMlogger.getUserDetails());
IAMlogger.logout();

IAMlogger.setLoginStrategy(new PhonenumberandPasword());
IAMlogger.login({phonenumber:"0706747874", password:"demetira1"});
console.log(IAMlogger.getUserDetails());
IAMlogger.logout();

IAMlogger.setLoginStrategy(new EmailandPasswordStrategy());
IAMlogger.login({email:"josiah52@gmail.com", password:"sk"});
console.log(IAMlogger.getUserDetails());


IAMlogger.login({username:"hajat", password:"nisha"});
console.log(IAMlogger.getUserDetails());
