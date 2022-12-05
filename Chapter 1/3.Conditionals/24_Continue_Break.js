sum1 = 0;
sum2 = 0;
n = 40;

for (i = 1; i <= n; i++) {
  sum1 = sum1 + i;
  if (i == 5) {
    continue;
  }
  console.log(i);
}
console.log(sum1);

for (i = 1; i <= n; ) {
  sum2 = sum2 + i;
  console.log(i);
  i = i + 2;
  if (i >= 35) {
    break;
  }
}
console.log(sum2);

// Break command is used to terminate the loop at that instance and come out of it.
// Continue command is used to skip current instance of the loop at that point and move to the next instance of the loop.
