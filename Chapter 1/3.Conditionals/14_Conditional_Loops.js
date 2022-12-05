// First loop using if else statement.
let age = 14;
if (age > 18) {
  console.log("The user can proceed further.");
} else {
  console.log("The user can not proceed further.");
}

// Second loop using if elseif else statement.
let age2 = 11;
if ((age2 > 12) & (age2 < 18)) {
  console.log("The user can proceed further with limited access.");
} else if ((age2 < 12) & (age2 > 9)) {
  console.log("The user must login with underage account.");
} else {
  console.log("The user cannot proceed further.");
}

// To check whether the given number is even or odd.
let inputNumber = 55;
if (inputNumber % 2 == 0) {
  console.log("The given number is even.");
} else {
  console.log("The given number is odd.");
}

let firstName = "Harshit"; //Truthy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}

firstName = 154; //Truthy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}

firstName = ""; //Falsy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}

firstName = null; //Falsy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}

firstName = 0; //Falsy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}

firstName; //Falsy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}

firstName = false; //Falsy Value
if (firstName) {
  console.log(firstName);
} else {
  console.log("FirstName is very empty !!");
}





