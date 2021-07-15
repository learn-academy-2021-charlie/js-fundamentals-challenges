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
var blackCoffee = new Coffee("black", 0, 0)

// Write the code that makes a coffee with 1 cream and 2 sugars.
var coffee = new Coffee("iced", 1, 2)

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var moreCoffee = new Coffee("frappe", 0, 2)
// console.log(moreCoffee.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
    constructor(flavor, milkType, shots){
      this.flavor = flavor
      this.milkType = milkType
      this.shots = shots
    }

    // Write a method for your Latte class that outputs the latte's profile.
    latteProfile(){
        return(`${this.flavor}: ${this.milkType}, ${this.shots}`)
    }
}

var latte = new Latte("vanilla", "almond", 1)
// console.log(latte.latteProfile())

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var rLatte = new Latte("crammel", "regular", 1)
// console.log(rLatte.latteProfile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hLatte = new Latte("hazelnut", "almond", 2)
// console.log(hLatte.latteProfile())
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder {
  constructor(radius, height){
    this.radius = radius
    this.height = height
  }
  calcVolume(){
    return Math.PI * this.radius * 2 * this.height
  }
}
// Write the code that creates three unique cylinder objects
var cylinder1 = new Cylinder(35, 12)
var cylinder2 = new Cylinder(24,12) 
var cylinder3 = new Cylinder(56, 90)

console.log(cylinder2.calcVolume())


class GoKart {

  constructor() {
     
  }
}