// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

// describe ("areYouTired", () =>{
//     it("drink coffe or keep working based on input", () => {
//         expect(areYouTired("yes")).toEqual("drink coffee")
//         expect(areYouTired("no")).toEqual("keep working")
//     })
// })
// const areYouTired = (string) => {
//     if (string === "yes"){
//         return "drink coffee"
//     } else if (string === "no"){
//         return "keep working"
//     }
// }

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.
describe ("areYouStressed", ()=> {
    it("returns relax or keep going based on input", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
    })
})

const areYouStressed = (string) =>{
    if (string === "yes"){
        return "relax"
    }else if (string === "no"){
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

describe ("withinBudget", () => {
    let budget = 0
    it("returns in budget if price is lower than $300", () => {
        expect(withinBudget(budget<300)).toEqual("in Budget")
    })
})
const withinBudget = (budget) => {
    if (budget < 300){
        return "in budget"
    } else 
    return "not in budget"
}