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

names = ["Jason", "Andy Hill", "Anders", "John Resig"]

function hasSpace(st) {
    return  st.includes(" ")
}

names2 = names.filter(function(v) {
      return v.includes(" ")
})

names2 = names.filter(hasSpace)
console.log(names2)

