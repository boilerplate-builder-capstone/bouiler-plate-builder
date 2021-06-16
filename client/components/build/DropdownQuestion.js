import React from 'react'
import { Form, Button } from 'react-bootstrap'

function DropdownQuestion(props) {
    const { handleSubmit, currQuestion, showWarning, setSelected } = props

    return (
        <Form id="question" onSubmit={handleSubmit}>
            <h6>{currQuestion.text}</h6>
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
    )
}

export default DropdownQuestion