let age = 15;
let drink;
if (age < 8) {
  drink = "Milk";
} else if (age >= 8 && age < 12) {
  drink = "Horlicks/Boost";
} else if (age >= 12 && age < 18) {
  drink = "Bournvita/Complan";
} else {
  drink = "Tea/Coffee";
}
console.log(drink);
// Above is the recommended method for creating conditional loops.

// Ternary operators are used to shorten the whole process but has strange syntax, so not recommended for beginners.
age = 8;
drink = age >= 5 && age <= 8 ? "Milk" : "Horlicks/Boost";
console.log(drink);

// Below is the recommended method for creating advanced loops.
age = 10;
drink =
  age >= 5 && age <= 8
    ? "Milk"
    : age > 8 && age <= 12
    ? "Horlicks/Boost"
    : age > 12 && age <= 18
    ? "Bournvita/Complan"
    : "Tea/Coffee";
console.log(drink);





