const users = [
  {
    name: 'User',
    lastName: 'One',
    email: 'user-one@gmail.com',
    password: 'Aa123456.',
  },
  {
    name: 'User',
    lastName: 'Two',
    email: 'user-two@gmail.com',
    password: 'Aa123456.',
  },
  {
    name: 'User',
    lastName: 'Three',
    email: 'user-three@gmail.com',
    password: 'Aa123456.',
  },
];

const groups = [
  {
    code: 'ABCX11',
    name: 'Testing 1',
    numMembers: 5,
    groupType: 'Almuerzo',
    totalAmount: 160.55,
  },
  {
    code: 'ABCX22',
    name: 'Testing 2',
    numMembers: 8,
    groupType: 'Cumple',
    totalAmount: 250.2,
  },
  {
    code: 'ABCX33',
    name: 'Testing 3',
    numMembers: 10,
    groupType: 'Despedida',
    totalAmount: 480.0,
  },
  {
    code: 'ABCX44',
    name: 'Testing 4',
    numMembers: 4,
    groupType: 'Reencuentro',
    totalAmount: 120.0,
  },
  {
    code: 'ABCX55',
    name: 'Testing 5',
    numMembers: 7,
    groupType: 'Almuerzo',
    totalAmount: 360.4,
  },
];

export const seedData = {
  users,
  groups,
};
