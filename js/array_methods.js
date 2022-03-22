let a = [10,20,33, 44, -55, 32, -90]

function isOdd(n) {
  return n % 2 !== 0
}

let oddnums = a.filter(isOdd)
console.log(oddnums)

// Anonymous function 
let evennums = a.filter( function(n) { 
                          return n % 2 === 0
                         }
                       )
console.log(evennums)