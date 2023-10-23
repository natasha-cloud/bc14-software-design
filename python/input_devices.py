from abc import ABC, abstractmethod

class InputDevice(ABC):
    @abstractmethod
    def input(self):
        pass

class Keyboard(InputDevice):
    def input(self):
        print("Inputting data from keyboard...")

class Mouse(InputDevice):
    def input(self):
        print("Inputting data using Mouse...")
