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

// var blackCoffee = new Coffee("Black Coffee", 0, 0)
// console.log(blackCoffee)
// -->Coffee { type: 'black coffee', cream: 0, sugar: 0 }

// var blackCoffee = new Coffee("black coffee", 0, 0)

// console.log(blackCoffee.coffeeProfile())
//--->black coffee: 0 cream, 0 sugar

// Write the code that makes a coffee with 1 cream and 2 sugars.

// var coffeeOrder1 = new Coffee("coffee", 1, 2)

// console.log(coffeeOrder1.coffeeProfile())
// ---> coffee: 1 cream, 2 sugars

// var coffeeOrder1 = new Coffee("coffee", 1, 2)
// console.log("Add Cream:", coffeeOrder1.creams())
// console.log("Add Sugar:", coffeeOrder1.sugars())
//-->Add Cream: 1 cream
// Add Sugar: 2 sugars
// console.log(coffeeOrder1)

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// attempt 1: var coffeeOrder1 = new Coffee("coffee", 0, 2)
// console.log(coffeeOrder1.coffeeProfile())
// --->coffee: 0 cream, 2 sugars
// attempt 2:
// var coffeeOrder2 = new Coffee("coffee with sugar", 0, 2)
// console.log("Add Sugar:", coffeeOrder2.sugars())
// console.log(coffeeOrder2)




// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// class Latte {
//   constructor(flavor, milk, shots){
//     this.flavor = flavor
//     this.milk = milk
//     this.shots = shots
//   }
// }
// Write a method for your Latte class that outputs the latte's profile.
class Latte {
  constructor(flavor, milk, shot){
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  }
  latteProfile(){
    return(`${this.flavor}: ${this.milk}, ${this.shots()}`)
  }
  shots(){
    if (this.shot > 1){
      return `${this.shot} shots` 
    } else {
      return `${this.shot} shot`
    }
  }
}
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// var singleShot = new Latte("Regular", "whole", 1)
// console.log("Add shot:", singleShot.shots())
// console.log(singleShot.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// var latte1 = new Latte("Hazelnut", "Almond milk", 2)
// console.log("Add shots:", latte1.shots(2))
// console.log(latte1)

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects

