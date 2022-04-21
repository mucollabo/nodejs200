// 배열 선언
const destinationName = [
    'London',
    'Roma',
    'Paris',
    'Amsterdam',
];

const searchDestination = 'Paris';

for (let i = 0; i < destinationName.length; i++) {
    if (searchDestination === destinationName[i]) {
        console.log(searchDestination, '입니다');
        break;
    }
}
