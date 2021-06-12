import React, { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough';
import NavBar from './NavBar';
import SignIn from './SignIn';
import { tokenLogin } from '../reduxStore/user/userActions';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     auth: {},
  //     user: false,
  //   };
  //   this.logout = this.logout.bind(this);
  // }
  // // const [user, useUser] = useState(false);

  componentDidMount() {
    console.log('state is ', this.props.state);
    const token = window.localStorage.getItem('token');
    if (token) {
      console.log('token located');
      this.props.login(token);
    }
  }
  // useEffect(() => {
  // }, []);

  logout() {
    window.localStorage.removeItem('token');
    this.setState({ user: false });
  }

  render() {
    // const { user } = this.state;
    // const { logout } = this;
    return (
      <div>
        <Router>
          <NavBar />
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
    // login: () => console.log('this.props.login fired'),
    login: (token) => dispatch(tokenLogin(token, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
