import React, { useState } from 'react';
import GenerateBoilerplate from './GenerateBoilerplate';
import FileStructure from './FileStructure';
import Questions from './Questions';

function QuestionWalkthrough() {
  const [body, setBody] = useState({});
  const [transition, setTransition] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="walkthrough">
        <FileStructure body={body} />
        {completed
          ? <GenerateBoilerplate body={body} transition={transition} setTransition={setTransition} />
          : <Questions body={body} setBody={setBody} transition={transition} setTransition={setTransition} setCompleted={setCompleted}/>
        }
    </div>
  );
}

export default QuestionWalkthrough;
