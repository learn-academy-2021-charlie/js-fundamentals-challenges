//Challenges
//Important: Write the test FIRST, see it fail, then write the code to make it PASS.
//Important: You don't need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED.
//Commenting them out defeats that purpose.


//1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("The tired function.",()=>{
    test("takes a string and determines if you will drink coffee or keep working",() => {
        expect(areYouTired("no")).toEqual("keep working")
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("")).toEqual("please enter a valid input")
    })
})

const areYouTired = (string) =>{
    if(string == "yes"){
        return "drink coffee"
    } else if(string == "no"){
        return"keep working"
    }else {
        return "please enter a valid input"
    }
}
// console.log(areYouTired()) test different inputs
// Write the function that will make the test pass.

//2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

describe("The areYouStressed funciton",()=>{
    test("takes a string determines if you will relax or keep going",()=>{
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
        expect(areYouStressed("")).toEqual("please enter a valid input")

    })
})

const areYouStressed = (string) =>{
    if(string == "yes"){
        return "relax"
    }else if(string == "no"){
        return"keep going"
    }else{
        return "please enter a valid input"
    }
}


//3. Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

describe("The inTheBudget function",()=>{
    test("takes a number and says if its in a budget or not",()=>{
        expect(inTheBudget(25)).toEqual(` is within the budget`)
        expect(inTheBudget(300)).toEqual(` is not within the budget`)
        expect(inTheBudget("ko")).toEqual(` please enter a valid input`)
    })
})

const inTheBudget = (price) =>{
    if(price<300){
        return` is within the budget`
    } else if (price >= 300){
        return` is not within the budget`
    } else{
        return` please enter a valid input`
    }
}


//4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

describe("The isSmaller function",()=>{
    test("takes 2 numbers and returns which is bigger",()=>{
        expect(isSmaller(1,2)).toEqual(1)
        expect(isSmaller(3,4)).toEqual(3)
        expect(isSmaller(1,)).toEqual("please enter a valid input")
    })
})

const isSmaller = (num1,num2) =>{
    if(num1 < num2){
        return num1
    }else if(num1 > num2){
        return num2
    }else{
        return "please enter a valid input"
    }
}


//5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

describe("The isOdd function",()=>{
    test("takes a number and returns whether the number is odd",()=>{
        expect(isOdd(0)).toEqual(false)
        expect(isOdd(1)).toEqual(true)
        expect(isOdd(2)).toEqual(false)
        expect(isOdd(3)).toEqual(true)
        expect(isOdd(4)).toEqual(false)
        expect(isOdd(-8988)).toEqual(false)
        expect(inTheBudget("ko")).toEqual(` please enter a valid input`)
    })
})

const isOdd = (num) =>{
    if(num == 0 || num % 2 == 0){
        return false
    }else if(num % 2 != 0){
        return true
    }else{
        return` please enter a valid input`
    }
}


// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

describe("The fruitColor function",()=>{
    test("takes a string and returns a string show colors",()=>{
        expect(fruitColor(`banana`)).toEqual(`yellow`)
        expect(fruitColor(`apple`)).toEqual(`red`)
        expect(fruitColor(`grape`)).toEqual(`purple`)
        expect(fruitColor(true)).toEqual(` please enter a valid input`)
        expect(fruitColor(3)).toEqual(` please enter a valid input`)
    })
})

const fruitColor = (str) =>{
    if(str ==`banana`){
        return `yellow`
    }else if(str == `apple`){
        return `red`
    }else if(str == `grape`){
        return `purple`
    }else{
        return` please enter a valid input`
    }
}


//7. Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
describe("The rick function",()=>{
    test("takes a string and returns Morty", () => {
        expect(rick(`rick`)).toEqual(`Morty`)
        expect(rick(3)).toEqual(` please enter a valid input`)
    })
})

const rick = (str) =>{
    if(str ==`rick`){
        return `Morty`
    }else{
        return` please enter a valid input`
    }
}


//8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
//Write the function that will make the test pass.

describe("The greeter function",()=>{
    test("takes a string and returns greeting", () => {
        expect(greeter(`Andy`)).toEqual(`Hello, Andy`)
        expect(greeter(3)).toEqual(` please enter a valid input`)
    })
})

const greeter = (str) =>{
    if(typeof str == `string`){
        return `Hello, ${str}`
    }else{
        return` please enter a valid input`
    }
}
//9. Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.

describe("The oddOrEven function",()=>{
    test("takes a number and returns whether the number is odd or even",()=>{
        expect(oddOrEven(0)).toEqual('is even')
        expect(oddOrEven(1)).toEqual(`is odd`)
        expect(oddOrEven(2)).toEqual(`is even`)
        expect(oddOrEven(-8988)).toEqual(`is even`)
        expect(oddOrEven("ko")).toEqual(` please enter a number`)
    })
})

const oddOrEven = (num) =>{
    if(typeof num !="number"){
        return  ` please enter a number`
    }else if(num == 0 || num % 2 == 0){
        return `is even`
    }else if(num % 2 != 0){
        return `is odd`
    }
}



//10. Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
//Write the function that will make the test pass.

describe("The doubler function",()=>{
    test("takes a number and returns it multiplied by 2",()=>{
        expect(doubler(0)).toEqual(0)
        expect(doubler(1)).toEqual(2)
        expect(doubler(2)).toEqual(4)
        expect(doubler("ko")).toEqual(` please enter a number`)
    })
})
const doubler = (num)=>{
    if (typeof num!=="number"){
        return ` please enter a number`
    }else{
        return num*2
    }
}
//11. Write the test for a function called multiply that takes two numbers as arguments 
//and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.

describe("The multiply function",()=>{
    test("takes two number and returns the result of one multiplied by the other",()=>{
        expect(multiply(0,1)).toEqual(0)
        expect(multiply(1,3)).toEqual(3)
        expect(multiply(2,-6)).toEqual(-12)
        expect(oddOrEven("ko")).toEqual(` please enter a number`)
    })
})

const multiply = (num1,num2) => {
    if (typeof num1!="number" || typeof num2!="number"){
        return ` please enter a number`
    }else {
        return num1*num2
    }
}

//12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.

describe("The divisibleBy function",()=>{
    test("takes two number and returns the result whether the first number is divisible by the second number",()=>{
        expect(divisibleBy(0,1)).toEqual(`0 is evenly divisible by 1`)
        expect(divisibleBy(3,3)).toEqual(`3 is evenly divisible by 3`)
        expect(divisibleBy("ko")).toEqual(` please enter a number`)
    })
})
const divisibleBy =(num1,num2)=>{
    if(typeof num1 != "number" || typeof num2 != "number"){
        return (` please enter a number`)
    } else if(num1 % num2 == 0){
        return `${num1} is evenly divisible by ${num2}`
    }else if(num1 % num2 != 0){
        return `${num1} is not evenly divisible by ${num2}`
    }
}

//13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. 
// If a number is a multiple of five, replace it with the word 'buzz'. 
// If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass

describe("The fizzBuzz function",() => {
    test("takes a number and returns the result with expected word",()=>{
        expect(fizzBuzz(3)).toEqual(`fizz`)
        expect(fizzBuzz(5)).toEqual(`buzz`)
        expect(fizzBuzz(15)).toEqual(`fizzbuzz`)
        expect(fizzBuzz("l")).toEqual(`please enter a number`)
    })
}) 
const fizzBuzz = (num) => {
    if(typeof num !="number"){
        return `please enter a number`
    }else if(num % 3==0 && num % 5 ==0){
        return`fizzbuzz`
    }else if(num % 3 == 0) {
        return `fizz`
    } else if(num % 5 == 0){
        return `buzz`
    }
}
