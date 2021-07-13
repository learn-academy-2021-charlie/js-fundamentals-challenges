// ## Challenges

// > **DON'T FORGET TO PSEUDO CODE!**

// > ***Use .map() or .filter() to complete all of the following exercises:***

// - 1. **Write a function that takes in an array and returns a new array with all numbers multiplied by 10.**

//   ```javascript 
  var arr1 = [3, 9, 15, 4, 10]
//   ```

//   Expected output: 
//   ```javascript 
//   [30, 90, 150, 40, 100]
//   ```
//   ---

// create function multiply
// use map and value * 10

const multiply = arr1.map(value => value * 10)

// console.log(multiply)



// - 2. **Write a function that takes in an array and returns a new array with only odd numbers**

//   ```javascript 
  var arr2 = [2, 7, 3, 5, 8, 10, 13]
//   ```

//   Expected output: 
//   ```javascript 
//   [7, 3, 5, 13]
//   ```
//   ---

// use filter and return odd

const oddNums = arr2.filter(value => value % 2 !== 0)

// console.log(oddNums)

// - 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** Use *[typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)* method

//   ```javascript 
  var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//   ```

//   Expected output: 
//   ```javascript 
//   "nicework"
//   ```
//   ---

const stringOnly = (arr) => {
    let combinedArr = arr.filter(value => typeof value == "string")
    return combinedArr.join("")
}

// console.log(stringOnly(comboArr))

// ### STRETCH Challenges

// - 1. Create a function that takes in a string and returns a new string with all the vowels removed.

//   vowel: a,e,i,o,u
var str = "javascript is awesome" 

//   Expected output:
//   ```javascript
//   "jvscrpt s wsm"
//   ```

const noVowels = (str) =>{
  let arr = str.split("")
  let noVow = arr.filter(value => value != "a" && value !="e" && value != "i" && value != "o" && value != "u")
  return noVow.join("")
}

//console.log(noVowels(str))


// ---
// - 2. Create a function that takes in two arrays as arguments returns one array with no duplicate values.
  var arr1 = [3, 7, 10, 5, 4, 3]

  var arr2 = [7, 8, 2, 1, 5, 4]

//   Expected output:
//   [3, 7, 10, 5, 4, 8, 2, 1]
 
//Solution 1: use .filter() + .indexOf()
// The filter() method creats a new array with all elements that pass the test implemented by the provided function.
// The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.

const unique = (arr1,arr2) => {
  let combArr = arr1.concat(arr2)//[3,7,10,5,4,3,7,8,2,1,5,4]
  const onlyUnique = (value, index, array) => {
    return array.indexOf(value) === index// Logic comparison/no duplicated--->Ture or false.
  }
  let unique = combArr.filter(onlyUnique)//onlyUnique == true----->>filter that element to create a new array.
  return unique
}

console.log(unique(arr1,arr2))

//Solution 2: use .map()
