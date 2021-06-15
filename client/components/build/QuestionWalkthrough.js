import React, { useState } from 'react'
import Question from './Question'
import GenerateBoilerplate from './GenerateBoilerplate'

function QuestionWalkthrough() {
    const [ completed, setCompleted ] = useState(false)
    const [body, setBody] = useState({})    

    return (
        <div>
            { completed ?
                <GenerateBoilerplate 
                    body={body}
                /> :
                <Question 
                    setCompleted={setCompleted} 
                    body={body}
                    setBody={setBody}
                />
            }
        </div>
    )
}

export default QuestionWalkthrough 