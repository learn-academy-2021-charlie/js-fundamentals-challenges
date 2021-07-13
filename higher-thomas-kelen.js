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
// console.log(multiplied(arr1));

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
//  console.log(oddNumbers(arr2))


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

console.log(returnString(comboArr))

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
//  var str = "javascript is awesome" 
// Expected output:

// "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:

// [3, 7, 10, 5, 4, 8, 2, 1]
