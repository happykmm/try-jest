import _ from 'lodash';
import { searchContact } from '../src/contacts';

expect.addSnapshotSerializer({
  test: (val) => {
    return _.isArray(val);
  },
  print: (val) => {
    return _.chain(val)
      .map(item => `${item.name} - ${item.phone}`)
      .join('\n')
      .value();
  },
});

it('search ang', () => {
  expect(searchContact('ang')).toMatchSnapshot();
});

