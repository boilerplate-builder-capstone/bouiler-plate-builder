import React, { useState } from 'react'
import Question from './Question'
import GenerateBoilerplate from './GenerateBoilerplate'

function QuestionWalkthrough() {
    const [ completed, setCompleted ] = useState(false)

    return (
        <div>
            { completed ?
                <GenerateBoilerplate /> :
                <Question setCompleted={setCompleted}/>
            }
        </div>
    )
}

export default QuestionWalkthrough 