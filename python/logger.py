class IAMlogger:
    _instance = None
    _user = None

    def __init__(self, user):
        if IAMlogger._instance is not None:
            raise Exception("This class is a singleton!")
        else:
            IAMlogger._instance = self
            IAMlogger._user = user

    @classmethod
    def login(cls, credentials):
        if cls._instance is None:
            cls._instance = cls(credentials)
        return cls._instance

    @classmethod
    def logout(cls):
        cls._instance = None

    @classmethod
    def getInstance(cls):
        return cls._instance

    @classmethod
    def getUserDetails(cls):
        return cls._user



IAMlogger.login({"username":"senjack", "password":"password"})
print(IAMlogger.getUserDetails())

IAMlogger.login({"username":"demetira", "password":"demetira1"})
print(IAMlogger.getUserDetails())

IAMlogger.login({"username":"josiah", "password":"sk"})
print(IAMlogger.getUserDetails())

IAMlogger.login({"username":"hajat", "password":"nisha"})
print(IAMlogger.getUserDetails())
