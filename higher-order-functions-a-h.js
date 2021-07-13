// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// Expected output:
// [30, 90, 150, 40, 100]

// Create a function multiplyBy10
// parameter-array
// Iterate - return the same length array
// .map()
// multiply each number by 10

// const multiplyBy10 = (array) => {
//   return array.map(value =>{
//     return value * 10
//   })
// }
// console.log(multiplyBy10(arr1))

// Write a function that takes in an array and returns a new array with only odd numbers
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// Expected output:
// [7, 3, 5, 13]

// Create a function oddNumbers
// parameter-arrays
// Returns only odd numbers - not the same length
// .filter()

// const oddNumbers = (array) => {
//   return array.filter(value =>{
//   return value % 2 !== 0
//   })
// }
// console.log(oddNumbers(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output:
// "nicework"

// Create a function lettersOnly
// parameter-array
// .filter()-get only letters
// Use typeof to get data typeof

// const lettersOnly = (array) =>{
//   return array.filter(value =>{
//   return typeof value === "string"
//   }) .join("")
// }
// console.log(lettersOnly(comboArr))
// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
//  var str = "javascript is awesome"
// Expected output:
//
// "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
//
// var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:
//
// [3, 7, 10, 5, 4, 8, 2, 1]
