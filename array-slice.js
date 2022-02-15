const numbers = [1,2,3,5,7,8,9, 65, 78, 45, 99, 34, 76];
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);
// note: slice does not changes the original array

// const numberSpliced = numbers.splice(4, 2);
// console.log(numberSpliced);
// console.log(numbers);
// splice removes from the original array
const numberSpliced2 = numbers.splice(4, 3, 78, 8, 89, 54, 78, 67)
console.log(numberSpliced2);
console.log(numbers);