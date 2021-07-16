// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
class Car {
    constructor(year){
        this.model = "generic car"
        this.year = year
        this.wheelCount = 4
        this.turnSignal = "off"
        this.carLights = "off"
        this.speed = 0
    }
    carInfo(){
        return `your car information is as follows. you are driving a ${this.model} model year ${this.year} it has ${this.wheelCount} wheels your turn signals are ${this.turnSignal} your car lights are ${this.carLights} and your speed is ${this.speed}`
    }
    headlights(){
        if(this.carLights === "off") {
            return this.carLights = "on"
        } else {
            return this.carLights = "off"
        }
    }
    turnSignals(){
        if(this.turnSignal === "off") {
            return this.turnSignal = "on"
        } else {
            return this.turnSignal = "off"
        }
    }
    acceleration(){ //check for capitalization
        if(this.model === "tesla"){
            return this.speed + 10
        } else if(this.model === "toyota") {
            return this.speed + 5
        } else if(this.model === "volkswagen") {
            return this.speed + 7
        } else {

        }
    }
    braking(){ //check for capitalization
        if(this.model === "tesla" && this.speed > 0){
            return this.speed - 7//create nested if statement to handle when speeds are below acceleration rate
        } else if(this.model === "toyota") {
            return this.speed - 2
        } else if(this.model === "volkswagen") {
            return this.speed -5
        } else {
            return "Error: Please use correct model(tesla, toyota, volkwagen)"
        }
    } 
}
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
class MyTesla extends Car {
    constructor(year){
        super(year)
        this.model = "tesla"
    }
}
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
class myToyota extends Car {
    constructor(year){
        super(year)
        this.model = "toyota"
    }
}

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
class myVolkswagen extends Car {
    constructor(year){
        super(year)
        this.model = "generic volkswagen"
    }
}

var myCar = new MyTesla(2021)
myCar.acceleration()
console.log(myCar.carInfo());

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
