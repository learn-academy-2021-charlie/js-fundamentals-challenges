// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
 var arr1 = [3, 9, 15, 4, 10] 
// Expected output:

// [30, 90, 150, 40, 100]
// const multiply10 = (array) =>{
//    return array.map(value => {
//         return value * 10
//     })
     
// }
// console.log(multiply10(arr1))
//create the function
// iterate through index using .map
//multiply numbers in index by 10
//return output


// Write a function that takes in an array and returns a new array with only odd numbers
 var arr2 = [2, 7, 3, 5, 8, 10, 13]
// Expected output:

// [7, 3, 5, 13]

//create a function onlyOdds
//iterate through using .filter
//write if statement to filter
//only return odd values

// const onlyOdds =(array) =>{
//     return array.filter(value => {
//         if(value % 2 !== 0) {
//             return value
//         } else{

//         }

//     })
// }

// console.log(onlyOdds(arr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output:

// "nicework"

// create function stringer, parameters = array
//use .filter to pull letters
//use if and type of to sort data
//return only string data

// const stringer =(array) =>{
//     let stringArr= array.filter(value =>{
//        return typeof value ==="string"
//     })
//      return stringArr.join("")
// }
// console.log(stringer(comboArr))

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
 
// create function removeVowel
//split the string 
//use .filter 
// using || logic return only non vowels.
// return un voweled word.
// var str = "javascript is awesome" 
// const removeVowel = (array) => {
//   let splitString = array.split("")
//   let noVowel = splitString.filter(value => {
//       return value !== "a" && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u'
//   })
//   return noVowel.join("")
// }

// console.log(removeVowel(str))
// Expected output:

// "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// create function
//concate arrays together
// use .sort to put duplicates next to each other
// use .filter to begin

var arr1 = [3, 7, 10, 5, 4, 3]

var arr2 = [7, 8, 2, 1, 5, 4]

const removeDuplicates = (array1, array2) => {
  let joinedArray = array1.concat(array2)
  return joinedArray.filter((value, index) => joinedArray.indexOf(value) === index);
}

console.log(removeDuplicates(arr1,arr2)) 


 // Expected output:

// [3, 7, 10, 5, 4, 8, 2, 1]