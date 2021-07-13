// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

// var arr1 = [3, 9, 15, 4, 10]

// // expected output [30, 90, 150, 40, 100]

// // Create a function called mult10
// // Parameter - array
// // Iterate
// // Return an array of the same length
// // use map
// // multiply each number by 10
// const mult10 = (array) => {
//     return array.map(value =>{
//         return value * 10
//     })
// }

// console.log(mult10(arr1))

// Write a function that takes in an array and returns a new array with only odd numbers

// var arr2 = [2, 7, 3, 5, 8, 10, 13]

// // Expected output [7, 3, 5, 13]

// // Create Function called oddNum
// // Parameter - array
// // Return an array with only odd numbers
// // use map

// const oddNum = (array) => {
//     let oddArray = array.filter(value => {
//         if (value % 2 !== 0) {
//             return value
//         }
//     })
//     return oddArray
// }
// console.log(oddNum(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

//create a function onlyLetters
//parameters - array
//return a string with only letters
//PROCESS
//use typeof and filter
//return only letters in a new array
//join to output string
//expected outcome "nicework"

// const onlyLetters = (array) => {
//     let newArray = array.filter(value => {
//         return typeof value === "string"
//     })
//     return newArray.join("")
// }
// console.log(onlyLetters(comboArr))

// Create a function that takes in a string and returns a new string with all the vowels removed.
 var str = "javascript is awesome" 

//create a function noVowels
//parameter - string
//split string
//use if statement that declares vowels = aeiou
//remove vowels with filter
//join to return new string
// Expected output: "jvscrpt s wsm"

//DID NOT WORK
// const noVowels = (string) => {
//     let newArray = string.split("")
//     let newArray2 = newArray.filter(value => {
//         return value === ['a'].includes(value) 
//     })
// return newArray2.join("")
// }

// console.log(noVowels(str))
//---returned aaa

// const noVowels = (string) => {
//     let newArray = string.split("").filter(value => !['a','e','i','o','u'].includes(value)).join("");{
//         return newArray
//     }
// }
// console.log(noVowels(str))
//--->returned expected output