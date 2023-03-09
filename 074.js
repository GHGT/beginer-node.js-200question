const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g, '');
console.log('result1:',result1);

const string2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result2:',string2);