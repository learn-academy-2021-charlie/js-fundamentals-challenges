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
console.log(blackCoffee)
// Write the code that makes a coffee with 1 cream and 2 sugars.
var sweetCoffee = new Coffee("sweet", 1, 2)
console.log(sweetCoffee)
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var extraSugar = new Coffee("Light Roast",0,2)
console.log(extraSugar)
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.
class Latte {
  constructor (flavor, milk, shots){
    this.flavor = flavor
    this.milk = milk
    this.shots = shots
  }
  latteProfile(){
    return(`${this.flavor}, ${this.milk}, ${this.shots}`)
}}
var myLatte = new Latte("hazelnut", "skim", 10)
console.log(myLatte.latteProfile())

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var singleShotLatte = new Latte("regular", "none", 1) 
console.log(singleShotLatte.latteProfile());

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

var hazelnutLatte = new Latte("hazelnut", "almond milk", 2)
console.log(hazelnutLatte.latteProfile);

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class CylinderVolume {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }
  volumeChecker(){
    return Math.PI * this.radius*2 * this.height
  }
  fourDecimals(){
    return `The volume is ${this.volumeChecker().toFixed(4)}`
  }
}
var cylinder = new CylinderVolume(2, 4)
console.log(cylinder.volumeChecker());
console.log(cylinder.fourDecimals());
// Write the code that creates three unique cylinder objects


var cylinder1 = new CylinderVolume(6.44, 20.55)
var cylinder2 = new CylinderVolume(8, 200)
var cylinder3 = new CylinderVolume(64, 274)

console.log(cylinder1.fourDecimals());
console.log(cylinder2.fourDecimals());
console.log(cylinder3.fourDecimals());

