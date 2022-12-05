let firstName = "Himansh";
let age = 19;
if (firstName[0] === "V") {
  console.log("Your First Name starts with V");
} else {
  console.log("Your First Name does not start with V");
}

if (age > 18) {
  console.log("Your Age is greater than 18");
} else {
  console.log("Your Age is less than 18");
}

if (firstName[0] === "V" && age > 18) {
  console.log("Your First Name starts with V and your age is above 18.");
} else {
  console.log("Your First Name starts with V and your age is below 18.");
}
// && -> And operator

if (firstName[0] === "V" || age > 18) {
  console.log("Either you First Name starts with V or your age is above 18 or both.");
} else {
  console.log("Your First Name doesn't start with V and your age is below 18.");
}
// || -> Or operator
