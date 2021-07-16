// function combineArrays(arrOne, arrTwo) {
//     return arrOne.concat(arrTwo)
//   }
  
//   console.log(combineArrays([2, 4, 2], [4, 6, 11]))
  
//   function combineSpread(arrOne, arrTwo) {
//     return [...arrOne,...arrTwo]
//   }

//   console.log(combineSpread([2, 4, 2], [4, 6, 11]))

  function combineAndFilterOdd(arrOne, arrTwo, arrThree){
    return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 !== 0)
  }
  
  console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

  function combineAndFilterSpread(arrOne, arrTwo, arrThree){
      return [...arrOne,...arrTwo,...arrThree].filter(num => num % 2 !== 0)
  }
  
  console.log(combineAndFilterSpread([3, 2, 5], [5, 8, 7], [4, 5, 6]))


  function multiArgs(...arrays){
    //   return [...arrOne,...arrTwo,...arrThree].filter(num => num % 2 !== 0)
    var solution = []
    for (let array of arrays) {
        solution = [...solution, ...array]
    }
    return solution.filter(num => num % 2 !== 0)
  }

  console.log(multiArgs([3, 2, 5], [5, 8, 7], [4, 5, 6]))