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