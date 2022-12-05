const users = [
    {userName : "Surendar", userId : 48321, email : "surendar4749@outlook.com", gender : "male"},
    {userName : "Munendra", userId : 16321, email : "munendra2654@outlook.com", gender : "male"},
    {userName : "Raghavi", userId : 93261, email : "raghavi2298@outlook.com", gender : "female"}, 
]

// Here we can allot different constants to different users in the array.
const [user1, user2, user3] = users

console.log(user1)
console.log(user1.userName)
console.log(user1.userId)
console.log(user1.email)
console.log(user1.gender)

console.log(user2)
console.log(user3.userName)
console.log(user2.userId)
console.log(user2.email)
console.log(user2.gender)

console.log(user3)
console.log(user3.userName)
console.log(user3.userId)
console.log(user3.email)
console.log(user3.gender)

// We can destructure these nested objects in the following way:-
const [{userName}, , {gender}] = users
console.log(userName)
console.log(gender)

// We can even allot separate constants to the keys in the nested object.
const [{userName: user1Name}, {userId: user2Id}, {email}] = users
console.log(user1Name)
console.log(user2Id)
console.log(email)



