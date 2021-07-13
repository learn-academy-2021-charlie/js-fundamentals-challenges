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

var arr2 = [2, 7, 3, 5, 8, 10, 13]

const oddNumb = (array) => {
  return array.filter(value => {
    return value % 2 !== 0
  })
}
console.log(oddNumb(arr2))

// Expected output:[7, 3, 5, 13]
//
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output:
//
// "nicework"
