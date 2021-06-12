import React, { useEffect, useState, Component } from 'react';
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
  }
  // const [user, useUser] = useState(false);

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });
      useUser(true);
    }
  }
  // useEffect(() => {
  // }, []);

  logout() {
    window.localStorage.removeItem('token');
    useUser(false);
  }

  render() {
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

export default App;
