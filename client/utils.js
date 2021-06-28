import axios from 'axios';

export const assembleRequestBody = (body) => {
  const requestBody = {};
  // backend assembling
  if (body.server) {
    requestBody.server = {};
    if (body.db) {
      requestBody.server.db = {
        extraRouter: body.extraRouter,
      };
    } else if (!body.db) {
      requestBody.server.db = false;
    }
  } else {
    requestBody.server = false;
  }
  //frontend assembling
  if (body.react) {
    requestBody.react = {
      reactRouter: body.reactRouter,
      redux: body.redux,
      reacthooks: body.reacthooks,
    };
  } else if (body.react === false) {
    requestBody.react = false;
  }

  return requestBody;
};

export const generateBoilerplate = async (requestBody) => {
  try {
    console.log('This will be the request body:', requestBody);

    // Axios call to the server to grab documents
    const { data } = await axios.post(`api/completedboiler`, requestBody, {
      responseType: 'arraybuffer',
    });

    let blob = await new Blob([data], { type: 'application/zip' });

    const link = document.createElement('a');
    // Browsers that support HTML5 download attribute
    //need to adjust this for react!!!!!!!!!!!!!!!!!!!
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'Boilerplate');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (er) {
    console.log(er);
  }
};
