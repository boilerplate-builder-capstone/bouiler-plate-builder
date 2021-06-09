import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Transition } from 'react-transition-group'

function Question(props) {
    const [transition, setTransition] = useState(true)
    const [ yesOrNo, setYesOrNo ] = useState(false)
    const [ question, setQuestion ] = useState("Do you want a server?")
    const [ questionSet, setQuestionSet ] = useState("backend")
    const [ showWarning, setShowWarning ] = useState(false)
    const { setCompleted, backEndResponses, setBackEndResponses, frontEndResponses, setFrontEndResponses } = props

    const transitionQuestion = (text) => {
        setTransition(false)
        setTimeout(setQuestion, 500, text)
        setTimeout(setTransition, 500, true)
    }

    const backEndQuestions = async (yesOrNo) => {
        // First question
        if (Object.keys(backEndResponses).length === 0){

            if (yesOrNo === "yes"){
                setBackEndResponses({server: true})
                transitionQuestion("Do you want a database?")
            }
            else if (yesOrNo === "no"){
                setBackEndResponses({
                    server: false
                })
                transitionQuestion("Front end time! Do you want to use React?")
                setQuestionSet("frontend")
            }
        }
        // If they said "yes, I want a server", ask if they want a database
        if (backEndResponses.server === true){
            if (yesOrNo === "yes"){
                setBackEndResponses({
                    server: {
                        db: true
                    }
                })
                transitionQuestion("Do you want an extra router?")
            }
            else if (yesOrNo === "no"){
                setBackEndResponses({
                    server: {
                        db: false
                    }
                })
                transitionQuestion("Front end time! Do you want to use React?")
                setQuestionSet("frontend")
            }
        }
        // If they said "yes, I want a database", ask if they want an extra router
        if (backEndResponses.server && backEndResponses.server.db === true){
            if (yesOrNo === "yes"){
                setBackEndResponses({
                    server: {
                        db: {
                            extraRouter: true
                        }
                    }
                })
            }
            else if (yesOrNo === "no"){
                setBackEndResponses({
                    server: {
                        db: {
                            extraRouter: false
                        }
                    }
                })
            }
            transitionQuestion("Front end time! Do you want to use React?")
            setQuestionSet("frontend")
        }
    }

    const frontEndQuestions = (yesOrNo) => {
        // First question of the front end
        if (!frontEndResponses.react){
            if (yesOrNo === "yes"){
                setFrontEndResponses({
                    react: true
                })
                transitionQuestion("Do you want to use React Router?")
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: false
                })
                setTransition(false)
                setTimeout(setCompleted, 500, true)
            }
        }
        // If they said "yes, I want React", ask them if they want react-router
        if (frontEndResponses.react === true){
            if (yesOrNo === "yes"){
                setFrontEndResponses({
                    react: {
                        reactRouter: true
                    }
                })
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: {
                        reactRouter: false
                    }
                })
            }
            transitionQuestion("Do you want to use React Redux to manage state?")
        }
        // Regardless of if they wanted react-router, ask them if they want react redux
        if (frontEndResponses.react && (frontEndResponses.react.reactRouter === true || frontEndResponses.react.reactRouter === false)){
            if (yesOrNo === "yes"){
                setFrontEndResponses({
                    react: {
                        reactRouter: frontEndResponses.react.reactRouter,
                        redux: true
                    }
                })
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: {
                        reactRouter: frontEndResponses.react.reactRouter,
                        redux: false
                    }
                })
            }
            setTransition(false)
            setTimeout(setCompleted, 500, true)
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!yesOrNo){
            setShowWarning(true)
        }
        else if (questionSet === "backend"){
            backEndQuestions(yesOrNo)
            setShowWarning(false)
        }
        else if (questionSet === "frontend"){
            frontEndQuestions(yesOrNo)
            setShowWarning(false)

        }
    }

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

    return (
        <div id="questioncontainer">
            <Transition in={transition} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>

                        <Form id="question" onSubmit={handleSubmit}>
                            <h6>{question}</h6>
                            <Form.Check name="radiogroup" type="radio" label="Yes" onClick={() => setYesOrNo("yes")}/>
                            <Form.Check name="radiogroup" type="radio" label="No" onClick={() => setYesOrNo("no")}/>
                            <Button type="submit">Next Question</Button>
                            {showWarning ? <Form.Text>Please make a selection</Form.Text> : null}
                        </Form>

                    </div>
                )}
            </Transition>
        </div>
    )
}

export default Question 