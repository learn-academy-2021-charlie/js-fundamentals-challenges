// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// Expected output:[30, 90, 150, 40, 100]

/*make function that takes array param
return a new arr with numbers * 10 using map */

const multiplied = (arr) => {
     let answer = arr.map(value => {
         return value * 10
     })
     return answer
}

//oneline refactor
const timesTen = a => a.map(value => value*10)
console.log(timesTen(arr1));

// Write a function that takes in an array and returns a new array with only odd numbers
 var arr2 = [2, 7, 3, 5, 8, 10, 13]
// Expected output:[7, 3, 5, 13]

//make a function with array param
//use filter + % to filter odd nums
//return new arr

const oddNumbers = (arr) => {
    let solution = arr.filter(value => {
       if( value % 2 !== 0){
           return value}
    })
    return solution
}

// oneline refactor
const onlyOdds = a => a.filter(v => v%2!=0 ? v : false)
console.log(onlyOdds(arr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output:"nicework"

//make a function tht takes an arr of nums and letters
// create a string variable to hold answer
// using filter typeof value === string, concat string values to string variable
// return string

const returnString = (arr) => {
    let answer = ""
    arr.filter(value =>{
        if(typeof value === "string"){
            answer = answer.concat(value)
        }
    })
    return answer
}
//This was an attempt at using powers beyond my comprehension. I apologize for my transgression
// const regExAttempt = arr => arr.join('').match(/[^false][a-z]/g)

// console.log(returnString(comboArr))

console.log(regExAttempt(comboArr))
// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// Expected output: "jvscrpt s wsm"

/* create a function that accepts a string param
 * inialize array solution []
 * initialize an array var that contains each vowel
 * convert input to array and filter for values included in our vowel array
 * when iterating over consonants, push them to solution array
  * return solution.join('') */

const consonants = (str) => {
  let solution = [], vowels = ['a', 'e', 'i', 'o', 'u']
  let letters = str.split('')
  letters.filter(value => {
    if(!vowels.includes(value)){
      solution.push(value)
    }
  })
  return solution.join('')
}

// console.log(consonants(str))
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]

var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:

// [3, 7, 10, 5, 4, 8, 2, 1]
//
// create function that accepts two arrays
// use .map and .includes to iterate through both arrays and push to an array solution if they are not included already
// return output of maps
//
const joinArrays = (arr1, arr2) => {
  let solution = []
  arr1.map(value => {
    if(!solution.includes(value)){
      solution.push(value)
    }
  })
  arr2.map(value => {
    if(!solution.includes(value)){
      solution.push(value)
    }
  })
  return solution
}

console.log(joinArrays(arr1, arr2))
