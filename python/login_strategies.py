"""
we implement strategy pattern we hink:
-context class ie IAMlogger class
-strategies,we can call them authentication strategies or login strategies
a strategy has abstraction and concretions
"""

from abc import ABC, abstractmethod


class LoginStrategy(ABC):
    @abstractmethod
    def login(self,creditials:dict) -> None: #defining signature of a method,  parameters,types and return types
        pass

class UsernameAndPasswordStrategy(LoginStrategy):
    def login(self, credentials:dict) -> None:
        print(f"Username: {credentials['username']}, Password: {credentials['password']}")

class EmailAndPasswordStrategy(LoginStrategy):
    def login(self, credentials:dict) -> None:
        print(f"Email: {credentials['email']}, Password: {credentials['password']}")

class PhonenumberAndPasswordStrategy(LoginStrategy):
    def login(self, credentials:dict) -> None:
        print(f"Phonenumber: {credentials['phonenumber']}, Password: {credentials['password']}")
        