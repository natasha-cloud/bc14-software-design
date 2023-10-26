from abc import ABC, abstractmethod

# Implementor interface
class Brand(ABC):
    @abstractmethod
    def boot(self) -> None:
        pass

  

# Concrete Implementors
class Dell(Brand):
    def boot(self):
        print('Dell computer booting')

    
class Hp(Brand):
    def boot(self):
        print('Hp computer booting')


class Lenovo(Brand):
    def boot(self):
        print('Lenovo computer booting')
