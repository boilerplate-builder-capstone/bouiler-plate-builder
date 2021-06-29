import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Build from './build/Build';
import QuestionWalkthrough from './build/QuestionWalkthrough';
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserDashboard from './User/UserDashboard';
import PrebuiltBoilers from './PrebuiltBoilers';
import {
  tokenLogin,
  logoutUser,
  createUser,
} from '../reduxStore/user/userActions';
import ForumPage from './forum/topics';
import IndividualPost from './forum/individualpost';
import About from './home/About';

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
          <Route exact path="/build/prebuilt" component={PrebuiltBoilers} />
          <Route
            exact
            path="/signup"
            component={() => <SignUp create={create} history={history} />}
          />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/forum" component={ForumPage} />
          <Route exact path="/forum/:postId" component={IndividualPost} />
          <Route exact path="/about" component={About} />
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
