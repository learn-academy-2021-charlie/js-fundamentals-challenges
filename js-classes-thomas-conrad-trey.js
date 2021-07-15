// class Coffee {
//     constructor(type, cream, sugar){
//       this.type = type.toLowerCase()
//       this.cream = cream    //key:  value
//       this.sugar = sugar
//     }
  
//     coffeeProfile(){
//       return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//     }
  
//     creams(){
//       if (this.cream > 1){
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars(){
//       if (this.sugar > 1){
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }
// //   Write the code that makes a black coffee.
// var blackCoffee = new Coffee("black",1,1)
// console.log(blackCoffee.coffeeProfile())
// // Write the code that makes a coffee with 1 cream and 2 sugars.
// var sugaredBlackCoffee = new Coffee("black", 1, 2)
// console.log(sugaredBlackCoffee.coffeeProfile())
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// var noCreamer = new Coffee("black", 0, 2)
// console.log(noCreamer.coffeeProfile())

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor
    this.milk = milk
    this.shot = shots
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

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var singleShot = new Latte("regular latte", 1)
console.log(singleShot.latteProfile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.