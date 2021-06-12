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
      auth: {},
      user: false,
    };
    this.logout = this.logout.bind(this);
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
      this.setState({ user: true });
    }
  }
  // useEffect(() => {
  // }, []);

  logout() {
    window.localStorage.removeItem('token');
    this.setState({ user: false });
  }

  render() {
    const { user } = this.state;
    const { logout } = this;
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
