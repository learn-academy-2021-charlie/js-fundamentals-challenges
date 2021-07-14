// Consider this variable:
// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
//   } 
//   var {firstName, lastName, homePlanet} = person
// Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// console.log(person.homePlanet)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(`${firstName} ${lastName} is from planet ${homePlanet}`)
// console.log("------------------------------------")


// Consider this variable:
var product = [
    {name: "chair", price: 14.99}]
   
//   console.log(product.getData())
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// const describeProduct = (product) => {
//     return product.map(value => {
//         console.log(value)
//         return `The product is a ${value.name}. It costs $${value.price}`
//     })
// }
// console.log(describeProduct(product))

// Consider this variable:
var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    sandwich: function(){
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
    }
  }
  console.log(lunch.sandwich())
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// Write the code that access the 3rd ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const sandwich = (string) => {
//     return string.map(value => {
//         return `The ingredients for a ${value.name} ${value.type} are ${value.ingredients}.`
//     })
// }
// console.log(sandwich(lunch))
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
