const numbers = [7, 11, 53, 48, 73, 34]

const ans = numbers.some((number) => number%2 === 0)
console.log(ans)

// Some function works in the exact opposite way of every function.
// Here even if one element satisfies the condition then the result is 
// true irrespective of whether other elements satisfy the condition or not.
// If none of the elements satisfies the condition then the result is false.

const userCart = [
    {productId : 1536, productName : "Tablet", price : 25000},
    {productId : 4865, productName : "Smartphone", price : 16500},
    {productId : 9753, productName : "Earphone", price : 450},
    {productId : 0213, productName : "Laptop", price : 55000},
]

const ans2 = userCart.some((product) => product.price >= 58000)
console.log(ans2)


