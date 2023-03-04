const studentlist  =[
    {name:"John",age:20, score:90},
    {name:"Jane",age:21, score:95},
    {name:"Mary",age:22, score:76},
    {name:"Mike",age:23, score:94},
];
let resultStudent  ='';
for ( let index = 0; index < studentlist.length; index ++){
    if (studentlist[index].name === 'Mary'){
        resultStudent = studentlist[index];
        break;
    }
    console.log(studentlist[index].name, '은 Mary이 아닙니다');
}
console.log('resultStudent:', resultStudent);
