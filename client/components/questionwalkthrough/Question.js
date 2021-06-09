import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Transition } from 'react-transition-group'

function Question(props) {
    const [ backEndResponses, setbackEndResponses ] = useState({})
    const [ frontEndResponses, setFrontEndResponses ] = useState({})
    const [ yesOrNo, setYesOrNo ] = useState(false)
    const [ question, setQuestion ] = useState("Do you want a server?")
    const [ questionSet, setQuestionSet ] = useState("backend")
    const [ showWarning, setShowWarning ] = useState(false)
    const { setCompleted } = props

    const backEndQuestions = (yesOrNo) => {
        // If this is the first question
        if (Object.keys(backEndResponses).length === 0){

            if (yesOrNo === "yes"){
                setbackEndResponses({server: true})
                setQuestion("Do you want a database?")
            }
            else if (yesOrNo === "no"){
                setQuestion("You said no")
                setbackEndResponses({
                    server: false
                })
                setQuestion("Front end time! Do you want to use React?")
                setQuestionSet("frontend")
            }
            // setInProp(true)
        }
        // If they said "yes, I want a server", ask if they want a database
        if (backEndResponses.server === true){
            if (yesOrNo === "yes"){
                setbackEndResponses({
                    server: {
                        db: true
                    }
                })
                setQuestion("Do you want an extra router?")
            }
            else if (yesOrNo === "no"){
                setbackEndResponses({
                    server: {
                        db: false
                    }
                })
                setQuestion("Front end time! Do you want to use React?")
                setQuestionSet("frontend")
            }
        }
        // If they said "yes, I want a database", ask if they want an extra router
        if (backEndResponses.server && backEndResponses.server.db === true){
            if (yesOrNo === "yes"){
                setbackEndResponses({
                    server: {
                        db: {
                            extraRouter: true
                        }
                    }
                })
                setQuestion("Front end time! Do you want to use React?")
                setQuestionSet("frontend")
            }
            else if (yesOrNo === "no"){
                setbackEndResponses({
                    server: {
                        db: {
                            extraRouter: false
                        }
                    }
                })
                setQuestion("Front end time! Do you want to use React?")
                setQuestionSet("frontend")
            }
        }
    }

    const frontEndQuestions = (yesOrNo) => {
        // First question of the front end
        if (!frontEndResponses.react){
            if (yesOrNo === "yes"){
                setFrontEndResponses({
                    react: true
                })
                setQuestion("Do you want to use React Router?")
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: false
                })
                setCompleted(true)
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
            setQuestion("Do you want to use React Redux to manage state?")
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
            setCompleted(true)
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!yesOrNo){
            setShowWarning(true)
        }
        else if (questionSet === "backend"){
            // setInProp(false)
            backEndQuestions(yesOrNo)
            setShowWarning(false)
            // setInProp(false)
        }
        else if (questionSet === "frontend"){
            // setInProp(false)
            frontEndQuestions(yesOrNo)
            setShowWarning(false)
            // setInProp(false)
        }
    }

    // TRANSITION STUFF
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
      const [inProp, setInProp] = useState(false)

    // useEffect function that fires only when the question text state changes
    useEffect(() => {
        console.log('hello world');
        setInProp(!inProp)
    }, [question])

    return (
        <div id="questioncontainer">
            <Transition in={inProp} timeout={duration}>
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
            <button onClick={() => setInProp(true)}>Click to Enter</button>
            <button onClick={() => setInProp(false)}>Click to Exit</button>
        </div>
    )
}

export default Question 