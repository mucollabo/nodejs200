const studentList = [
    {name: 'charles', age: 45, math: 85, science: 75},
    {name: 'jihyun', age: 31, math: 95, science: 83},
    {name: 'minsup', age: 35, math: 76, science: 98},
];
const plus = (a, b) => a + b;
studentList.forEach(student => console.log(`${student.name} total: ${plus(student.math, student.science)}`));

console.log('----------------------------');

studentList.forEach((student) => {
    console.log(`${student.name} total: ${plus(student.math, student.science)}`);
});
