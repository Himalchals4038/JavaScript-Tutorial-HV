numberList = [33, 8, 50, 91, 22, 7]

// const sum = function(accumulator, currentValue){
//     return accumulator + currentValue;
// }

// const finalSum = numberList.reduce(sum)

// const sum = ((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// const finalSum = numberList.reduce(sum)

const finalSum = numberList.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(finalSum)

// Reduce is used to perform a specific operation on all the elements in the list.

// Below is how the code works. 
// Accumulator accumulates or incorporates the values into itself by addition.
// Current value shows the next value that is to be added to the accumulator.

// Accumulator    Current Value
//      0                   33
//      33                  8
//      41                  50
//      91                  91
//      182                 22
//      204                 7
//      211      

const userCart = [
    {productId : 1536, productName : "Tablet", price : 25000},
    {productId : 4865, productName : "Smartphone", price : 16500},
    {productId : 9753, productName : "Earphone", price : 450},
    {productId : 0213, productName : "Laptop", price : 55000},
]

const cartValue = userCart.reduce((totalCartPrice, userCart) => {
    return totalCartPrice + userCart.price
}, 0)

console.log(cartValue)

// Above code is used to determine the total cart value after shopping from an e-commerce shopping website.
// We have to remember to put a zero separated by a comma at the end of the function.

