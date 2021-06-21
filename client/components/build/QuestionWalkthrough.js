import React, { useState, useEffect } from 'react';
import FileStructure from './FileStructure';
import Questions from './Questions'

function QuestionWalkthrough(props) {
    const [body, setBody] = useState({})

  return (
    <div className="walkthrough">
        <FileStructure body={body} />
        <Questions body={body} setBody={setBody}/>
    </div>
  );
}

export default QuestionWalkthrough;
