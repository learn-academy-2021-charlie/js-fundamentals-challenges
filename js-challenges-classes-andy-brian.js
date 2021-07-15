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

var blackCoffee = new Coffee("black",0 ,0 )
// Write the code that makes a black coffee.
console.log(blackCoffee)
// Write the code that makes a coffee with 1 cream and 2 sugars.
var creamSugars = new Coffee("1 cream 2 sugars",1, 2)
console.log(creamSugars)
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var twoSugars = new Coffee("Black and Sweet",0,2)
console.log(twoSugars)




// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

class Latte {

  constructor(flavor, milktype, shots){
    this.flavor = flavor.toLowerCase()
    this.milktype = milktype  
    this.shots = shots
  }
  latteProfile(){
    return(`${this.flavor}: ${this.milktype}, ${this.shots()}`)
  }

  milktype(){
    if (typeof this.milktype == "string"){
      return `${this.milktype}`
    } else {
      return `none`
    }
  }

  shots(){
    if (typeof this.shots  =="number"){
      return `${this.shots} shots`
    } else {
      return `${this.shots}`
    }
    
    }   
}
var mochaLatte = new Latte ("mocha","oat milk", 3)
var mochaNoMilk =new Latte ("mocha","none" ,4)
console.log(mochaLatte)
console.log(mochaNoMilk)
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects

