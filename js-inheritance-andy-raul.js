// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes




class Car{
    constructor(make, year){
    this.carMake = make
    this.carYear = year
    this.wheels = 4
    this.lights = false
    this.carSpeed = 0
    this.turnSignal = "off"
    }
    howManyWheels(){
        return `This car has ${this.wheels} wheels`
    }
    lightSwitch (){
        if (this.lights == true){
            this.lights =false
            return `Car lights are ON`
        }else {
            return `Lights are OFF`
        }
    }
    turnSignalSelector (){
        if(this.turnSignal =="off"){
            return `turn signal is off`
        }else if(this.turnSignal == "left"){
            return `left indicator on`
        }else if(this.turnSignal =="right"){
        return `right indicator on`
        }
    }

}

class Tesla extends Car{
    constructor(make, year, model){
    super(make, year)
    this.Model = model
    }
    accelerate(){
        if(this.carSpeed >= 0)
        return `Vehicle speed is ${this.carSpeed + 10}`
    }
    brake(){
        if(this,carSpeed =>0)
        return `Vehicle speed is${this.carSpeed -7}`
    }
}
class Toyota extends Car{
    constructor(make, year, model){
    super(make, year)
    this.Model = model
    this.lights = true
    }
    accelerate(){
        if(this.carSpeed >= 0)
        return `Vehicle speed is ${this.carSpeed + 5}`
    }
    brake(){
        if(this,carSpeed =>0)
        return `Vehicle speed is${this.carSpeed -2}`
    }
}
class Volkswagen extends Car{
    constructor(make, year, model){
    super(make, year)
    this.Model = model
    this.lights = false
    }
    accelerate(){
        if(this.carSpeed >= 0)
        return `Vehicle speed is ${this.carSpeed + 7}`
    }
    brake(){
        if(this,carSpeed =>0)
        return `Vehicle speed is${this.carSpeed -5}`
    }
}
var myVolkswagen = new Volkswagen ("Volkswagen", 2022, "Golf")
var myToyota = new Toyota ("Toyota", 1975, "Corolla")
var myTesla = new Tesla("Tesla",2020, "Model S",)
var myCar = new Car("ford", 1992)

var myVolkswagenOff = new Volkswagen ("Volkswagen", 2022, "Golf",4,true)

console.log(myVolkswagenOff.lightSwitch())
console.log(myToyota.accelerate())
console.log(myToyota.accelerate())