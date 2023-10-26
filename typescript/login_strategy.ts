// Think about the context class and strategy(s)
// In this case context would be the IAMlogger class because this is where the authentication strategies would be used
// Strategy has two parts the abstraction and concretions

export abstract class LoginStrategy{
    // signature of a method defines the name of the method, parameters of the method and return type 
    // use structures as parameters as opposed to using primitive types
    abstract login(credentials:any): null ;
}

// Concrete Strategies

export class UsernameAndPasswordStrategy extends LoginStrategy{
    login(credentials: any): any {
       console.log('Username:'+ credentials['username'], 'Password:'+ credentials['password'])
    }
}

export class EmailandPasswordStrategy extends LoginStrategy{
    login(credentials: any): any {
       console.log('Email:'+ credentials['email'], 'Password:'+ credentials['password'])
    }
}

export class PhonenumberandPasword extends LoginStrategy{
    login(credentials: any): any {
       console.log('Phonenumber:'+ credentials['phonenumber'], 'Password:'+ credentials['password'])
    }
}

// module.exports = LoginStrategy