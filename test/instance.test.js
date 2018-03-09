const foo = jest.fn();

foo();
new foo();
new foo();

test('instance', () => {
  expect(foo).toMatchSnapshot();
  expect(foo.mock.instances).toMatchSnapshot();
  console.log(foo.mock.instances.length);
});

