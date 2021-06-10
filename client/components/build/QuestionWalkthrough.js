import React, { useState } from 'react'
import Question from './Question'
import GenerateBoilerplate from './GenerateBoilerplate'

function QuestionWalkthrough() {
    const [ completed, setCompleted ] = useState(false)
    const [ backEndResponses, setBackEndResponses ] = useState({})
    const [ frontEndResponses, setFrontEndResponses ] = useState({})

    return (
        <div>
            { completed ?
                <GenerateBoilerplate 
                    backEndResponses={backEndResponses} 
                    frontEndResponses={frontEndResponses}
                /> :
                <Question 
                    setCompleted={setCompleted} 
                    backEndResponses={backEndResponses} 
                    setBackEndResponses={setBackEndResponses}
                    frontEndResponses={frontEndResponses}
                    setFrontEndResponses={setFrontEndResponses}
                    />
            }
        </div>
    )
}

export default QuestionWalkthrough 