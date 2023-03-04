const listUsers = [
    {name:"John",age:20},
    {name:"Jane",age:21},
    {name:"Mary",age:22},
];
console.log('--------------------------------');
listUsers.forEach(function(user){
    console.log(user);
});
console.log('--------------------------------');
//arrow function
listUsers.forEach(user=> console.log(user));
