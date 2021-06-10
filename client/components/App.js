import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough';
import NavBar from './NavBar';
import SignIn from './SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: false,
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // upon load, check if there is a loged in user
    // in future, use cookies instead LS
    const token = window.localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });
      this.setState({ user: true });
    }
  }

  logout() {
    window.localStorage.removeItem('token');
    this.state.user = false;
  }

  render() {
    const { user } = this.state;
    console.log('user is ', user);
    return (
      <div>
        <Router>
          <NavBar user={this.state.user} logout={this.logout} />
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

export default App;
