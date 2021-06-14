import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough';
import NavBar from './NavBar';
import SignIn from './SignIn';
import UserDashboard from './User/UserDashboard';

function App() {
  const [user, useUser] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth', {
        headers: {
          authorization: token,
        },
      });
      useUser(true);
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem('token');
    useUser(false);
  };

  return (
    <div>
      <Router>
        <NavBar user={user} logout={logout} />
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/build">
          <Build />
        </Route>
        <Route exact path="/dashboard">
          <UserDashboard user={user}/>
        </Route>
        <Route exact path="/build/customize">
          <QuestionWalkthrough />
        </Route>
      </Router>
    </div>
  );
}

export default App;
