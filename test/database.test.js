const {
    db,
    models: { Redux },
  } = require('../server/db');

test('Check to see that Redux model exists', () => {
  expect(Redux)
});