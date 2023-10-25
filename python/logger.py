from login_strategies import LoginStrategy,UsernameAndPasswordStrategy,EmailAndPasswordStrategy,PhonenumberAndPasswordStrategy
class IAMlogger:
    _instance = None
    _user = None
    _login_strategy: LoginStrategy = None

    def __init__(self, user):
        if IAMlogger._instance is not None:
            raise Exception("This class is a singleton!")
        else:
            IAMlogger._instance = self
            IAMlogger._user = user

    @classmethod
    def login(cls, credentials):
        if cls._instance is None:
            IAMlogger._login_strategy.login(credentials)
            cls._instance = cls(credentials)
        return cls._instance
    
    @classmethod
    def set_login_strategy(cls, login_strategy:LoginStrategy):
        cls._login_strategy = login_strategy

    @classmethod
    def logout(cls):
        cls._instance = None

    @classmethod
    def getInstance(cls):
        return cls._instance

    @classmethod
    def getUserDetails(cls):
        return cls._user



IAMlogger.set_login_strategy(UsernameAndPasswordStrategy())
IAMlogger.login({"username":"senjack", "password":"password"})
print(IAMlogger.getUserDetails())
IAMlogger.logout()

IAMlogger.set_login_strategy(PhonenumberAndPasswordStrategy())
IAMlogger.login({"phonenumber":"0768990909", "password":"demetira1"})
print(IAMlogger.getUserDetails())
IAMlogger.logout()

IAMlogger.set_login_strategy(EmailAndPasswordStrategy())
IAMlogger.login({"email":"josiah@gmail.com", "password":"sk"})
print(IAMlogger.getUserDetails())
IAMlogger.logout()

IAMlogger.set_login_strategy(PhonenumberAndPasswordStrategy())
IAMlogger.login({"phonenumber":"3256789080", "password":"nisha"})
print(IAMlogger.getUserDetails())
