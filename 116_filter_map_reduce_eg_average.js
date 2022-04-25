const students = [
    {name: 'charles', age: 31, score: 85},
    {name: 'jihyun', age: 31, score: 95},
    {name: 'minsup', age: 35, score: 76},
    {name: 'dasom', age: 24, score: 84},
    {name: 'yuna', age: 26, score: 54},
    {name: 'mattheue', age: 29, score: 34},
];

// 21 이상 30 미만 점수 평균 구하기
const between21to30StudentsAverage = students
    .filter(student => student.age >= 21 && student.age < 30)
    .map(student => student.score)
    .reduce((previous, current, index, array) => previous + (current / array.length), 0);