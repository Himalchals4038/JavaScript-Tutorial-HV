const users = [
    {userName : "Surendar", userId : 48321, email : "surendar4749@outlook.com", gender : "male"},
    {userName : "Munendra", userId : 16321, email : "munendra2654@outlook.com", gender : "male"},
    {userName : "Raghavi", userId : 93261, email : "raghavi2298@outlook.com", gender : "female"}, 
]
console.log(users)

// First Method
for (let user of users) {
    console.log(user);
    console.log(user.userName);
    console.log(user.userId);
    console.log(user.email);
    console.log(user.gender);
}

// Second Method
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
    console.log(users[i].userName)
    console.log(users[i].userId)
    console.log(users[i].email)
    console.log(users[i].gender)
}


