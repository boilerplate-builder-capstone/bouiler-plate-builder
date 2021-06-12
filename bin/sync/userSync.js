const User = require('../../server/db/models/User');

const userSync = async () => {
  const maciej = await User.create({
    username: 'mpiech',
    password: 'neon green',
  });

  const kevin = await User.create({
    username: 'kflessa',
    password: 'welcome123',
  });

  const ellie = await User.create({
    username: 'eking',
    password: 'welcome456',
  });

  const fred = await User.create({
    username: 'fzhand',
    password: 'welcome789',
  });
};

module.exports = userSync;
