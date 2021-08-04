// ## Challenges

class Car{
    constructor(model, year, accelerate, brake){
        this.model = model
        this.year = year
        this.wheels = 4
        this.lights = false
        this.speed = 0
        this.signal = false
        this.accelerate = accelerate
        this.brake = brake
    }

    wheelsUp(){
        return `This car has ${this.wheels} wheels`
    }

    lightSwitch(){
        if(this.lights == true){
            return `The lights are ON`
        }else{
            return `The lights are OFF`
        }
    }

    signalSelector(){
        if(this.signal == true){
            return `The signal: ON position`
        }else{
            return `The signal: OFF position`
        }
    }

    accelerateUp(){
        this.speed = this.speed + this.accelerate
        return `Speed up by ${this.accelerate} mph, will be ${this.speed} mph`

    }

    brakeDown(){
        if(this.speed > this.brake){
            this.speed = this.speed - this.brake
            return `Break down by ${this.brake} mph, will be ${this.speed} mph`
        }else if(this.speed <= this.brake){
            this.speed = 0
            return `Break down to 0 mph`
        }
    
    }

}
// 1. **Story**: As a programmer, I can make a car. - Write a variable called myCar which is an instance of the class Car
var myCar = new Car()
console.log(myCar)
//Output:
// Car {
//     model: undefined,
//     year: undefined,
//     wheels: 4,
//     lights: false,
//     speed: 0,
//     signal: false,
//     accelerate: undefined,
//     brake: undefined
//   }

// 2. **Story**: As a programmer, I can give my car a model on initialization. - The model for the car class can be "generic car"
myCar.model = "generic car"
console.log(myCar.model)
//Output: generic car

// 3. **Story**: As a programmer, I can give my car a year on initialization. - The year for the car class can be "myCar year"
myCar.year = "myCar year"
console.log(myCar.year)
//Output: myCar year

// 4. **Story**: As a programmer, I can tell how many wheels myCar has. - Calling the method wheels will return 4
console.log(myCar.wheelsUp())
//Output: This car has 4 wheels

// 5. **Story**: As a programmer, I can make a Tesla car. 
// - class Tesla inherits from class Car 
// - Create an object called myTesla which is a instance of class Tesla
class Tesla extends Car{
    constructor(){
        super()
    }
}

var myTesla = new Tesla()
console.log(myTesla)
//Output:
// Tesla {
//     model: undefined,
//     year: undefined,
//     wheels: 4,
//     lights: false,
//     speed: 0,
//     signal: false,
//     accelerate: undefined,
//     brake: undefined
//   }

// 6. **Story**: As a programmer, I can give my Tesla a model on initialization. 
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
myTesla.model = "2021 Tesla Model 3"
console.log("My Tesla model: ", myTesla.model)
//Output: My Tesla model:  2021 Tesla Model 3

// 7. **Story**: As a programmer, I can give my Tesla a year on initialization. 
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myTesla.year = "2021"
console.log("My Tesla year: ", myTesla.year)
//Output: My Tesla year:  2021

// 8. **Story**: As a programmer, I can make a Toyota car.- class Toyota inherits from class Car 
// - create an object called myToyota which is a instance of class Toyota
class Toyota extends Car{
    constructor(){
        super()
    }
}

var myToyota = new Toyota()
console.log(myToyota)
//Output:
// Toyota {
//     model: undefined,
//     year: undefined,
//     wheels: 4,
//     lights: false,
//     speed: 0,
//     signal: false,
//     accelerate: undefined,
//     brake: undefined
//   }

// 9. **Story**: As a programmer, I can give my Toyota a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
myToyota.model = "2020 Toyota Camry Trn"
console.log("My Toyota model: ", myToyota.model)
//Output: My Toyota model:  2020 Toyota Camry Trn

// 10. **Story**: As a programmer, I can give my Toyota a year on initialization. 
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myToyota.year = "2020"
console.log("My Toyota year: ", myToyota.year)
//Output: My Toyota year:  2020

// 11. **Story**: As a programmer, I can make a Volkswagen car. 
// - class Volkswagen inherits from class Car - create an object called myVolkswagen which is a instance of class Volkswagen
class Volkswagen extends Car{
    constructor(){
        super()
    }
}

var myVolkswagen = new Volkswagen()
console.log(myVolkswagen)
//Output:
// Volkswagen {
//     model: undefined,
//     year: undefined,
//     wheels: 4,
//     lights: false,
//     speed: 0,
//     signal: false,
//     accelerate: undefined,
//     brake: undefined
//   }

// 12. **Story**: As a programmer, I can give my Volkswagen a model on initialization. 
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
myVolkswagen.model = "2022 Volkswagen Taos SE"
console.log("My Volkswagen model: ", myVolkswagen.model)
//Output: My Volkswagen model:  2022 Volkswagen Taos SE

// 13. **Story**: As a programmer, I can give my Volkswagen a year on initialization. 
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myVolkswagen.year = "2022"
console.log("My Volkswagen year: ", myVolkswagen.year)
//Output: My Volkswagen model:  My Volkswagen year:  2022

// 14. **Story**: As a programmer, I can give all my cars a lights property. Lights start in the off position.
console.log(myCar.lights)
//Output: false---->Off position.

// 15. **Story**: As a programmer, I can turn the lights in all my cars on and off.
myCar.lights = true
console.log(myCar.lightSwitch())//Output: The lights are ON
myCar.lights = false
console.log(myCar.lightSwitch())//Output: The lights are OFF

// 16. **Story**: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
console.log(myCar.signal)
//Output: false----->Starts in the off position.

// 17. **Story**: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
console.log(myCar.speed)
//Output: 0------>Speed starts at 0 mph.

// 18. **Story**: As a programmer, I can speed my Tesla up by 10 per acceleration.
myTesla.accelerate = 10
console.log(myTesla.accelerateUp())
//Output: Speed up by 10 mph, will be 10 mph

// 19. **Story**: As a programmer, I can slow my Tesla down by 7 per braking.
myTesla.brake = 7
console.log(myTesla.brakeDown())
//Output: Break down by 7 mph, will be 3 mph

// 20. **Story**: As a programmer, I can speed my Toyota up by 5 per acceleration.
myToyota.accelerate = 5
console.log(myToyota.accelerateUp())
//Output: Speed up by 5 mph, will be 5 mph

// 21. **Story**: As a programmer, I can slow my Toyota down by 2 per braking.
myToyota.brake = 2
console.log(myToyota.brakeDown())
//Output: Break down by 2 mph, will be 3 mph

// 22. **Story**: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
myVolkswagen.accelerate = 7
console.log(myVolkswagen.accelerateUp())
//Output: Speed up by 7 mph, will be 7 mph

// 23. **Story**: As a programmer, I can slow my Volkswagen down by 5 per braking.
myVolkswagen.brake = 5
console.log(myVolkswagen.brakeDown())
//Output: Break down by 5 mph, will be 2 mph