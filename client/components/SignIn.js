import React from 'react';
import { Button } from 'react-bootstrap';

function SignIn() {
  return (
    <div>
      <h1 className="header">Sign In</h1>
      <div className="splitscreen">
        <div className="split">
          <h5>Sign In</h5>
          <p className="textblock">FORM</p>
          <Button>Create Account</Button>
        </div>
        <div className="verticalline"></div>
        <div className="split">
          <h5>Sign in through Github</h5>
          <p className="textblock">Save your boilerplates to Github repos</p>
          <Button href="/api/login">Sign in through Github</Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
