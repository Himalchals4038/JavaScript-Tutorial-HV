sum = 0;
end = 19;
// end = +prompt("Enter last number of the series")

for (let i = 1; i <= end; i++) {
  sum = sum + i;
}
// console.log("`The value of i is ${i}`)

for (let i = 1; i <= end; i++) {
  sum = sum + i;
}
console.log(`The sum of first ${i} natural numbers is ${sum}`);
console.log(`The value of i is ${i}`);

// Here we can understand the difference between let and var.
// Let is an instance operator which allots the value to i only inside the loop.
// Whereas var is an universal operator which allots the value to i throughout the code.
