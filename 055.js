const randomNumber = Math.random(); // 0.71294717128413243
const zeroToNine = Math.floor(Math.random() * 10,10); // 0to 0
const twentyTothirty = Math.floor(Math.random() * ((30-20)+1),10)+20; // 20to 30 
const oneToTen = Math.floor(Math.random() * 10,10)+1; //1 to 10
const makeRandom = (min,max) => Math.floor(Math.random() * ((max - min + 1)+1),10)+min; 

console.log(randomNumber);
console.log('zeroToNine :',zeroToNine);
console.log('oneToTen :',oneToTen);
console.log('twentyTothirty :',twentyTothirty);

for (let value = 1; value <= 10; value++) {
    console.log('10to 20 :', makeRandom(10,20));
}