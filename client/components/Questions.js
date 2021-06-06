import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function Questions() {
    const [ backEndResponses, setbackEndResponses ] = useState({})
    const [ frontEndResponses, setFrontEndResponses ] = useState({})
    const [ yesOrNo, setYesOrNo ] = useState(false)
    const [ question, setQuestion ] = useState("Do you want a server?")
    const [ questionSet, setQuestionSet ] = useState("backend")

    const generateBoilerplate = () => {
        console.log("boilerplate will generate now")
    }

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


    // backEndResponses = {
    //     server: false || {
    //         db: false || {
    //             extraRouter: true || false
    //         }
    //     },
    //     react: false || {
    //         reactRouter: false || true,
    //         redux: false || true
    //     }
    // }

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
                generateBoilerplate()
                setQuestion("DONE")
                console.log("here's your body:", {...backEndResponses, ...frontEndResponses})
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
            generateBoilerplate()
            setQuestion("DONE")
            console.log("here's your body:", {...backEndResponses, ...frontEndResponses})
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (questionSet === "backend"){
            backEndQuestions(yesOrNo)
        }
        else if (questionSet === "frontend"){
            frontEndQuestions(yesOrNo)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>{question}</Form.Label>
            <Form.Check name="radiogroup" type="radio" label="Yes" onClick={() => setYesOrNo("yes")}/>
            <Form.Check name="radiogroup" type="radio" label="No" onClick={() => setYesOrNo("no")}/>
            <Button type="submit">Next Question</Button>
            <Button onClick={() => {
                console.log("combined responses:", {backEndResponses, frontEndResponses})
                console.log("question", question)
                console.log("questionSet", questionSet)
            }}>See state</Button>
        </Form>
    )
}

export default Questions 