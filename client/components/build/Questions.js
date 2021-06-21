import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import RadioQuestion from './RadioQuestion'
import DropdownQuestion from './DropdownQuestion'
import questions from '../../questiondata'

function Questions(props) {
    const [showWarning, setShowWarning] = useState(false)
    const [selected, setSelected] = useState(null)
    const [questionIdx, setQuestionIdx] = useState(0)
    const { body, setBody, transition, setTransition, setCompleted } = props

    const currQuestion = questions[questionIdx]

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!selected){
            setShowWarning(true)
        }
        else {
            setTransition(false)
            setBody({...body, ...currQuestion[selected].body})
            if (currQuestion[selected].nextQuestion === null){
                setTransition(false)
                setTimeout(setCompleted, 500, true)
                setTimeout(setTransition, 600, true)
            }
            else {
                setShowWarning(false)
                setTimeout(setQuestionIdx, 500, currQuestion[selected].nextQuestion)
                setTimeout(setTransition, 500, true)
            }
        }
    }

    useEffect(() => {
        setSelected(null)
    }, [currQuestion.type])
    
    useEffect(() => {
        setTransition(true)
    }, [])

    // TRANSITION ANIMATION STUFF
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

    if (currQuestion.type === "radio"){
        return (
            <Transition in={transition} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <RadioQuestion 
                            handleSubmit={handleSubmit} 
                            showWarning={showWarning} 
                            currQuestion={currQuestion}
                            setSelected={setSelected}
                        />
                    </div>
                )}
            </Transition>
        )
    }
    else if (currQuestion.type === "dropdown"){
        return (
            <Transition in={transition} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <DropdownQuestion
                            handleSubmit={handleSubmit} 
                            showWarning={showWarning} 
                            currQuestion={currQuestion}
                            setSelected={setSelected}
                        />
                    </div>
                )}
            </Transition>
        )
    }
}

export default Questions 