const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a -b;
};

const sum = function(arr) {
  let total = 0;
  for ( let item of arr) {
    total += item;
  }
return total;
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let total = 1;
  for ( let item of arr) {
    total *= item;
  }
  return total;
};

const power = function(num, pow) {
  return Math.pow(num, pow);
	
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i<= num; i++) {
    total *= i;
  }
	return total;
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
