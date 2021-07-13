// Challenges
// DON'T FORGET TO PSEUDO CODE!

// Use .map() or .filter() to complete all of the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
console.log("Problem 1:")
console.log("---------------------------------------------")
var arr1 = [3, 9, 15, 4, 10]

//Function multiplyByTen()
// parameters - Array
// use Array.map to pass in the value of the array
//     return value * 10

const multiplyByTen = (array) => {
    return array.map( value => {
        return value * 10
    })
}
// Expected output:
// [30, 90, 150, 40, 100]

console.log(multiplyByTen(arr1))
console.log("---------------------------------------------")

console.log("Problem 2:")
console.log("---------------------------------------------")

// Write a function that takes in an array and returns a new array with only odd numbers
var arr2 = [2, 7, 3, 5, 8, 10, 13]
//Function oddNums
//parameters - array
//use .filter() to pass in the value of the array
//    return only odd numbers

const oddNums = (array) => {
    return array.filter(value => value % 2 !== 0)
}

console.log(oddNums(arr2))

// Expected output:
// [7, 3, 5, 13]

console.log("---------------------------------------------")

console.log("Problem 3:")
console.log("---------------------------------------------")

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

//fucntion onlyLetters 
//parameters - array
//use .filter to pass in the value of the array
//return a sub set of the array with only letters
//join the array into one string

const onlyLetters = (array) => {
    return array.filter(value => typeof value === 'string').join("")
}

// Expected output: "nicework"
console.log(onlyLetters(comboArr))
console.log("---------------------------------------------")

console.log("Problem 4:")
console.log("---------------------------------------------")

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome" 

//function called rmvowel
//parameter - string
//use .filter to pass in the value
//return a new string without the vowels

const rmvowel = (string) => {
    let array = string.split("")
    return array.filter(value => {
        if (!(value === "a" || value === "e" || value === "i" ||value === "o" ||value === "u")){
            return value
        } 
    }).join("")
}
console.log(rmvowel(str))

console.log("---------------------------------------------")


console.log("Problem 4:")
console.log("---------------------------------------------")

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

//create function called noDup
//parameter - array
//use .filter to pass in the value
//return a new string with no duplicates

const noDup = (arr1, arr2) => {
    let newArr = arr1.concat(arr2) 
    return newArr.filter((value, index) => {
      return newArr.indexOf(value) === index 
    }) 
}
console.log(noDup(arr1, arr2))