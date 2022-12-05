// let inputNumber = input("Enter your desired number");
let inputNumber = +prompt("Enter your desired number");
// One thing to note prompt always take input data in string form
// so to change it to number just add a '+' in front of it.

let correctNumber = 26;

if (inputNumber > correctNumber) {
  console.log("The number you entered is greater than the correct number");
} else {
  if (inputNumber < correctNumber) {
    console.log("The number you entered is less than the correct number");
  } else {
    console.log("The number you entered is equal to the correct number");
  }
}
