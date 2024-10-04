const convertToCelsius = function(degree) {
  degreeCelsius = (degree - 32) * (5/9);
  return Math.round(degreeCelsius * 10)/10;
};

convertToCelsius(32);

const convertToFahrenheit = function(degree) {
  degreeFahrenheit = (degree * (9/5)) + 32;
  return Math.round(degreeFahrenheit * 10)/10;
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
