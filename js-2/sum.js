function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0