jest.mock('../src/sum');

const sum = require('../src/sum');

describe('sum', () => {  
  test('add 1 + 1', () => {
    sum(1, 1);
    sum.baz = 'baz';
    console.log(sum.foo);
    expect(sum).toHaveBeenCalledTimes(1);
  });
})
