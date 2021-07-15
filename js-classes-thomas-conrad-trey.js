class Coffee {
    constructor(type, cream, sugar){
      this.type = type.toLowerCase()
      this.cream = cream    //key:  value
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
//   Write the code that makes a black coffee.
var blackCoffee = new Coffee("black",1,1)
console.log(blackCoffee.coffeeProfile())
// Write the code that makes a coffee with 1 cream and 2 sugars.
var sugaredBlackCoffee = new Coffee("black", 1, 2)
console.log(sugaredBlackCoffee.coffeeProfile())
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

var noCreamer = new Coffee("black", 0, 2)
console.log(noCreamer.coffeeProfile())
