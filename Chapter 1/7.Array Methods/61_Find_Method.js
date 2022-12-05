const myArray = ["Cat", "Mouse", "Dog", "Squirrel", "Chameleon", "Rat"]

// const isLength3 = (string) => {
//     return string.length === 3
// }

const filterArray = myArray.find((string) => {
    return string.length === 3
})

console.log(filterArray)
// Above code prints the first element of the array which matches the function condition.

const studentDetails = [
    {userId : 1 ,name : "Shivang", email : "shivang153@gamil.com"},
    {userId : 2, name : "Mahesh", email : "mahesh753@gamil.com"},
    {userId : 3, name : "Dhanush", email : "dhanush023@gamil.com"},
    {userId : 4, name : "Ravish", email : "ravish510@gamil.com"}
]

const reqUser = studentDetails.find((studentDetails) => studentDetails.userId === 3)
console.log(reqUser)
// Find method is used to get the details of any person or object from the database.


