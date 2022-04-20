const numbers = [3, 6, 2, 8, 1];
const strings = [
    'timeoutsRemaining',
    'flagrantFouls',
    'defensive3Seconds',
    'jumpshops',
    'drunks',
    'layups',
];

const sortedNumbers = numbers.sort();
const sortedStrings = strings.sort();

console.log('sortedNumbers:', sortedNumbers);
console.log('sortedNumbersDesc:', sortedNumbers.reverse());
console.log('sortedStrings:', sortedStrings);
console.log('sortedStringsDesc:', sortedStrings.reverse());
