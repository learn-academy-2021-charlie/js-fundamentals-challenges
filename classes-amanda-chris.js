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

var coffeeOrder1 = new Coffee("Coffee", 1, 2)
console.log("Add Cream:", coffeeOrder1.creams())
console.log("Add Sugar:", coffeeOrder1.sugars())
//-->Add Cream: 1 cream
// Add Sugar: 2 sugars


// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

// var coffeeOrder1 = new Coffee("coffee", 0, 2)

// console.log(coffeeOrder1.coffeeProfile())
// --->coffee: 0 cream, 2 sugars

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects

