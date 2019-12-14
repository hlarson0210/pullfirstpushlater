import React from 'react'
import LogoAnimation from '../LogoAnimation'
import userLogic from '../../utils/API/userLogic'
import './style.css'
import { AppContext } from "../../appContext";


class SignIn extends React.Component {
  static contextType = AppContext;
  // call token: this.context.token

  state = {
    error: null,
    username: '',
    password: '',
    newUsername: '',
    newPassword: '',
    newConfirmPassword: '',
    newFirstName: '',
    newLastName: ''
  }

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    if (value.slice(value.length - 1) === ' ') {
      alert("No spaces allowed");
      return
    }

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  handleSignIn = event => {

    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let badForm = false;

    const userObj = {
      username: this.state.username,
      password: this.state.password
    };

    if (!userObj.username) {
      alert(`Please enter your username`)
      return
    } else if (userObj.password.length === 0) {
      alert(
        `You must enter your password`
      )
      return
    }
    userLogic.userSignIn(userObj).then(response => {
      console.log(response);
    }).catch(err => console.log(err));
  }

  handleSignUp = event => {
    
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let badForm = false;

    const userObj = {
      username: this.state.newUsername,
      password: this.state.newPassword,
      firstName: this.state.newFirstName,
      lastName: this.state.newLastName
    };

    if (!userObj.username) {
      alert(`Please enter a username`);
      return
    } else if (userObj.username.length < 4) {
      alert(`Please enter a username that is 4 or more characters.`);
      return
    } else if (userObj.password.length < 8) {
      alert(
        `Your password must be at least 8 characters, ${
          userObj.username
        }`
      );
      return
    } else if (userObj.password !== this.state.newConfirmPassword) {
      alert(`Your passwords do not match, ${userObj.firstName}`);
    }
    userLogic.userSignUp(userObj).then(response => {
      const newUser = {username: userObj.username, password: userObj.password};

      userLogic.userSignIn(newUser).then(resp => {

        this.context.update({ token: resp.token });

        console.log(resp)
        }).catch(error => console.log(error));
      }).catch(err => console.log(err));
  }

  render () {
    console.log(this.context.token);
    return (
      <main>
        <div className='row'>
          <div className='col s12 m6 l6 app-name'>
            <LogoAnimation />
          </div>

          <div
            style={{ textAlign: 'left' }}
            className='col s12 m6 l6 sign-in-form'
          >
            <div className='container form'>
              <div style={{ marginBottom: '50px' }} className='row'>
                <h1 id='one' style={{ color: 'white' }}>
                  BOARD
                </h1>
              </div>
              <div className='row username'>
                <div className='input-field col s12 m12 l12'>
                    <input
                      type='text'
                      value={this.state.username}
                      placeholder='Username'
                      name='username'
                      onChange={this.handleInputChange}
                      className='validate username'
                    />
                     <label>
                    Username
                  </label>
                </div>
              </div>
              <div className='row password'>
                <div className='input-field col s12 m12 l12'>
                    <input
                      type='password'
                      value={this.state.password}
                      placeholder='Password'
                      name='password'
                      onChange={this.handleInputChange}
                      className='validate password'
                    />
                    <label>
                    Password
                  </label>
                </div>
              </div>
              <button
                className='waves-effect waves-light btn searching blue lighten-1'
                onClick={this.handleSignIn}
              >
                LOG IN
              </button>
              <div className='row'>
                <p>Don't have an account?</p>
                <p>
                  <a className='modal-trigger link sign-up' href='#modal1'>
                    <span className='wavy' data-content='SIGN UP'>
                      Sign Up
                    </span>
                  </a>
                </p>
              </div>
              <br />
            </div>
          </div>
          <div id='modal1' className='modal'>
            <div className='modal-content center'>
              <h4 style={{ color: 'black' }}>Sign Up</h4>
              <div className='row'>
                <form className='col s8 offset-s2'>
                  <div className='row'>
                    <div className='input-field col s6'>
                      <input
                        id='first_name'
                        type='text'
                        className='validate firstname'
                        value={this.state.newFirstName}
                        placeholder='First Name'
                        name='newFirstName'
                        onChange={this.handleInputChange}
                      />
                      <label htmlFor='first_name'>First Name</label>
                    </div>
                    <div className='input-field col s6'>
                      <input
                        id='last_name'
                        type='text'
                        className='validate lastname'
                        value={this.state.newLastName}
                        placeholder='Last Name'
                        name='newLastName'
                        onChange={this.handleInputChange}
                      />
                      <label htmlFor='last_name'>Last Name</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <input
                        id='new_username'
                        type='text'
                        className='validate new_username'
                        value={this.state.newUsername}
                        placeholder='Username'
                        name='newUsername'
                        onChange={this.handleInputChange}
                      />
                      <label htmlFor='new_username'>Username</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <input
                        id='new_password'
                        type='password'
                        className='validate new_password'
                        value={this.state.newPassword}
                        placeholder='Password'
                        name='newPassword'
                        onChange={this.handleInputChange}
                      />
                      <label htmlFor='new_password'>Password</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <input
                        id='confirm_password'
                        type='password'
                        className='validate new_password'
                        value={this.state.newConfirmPassword}
                        placeholder='Confirm Password'
                        name='newConfirmPassword'
                        onChange={this.handleInputChange}
                      />
                      <label htmlFor='confirm_password'>Confirm Password</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='modal-footer'>
              <a
                href='#!'
                className='modal-close waves-effect waves-green btn-flat'
                onClick={this.handleSignUp}
              >
                Submit
              </a>
            </div>
            <div id='modal1' className='modal'>
              <div className='modal-content center'>
                <div className='card'>
                  <h4>SIGN UP</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default SignIn
