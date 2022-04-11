const studentList = [
    { name: 'charles', age: 47, score: 88},
    { name: 'jihyun', age: 31, score: 95},
    { name: 'minsup', age: 35, score: 76},
    { name: 'yuna', age: 31, score: 94},
];

let resultStudent = '';
for (let index = 0; index < studentList.length; index += 1) {
    if (studentList[index].name === 'minsup') {
        resultStudent = studentList[index];
        break;
    }
    console.log(studentList[index].name, '은 minsup이 아닙니다.');
}

console.log('resultStudent:', resultStudent);
