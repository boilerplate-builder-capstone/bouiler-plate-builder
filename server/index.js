const app = require('./server');
const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    if (!module.parent) {
      app.listen(PORT, () => console.log(`eh, its listening I guess, ${PORT}`));
    }
  } catch (error) {
    console.log('Error occured in init', error);
  }
};

init();

// hello
