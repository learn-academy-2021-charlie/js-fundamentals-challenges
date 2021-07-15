// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

//Pseudo
// write a function - mult10
// make a parameter - array
// use .map !METHOD "refer to it instead of function"!
// iterate through the array and multiply through each element x10
// return new array

// var arr1 = [3, 9, 15, 4, 10]
//
// const mult10 = (array) => {
//   return array.map(value => {
//     return value * 10
//   })
// }
// console.log(mult10(arr1))

// Expected output:[30, 90, 150, 40, 100]



// Write a function that takes in an array and returns a new array with only odd numbers

// write a function - oddNumb
// make a parameter - array
// use .filter method
// iterarte throught the array
// use modulu array % 2 === 0
// returns array with odd numbers

// var arr2 = [2, 7, 3, 5, 8, 10, 13]

// const oddNumb = (array) => {
//   return array.filter(value => {
//     return value % 2 !== 0
//   })
// }
// console.log(oddNumb(arr2))

// Expected output:[7, 3, 5, 13]
//
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // Expected output: "nicework"

// // pusedo
// // create a function - onlyFans
// // make a parameter - array
// // use the .filter method
// // set condition that will check the data type of string
// // return an array with only strings 
// // .join the array as a string

// const onlyFans = (array) => {
//   return array.filter(value => {
//     return typeof value === "string" 
//   }).join("")
// }
// console.log(onlyFans(comboArr))



// // STRETCH Challenges
// // Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome" 
// // Expected output:"jvscrpt s wsm"
// // create function called -vowels
// // create paramater called -string
// // convert a string into an array .split
// // use the filter method
// // check for vowls
// // return a new string .join

// const noVowels = (string) =>{
//   let newArray = string.split("")
//   //return newArray
//   return newArray.filter(value =>{
//     return value !== "a" && value !== "e" && value !== "i" && value !=="o" && value !== "u"
//   }).join("")
// } 
// console.log(noVowels(str))



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// pesdo
// create a function - noDups
// create a 2 paratmeter - para1, para2
// .concat two arrays
// filter out unique values

var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:[3, 7, 10, 5, 4, 8, 2, 1]

const noDups = (para1, para2)=>{
  let newArray = para1.concat(para2)
  let uniqueValues = [...new Set(newArray)]
  return uniqueValues
}
console.log(noDups(arr1, arr2))
