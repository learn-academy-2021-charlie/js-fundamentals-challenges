// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe ("stamina",() => {
  it ("returns a string drink coffee if you are tired and keep working if you are not tired", () => {
    expect(stamina("yes")).toEqual("drink coffee")
    expect(stamina("no")).toEqual("keep working")
  })
})

const stamina = (tired) => {
  if (tired === "yes"){
    return "drink coffee"
  }else if (tired === "no") {
    return "keep working"
  }
}

// Write the function that will make the test pass.
// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe ("zenGarden", () => {
//   it ("returns relax if you are stressed and keep going if you are not stressed", () =>{
//     expect (zenGarden("yes")).toEqual("relax")
//     expect (zenGarden("no")).toEqual("keep going")
//   }
// })
//
// const zenGarden = (stressed) => {
//   if (stressed === "yes"){
//   return "relax"
//   } else if (stressed === "no")
//   return "keep going"
// }

// Write the function that will make the test pass.
// 3. Write the test for a function that returns "in budget" if a price is lower than $300.

describe ("financialObligations", () => {
  it ("return in budget if a price is lower than $300",() => {
    var correctPrice = "price < 300"
    expect (financialObligations (correctPrice)).toEqual("in budget")
  })
})


// Write the function that will make the test pass.
// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
//
// Write the function that will make the test pass.
// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
//
// Write the function that will make the test pass.
// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
//
// Write the function that will make the test pass.
// 7. Write the test for a function called rick that returns "Morty".
//
// Write the function that will make the test pass.
// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
//
// Write the function that will make the test pass.
// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.
//
// Write the function that will make the test pass.
// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.
