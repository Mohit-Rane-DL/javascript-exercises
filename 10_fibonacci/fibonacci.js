const fibonacci = function(positionOfNumber) {
    let integerPositionOfNumber = Number(positionOfNumber);
    let firstNumber = 1;
    let SecondNumber = 1;
    let fibonacciSequence = [firstNumber, SecondNumber];
    if(integerPositionOfNumber === 0){
        return 0;
    } else if(integerPositionOfNumber < 0){
        return "OOPS";
    }
    for(i = 2; i <= 25; i++){
        fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
    }
    return fibonacciSequence[integerPositionOfNumber - 1];
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
