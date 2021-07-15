// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("drink coffee", ()=>{
  it("drink coffee", ()=>{
    expect(areYouTired("yes")).toEqual("drink coffee")
  })
  it("keep working if not tired", ()=>{
    expect(areYouTired("no")).toEqual("keep working")
  })
})

// Write the function that will make the test pass.
const areYouTired = (string) =>{
  if(string === "yes"){
    return "drink coffee"
  }else if(string === "no"){
    return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("relax", ()=>{
  it("relax", ()=>{
    expect(areYouStressed("yes")).toEqual("relax")
  })
  it("keep going if not stressed", ()=>{
    expect(areYouStressed("no")).toEqual("keep going")
  })
})

// Write the function that will make the test pass.
const areYouStressed = (string) =>{
  if(string === "yes"){
    return "relax"
  }else if(string === "no"){
    return "keep going"
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget function", () => {
  it("within budget", () => {
    expect(checkBudget(250)).toEqual("in budget")
  })
  it("return nothing when outside budget", () =>{
    expect(checkBudget(301)).toBeFalsy()
  })
})

// Write the function that will make the test pass.
const checkBudget = (price) => {
  if(price < 300){
    return "in budget"
  }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smaller number", () =>{
  it("returns smaller number", () => {
    expect(smallerNumber(777, 9857)).toEqual(777)
  })
  it("returns smaller number", () => {
    expect(smallerNumber(9857, 777)).toEqual(777)
  })
})

// Write the function that will make the test pass.
const smallerNumber = (num1, num2) => {
  if(num1 > num2){
    return num2
  }else if(num2 > num1){
    return num1
  }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("odd checker", () =>{
  it("tells us an odd number is odd", () =>{
    expect(oddChecker(7)).toEqual("odd")
  })
  it("tells us an even number is not odd", () =>{
    expect(oddChecker(4)).toEqual("not odd")
  })
})
// Write the function that will make the test pass.
const oddChecker = (num) => {
  if(num % 2 !== 0){
    return "odd"
  }else if(num % 2 === 0){
    return "not odd"
  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruit color", () => {
  it("banana is yellow", () => {
    expect(fruitColors("banana")).toEqual("yellow")
  })
  it("apple is red", () => {
    expect(fruitColors("apple")).toEqual("red")
  })
  it("grape is purple", () =>{
    expect(fruitColors("grape")).toEqual("purple")
  })
  it("not one of the three fruits", () => {
    expect(fruitColors("watermelon")).toBeFalsy()
  })
})
// Write the function that will make the test pass.
const fruitColors = (string) => {
  switch (string){
    case "banana":
    return "yellow"
    break
    case "apple":
    return "red"
    break
    case "grape":
    return "purple"
    break
  }
}
// Write the test for a function called rick that returns "Morty".
describe('rick', () => {
  it('says Morty', () => {
    expect(rick()).toEqual('Morty')
  })
})
// Write the function that will make the test pass.
const rick = () => 'Morty'
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe('greeting', () => {
  it('returns a greeting with the name', () => {
    expect(greeting('Kelen')).toEqual('Greetings, Kelen!')
  })
})

// Write the function that will make the test pass.
const greeting = (str) => {
  return `Greetings, ${str}!`
}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe('oddOrEven', () => {
  it('logs odd for odd numbers', () => {
    expect(oddOrEven(9)).toEqual('Odd')
  })
  it('logs even for even numbers', () => {
    expect(oddOrEven(4)).toEqual('Even')
  })
})
// Write the function that will make the test pass.
const oddOrEven = (int) => {
  return int%2==0 ? 'Even' : 'Odd'
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe('doubler', () => {
  it('doubles the number input', () => {
    expect(doubler(10)).toEqual(20)
  })
})
// Write the function that will make the test pass.
const doubler = (int) => {
  return int*2
}
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
//
describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(5, 10)).toEqual(50)
  })
})
// Write the function that will make the test pass.
const multiply = (num1, num2) => {
  return num1*num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe('divisibleBy', () => {
  it('tells whether the first number is divisible by the second', () => {
    expect(divisibleBy(10, 5)).toEqual('yes')
  })
  it('tells if the first number is not divisible by second', () => {
    expect(divisibleBy(10, 3)).toEqual('no')
  })
})
// Write the function that will make the test pass.
const divisibleBy = (num1, num2) => {
  return num1%num2==0 ? 'yes' : 'no'
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// describe('fizzbuzz', () => {
//   it('replaces multiples with strings', () => {
//     expect(
//   })
// })
// Write the function that will make the test pass.
