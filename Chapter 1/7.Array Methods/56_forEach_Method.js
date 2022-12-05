const numbers = [4, 7, 6, 5, 2]

// function numberDoubling (number, index){
    // console.log(`The index of the number is ${index}`)
    // console.log(`${number} * 2 = ${number*2}`)
//     console.log(`Output number is ${number*2} and its index is ${index}`)
// }

// for (let i=0; i<numbers.length; i++){
//     numberDoubling(numbers[i],i)
// }
// The above code will be be executed by a forEach function.

// numbers.forEach(numberDoubling)

// We can minimize down all the above functions further into a single command.
numbers.forEach(function numberDoubling (number, index){
    console.log(`Output number is ${number*2} and its index is ${index}`)
})

const studentDetails = [
    {name : "Shivang", email : "shivang153@gamil.com"},
    {name : "Mahesh", email : "mahesh753@gamil.com"},
    {name : "Dhanush", email : "dhanush023@gamil.com"},
    {name : "Ravish", email : "ravish510@gamil.com"}
]

studentDetails.forEach(function(student){
    console.log(student.name)
    console.log(student.email)
})

// We can also use arrow functions instead.
studentDetails.forEach(student => {
    console.log(student.name)
    console.log(student.email)
})

// for (let student of studentDetails){
//     console.log(student.name)
//     console.log(student.email)
// }

console.log(studentDetails.length)
