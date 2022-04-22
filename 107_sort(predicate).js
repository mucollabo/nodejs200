const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFirstBiggerThenSecond = (first, second) => {
    console.log(first, second);
    if (first > second) return console.log('true'); true;
    return console.log('false'); false;
}

const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);

// 결과 값 오류
