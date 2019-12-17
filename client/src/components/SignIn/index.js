import React from 'react'
import LogoAnimation from '../../pages/LogoAnimation'
import userLogic from '../../utils/API/userLogic'
import ls from 'local-storage'
import { AppContext } from '../../appContext'
import './style.css'

class SignIn extends React.Component {
  static contextType = AppContext

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
    const value = event.target.value
    const name = event.target.name

    if (value.slice(value.length - 1) === ' ') {
      alert('No spaces allowed')
      return
    }

    // Updating the input's state
    this.setState({
      [name]: value
    })
  }

  handleSignIn = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault()
    let badForm = false

    const userObj = {
      username: this.state.username,
      password: this.state.password
    }

    if (!userObj.username) {
      alert(`Please enter your username`)
      return
    } else if (userObj.password.length === 0) {
      alert(`You must enter your password`)
      return
    }
    userLogic
      .userSignIn(userObj)
      .then(response => {
        const fullName = response.firstName + ' ' + response.lastName
        ls.set('myGameLibrary_userToken', response.currentToken)
        ls.set('myGameLibrary_userFullName', fullName.trim())
        this.props.locRedirect('/mylibrary')
      })
      .catch(err => console.log(err))
  }

  handleSignUp = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault()
    let badForm = false

    const userObj = {
      username: this.state.newUsername,
      password: this.state.newPassword,
      firstName: this.state.newFirstName,
      lastName: this.state.newLastName
    }

    if (!userObj.username) {
      alert(`Please enter a username`)
      return
    } else if (userObj.username.length < 4) {
      alert(`Please enter a username that is 4 or more characters.`)
      return
    } else if (userObj.password.length < 8) {
      alert(`Your password must be at least 8 characters, ${userObj.username}`)
      return
    } else if (userObj.password !== this.state.newConfirmPassword) {
      alert(`Your passwords do not match, ${userObj.firstName}`)
    }

    userLogic
      .userSignUp(userObj)
      .then(response => {
        const newUser = {
          username: userObj.username,
          password: userObj.password
        }

        userLogic
          .userSignIn(newUser)
          .then(resp => {
            const fullName = response.firstName + ' ' + response.lastName
            ls.set('myGameLibrary_userToken', response.currentToken)
            ls.set('myGameLibrary_userFullName', fullName.trim())
            this.props.locRedirect('/mylibrary')
          })
          .catch(error => console.log(error))
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <main>
        <div className='row'>
          <div className='col s12 m6 l6 app-name'>
            <LogoAnimation />
          </div>
          <div className='col s12 m6 l6 sign-in-form'>
            <div className='container form'>
              <div id='form-header' className='row'>
                <h1 id='one'>BOARD</h1>
              </div>
              <div className='row username'>
                <div
                  id='input-username'
                  className='input-field col s12 m12 l12'
                >
                  <input
                    type='text'
                    value={this.state.username}
                    name='username'
                    onChange={this.handleInputChange}
                    placeholder=''
                    className='validate username'
                    autoComplete='username'
                  />
                  <label>Username</label>
                  <span
                    class='helper-text'
                    data-error='Username not found. Click the sign up link below to get started!'
                    data-success='Success!'
                  >
                    Username must be more than 4 characters
                  </span>
                </div>
              </div>
              <div className='row password'>
                <div
                  id='input-password'
                  className='input-field col s12 m12 l12'
                >
                  <input
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleInputChange}
                    placeholder=''
                    className='validate password'
                    autoComplete='current-password'
                  />
                  <label>Password</label>

                  <span
                    class='helper-text'
                    data-error='hmm...wrong password.'
                    data-success='Success!'
                  >
                    Password must be more than 8 characters
                  </span>
                </div>
              </div>
              <button
                className='waves-effect waves-light btn #455a64 blue-grey darken-2 searching'
                onClick={this.handleSignIn}
              >
                LOG IN
              </button>
              <div id='signUpDiv' className='row'>
                <p>Don't have an account?</p>
                <p>
                  <a className='modal-trigger link sign-up' href='#modal1'>
                    <span data-content='SIGN UP'>SIGN UP</span>
                  </a>
                </p>
              </div>
              <br />
            </div>
            <br />
          </div>
          <div id='modal1' className='modal'>
            <div className='modal-content center'>
              <h4 id='modal-title'>Sign Up</h4>
              <div id='modal-form' className='row'>
                <form className='col s8 offset-s2'>
                  <div className='row'>
                    <div className='input-field col s6'>
                      <input
                        id='first_name'
                        type='text'
                        className='validate firstname'
                        value={this.state.newFirstName}
                        name='newFirstName'
                        onChange={this.handleInputChange}
                        autoComplete='name'
                      />
                      <label id='modal-label' htmlFor='first_name'>
                        First Name
                      </label>
                    </div>
                    <div className='input-field col s6'>
                      <input
                        id='last_name'
                        type='text'
                        className='validate lastname'
                        value={this.state.newLastName}
                        name='newLastName'
                        onChange={this.handleInputChange}
                        autoComplete='family-name'
                      />
                      <label id='modal-label' htmlFor='last_name'>
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <input
                        id='new_username'
                        type='text'
                        className='validate new_username'
                        value={this.state.newUsername}
                        name='newUsername'
                        onChange={this.handleInputChange}
                        autoComplete='username'
                      />
                      <label id='modal-label' htmlFor='new_username'>
                        Username
                      </label>
                      <span
                        class='helper-text'
                        data-error='Username must be more than 4 characters.'
                        data-success='Success!'
                      >
                        Username must be more than 4 characters
                      </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <input
                        id='new_password'
                        type='password'
                        className='validate new_password'
                        value={this.state.newPassword}
                        name='newPassword'
                        onChange={this.handleInputChange}
                        autoComplete='new-password'
                      />
                      <label id='modal-label' htmlFor='new_password'>
                        Password
                      </label>
                      <span
                        class='helper-text'
                        data-error='Password must be more than 8 characters.'
                        data-success='Success!'
                      >
                        Password must be more than 8 characters
                      </span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <input
                        id='confirm_password'
                        type='password'
                        className='validate new_password'
                        value={this.state.newConfirmPassword}
                        name='newConfirmPassword'
                        onChange={this.handleInputChange}
                        autoComplete='new-password'
                      />
                      <label id='modal-label' htmlFor='confirm_password'>
                        Confirm Password
                      </label>
                      <span
                        class='helper-text'
                        data-error='Oops. Not the same as above. Try again.'
                        data-success='Success!'
                      >
                        Password must match text entered above
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id='submit-modal'>
              <a
                href='#!'
                className='modal-close waves-effect btn-small #f44336 red center'
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
