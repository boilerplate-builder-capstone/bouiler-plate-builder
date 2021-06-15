import React from 'react'
import { Form, Button } from 'react-bootstrap'

function RadioQuestion(props) {
    const { handleSubmit, currQuestion, showWarning, setSelected } = props

    return (
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
    )
}

export default RadioQuestion 