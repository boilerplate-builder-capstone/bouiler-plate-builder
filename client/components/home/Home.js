import React from 'react';
import JumboTron from './JumboTron';
import SignIn from '../SignIn';
import { connect } from 'react-redux';

function Home(props) {
    const { user } = props

    return (
        <div>               
            <JumboTron />
            {!user.user &&
            <SignIn />
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

export default connect(mapStateToProps)(Home);
