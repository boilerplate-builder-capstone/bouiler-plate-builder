import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { Transition } from 'react-transition-group'
// import RadioQuestion from './RadioQuestion'
// import TextInputQuestion from './TextInputQuestion'
import questions from './questiondata'

function Question(props) {
    const [ showWarning, setShowWarning ] = useState(false)
    const [selected, setSelected] = useState(null)
    const [questionIdx, setQuestionIdx] = useState(0)
    const { setCompleted, body, setBody } = props
    const currQuestion = questions[questionIdx]

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!selected){
            setShowWarning(true)
        }
        else {
            console.log("selected:", selected)
            setBody({...body, ...currQuestion[selected].body})
            if (currQuestion[selected].nextQuestion === null){
                setCompleted(true)
            }
            else {
                setQuestionIdx(currQuestion[selected].nextQuestion)
                setShowWarning(false)
            }
            
        }
    }

    useEffect(() => {
        setSelected(null)
    }, [currQuestion.type])
    
    if (currQuestion.type === "radio"){
        return (
            <div id="questioncontainer">
                <Form id="question" onSubmit={handleSubmit}>
                    <h1>Question: {currQuestion.text}</h1>
                    <h2>Type {currQuestion.type}</h2>
                    {currQuestion.options.map((option, idx) => {
                        return (
                            <div key={idx}>
                                <input value={option} type="radio" name="radio"  onClick={() => setSelected(option)}/>
                                <label id={option} htmlFor={option} id={option} > {option}</label><br/>
                            </div>
                        )
                    })}
                    <Button type="submit">Next Question</Button>
                    {showWarning ? <Form.Text>Please make a selection</Form.Text> : null}
                </Form>
                
                <button onClick={() => console.log(selected)}>see selected</button>
            </div>
        )
    }
    if (currQuestion.type === "dropdown"){
        return (
            <div id="questioncontainer">
                <Form id="question" onSubmit={handleSubmit}>
                    <h1>Question: {currQuestion.text}</h1>
                    <h2>Type {currQuestion.type}</h2>

                    <select name="select" onChange={(e) => setSelected(e.target.value)}>
                        <option defaultValue>Make Selection</option>
                        {currQuestion.options.map((option, idx) => {
                            return (
                                <option value={option} key={idx}>{option}</option>
                            )
                        })}
                    </select>
                        
                    <Button type="submit">Next Question</Button>
                    {showWarning ? <Form.Text>Please make a selection</Form.Text> : null}
                </Form>
                
                <button onClick={() => console.log(selected)}>see selected</button>
            </div>
        )
    }    
}


// function Question(props) {
//     const [transition, setTransition] = useState(true)
//     const [ selected, setSelected ] = useState(false)
//     const [ question, setQuestion ] = useState("Do you want a server?")
//     const [ questionSet, setQuestionSet ] = useState("backend")
//     const [ showWarning, setShowWarning ] = useState(false)
//     const { setCompleted, backEndResponses, setBackEndResponses, frontEndResponses, setFrontEndResponses } = props

//     const transitionQuestion = (text, newRadioText1, newRadioText2) => {
//         setTransition(false)
//         setTimeout(setQuestion, 500, text)
//         if (newRadioText1 && newRadioText2){
//             setTimeout(() => {
//                 const yes = document.getElementById("yes")
//                 const no = document.getElementById("no")
//                 yes.innerHTML = newRadioText1
//                 no.innerHTML = newRadioText2
//             }, 500)
//         }
//         setTimeout(setTransition, 500, true)
//     }

//     const backEndQuestions = async (selected) => {
//         // First question
//         if (Object.keys(backEndResponses).length === 0){

//             if (selected === "yes"){
//                 setBackEndResponses({server: true})
//                 transitionQuestion("Do you want a database?")
//             }
//             else if (selected === "no"){
//                 setBackEndResponses({
//                     server: false
//                 })
//                 transitionQuestion("Front end time! Do you want to use React?")
//                 setQuestionSet("frontend")
//             }
//         }
//         // If they said "yes, I want a server", ask if they want a database
//         if (backEndResponses.server === true){
//             if (selected === "yes"){
//                 setBackEndResponses({
//                     server: {
//                         db: true
//                     }
//                 })
//                 transitionQuestion("Do you want an extra router?")
//             }
//             else if (selected === "no"){
//                 setBackEndResponses({
//                     server: {
//                         db: false
//                     }
//                 })
//                 transitionQuestion("Front end time! Do you want to use React?")
//                 setQuestionSet("frontend")
//             }
//         }
//         // If they said "yes, I want a database", ask if they want an extra router
//         if (backEndResponses.server && backEndResponses.server.db === true){
//             if (selected === "yes"){
//                 setBackEndResponses({
//                     server: {
//                         db: {
//                             extraRouter: true
//                         }
//                     }
//                 })
//             }
//             else if (selected === "no"){
//                 setBackEndResponses({
//                     server: {
//                         db: {
//                             extraRouter: false
//                         }
//                     }
//                 })
//             }
//             transitionQuestion("Front end time! Do you want to use React?")
//             setQuestionSet("frontend")
//         }
//     }

//     const frontEndQuestions = (selected) => {
//         // First question of the front end
//         if (!frontEndResponses.react){
//             if (selected === "yes"){
//                 setFrontEndResponses({
//                     react: true
//                 })
//                 transitionQuestion("Do you want to use React Router?")
//             }
//             else if (selected === "no"){
//                 setFrontEndResponses({
//                     react: false
//                 })
//                 setTransition(false)
//                 setTimeout(setCompleted, 500, true)
//             }
//         }
//         // If they said "yes, I want React", ask them if they want react-router
//         if (frontEndResponses.react === true){
//             if (selected === "yes"){
//                 setFrontEndResponses({
//                     react: {
//                         reactRouter: true,
//                         state: false
//                     }
//                 })
//             }
//             else if (selected === "no"){
//                 setFrontEndResponses({
//                     react: {
//                         reactRouter: false,
//                         state: false
//                     }
//                 })
//             }
//             transitionQuestion("Do you want to manage component state with either React Hooks or React-Redux?")
//         }
//         // Regardless of if they wanted react-router, ask them if they want to manage state
//         if (frontEndResponses.react && (frontEndResponses.react.reactRouter === true || frontEndResponses.react.reactRouter === false) && !frontEndResponses.react.state){
//             if (selected === "yes"){
//                 setFrontEndResponses({
//                     react: {
//                         reactRouter: frontEndResponses.react.reactRouter,
//                         state: true
//                     }
//                 })
//                 transitionQuestion("Do you want to use React Redux or React Hooks to manage state?", "React Redux", "React Hooks")               
//             }
//             else if (selected === "no"){
//                 setFrontEndResponses({
//                     react: {
//                         reactRouter: frontEndResponses.react.reactRouter,
//                         redux: false,
//                         reacthooks: false
//                     }
//                 })
//                 setTransition(false)
//                 setTimeout(setCompleted, 500, true)
//             }
//         }

//         // If they want to manage state, ask them if they want to use react-redux or react hooks
//         if (frontEndResponses.react && frontEndResponses.react.state === true){
//             if (selected === "yes"){
//                 setFrontEndResponses({
//                     react: {
//                         reactRouter: frontEndResponses.react.reactRouter,
//                         redux: true,
//                         reacthooks: false
//                     }
//                 })
//             }
//             else if (selected === "no"){
//                 setFrontEndResponses({
//                     react: {
//                         reactRouter: frontEndResponses.react.reactRouter,
//                         redux: false,
//                         reacthooks: true,
//                     }
//                 })
//             }
//             setTransition(false)
//             setTimeout(setCompleted, 400, true)
//         }
//     }

    // const handleSubmit = (ev) => {
    //     ev.preventDefault();
    //     if (!selected){
    //         setShowWarning(true)
    //     }
    //     else if (questionSet === "backend"){
    //         backEndQuestions(selected)
    //         setShowWarning(false)
    //     }
    //     else if (questionSet === "frontend"){
    //         frontEndQuestions(selected)
    //         setShowWarning(false)

    //     }
    // }

//     // TRANSITION ANIMATION STUFF
//     const duration = 500;
//     const defaultStyle = {
//         transition: `opacity ${duration}ms ease-in-out`,
//         opacity: 0,
//     }
//     const transitionStyles = {
//         entering: { opacity: 1 },
//         entered:  { opacity: 1 },
//         exiting:  { opacity: 0 },
//         exited:  { opacity: 0 },
//       };

//     return (
//         <div id="questioncontainer">
//             <Transition in={transition} timeout={duration}>
//                 {state => (
//                     <div style={{
//                         ...defaultStyle,
//                         ...transitionStyles[state]
//                     }}>

//                         <Form id="question" onSubmit={handleSubmit}>
//                             <h6>{question}</h6>

//                             <input type="radio" name="radio" onClick={() => setSelected("yes")}/>
//                             <label id="yes" htmlFor="yes" id="yes" > Yes</label><br/>

//                             <input type="radio" name="radio" onClick={() => setSelected("no")}/>
//                             <label id="no" htmlFor="no"> No</label><br/>
                            
//                             <Button type="submit">Next Question</Button>
//                             {showWarning ? <Form.Text>Please make a selection</Form.Text> : null}
//                         </Form>

//                     </div>
//                 )}
//             </Transition>
//         </div>
//     )
// }

export default Question 