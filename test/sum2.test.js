jest.mock('../src/sum');

const sum = require('../src/sum');

describe('sum', () => {  
  test('adds 1 + 2', () => {
    sum(1, 2);
    foo = 'foo';
    console.log(global.foo);
    console.log(global.bar);
    expect(sum).toHaveBeenCalledTimes(1);
  });

  test('adds 1 + 3', () => {
    global.bar = 'bar';
    console.log(global.foo);
  });
});