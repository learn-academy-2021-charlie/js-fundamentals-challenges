// ### Challenges

// 1. **Consider this variable:**
var person = {
    firstName: "Arthur", 
    lastName: "Dent"
}
// - Write the code that accesses the first name of the person object.
console.log(person.firstName)
// - Write the code that accesses the last name of the person object.
console.log(person.lastName)
// - Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
var person2 = {
    firstName: "Arthur", 
    lastName: "Dent",
    homePlanet: "Earth"
}
console.log(person2)//Output:{ firstName: 'Arthur', lastName: 'Dent', homePlanet: 'Earth' }
// - Update the person object with a method that logs "Arthur Dent is from planet Earth".
var person3 = {
    firstName: "Arthur", 
    lastName: "Dent",
    homePlanet: "Earth",
    getData: function() {
        return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
    }
}
console.log(person3.getData())//Output: Arthur Dent is from Earth

// 2. **Consider this variable:**
var product = {
   name: "chair", 
   price: 14.99,
   describeProduct: function() {
       return `The product is a ${this.name}. It costs ${this.price}`
   }
 }

// - Write a function called describeProduct takes product as an argument 
//and logs "The product is a chair. It costs $14.99".
console.log(product.describeProduct())//Output:The product is a chair. It costs 14.99

// 3. **Consider this variable:**
 var lunch = {
   name: "PB and Banana",
   type: "sandwich",
   ingredients: ["bread", "peanut butter", "banana"]
 }

// - Write the code that accesses the ingredients property.
console.log(lunch.ingredients)//Output:[ 'bread', 'peanut butter', 'banana' ]
// - Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2])//Output:banana
// - Write a function that takes the lunch object as an argument 
//and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const lunchObject = (lunch) => {
    return `The ingredients for a ${lunch.name} ${lunch.type} 
    are ${lunch.ingredients[0]}, ${lunch.ingredients[1]} and ${lunch.ingredients[2]}.`
}
console.log(lunchObject(lunch))
//Output:The ingredients for a PB and Banana sandwichare are bread, peanut butter and banana.

// - Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
var lunchUpdated = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    output: function(){
        return `The ingredients for a ${lunch.name} ${lunch.type} 
        are ${lunch.ingredients[0]}, ${lunch.ingredients[1]} and ${lunch.ingredients[2]}.`  
    }
  }
  console.log(lunchUpdated.output())//Output: same as the Q above.

// 4. **Consider this variable:**
 var animals = [
   { name: "Waffles", type: "dog", age: 12 },
   { name: "Fluffy", type: "cat", age: 14 },
   { name: "Spelunky", type: "dog", age: 4 },
   { name: "Hank", type: "cat", age: 11 },
 ]

// - Create a function that takes in any array of objects and returns a new array with only those of type cat.
var cat = animals.filter(value => value.type === "cat" )
console.log(cat)
//Output:[
//  { name: 'Fluffy', type: 'cat', age: 14 },
//  { name: 'Hank', type: 'cat', age: 11 }
//]
// - Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
const nameOnly = (animals) =>{
    return animals.map(value =>{
        return value.name
    })
}
console.log(nameOnly(animals))//Output:[ 'Waffles', 'Fluffy', 'Spelunky', 'Hank' ]

// 5. **Consider this variable:**

 let author = {
     name: "H. G. Wells",
     genre: "science fiction"
 }
// - Write the code that destructures the author object and makes the following work:
// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"
//The destructing assignment is really just a special way of assigning variables in JS.
//Array----->individual and recallable variables.

var {name,genre} = author//Start with a variable keyword.
console.log(author.name)//H. G. Wells
console.log(author.genre)//science fiction
console.log(`${author.name} is a ${author.genre} author`)//H. G. Wells is a science fiction author


// 6. **Consider this variable:**
var pokeOne = {
     species: "Charmandar",
     pokemon_type: "Fire"
 }

var pokeTwo = {
     species: "Magikarp",
     pokemon_type: "Water"
 }
// - Write a function called `describePokemon()` that take an object like the ones above 
// and uses destructuring to return a description of the Pokemon such that:
// console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"

const describePokemon = (poke) =>{
    return `${poke.species} is a ${poke.pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne))//Output:Charmandar is a Fire pokemon
console.log(describePokemon(pokeTwo))//Output:Magikarp is a Water pokemon

