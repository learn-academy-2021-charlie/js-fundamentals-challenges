// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   greeting:function(){
//       return `${person.firstName} ${person.lastName} is from ${person.homePlanet}`
//   }
// }

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.greeting())

//  var product = {
//      name: "chair", 
//      price: 14.99
//  }

// const describeProduct = (product) => {
//     return `the product is a ${product.name}. it costs ${product.price}`
//  }
//  console.log(describeProduct(product))

 var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    lunchStatement:function(){
             return `the ingredients for a PB and Bannana sandwich are ${lunch.ingredients[0]},${lunch.ingredients[1]}, and ${lunch.ingredients[2]}`
           }
    }
  
  console.log(lunch.ingredients)
  console.log(lunch.ingredients[2]) //Is this Correct?

  const lunchIngre = (object) => {
      return `the ingredients for a PB and Bannana sandwich are ${lunch.ingredients[0]},${lunch.ingredients[1]}, and ${lunch.ingredients[2]}`
  }
  //console.log(lunchIngre(lunch))
  console.log(lunch.lunchStatement())

  