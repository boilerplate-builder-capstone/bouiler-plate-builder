import React from 'react'
import { Button } from 'react-bootstrap'

function GenerateBoilerplate(props) {
    const { backEndResponses, frontEndResponses } = props

    const generateBoilerplate = () => {
        console.log("boilerplate will generate now")
        console.log("This will be the request body:", {...backEndResponses, ...frontEndResponses})
        // Axios call here
    }

    return (
        <div>
            <h1>DONE</h1>
            <Button onClick={generateBoilerplate}>Download Boilerplate</Button>
        </div>
    )
}

export default GenerateBoilerplate 