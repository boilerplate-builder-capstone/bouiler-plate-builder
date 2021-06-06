import React from 'react'
import { Button } from 'react-bootstrap'

function GenerateBoilerplate() {
    
    const generateBoilerplate = () => {
        console.log("boilerplate will generate now")
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