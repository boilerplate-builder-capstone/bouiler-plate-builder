const randomName = () => {
  let newName = '';
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < 9; i++)
    newName += char.charAt(Math.floor(Math.random() * char.length));

  return newName;
};

export { randomName };
