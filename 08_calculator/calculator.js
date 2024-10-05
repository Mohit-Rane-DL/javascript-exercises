const add = function(num1, num2) {
	return num1 + num2;
};
console.log(add(0, 0));

const subtract = function(num1, num2) {
	return num1 - num2;
};
console.log(subtract(10, 4));

const sum = function(array) {
  let total = 0;
  if(array.length < 1){
    return 0;
  } else if(array.length === 1){
    return array[0];
  } else if(array.length > 1){
    for(i = 0; i < array.length; i++){
      total += array[i];
    }
  }
	return total;
};
console.log(sum([]));

const multiply = function(array) {
  let product = 1;
    for(i = 0; i < array.length; i++){
      product *= array[i];
    }
	return product;
};
console.log(multiply([2, 4]));

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};
console.log(power(4, 3));

const factorial = function(num) {
	let factorial = 1;
  if((num === 0) || (num === 1)){
    return 1;
  } else {
    for(i = 1; i <= num; i++){
      factorial *= i;
    }
  }
  return factorial;
};
console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
