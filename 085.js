const studentList = [
    {name: 'kyeongrok', age: 31, Math: 85, english: 87},
    {name: 'jihyun', age: 31, Math: 95, english: 97},
    {name: 'minsup', age: 35, Math: 76, english: 84},
    {name: 'dasom', age: 35, Math: 84, english: 73},
    {name: 'yuna', age: 26, Math: 54, english: 67},
    {name: 'mattheue', age: 29, Math: 34, english: 100},
];

studentList.sort((beforeStudent, nextStudent) => {
    if (beforeStudent.age > nextStudent.age) return 1;
else if (beforeStudent.age < nextStudent.age) return -1;
else if (beforeStudent.age > nextStudent.age) return -1;
else if (beforeStudent.age < nextStudent.age) return 1;
return 0;
});

console.log(studentList);