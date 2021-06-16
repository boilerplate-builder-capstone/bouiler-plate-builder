import React from 'react';
import JumboTron from './JumboTron';
import SignIn from '../SignIn';

function Home(props) {
    
    const { user } = props;

    return (
        <div>               
            <JumboTron />
            {!user &&
            <SignIn />
            }
        </div>
    )
}

export default Home;
