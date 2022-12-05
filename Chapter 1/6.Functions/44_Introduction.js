function singhappyBirthday(){
    console.log("Happy Birthday to you, Happy Birthday to you, Happy Birthday my dear friend, Happy Birthday to you !!")
}
singhappyBirthday()

function twelvePlusNine(){
    return 12 + 9
}
console.log(twelvePlusNine())

// function singhappyBirthdayCustom(self, name){
//     console.log(`Happy Birthday to you, Happy Birthday to you, Happy Birthday my dear ${self.name}, Happy Birthday to you !!`)
// }
// singhappyBirthdayCustom("Harry")

function sumTwoNumbers(a, b){
    return a + b
}
const sum1 = sumTwoNumbers(15, 26)
console.log(sum1)

function sumThreeNumbers(a, b, c){
    return a + b + c
}
sum2 = sumThreeNumbers(98, 30, 25)
console.log(sum2)

// function isEven (a){
//     if (a%2 === 0){
//         return true
//     }
//     else {
//         return false
//     }
// }

// Below is a short version of the above function.
function isEven (a) {
    return a % 2 === 0
}
console.log(isEven(5))

// We can also declare a function using const type name of the function.
// const isEven = function(a){
//     return a % 2 === 0
// }
// console.log(isEven(5))

// function isOdd (a){
//     if (a%2 === 0){
//         return false
//     }
//     else {
//         return true
//     }
// }

// Below is a short version of the above function.
function isOdd (a) {
    return a%2 !== 0
}    
console.log(isOdd(7))

// Below is a code to determine number of specific letters in a paragraph.
const paragraph = "I am currently studying in First Year BTech Computer Science + Business. My college is Indian Institute of Information Technology, Lucknow."
array = [...paragraph]
console.log(array)
letter = 'e'
letterCount = 0

for (i=0; i<array.length; i++) {
    if (array[i] === letter) {
        letterCount++
    }
    else {
        continue
    }
}
console.log(`The letter is ${letter} and it has been repeated in the paragraph ${letterCount} times.`)

// Below is a code to determine which numbers in the array are divisible by 3.

const filterArray = function (arrayGiven, finalArray){
    for (i=0; i<arrayGiven.length; i++) {
        number = arrayGiven[i]
        if (number%3 == 0) {
            finalArray.push(number)
        }
        else {
            continue
        }
    }
}
const arrayGiven = [36, 49, 22, 58, 9, 27]
const finalArray = []
console.log(finalArray)

// Below is a code to determine the index number of the array where the requested integer is first present.
// function findTarget (array, target){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] == target){
//             return i
//             stop
//         }
//         else {
//             continue
//         }
//     }
// }
// targetArray = [15, 76, 48, 59, 22, 4, 59]
// target = 59
// const ans = findTarget(targetArray, target)
// console.log(ans)

const findTarget = function (array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] == target){
            return i
            stop
        }
        else {
            continue
        }
    }
}
targetArray = [15, 76, 48, 59, 22, 4, 59]
target = 59
const ans = findTarget(targetArray, target)
console.log(ans)



