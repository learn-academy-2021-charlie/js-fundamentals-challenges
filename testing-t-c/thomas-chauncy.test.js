// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

const isTired = (answer) => {
    if(answer === 'yes'){
        return 'drink coffee'
    }
    else if(answer === 'no'){
        return 'keep working'
    }
}

// console.log(isTired(false))

describe("isTired", () => {
    //let t = true;
    //let nT = false;

    it("Checks to if your tired, then returns what to do if you are or are not", () => { 
        expect(isTired('yes')).toEqual('drink coffee')
        expect(isTired('no')).toEqual('keep working')
    })
    
})
//** Only getting one test run when there is two see above 'yes' and 'no'

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

const isRelaxed = (answer) => {
    if(answer === 'stressed'){
        return 'relax'
    }
    else if(answer === 'not stressed'){
        return 'keep going'
    }
}

describe("isRelaxed", () => {
    
    it("Checks to if your tired, then returns what to do if you are or are not", () => { 
        expect(isRelaxed('stressed')).toEqual('relax')
        expect(isRelaxed('not stressed')).toEqual('keep going')
    })
    
})

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

const inBudget = (num) => {
    if(num < 300){
        return "in budget"
    }
}

describe("inBudget", () => {
    let price = 200
    it("checks to see if num is within budget", () => { 
        expect(inBudget(price)).toEqual("in budget")
    })
    
})

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

const smallerChecker = (num1, num2) =>{
    if (num1 < num2){
        return num1
    }else{
        return num2
    }
}

describe("smallerChecker", () => {
    var number1 = 200
    var number2 = 100
    it("checks to see which number is smaller and returns the smaller number", () => { 
        expect(smallerChecker(number1, number2)).toEqual(number2)
    })
    
})
