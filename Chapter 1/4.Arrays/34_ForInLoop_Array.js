let students = ["Harry", "David", "Heinrich", "Steiner", "Mikhail"];
let students2 = [];

for (let index in students) {
  console.log(index);
  console.log(students[index]);
  students2.push(students[index].toUpperCase());
}

console.log(students2);
