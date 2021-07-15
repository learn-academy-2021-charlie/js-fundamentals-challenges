// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.



// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

// a describe method that lists the name of the function OR naming of the particular test.
describe("tiredOrNot", () => {
    // a test method, nested within the describe block, that in plain words, describes that the function does.
    it('takes in a string, run a condition, returns "drink coffee" if you are tired and "keep working" if you are not tired.', () => {
    //   let response = "tired"
    //   let action = "drink coffee"
      let response = "not tired"
      let action = "keep working"
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(tiredOrNot(response)).toEqual(action)
    })
  })
  const tiredOrNot = (param) => {
    if(param.toLowerCase() === "tired") {
        return "drink coffee"
    } else {
        return "keep working"
    }
  }


// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

describe("checking if stressed", () => {
    test("takes in a string, check its value, returns 'relax' or 'keep going'", () => {
    //   let stressLevel = "stressed"
    //   let response = "relax"
      let stressLevel = "not stressed"
      let response = "keep going"
      expect(ifStressed(stressLevel)).toEqual(response)
    })
  })
  const ifStressed = (param) => {
    if(param === "stressed") {
        return "relax"
    } else {
        return "keep going"
    }
  }
  
// a describe method that lists the name of the function OR naming of the particular test.
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
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