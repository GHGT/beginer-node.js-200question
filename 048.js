// 함수 선언식(function declaration)
function printMessage(message) {
    console.log(message);
}

// 함수 표현식(function expression)
const printWelcome = function (){
    console.log('Welcome')
};
printMessage('bye');
printWelcome();

console.log('type of printMessage: %s', typeof printMessage);
console.log('type of printWelcome: %s', typeof printWelcome);

//괄호를 쓰지 않음
const pm = printMessage;
pm('good moring');
console.log('typeof pm: %s', typeof pm);