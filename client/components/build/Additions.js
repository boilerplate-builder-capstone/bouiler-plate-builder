import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group'

function Additions(props) {
  const {body, transition, setTransition, showAdditions, setShowAdditions} = props

    const onClick = () => {
        setTransition(false)
        setTimeout(setShowAdditions, 500, false)
        // setShowAdditions(false)
    }

  const duration = 500;
  const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
  }
  const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
  };

  useEffect(() => {
    setTransition(true)
}, [])

  return (
    <Transition in={transition} timeout={duration}>
        {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                <div id="question">
                    <h6>Check out your additions</h6>
                    <button onClick={onClick}>Next Question</button>
                </div>
            </div>
        )}
    </Transition>
    
  );
}

export default Additions;
