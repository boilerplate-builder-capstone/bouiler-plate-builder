import React from 'react';

function About() {
  return (
    <div>
      <div className="splitscreen">
        <div className="split">
          <p>Name 1</p>
        </div>
        <div className="split">
          <p>Name 2</p>
        </div>
      </div>

      <div className="verticalline"></div>

      <div className="splitscreen">
        <div className="split">
          <p>Name 3</p>
        </div>
        <div className="split">
          <p>Name 4</p>
        </div>
      </div>
    </div>
  );
}

export default About;
