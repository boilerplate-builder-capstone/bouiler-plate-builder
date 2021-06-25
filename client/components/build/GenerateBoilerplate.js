import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import ContentAccordion from './ContentAccordion';
import CreateRepoModal from './CreateRepoModal';
import {assembleRequestBody, generateBoilerplate} from '../../utils';

function GenerateBoilerplate(props) {
  const { body, transition } = props;
  const [isToken, setIsToken] = useState(false);
  const requestBody = assembleRequestBody(body);

  const duration = 500;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={transition} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div id="generate">
            <div id="download">
              <h2>Your boilerplate is ready!</h2>
              <Button onClick={() => generateBoilerplate(requestBody)}>
                Download Boilerplate
              </Button>
            </div>

            <Modal centered show={isToken} onHide={() => setIsToken(false)}>
              <Modal.Body>
                <CreateRepoModal />
              </Modal.Body>
            </Modal>

            {!requestBody.react && !requestBody.server ? null : (
              <ContentAccordion requestBody={requestBody} />
            )}
          </div>
        </div>
      )}
    </Transition>
  );
}

export default GenerateBoilerplate;
