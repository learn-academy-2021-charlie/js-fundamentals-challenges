// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("do you need coffee?",()=>{
    it("takes in tired or not tired, and returns wether or not you need coffee",()=>{
        var tired = true
        var output = "drink coffee"
        expect(drinkCoffee(tired)).toEqual(output)
    })
})
// Write the function that will make the test pass.
const drinkCoffee = (tired) => {
    if (tired === (true)) {
        return ("drink coffee")
    }else {
        return ("keep WORKING!")
    }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("Are you tired?",()=>{
    it("takes in tired or not tired, and returns wether or not you need to relax",()=>{
        var tired = true
        var notTired = false
        var output1 = "relax"
        var output2 = "keep going"
        expect(areYouTired(tired)).toEqual(output1)
        expect(areYouTired(notTired)).toEqual(output2)
    })
})
// Write the function that will make the test pass.
const areYouTired = (boolean) =>{
    if (boolean === true){
        return "relax"
    }else if (boolean === false){
        return "keep going"
    }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("if in budget", () => {
  it("takes in price and returns if in budget", () => {
    var price1 = 305
    var price2 = 208
    var output1 = "in budget"
    var output2 = "over budget"
    expect(ifInBudget(price1).toEqual(output2))
    expect(ifInBudget(price2).toEqual(output1))
  })
})
// Write the function that will make the test pass.
const ifInBudget = (number) => {
  if (number < 300) {
    return "in budget"
  }
  else if (number >= 300) {
    return "over budget"
  }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
