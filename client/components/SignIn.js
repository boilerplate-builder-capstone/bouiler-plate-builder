import React from 'react';
import { Button } from 'react-bootstrap'


function SignIn() {

    return (
        <div>
            <h1 className="header">Sign In</h1>   
            <div className="splitscreen">
                <div className="split">
                    <h5>Create an Account</h5>
                    <p className="textblock">FORM</p>
                    <Button href="/#build/prebuilt">Create Account</Button>
                </div>
                <div className="verticalline"></div>
                <div className="split">
                    <h5>Sign in through Github</h5>
                    <p className="textblock">Save your boilerplates to Github repos</p>
                    <Button href="/#build/customize">Sign in through Github</Button>
                </div>
            </div>          
        </div>
    )
}

export default SignIn 
