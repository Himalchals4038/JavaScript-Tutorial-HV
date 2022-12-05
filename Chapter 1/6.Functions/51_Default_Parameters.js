const twoSum1 = (a,b) => {
    return a + b
}
const ans1 = twoSum1(93, 5)
console.log(ans1)

// This code is for JS version 2015 and before.
// We had to separately write the code to declare the value of b if nothing was given in its space.
const twoSum2 = (a,b) => {
    if (typeof b === 'undefined') {
        b = 1
    }    
    return a + b
}    
const ans2 = twoSum2(93)
console.log(ans2)

// This code is for JS 2016 and after.
// We can directly state the default value of b in the initial function parameter defining space.
const twoSum3 = (a,b=1) => {
    return a + b
}    
const ans3 = twoSum3(93)
console.log(ans3)






