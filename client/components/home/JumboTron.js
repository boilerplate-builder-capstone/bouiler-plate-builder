import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';

function JumboTron() {
  const onClick = async () => {
    try {
      const gitToken = window.localStorage.getItem('tokenGit');

      const message = await axios.post('/api/gitCreate', { gitToken });
      message ? console.log(message.data) : '';
    } catch (error) {
      console.log('error in send button');
    }
  };

  return (
    <Jumbotron id="jumbotron">
      <h1>Welcome to Boilerplate Builder</h1>
      <p>
        We know you’ve got big ideas. Get a jumpstart with with a customized
        boilerplate so that you can spend more time on turning those ideas into
        reality.
      </p>
      <p>
        <Button variant="primary" href="/#build">
          Get started
        </Button>
        <Button onClick={onClick}>send</Button>
      </p>
    </Jumbotron>
  );
}

export default JumboTron;
