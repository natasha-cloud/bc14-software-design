from abc import ABC, abstractmethod

class BluetoothDevice(ABC):
    @abstractmethod
    def connect_to_bluetooth(self) -> bool:
        pass
