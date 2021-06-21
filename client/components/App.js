import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough'
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  tokenLogin,
  logoutUser,
  createUser,
} from '../reduxStore/user/userActions';

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.token;
    if (token) {
      this.props.login();
    }
  }

  render() {
    const { user, logout, create } = this.props;
    return (
      <div>
        <Router>
          <NavBar user={user} logout={logout} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/build" component={Build} />
          <Route
            exact
            path="/build/customize"
            component={QuestionWalkthrough}
          />
          <Route
            exact
            path="/signup"
            component={() => <SignUp create={create} history={history} />}
          />
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
    create: (userForm) => dispatch(createUser(userForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
