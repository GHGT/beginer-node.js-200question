const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<..>/g, '');
const result2 = string.replace(/<.../g, '');

console.log('<..>', result1);
console.log('<...>', result2);