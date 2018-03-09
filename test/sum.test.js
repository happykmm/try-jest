import { sum } from '../src/sum';

describe('sum', () => {  
  test('1+1', () => {
    expect(sum(1, 1)).toEqual(2);
  });
})
