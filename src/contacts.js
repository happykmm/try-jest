import _ from 'lodash';

const contacts = [
  {
    name: 'li qiang',
    phone: '13500001112',
  },
  {
    name: 'zhang qiang',
    phone: '13600001111',
  },
  {
    name: 'li gang',
    phone: '13700001111',
  }
];

export const searchContact = (term) => {
  return _.filter(contacts, c => _.includes(c.name, term));
}
