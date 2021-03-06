const students = [
    {name: 'charles', age: 31, score: 85},
    {name: 'jihyun', age: 31, score: 95},
    {name: 'minsup', age: 35, score: 76},
];

// 점수가 80점 이사인 학생 필터링하기
const upper80StudentsSum = students
    .filter(student => student.score > 80)
    .map(student => student.score)
    .reduce((a, b) => (a + b));

console.log('sum', upper80StudentsSum);
