//Higher-Order-Function

//1.
var arr1 = [3, 9, 15, 4, 10]
const multply10 = (array) => {
  return array.map(value => {
    return value * 10
  })
}
console.log(multply10(arr1));

//2.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
const oddNum = (array) => {
  return array.filter(value => {
    return value % 2 !== 0
  })
}
console.log(oddNum(arr2));

//3.
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const letter = (array) => {
  return array.filter(value => {
    return typeof value === "string"
  }).join("")
}
console.log(letter(comboArr));



//Stretch challenges
// declared a function called noVowels
//parameter = string
//.filter()
//convert string to an array

var str = "javascript is awesome"
const noVowels = (string) => {
  return string.split("").filter(value => {
    return value !== "a" && value !== "e" && value !== "i" && 
    value !== "o" && value !== "u"
  }).join("")
}
console.log(noVowels(str));