
// ## Challenges

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

// - Write the code that makes a black coffee.
var blackCoffee = new Coffee("black",0,0)
console.log(blackCoffee.coffeeProfile())
// - Write the code that makes a coffee with 1 cream and 2 sugars.
var yanCoffee = new Coffee("yan",1,2)
console.log(yanCoffee.coffeeProfile())

// - Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var kelenCoffee = new Coffee("kelen",0,2)
console.log(kelenCoffee.coffeeProfile())

// 2. Latte Maker
// - Write a Latte class that receives a flavor, a milk type and a number of shots.
// - Write a method for your Latte class that outputs the latte's profile.


class Latte {
    constructor(flavor, milkType, shots){
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.shots = shots
    }
  
    latteProfile(){
        return(`${this.flavor}: ${this.milkType}, ${this.shots()}`)
    }
    
    shots(){
      if (this.shots > 1){
        return `${this.shots} shots`
      } else {
        return `${this.shots} shot`
      }
    }
  }
// - Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var latte = new  Latte("regular", "regular", 1)
console.log(latte.latteProfile())



// - Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// 3. Volume of a Cylinder

// - Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr<sup>2</sup>h (r is the radius and h is the height of the cylinder)

// - Write the code that creates three unique cylinder objects