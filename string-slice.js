const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
// split
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);
// slice
const smallSlice = anthem.slice(5, 13);

// substr
const anotherPart = anthem.substr(11, 6);
// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'Amader';
const second = 'city';
const fullString = first.concat(second).concat('abc');

// join
const words2 = ['alim', 'badhon', 'cagol', 'david', 'e', 'f', 'g', 'h', 'i', 'j'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
const allJoined = words2.join(', ');
console.log(allJoined);