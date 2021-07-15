// Coffee Maker
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
// var blackCoffee = new Coffee("black coffee", 1, 0)
// console.log(blackCoffee)
// Write the code that makes a coffee with 1 cream and 2 sugars.
// var coffee1 = new Coffee("coffee", 1, 2)
// console.log(coffee1)
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// var coffee2 = new Coffee("coffee", 0, 2 )
// console.log(coffee2.coffeeProfile()) 

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
    constructor(flavor, milkType, shots){
        this.flavor = flavor
        this.milkType = milkType
        this.shots = shots
    }
    latteProfile(){
        return(`${this.flavor} ${this.milkType} ${this.shots} `)
    }
}

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var latte1 = new Latte("Latte", "coconut", 1)
console.log(latte1)

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var latte2 = new Latte('Hazelnet', 'almond', 2)
console.log(latte2)

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  constructor(radius, height){
    this.radius = radius
    this.height = height
    this.pi = Math.PI
  }
  cylinderVolume(){
    return ((this.radius**2) * this.pi * this.height).toFixed(4)
  }
}
console.log(Math.PI)

// Making a cylinder
var cylinder1 = new Cylinder(4, 6)

console.log(cylinder1)
let volumeCylinder1 = cylinder1.cylinderVolume()
console.log(volumeCylinder1)
// console.log(volumeCylinder1.toFixed(4))
console.log(volumeCylinder1)
// Answer! 
// interesting!! -- to fixed converts the number to a string

// Write the code that creates three unique cylinder objects
var cylinder2 = new Cylinder(10, 100)
var cylinder3 = new Cylinder(200, 69)

console.log(cylinder2, cylinder3)

let volumeCylinder2 = cylinder2.cylinderVolume()
// console.log(volumeCylinder2.toFixed(4))
console.log(volumeCylinder2)