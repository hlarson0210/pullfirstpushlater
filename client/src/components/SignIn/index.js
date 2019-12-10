import React from 'react'
import LogoAnimation from '../LogoAnimation'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './style.css'

function SignIn (props) {
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
            <Formik
              initialValues={{ username: '', password: '' }}
              validate={values => {
                const errors = {}
                if (!values.username) {
                  errors.username = 'Required'
                } else if (values.username < 4) {
                  errors.username = 'Invalid username'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label style={{ color: 'white' }} htmlFor='username'>
                    Username
                  </label>
                  <Field type='text' name='username' />
                  <ErrorMessage name='username' component='div' />
                  <label style={{ color: 'white' }} htmlFor='password'>
                    Password
                  </label>
                  <Field type='password' name='password' />
                  <ErrorMessage name='password' component='div' />
                  <button
                    className='waves-effect waves-light btn login'
                    href='#'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    LOG IN
                  </button>
                </Form>
              )}
            </Formik>
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
export default SignIn
