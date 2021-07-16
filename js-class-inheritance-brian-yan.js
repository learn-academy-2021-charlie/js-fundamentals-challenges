// ## Challenges

// 1. **Story**: As a programmer, I can make a car.
// - Write a variable called myCar which is an instance of the class Car
class Car{
    constructor(b,m,e,t,y){
        this.model = m
        this.engine = e
        this.tires = t
        this.sunroof = true
        this.year = y

    }
}

var myCar = new Car()
console.log(myCar)

// 2. **Story**: As a programmer, I can give my car a model on initialization.
// - The model for the car class can be "generic car"
myCar.model = "generic car"
console.log("model" , myCar.model)

// 3. **Story**: As a programmer, I can give my car a year on initialization.
// - The year for the car class can be "myCar year"
class MyCar extends Car{
    constructor(){
        super()
        this.myCarYear = 1999
    }

    wheels(){
        return `4 wheels`
    }
}
var myCar2 = new MyCar()
console.log(myCar2)

// 4. **Story**:	As a programmer, I can tell how many wheels myCar has.
// - Calling the method wheels will return 4

console.log("How many wheels: ", myCar2.wheels())

// 4. **Story**:	As a programmer, I can make a Tesla car.
// - class Tesla inherits from class Car
// - Create an object called myTesla which is a instance of class Tesla
class Tesla extends Car{
    constructor(){
        super()
    }
}
var myTesla = new Tesla()
console.log(myTesla)

// 5. **Story**: As a programmer, I can give my Tesla a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
myTesla.model = "2021 Tesla Model 3"
console.log("Tesla model: " , myTesla.model)//.model already initialzed/inherited, only need to test  

// 6. **Story**: As a programmer, I can give my Tesla a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myTesla.year = "2020"//Initialze year in the parent class and passing/inheriting through that to myTesla.
console.log("Tesla year: " , myTesla.year)//Test--->Tesla year:  2020

// 7. **Story**:	As a programmer, I can make a Toyota car.
// - class Toyota inherits from class Car
// - create an object called myToyota which is a instance of class Toyota
class Toyota extends Car{
    constructor(){
        super()
    }
}
var myToyota = new Toyota()
console.log(myToyota)

// 8. **Story**: As a programmer, I can give my Toyota a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
myToyota.model = "2021 Toyota camry trn"
console.log("Toyota model: " , myToyota.model)

// 9. **Story**: As a programmer, I can give my Toyota a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myToyota.model = "2020 camry xse"
console.log("Toyota model: " , myToyota.model)


// 10. **Story**:	As a programmer, I can make a Volkswagen car.
// - class Volkswagen inherits from class Car
// - create an object called myVolkswagen which is a instance of class Volkswagen
class Volkswagen extends Car{
    constructor(){
        super()
    }
}
var myVolkswagen = new Volkswagen()
console.log(myVolkswagen)


// 11. **Story**: As a programmer, I can give my Volkswagen a model on initialization.
// - The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
myVolkswagen.model = "2022 Volkswagen taos se"
console.log("Volkswagen model: " , myVolkswagen.model)

// 12. **Story**: As a programmer, I can give my Volkswagen a year on initialization.
// - The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myVolkswagen.year = "2020"
console.log("Volkswagen year: " , myVolkswagen.year)

// 13. **Story**: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// 14. **Story**: As a programmer, I can turn the lights in all my cars on and off.

// 15. **Story**:  As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// 16. **Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// 17. **Story**:	As a programmer, I can speed my Tesla up by 10 per acceleration.

// 18. **Story**:	As a programmer, I can slow my Tesla down by 7 per braking.

// 19. **Story**:	As a programmer, I can speed my Toyota up by 5 per acceleration.

// 20. **Story**:	As a programmer, I can slow my Toyota down by 2 per braking.

// 21. **Story**:	As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// 22. **Story**:	As a programmer, I can slow my Volkswagen down by 5 per braking.