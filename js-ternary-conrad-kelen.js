// Create a function that determines if a user is old enough to vote (age 18 or older).
const voteAge = (number) => {
   return number >= 18 ? "yes" : "no"
}
console.log(voteAge(5))
// Create a function that takes in an array of numbers and determines if the number is odd or even.
const oddOrEven = (array) => {
    for (let i of array) {
        console.log(i % 2 == 0 ? "even" : "odd")
    }
}

oddOrEven([5, 67, 34, 78, 77, 12343235])