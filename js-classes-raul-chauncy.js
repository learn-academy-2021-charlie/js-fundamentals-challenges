// 1.
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
  
//   Write the code that makes a black coffee.
var blackCoffee = new Coffee("black",0,0)
var regularCoffee = new Coffee("Regular", 1, 2)
var sugarCoffee = new Coffee("Sugar",0,2)
console.log(blackCoffee)

//   Write the code that makes a coffee with 1 cream and 2 sugars.
console.log(regularCoffee)
  
//   Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
console.log(sugarCoffee.coffeeProfile())

console.log("-------------------------------------------------------")
//2.
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.

class Latte {
  constructor(flavor, milkType, shots){
    this.flavor = flavor;
    this.milkType = milkType;
    this.shots = shots;
  }
  latteProfile(){
    return `${this.flavor}: ${this.milkType}, ${this.shots}`
  }

}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regularLatte = new Latte('regluar', 'whole', 1)
console.log(regularLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelnutLatte = new Latte('Hazelnut', 'Almond', 2)
console.log(hazelnutLatte.latteProfile())
console.log(hazelnutLatte)

console.log("-------------------------------------------------------")

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class cylinder {
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
    
  }
  calculateVolume() {
    return (Math.PI * this.radius * (2 * this.height)).toFixed(4);
  }
}
//***** why if we put a string in we get a number back */
//*** how to check to make sure our values being passed in are the right values */
// Write the code that creates three unique cylinder objects
var cylinder1 = new cylinder('5', '10');
console.log(cylinder1);
const volume = Number(cylinder1.calculateVolume())
console.log(volume)

var cylinder2 = new cylinder('hi', '10');
console.log(cylinder2.calculateVolume())
