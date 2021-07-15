// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//
//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//
//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
//
// // Write the code that makes a black coffee.
// var blackCoffee = new Coffee ("black coffee", 0 , 0)
// console.log(blackCoffee)
//
// // Write the code that makes a coffee with 1 cream and 2 sugars.
//
// var coffee = new Coffee ("coffee", 1, 2)
// console.log(coffee)
//
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
//
// var coffee1 = new Coffee ("coffee", 0, 2)
// console.log(coffee1.coffeeProfile())
//
// Latte Maker

// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
  constructor (flavor, milkType, shots) {
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType
    this.shots = shots
  }
  latteProfile () {
    return (`${this.flavor}: ${this.milkType}: ${this.shots}`)
  }
}
var regularLatte = new Latte ("latte", 0, 1)
console.log(regularLatte.latteProfile())

// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// //
