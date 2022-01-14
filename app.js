number1 = 4;
number2 = 5;

function getDecription(){
    return ' of these numbers'
}

console.log(`Sum ${getDecription()}: ${number1} + ${number2} = ${number1 + number2}`);
console.log(`Sub ${getDecription()}: ${number1} - ${number2} = ${number1 - number2}`);
console.log(`Multiply ${getDecription()}: ${number1} * ${number2} = ${number1 * number2}`);
console.log(`Divide ${getDecription()}: ${number1} / ${number2} = ${number1 / number2}`);

