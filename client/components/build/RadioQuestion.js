import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

function RadioQuestion(props) {
    const { body } = props

    const handleSubmit = (ev) => {
        ev.preventDefault()
        body.radiotest = 'test'
        console.log('body', body)
    }

    return (
        <div id="questioncontainer">
            <Form id="question" onSubmit={handleSubmit}>
                <h6>RADIO QUESTION</h6>

                <input type="radio" name="radio"/>
                <label id="yes" htmlFor="yes" id="yes" > Yes</label><br/>

                <input type="radio" name="radio"/>
                <label id="no" htmlFor="no"> No</label><br/>
                
                <Button type="submit">Next Question</Button>
            </Form>
        </div>
    )
}

export default RadioQuestion 