import React from 'react';
import JumboTron from './JumboTron';
import SignIn from '../SignIn';

function Home() {

  const onClick = () => {
    const animate = document.getElementById("animate")
    animate.classList.toggle("move")
  }

  return (
    <div>
      <JumboTron />
      {/* <SignIn /> */}
      <button onClick={onClick} id="animatebutton">move</button>
      <div id="animate">
        <h1>Test Animation</h1>
        <p>We're gonna test this thing out</p>
        <button>This a button</button>
      </div>
    </div>
  );
}

export default Home;
