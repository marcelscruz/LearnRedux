var redux = require('redux');

console.log('starting redux example');

// Pure function
// same input will always generate same output
// doesn't produce side effect
// should be synchronous
// doesn't use external variables

function add(a, b) {
  return a + b;
}

// Pure function won't change initial values

function changePro(obj) {
  return {
    ...obj,
    name: 'Jen'
  };
}

var startingValue = {
  name: 'Marcel',
  age: 26
};

var res = changePro(startingValue);
console.log(startingValue);
console.log(res);
