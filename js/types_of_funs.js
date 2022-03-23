names = ["Jason",  "Andy Hill", "Anders", "John Resig" ,"Bill"]
// Normal function 
function isLongName(name) {
  return  name.length > 5;
}
selnames = names.filter(isLongName);
console.log(selnames)

// Anonymous function 
selnames = names.filter(function(v) {
    return  v.length > 5
})
console.log(selnames)

// Arrow function 
selnames = names.filter((v) => v.length > 5)
console.log(selnames)
 