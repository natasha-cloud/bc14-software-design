from abc import ABC, abstractmethod

class WiFiDevice(ABC):
    @abstractmethod
    def connect_to_wifi(self) -> bool:
        pass
