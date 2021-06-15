import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Transition } from 'react-transition-group'
// import RadioQuestion from './RadioQuestion'
// import TextInputQuestion from './TextInputQuestion'
import questions from '../../questiondata'

function Question(props) {
    const [showWarning, setShowWarning] = useState(false)
    const [selected, setSelected] = useState(null)
    const [questionIdx, setQuestionIdx] = useState(0)
    const [transition, setTransition] = useState(true)
    const { setCompleted, body, setBody } = props

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
                setCompleted(true)
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
            <div id="questioncontainer">
                <Transition in={transition} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <Form id="question" onSubmit={handleSubmit}>
                                <h6>{currQuestion.text}</h6>
                                {currQuestion.options.map((option, idx) => {
                                    return (
                                        <div key={idx}>
                                            <input value={option} type="radio" name="radio"  onClick={() => setSelected(option)}/>
                                            <label id={option} htmlFor={option} id={option} > {option}</label><br/>
                                        </div>
                                    )
                                })}
                                <Button type="submit">Next</Button>
                                {showWarning ? <Form.Text>Please make a selection</Form.Text> : null}
                            </Form>
                        </div>
                    )}
                </Transition>
            </div>
        )
    }
    if (currQuestion.type === "dropdown"){
        return (
            <div id="questioncontainer">
                <Transition in={transition} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <Form id="question" onSubmit={handleSubmit}>
                                <h6>Question: {currQuestion.text}</h6>
                                <Form.Control as="select" onChange={(e) => setSelected(e.target.value)}>
                                    <option defaultValue>Make Selection</option>
                                        {currQuestion.options.map((option, idx) => {
                                            return (
                                                <option value={option} key={idx}>{option}</option>
                                            )
                                        })}
                                </Form.Control>                                 
                                <Button type="submit">Next</Button>
                                {showWarning ? <Form.Text>Please make a selection</Form.Text> : null}
                            </Form>
                        </div>
                    )}
                </Transition>
            </div>
        )
    }    
}

export default Question 