jest.mock('../src/sum');

const sum = require('../src/sum');

function LeakingClass() {
}

global.leaks = [];
setInterval(function() {
  for (var i = 0; i < 100; i++) {
    leaks.push(new LeakingClass());
  }
}, 1);

describe('test-suite', () => {  
  test('test-case', () => {
    const data = {
      1: 'a',
      2: 'b',
    };
    sum(15, 'foo', { key: 'value' });
    global.foo = 'foo';
    console.log('global.bar = ', global.bar);
    expect(sum).toMatchSnapshot();
    setTimeout(() => {
      console.log(JSON.stringify(data));
    }, 10000);
  });

  test('adds 1 + 3', (done) => {
    global.bar = 'bar';
    console.log('global.foo = ', global.foo);
    setTimeout(() => {
      console.log(leaks.length);
      done();
    }, 1000);
  });
});