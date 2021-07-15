// 1. Coffee Maker


class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}


// Write the code that makes a black coffee.
var blackCoffee = new Coffee("black",0,0)
console.log(blackCoffee.coffeeProfile())


// Write the code that makes a coffee with 1 cream and 2 sugars.
var sweetCoffee = new Coffee("sweet",1,2)
console.log(sweetCoffee.coffeeProfile())

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var onlySugar = new Coffee("sugar",0,2)
console.log(onlySugar.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavor, milkType, shots){
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType
    this.shots = shots
  }

  latteProfile(){
    return `A ${this.flavor} latte with ${this.milkType} and ${this.shots} shot${this.shots !== 1 ? "s":""}.`
  }

}

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regular = new Latte("", "whole milk", 1)
console.log(regular.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var dblHazelnut = new Latte("hazelnut", "almond milk", 2)
console.log(dblHazelnut.latteProfile())





// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. 
//Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  
  constructor(radius,height){
    this.radius = radius
    this.height = height
    this.pi     = Math.PI
  }

  volume(){
    let result = this.pi * this.radius * 2 * this.height
    return parseFloat(result.toFixed(4))
  }

}



// Write the code that creates three unique cylinder objects
const cylinderOne   = new Cylinder(3,7)
const cylinderTwo   = new Cylinder(20,50)
const cylinderThree = new Cylinder(22,13)

console.log(cylinderOne.volume())
console.log(cylinderTwo.volume())
console.log(cylinderThree.volume())