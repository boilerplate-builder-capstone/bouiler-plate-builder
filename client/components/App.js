import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough';
import NavBar from './NavBar';
import SignIn from './SignIn';

class App extends Component {
  componentDidMount() {
    //add component did mount and login form token in local storage
    const token = window.localStorage.getItem('token');
    if (token) {
      console.log('token found');
      // const response = await axios.get('/api/auth', {
      //   headers: {
      //     authorization: token,
      //   },
      // });
    } else {
      console.log('token not found');
    }
  }

  render() {
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

export default App;
