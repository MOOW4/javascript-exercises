const convertToCelsius = function(faren) {
  let cels = (faren - 32) * (5/9);
  //Math.round(cels * 100) / 100;
  return (+cels.toFixed(1));
};

const convertToFahrenheit = function(cels) {
  let faren = cels * (9/5) + 32;
  //Math.round(faren * 10) / 10;
  return (+faren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
