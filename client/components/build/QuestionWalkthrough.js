import React, { useState, useEffect } from 'react'
// import Question from './Question'
import GenerateBoilerplate from './GenerateBoilerplate'
import { Transition } from 'react-transition-group'
import RadioQuestion from './RadioQuestion'
import DropdownQuestion from './DropdownQuestion'
import questions from '../../questiondata'

function QuestionWalkthrough() {
    const [completed, setCompleted] = useState(false)
    const [body, setBody] = useState({})    
    const [showWarning, setShowWarning] = useState(false)
    const [selected, setSelected] = useState(null)
    const [questionIdx, setQuestionIdx] = useState(0)
    const [transition, setTransition] = useState(true)

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


    if (completed){
        return <GenerateBoilerplate body={body} />
    }
    else if (currQuestion.type === "radio"){
        return (
            <div id="questioncontainer">
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
            </div>
        )
    }
    else if (currQuestion.type === "dropdown"){
        return (
            <div id="questioncontainer">
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
            </div>
        )
    }

}

export default QuestionWalkthrough 