import React, { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough';
import NavBar from './NavBar';
import SignIn from './SignIn';
import { tokenLogin, logoutUser } from '../reduxStore/user/userActions';

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.token;
    if (token) {
      this.props.login();
    }
  }

  render() {
    const { user, logout } = this.props;
    return (
      <div>
        <Router>
          <NavBar user={user} logout={logout} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/build">
            <Build />
          </Route>
          <Route exact path="/build/customize">
            <QuestionWalkthrough />
          </Route>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    login: () => dispatch(tokenLogin(history)),
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
