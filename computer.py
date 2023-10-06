from abc import ABC, abstractmethod

# Abstraction => No details but only rules
class InputDevice(ABC):

    @abstractmethod
    def input() -> any:
        pass


# Implementation => Has the details
class Mouse(InputDevice):
    
    def input():
        print('Inputing data from Mouse...')
        return {}

class Keyboard(InputDevice):
    
    def input():
        print('Inputing data from keyboard')
        return {}



class Computer():
    # Fields
    inputDevice: InputDevice

    # Methods
    def input(self):
        return self.inputDevice.input()



