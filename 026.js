//삼항연산자
const num1 =1;
const num2 =2;
const list =[1,2,3,4];
const emptylist = [];

const result = num1> num2 ? 'num1': 'num2';
console.log(result, '이(가) 더 큽니다');

list.length >0 ? console.log(list) : console.log('list가 비었습니다.');
emptylist.length >0 ? console.log(list) : console.log('list가 비었습니다.');