import React, { useState } from 'react';
import FileStructure from './FileStructure';
import Questions from './Questions';

function QuestionWalkthrough(props) {
  const [body, setBody] = useState({});
  const [transition, setTransition] = useState(false);

  return (
    <div className="walkthrough">
        <FileStructure body={body} />
        <Questions body={body} setBody={setBody} transition={transition} setTransition={setTransition}/>
    </div>
  );
}

export default QuestionWalkthrough;
