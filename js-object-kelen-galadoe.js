// 1. Consider this variable:
//
var person = {
  firstName: "Arthur",
  lastName: "Dent"
}

// Write the code that accesses the first name of the person object.
//
// console.log(person.firstName)
//
// Write the code that accesses the last name of the person object.
//
// console.log(person.lastName)
//
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//
person.homePlanet = 'Earth'
person = {...person, homePlanet: 'Earth'}

// console.log(person.homePlanet)
//
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person = {...person,
  sentence: function(){
    console.log(`${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`)
  }
}

// person.sentence()

// Consider this variable:
var product = {
  name: "chair", price: 14.99
}
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// create function that accepts one param
// argument is an object with keys name and price
// interpolate into string and console.log
//
const describeProduct = (obj) => {
  console.log(`The product is a ${obj.name}. It costs $${obj.price}.`)
}

// describeProduct(product)

// 2. Consider this variable:
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.

// console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.
//
// console.log(lunch.ingredients[2])
//
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//
const recipe = (obj) => {
  // return "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
  return `The ingredients for a ${obj.name} ${obj.type} are ${obj.ingredients[0]}, ${obj.ingredients[1]}, and ${obj.ingredients[2]}.`
}
// console.log(recipe(lunch))
//
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

lunch = {
  ...lunch,
  recipe: function(){
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
  }
}

// console.log(lunch.recipe())
// 3. Consider this variable:
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.
//
const onlyCats = (arr) => {
  return arr.filter((obj) => {
    return obj.type == "cat"
  })
}

// console.log(onlyCats(animals))
//
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
//
const allNames = (arr) => {
  return arr.map((pet) => {
    return pet.name
  })
}

// const names = arr => arr.map((e) => e.name)

console.log(allNames(animals))
//
// Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
// Write the code that destructures the author object and makes the following work:
// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"
//
// destructuring: declaring a variable with the variable name inside {} corresponding to the key in the object you desire to access
//
let { name } = author
let { genre } = author


console.log(`${name} is a ${genre} author`)
//
// Consider this variable:
// consider spelling Charmander correctly
let pokeOne = {
    species: "Charmander",
    pokemon_type: "Fire"
}
//
let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
// console.log(describePokemon(pokeOne))
// --> "Charmander is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"
//
// Destructure the object WITHIN the function and then use string interpolation to print the desired sentence
//
const describePokemon = (pokemon) => {
  let { species } = pokemon, { pokemon_type } = pokemon
  return `${species} is a ${pokemon_type} pokemon`
}


console.log(describePokemon(pokeOne))
console.log(describePokemon(pokeTwo))
