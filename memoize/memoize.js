function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      // cache hit
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function getNumbers(limit = 10000) {
  let numbers = [];

  for (let i = 0; i < limit; i++) {
    numbers.push(i);
  }

  return numbers;
}

const numbers = getNumbers();

// Multiply memoisation experiment
const multiply = (a, b) => a * b;
const memoizedMultiply = memoize(multiply);
function testMultiply(label, numbers) {
  console.time(label);
  for (let number of numbers) {
    memoizedMultiply(number, number);
  }
  console.timeEnd(label);
}
testMultiply('cold', numbers);
testMultiply('cached', numbers);

// Factorial memoisation experiment
function factorial(number) {
  if (number < 0) return -1;
  if (number === 0) return 1;
  return number * factorial(number - 1);
}
const memoizedFactorial = memoize(factorial);
function testFactorial(label, numbers) {
  console.time(label);
  for (let number of numbers) {
    memoizedFactorial(number);
  }
  console.timeEnd(label);
}
testFactorial('cold', numbers);
testFactorial('cached', numbers);
