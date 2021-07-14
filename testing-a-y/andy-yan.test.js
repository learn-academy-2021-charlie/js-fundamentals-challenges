// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// describe("the tired function.",()=>{
//     test("takes a string and determines if you will drink coffee or keep working",() => {
//         expect(areYouTired("no")).toEqual("keep working")
//         expect(areYouTired("yes")).toEqual("drink coffee")
//         expect(areYouTired("")).toEqual("please enter a valid input")

const { TestWatcher } = require("jest")

//     })
// })
// const areYouTired = (string) =>{
//     if(string == "yes"){
//         return "drink coffee"
//     } else if(string == "no"){
//         return"keep working"
//     }else {
//         return "please enter a valid input"
//     }
// }
// // console.log(areYouTired()) test different inputs


// Write the function that will make the test pass.

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// // Write the function that will make the test pass.

// describe(" the areYouStressed funciton",()=>{
//     test("takes a string determines if you will relax or keep going",()=>{
//         expect(areYouStressed("yes")).toEqual("relax")
//         expect(areYouStressed("no")).toEqual("keep going")
//         expect(areYouStressed("")).toEqual("please enter a valid input")

//     })
// })

// const areYouStressed = (string) =>{
//     if(string == "yes"){
//         return "relax"
//     }else if(string == "no"){
//         return"keep going"
//     }else{
//         return "please enter a valid input"
//     }
// }




// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

// describe("function inTheBudget",()=>{
//     test("takes a number and says if its in a budget or not",()=>{


//     expect(inTheBudget(25)).toEqual(` is within the budget`)
//     expect(inTheBudget(300)).toEqual(` is not within the budget`)
//     expect(inTheBudget("ko")).toEqual(` please enter a valid input`)


//         })
//     })
// const inTheBudget = (price) =>{
//     if(price<300){
//         return` is within the budget`
//     } else if (price >= 300){
//         return` is not within the budget`
//     } else{
//         return` please enter a valid input`
//     }
// }



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

describe("the isSmaller function",()=>{
    test("takes 2 numbers and returns which is bigger",()=>{
        expect(isSmaller(1,2)).toEqual(1)
        expect(isSmaller(3,4)).toEqual(3)
        expect(isSmaller(1,)).toEqual("please enter a valid input")
    })
})

const isSmaller = (num1,num2) =>{
    if(num1 < num2){
        return num1
    }else if(num1>num2){
        return num2
    }else{
        return "please enter a valid input"
    }
}


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