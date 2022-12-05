const numbers = [4, 9, 20, 17, 33, 8]

// const isEven = (number) => {
//     return number%2==0
// }

// const evenNumbers = numbers.filter((number) => {
//     return number%2==0
// })

const evenNumbers = numbers.filter((number) => number%2==0)

console.log(evenNumbers)

// Filter function is used to separate out the elements that satisfy a given relation.

const texts = ['Henry', 'Miller', 'Samantha', 'Derry', 'Hoffman']

// const textLength = (text) => {
//     return text.length > 6
// }

// const textFilter = texts.filter((text) => {
//     return text.length > 6
// })

const textFilter = texts.filter((text) => text.length >= 6)

console.log(textFilter)


