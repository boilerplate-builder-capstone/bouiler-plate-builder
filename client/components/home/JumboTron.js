import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';

function JumboTron() {
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
      </p>
    </Jumbotron>
  );
}

export default JumboTron;
