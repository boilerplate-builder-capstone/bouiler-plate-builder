import React from 'react';
import { Button } from 'react-bootstrap'


function ChooseExperience() {
    
    return (
        <div>
            <h1 className="header">Where do you want to start?</h1>   
            <div className="splitscreen">
                <div className="split">
                    <h5>"I know what kind of web app I'm building and want a basic boilerplate."</h5>
                    <p className="textblock">Choose from one of our pre-built boilerplates for a few common types of web apps.</p>
                    <Button href="/#build/prebuilt">Choose a Boilerplate</Button>
                </div>
                <div className="verticalline"></div>
                <div className="split">
                    <h5>"I want to fully customize my boilerplate."</h5>
                    <p className="textblock">Get into the nitty-gritty and go step-by-step, building a custom boilerplate perfectly suited for your web app's needs.</p>
                    <Button href="/#build/customize">Let's customize!</Button>
                </div>
            </div>          
        </div>
    )
}

export default ChooseExperience