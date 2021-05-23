const app = require('./server');
const syncAndSeed = require('./db/model/sync/syncAdnSeed');
const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await syncAndSeed();
    if (!module.parent) {
      app.listen(PORT, () => console.log(`eh, its listening I guess, ${PORT}`));
    }
  } catch (error) {
    console.log('Error occured in init', error);
  }
};

init();
