from abc import ABC, abstractmethod
from typing import Any

class OutputDevice(ABC):
    @abstractmethod
    def output(self, data: Any) -> bool:
        pass

class Monitor(OutputDevice):
    def output(self, data: Any) -> bool:
        print("=======================================")
        print("Outputting data on the Monitor Screen...")
        print("=======================================")
        print("Data:")
        print(data)
        print("=======================================")
        return True

class Projector(OutputDevice):
    def output(self, data: Any) -> bool:
        print("=======================================")
        print("Outputting data on a Projection...")
        print("=======================================")
        print("Data:")
        print(data)
        print("=======================================")
        return True
