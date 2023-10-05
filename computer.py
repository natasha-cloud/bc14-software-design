# Overriding

class Person:
    # Fields

    # Methods
    def talk(self):
        print('I am a person')

class Man(Person):
    # Fields

    # Methods
    def talk(self):
        print('I am a Man')



p1 = Man()
p1.talk()
