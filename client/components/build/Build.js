import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import ChooseExperience from './ChooseExperience'


function Build() {
    const [showModal, setShowModal] = useState(false)

    // Upon mounting, we check to see if the user is logged in by looking for a token in localStorage. If it's not there, we prompt them to either sign in or continue as a guest with the modal.
    useEffect(() => {
        const authorized = window.localStorage.getItem("token")
        if (!authorized){
            setShowModal(true)
        }
    }, [])

    return (
        <div>
            <ChooseExperience />

            <Modal centered show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                    <div className="splitscreen">
                        <div className="split">
                            <h5>Continue as guest</h5>
                            <p className="textblock">You will be able to download your boilerplate.</p>
                            <Button onClick={() => setShowModal(false)}>Continue as Guest</Button>
                        </div>
                        <div className="verticalline"></div>
                        <div className="split">
                            <h5>Sign in through Github</h5>
                            <p className="textblock">Save your boilerplate to a Github repo</p>
                            <Button href="/#build/customize">Sign in through Github</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>          
        </div>
    )
}

export default Build 
