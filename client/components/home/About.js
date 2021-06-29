import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
    <div className="splitscreen">
      <Card style={{ width: '23rem' }}>
        <Card.Body>
          <Card.Title>Kevin Flessa</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Science Viking
          </Card.Subtitle>
          <Card.Text>EJS and Forum</Card.Text>
          <Card.Link href="https://github.com/kfless12">GitHub</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/kevin-flessa/">
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>

      <div className="verticalline"></div>

      <Card style={{ width: '23rem' }}>
        <Card.Body>
          <Card.Title>Ellie King</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            CSS Whisperer
          </Card.Subtitle>
          <Card.Text>Boilerplates and CSS</Card.Text>
          <Card.Link href="https://github.com/king-ellie">GitHub</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/king-ellie/">
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>

      <div className="verticalline"></div>

      <Card style={{ width: '23rem' }}>
        <Card.Body>
          <Card.Title>Kacper Piech</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Part-time Ninja
          </Card.Subtitle>
          <Card.Text>Oauth and Backend</Card.Text>
          <Card.Link href="https://github.com/mpiech1813">GitHub</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/kacperpiech/">
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>

      <div className="verticalline"></div>

      <Card style={{ width: '23rem' }}>
        <Card.Body>
          <Card.Title>Fred Zhang</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Tech Wizard 
          </Card.Subtitle>
          <Card.Text>Testing and Saving</Card.Text>
          <Card.Link href="https://github.com/Fred1110">GitHub</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/zianzhangcee/">
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
