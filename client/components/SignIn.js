import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginUser } from '../reduxStore/user/userActions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.login(this.state);
    } catch (error) {
      console.log('error occured in SignIn component onSubmit', error);
    }
  };

  onButton = async () => {};

  render() {
    return (
      <div>
        <div className="box">
          <h1 >Sign In</h1>
          <Link to={'/signup'}>
            <h4 >Create an account</h4>
          </Link>
          <div className="splitscreen">
            <form className="split">
              <h5>Sign in to an existing account</h5>
              <br />
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.onChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.onChange}
              />
              <br />
              <Button type="submit" value="Submit" onClick={this.onSubmit}>
                Submit
              </Button>
            </form>
            <div className="verticalline"></div>
            <div className="split">
              <h5>Sign in through Github</h5>
              <p className="textblock">Save your boilerplates to Github repos</p>
              <Button href="/api/login">Sign in through Github</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    // login: () => console.log(history),
    login: (credentails) => dispatch(loginUser(credentails, history)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
