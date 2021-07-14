// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("The tired function", () => {
    it("Takes if you are tired or not and returns drink coffee or keep working", () => {
        var tired = true
        var notTired = false
        expect(coffeeOrWork(tired)).toEqual("drink coffee")
        expect(coffeeOrWork(notTired)).toEqual("keep working")
    })
})
// Write the function that will make the test pass.
const coffeeOrWork = (tired) => {
    if(tired == true) {
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("The stressed function", () => {
    it("Takes if you are stressed or not and returns relax or keep going", () => {
        var stressed = true
        var notStressed = false
        expect(relaxOrGo(stressed)).toEqual("relax")
        expect(relaxOrGo(notStressed)).toEqual("keep going")
    })
})
// Write the function that will make the test pass.
const relaxOrGo = (stressed) => {
    if(stressed == true) {
        return "relax"
    } else {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("The budget function", () => {
    it("Takes a price and returns that you are in budget if price is lower than $300", () => {
        expect(inBudget(299)).toEqual("in budget")
        expect(inBudget(300)).toEqual("not in budget")
    })
})
// Write the function that will make the test pass.
const inBudget = (price) => {
    if(price < 300) {
        return "in budget"
    } else {
        return "not in budget"
    }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smaller number function", () => {
    it("Returns the smaller number of two numbers", () => {
        expect(findSmallerNum(5,10)).toEqual(5)
        expect(findSmallerNum(10,5)).toEqual(5)
    })
})
// Write the function that will make the test pass.
const findSmallerNum = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else {
        return num2
    }
}
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("odd number function", () => {
    it("Returns whether a number is odd", () => {
        expect(isOdd(3)).toEqual("3 is odd")
        expect(isOdd(4)).toEqual("4 is not odd")
    })
})
// Write the function that will make the test pass.
const isOdd = (num) => {
    if(num % 2 !== 0) {
        return `${num} is odd`
    } else {
        return `${num} is not odd`
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.