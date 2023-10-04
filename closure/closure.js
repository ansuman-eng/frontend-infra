function makeFunction() {
  {
    const name = 'AM';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
}

const myFunction = makeFunction();
myFunction();

const makeFunctionArrowFn1 = (() => {
  const name = 'AM1';
  return () => console.log(name);
})();
makeFunctionArrowFn1();

const makeFunctionArrowFn2 = ((name = 'AM2') => {
  return () => console.log(name);
})();
makeFunctionArrowFn2();

const makeFunctionArrowFn3 = (
  (name = 'AM3') =>
  () =>
    console.log(name)
)();
makeFunctionArrowFn3();

function generator() {
  let counter = 0;
  function increment() {
    console.log(counter);
    counter++;
  }
  return {
    increment
  };
}

const newGen = generator();
newGen.increment();
newGen.increment();
newGen.increment();

const anotherGen = generator();
anotherGen.increment();
anotherGen.increment();

const buildStack = () => {
  let items = [];

  const push = (item) => (items = [item, ...items]);
  const pop = () => (items = items.slice(1));
  const top = () => items[0];
  const isEmpty = () => !items.length;
  const size = () => items.length;

  return {
    push,
    pop,
    top,
    isEmpty,
    size
  };
};

const stack = buildStack();
console.log(' ');
console.log(stack.isEmpty());
console.log(' ');
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(' ');
console.log(stack.top());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(' ');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(' ');
console.log(stack.isEmpty());
console.log(stack.top());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
