import React from 'react'
import LogoAnimation from '../LogoAnimation'
import axios from 'axios'
import './style.css'

class SignIn extends React.Component {
  state = {
    error: null,
    username: '',
    password: ''
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value
    const name = event.target.name

    if (name === 'password') {
      // value = value.substring(0, 8);
      if (value.length === 8) {
        event.preventDefault()
        return
      }
    }

    // Updating the input's state
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault()

    if (!this.state.username) {
      alert(`Please enter a username`)
      this.setState({
        password: ''
      })
    } else if (this.state.username.length < 4) {
      alert(`Please enter a username that is 4 or more characters.`)
      this.setState({
        password: ''
      })
    } else if (this.state.password.length < 8) {
      alert(
        `Choose a more secure password that is more than 8 characters, ${
          this.state.username
        }`
      )
      this.setState({
        password: ''
      })
    } else {
      alert(`Hello ${this.state.username}`)
      this.setState({
        username: '',
        password: ''
      })
    }
  }

  render () {
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
                  <label>
                    <input
                      type='text'
                      value={this.state.username}
                      placeholder='Username'
                      name='username'
                      onChange={this.handleInputChange}
                      className='validate username'
                    />
                    Username
                  </label>
                </div>
              </div>
              <div className='row password'>
                <div className='input-field col s12 m12 l12'>
                  <label>
                    <input
                      type='password'
                      value={this.state.password}
                      placeholder='Password'
                      name='password'
                      onChange={this.handleInputChange}
                      className='validate password'
                    />
                    Password
                  </label>
                </div>
              </div>
              <button
                className='waves-effect waves-light btn searching blue lighten-1'
                onClick={this.handleFormSubmit}
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
                      />
                      <label htmlFor='first_name'>First Name</label>
                    </div>
                    <div className='input-field col s6'>
                      <input
                        id='last_name'
                        type='text'
                        className='validate lastname'
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
                      />
                      <label htmlFor='new_password'>Password</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='modal-footer'>
              <a
                href='#!'
                className='modal-close waves-effect waves-green btn-flat'
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
