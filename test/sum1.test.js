jest.mock('../src/sum');

const sum = require('../src/sum');

describe('sum1', () => {  
  test('add 1 + 1', () => {
    sum(1, 1);
    sum.foo = 'foo';
    global.foo = 'foo';
    console.log(sum.baz);
    console.log(global.baz);
    expect(sum).toHaveBeenCalledTimes(1);
  });
})
