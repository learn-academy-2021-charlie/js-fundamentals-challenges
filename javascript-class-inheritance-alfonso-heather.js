// Story: As a programmer, I can make a car.
class Car {
  constructor(model, year){
    this.make = "Generic"
    this.model  = model
    this.year   = year
    this.lights = false
    this.turnSignal = "off"
    this.signalLevel = "center"
    this.speed = 0
  }
  
  wheels(){return 4}
  
  logSpeed(){
    return `you are going ${this.speed} mph`
  }

  carInfo(){
    return `${this.make} ${this.model} ${this.year}`
  }

  lightSwitch(){
    if(this.lights === false){
      return this.lights = true
    }else{
      return this.lights = false
    }
  }



}

// Write a variable called myCar which is an instance of the class Car
var myCar = new Car("generic car", "myCar year")
console.log(myCar.wheels())
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Tesla extends Car{
  
  constructor(model, year){
    super(model, year)
    //!!!!!!! PLEASE DON'T BE MAD
    //using this.make until we find out if this is right
    // OR we need to do something else
    this.make = "Tesla"
  }

  accelerate(){
    this.speed += 10
  }

  decelerate(){
    this.speed -= 7
  }
  
}

// Create an object called myTesla which is a instance of class Tesla
var myTesla = new Tesla("model S", 1966)
console.log(myTesla)
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car{
  
  constructor(model,year){
    super(model,year)
    this.make ="Toyota"
  }

  accelerate(){
    this.speed += 5
  }

  decelerate(){
    this.speed -= 2
  }

}

// create an object called myToyota which is a instance of class Toyota
var myToyota = new Toyota("Camry",2000)
console.log(myToyota)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car

class Volkswagen extends Car{
  
  constructor(model,year){
    super(model,year)
    this.make = "Volkswagen"
  }

  accelerate(){
    this.speed += 7
  }

  decelerate(){
    this.speed -= 5
  }

}


// create an object called myVolkswagen which is a instance of class Volkswagen
var myVolkswagen = new Volkswagen("Bug",1975)
console.log(myVolkswagen)
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class



// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//

console.log(myTesla.lightSwitch())
console.log(myTesla)
console.log(myTesla.lightSwitch())
console.log(myTesla)

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
//
console.log(myToyota.logSpeed())
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
myTesla.accelerate()
console.log(myTesla.logSpeed())
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
myTesla.decelerate()
console.log(myTesla.logSpeed())
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
console.log(myToyota.logSpeed())
myToyota.accelerate()
console.log(myToyota.logSpeed())
myToyota.decelerate()
console.log(myToyota.logSpeed())
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
console.log(myVolkswagen.logSpeed())
myVolkswagen.accelerate()
console.log(myVolkswagen.logSpeed())
myVolkswagen.decelerate()
console.log(myVolkswagen.logSpeed())
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes
console.log(myVolkswagen.carInfo())
console.log(myToyota.carInfo())
console.log(myTesla.carInfo())