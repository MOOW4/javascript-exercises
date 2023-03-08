const add = function(number_1, number_2) {
    let sum = number_1 + number_2;
	  return sum;
};

const subtract = function(number_1, number_2) {
  let diff = number_1 - number_2;
  return diff;
};

const sum = function(num_array) {

  let sum = 0;

  for(let i = 0; i < num_array.length; i++){
    sum += num_array[i];
  }

  return sum;
};

const multiply = function(num_array) {
  let result = 1;
  for(let i = 0; i < num_array.length; i++){
    result *= num_array[i];
  }
  return result;
};

const power = function(base, exponent) {
	let result = base ** exponent;
  return result;
};

const factorial = function(num) {
	let result = 1;
  for(let i = num; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
