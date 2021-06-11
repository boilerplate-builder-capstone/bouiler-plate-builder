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

    const transitionQuestion = (text, changeRadio) => {
        setTransition(false)
        setTimeout(setQuestion, 500, text)
        if (changeRadio){
            setTimeout(() => {
                const yes = document.getElementById("yes")
                const no = document.getElementById("no")
                yes.innerHTML = "React Redux"
                no.innerHTML = "React Hooks"
            }, 500)
        }
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
                        reactRouter: true,
                        state: false
                    }
                })
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: {
                        reactRouter: false,
                        state: false
                    }
                })
            }
            transitionQuestion("Do you want to manage component state with either React Hooks or React-Redux?")
        }
        // Regardless of if they wanted react-router, ask them if they want to manage state
        if (frontEndResponses.react && (frontEndResponses.react.reactRouter === true || frontEndResponses.react.reactRouter === false) && !frontEndResponses.react.state){
            if (yesOrNo === "yes"){
                setFrontEndResponses({
                    react: {
                        reactRouter: frontEndResponses.react.reactRouter,
                        state: true
                    }
                })
                transitionQuestion("Do you want to use React Redux or React Hooks to manage state?", true)               
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: {
                        reactRouter: frontEndResponses.react.reactRouter,
                        redux: false,
                        reacthooks: false
                    }
                })
                setTransition(false)
                setTimeout(setCompleted, 500, true)
            }
        }

        // If they want to manage state, ask them if they want to use react-redux or react hooks
        if (frontEndResponses.react && frontEndResponses.react.state === true){
            if (yesOrNo === "yes"){
                setFrontEndResponses({
                    react: {
                        reactRouter: frontEndResponses.react.reactRouter,
                        redux: true,
                        reacthooks: false
                    }
                })
            }
            else if (yesOrNo === "no"){
                setFrontEndResponses({
                    react: {
                        reactRouter: frontEndResponses.react.reactRouter,
                        redux: false,
                        reacthooks: true,
                    }
                })
            }
            setTransition(false)
            setTimeout(setCompleted, 400, true)
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

                            <input type="radio" name="radio" onClick={() => setYesOrNo("yes")}/>
                            <label id="yes" htmlFor="yes" id="yes" > Yes</label><br/>

                            <input type="radio" name="radio" onClick={() => setYesOrNo("no")}/>
                            <label id="no" htmlFor="no"> No</label><br/>
                            
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