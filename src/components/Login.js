import React, { Component } from "react";
import agent from '../agent';
import { connect } from 'react-redux';

// get props from redux state
const mapStateToProps = state => ({ ...state.auth });

// create redux dispatch function and map to props
const mapDispatchToProps = dispatch => ({
  onChangeEmail: value => {
    dispatch({
      type: 'UPDATE_FIELD_AUTH',
      key: 'email',
      value
    });
  },

  onChangePassword: value => {
    dispatch({
      type: 'UPDATE_FIELD_AUTH',
      key: 'password',
      value
    });
  },

  onSubmit: (email, password) => {
    dispatch({
      type: 'LOGIN',
      payload: agent.Auth.login(email, )
    })
  }
});


class Login extends Component {
  constructor() {
    super();
    this.changeEmail = event => this.props.onChangeEmail(event.target.value);
    this.changePassword = event => this.props.onChangePassword(event.target.value);
    this.submitForm = (email, password) => event => {
      event.preventDefault();
      this.props.onSubmit(email, password);
    }
  }

  render() {
    const { email, password } = this.props;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a>Need an account?</a>
              </p>

              <form onSubmit={this.submitForm(email, password)}>
                <fieldset className="form-group">
                  <input type="email" 
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={this.changeEmail} />
                </fieldset>

                <fieldset className="form-group">
                  <input type="password" 
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={this.changePassword} />
                </fieldset>

                <button className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disable={this.props.inProgress}>
                  Sign in
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
