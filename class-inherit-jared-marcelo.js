// Challenges
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// class Car {
//     constructor(model){
//         this.model = model
//     }
// }
// instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// let myCar = new Car('Camry')
// console.log(myCar)
// The model for the car class can be "generic car"
// class Car {
//     constructor(){
//         this.model = 'generic car'
//     }
// }
// let myCar1 = new Car()
// console.log(myCar1)
// Story: As a programmer, I can give my car a year on initialization.
// class Car {
//     constructor(){
//         this.model = 'generic car'
//         this.year = year
//     }
// }
// let myCar1 = new Car(2016)
// console.log(myCar1)
// The year for the car class can be "myCar year"
// class Car {
//         constructor(year){
//             this.model = 'generic car'
//             this.year = 'myCar year'
//         }
//     }
//     let myCar1 = new Car()
//     console.log(myCar1)
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// class Car {
//     constructor(){
//         this.model = 'generic car'
//         this.year = 'myCar year'
//         this.numOfwheels = 8
//     }

//     removeWheels() {
//         this.numOfwheels = 4;
//     }
// }
// let myCar1 = new Car()
// let myCar2 = new Car()
// console.log(myCar1)
// console.log(myCar2)
// myCar1.removeWheels()  
// perform this action on myCar1 --- go to car one grab this method and execute it -- invoke this function!! 
// console.log(myCar1)
// console.log(myCar2)
// // Story: As a programmer, I can make a Tesla car.
// // class Tesla inherits from class Car
// class Tesla extends Car{
//     constructor(){
//         super()
//     }
// }
// // Create an object called myTesla which is a instance of class Tesla
// let myTesla = new Tesla()
// console.log(myTesla)

//////////////////////////////// !!!!!!!!!!! //////////////////////////
class Car {
    constructor(model){
        this.model = model
        this.year = 'myCar year'
        this.numOfwheels = 8
    }

    removeWheels() {
        this.numOfwheels = 4;
    }
}
let myCar1 = new Car('mazda3')
let myCar2 = new Car('mercedes39')

console.log(myCar1)
console.log(myCar2)

class Tesla extends Car{
    constructor(model){
        super(model)
    }
}
// Create an object called myTesla which is a instance of class Tesla
let myTesla = new Tesla('S')
let myTesla1 = new Tesla('X')
let myTesla3 = new Tesla('E')
console.log(myTesla)
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

//////////////////////////////// !!!!!!!!!!! //////////////////////////

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