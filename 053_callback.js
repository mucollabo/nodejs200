const sum = (a, b) => a + b;

const printResult = (result) => {
    console.log(`결과는 ${result}입니다.`);
};

const calculationAndPrint = (calculateResult, callback) => {
    callback(calculateResult);
};

calculationAndPrint(sum(10, 20), printResult);
