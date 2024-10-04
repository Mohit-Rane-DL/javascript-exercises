const sumAll = function (firstValue, lastValue) {
  let sum = 0;

  if ((typeof firstValue === "string") || (typeof lastValue === "string")){
    return sum = "ERROR";
  } else if ((firstValue % 1 !== 0) || (lastValue % 1 !== 0)){
    return sum = "ERROR";
  } else if ((firstValue < lastValue) && (firstValue > 0) && (lastValue > 0)) {
    for (i = firstValue; i <= lastValue; i++) {
      sum += i;
    }
  } else if ((lastValue < firstValue) && (firstValue > 0) && (lastValue > 0)) {
    for (i = firstValue; i >= lastValue; i--) {
      sum += i;
    }
  } else if ((firstValue < 0) || (lastValue < 0)){
    return sum = "ERROR";
  } 
  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
