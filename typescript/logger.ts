<<<<<<< HEAD
// 1. create singleton class
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
=======
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
>>>>>>> b2080d61b0d584f1cf392861b3273c6030f37dbd
        }
        return IAMlogger.instance;
    }

<<<<<<< HEAD
=======
    static getLoginStrategy(){
        return IAMlogger.login_strategy;
    }

   
    static setLoginStrategy(login_strategy: LoginStrategy) {
        IAMlogger.login_strategy = login_strategy;
    }
    

    s
>>>>>>> b2080d61b0d584f1cf392861b3273c6030f37dbd
    static logout(){
        IAMlogger.instance = null;
    }

    static getInstance(){
        return IAMlogger.instance;
    }

    static getUserDetails(){
<<<<<<< HEAD
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


=======
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
>>>>>>> b2080d61b0d584f1cf392861b3273c6030f37dbd
