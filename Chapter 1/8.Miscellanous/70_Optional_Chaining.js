const user = {
    name : "Naresh Shukla",
    age : 21,
    address : {
        HouseNo : 26,
        StreetNo : 9,
        Society : "Xtar Housing", 
    }
}

console.log(user.name)
console.log(user.age)

console.log(user.address.HouseNo)
console.log(user.address.StreetNo)
console.log(user.address.Society)

// console.log(user.style)
// console.log(user.style.trend)
// Above line is showing an error as style doesn't exist so its attribute is meaningless.

// To prevent JS from showing the above error code, we use optional chaining.

console.log(user?.style?.trend)
// Here the output is undefined instead to an error code.
// Optional Chaining using step-wise checking to display undefined or null.

let user2
console.log(user2?.name)
console.log(user2?.age)
// Here as user2 doesn't have any content in it so all the attributes are undefined.


