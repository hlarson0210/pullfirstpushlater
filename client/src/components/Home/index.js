import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../SignIn'
import './style.css'

/* class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'Home'
    }

    handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      })
    }
  }
  render () {
    return (
      <div className='contenedor'>
        <form>
          <div className='vert-nav-form'>
            <label>
              <input
                type='radio'
                name='slider'
                value='Home'
                checked={this.state.selectedOption === 'Home'}
                onChange={this.handleOptionChange}
                className='radio-btn'
              />
              Home
            </label>
          </div>
          <div className='vert-nav-form'>
            <label>
              <input
                type='radio'
                name='slider'
                value='MyLibraries'
                checked={this.state.selectedOption === 'MyLibraries'}
                onChange={this.handleOptionChange}
                className='radio-btn'
              />
              My Libraries
            </label>
          </div>
          <div className='vert-nav-form'>
            <label>
              <input
                type='radio'
                name='slider'
                value='ExploreGames'
                checked={this.state.selectedOption === 'ExploreGames'}
                onChange={this.handleOptionChange}
                className='radio-btn'
              />
              Explore Games
            </label>
          </div>
          <div className='vert-nav-form'>
            <label>
              <input
                type='radio'
                name='slider'
                value='HowItWorks'
                checked={this.state.selectedOption === 'HowItWorks'}
                onChange={this.handleOptionChange}
                className='radio-btn'
              />
              How It Works
            </label>
          </div>
        </form>
      </div>
    )
  }
}
export default Home */

function Home (props) {
  return (
    <div className="contenedor">
      <form className="vert-nav-form">
        <input
          type="radio"
          className="radio-btn"
          id="Slide1"
          name="slider"
          titulo="Home"
          autoFocus="autofocus"
        />
        <input
          type="radio"
          className="radio-btn"
          id="Slide2"
          name="slider"
          titulo="MyLibraries"
        />
        <input
          type="radio"
          className="radio-btn"
          id="Slide3"
          name="slider"
          titulo="ExploreGames"
        />
        <input
          type='radio'
          className='radio-btn'
          id='Slide4'
          name='slider'
          titulo='HowItWorks'
        />
        <div className='labels'>
          <label className='Slide' htmlFor='Slide1' id='Slide1'>
            <div className='content'>
              <h1>
                <strong />
                <SignIn />
              </h1>
            </div>
            <div className="icon">
              <span />
              <span />
            </div>
          </label>
          <label className='Slide' htmlFor='Slide2' id='Slide2'>
            <div className='content'>
              <h1 className='my-libraries-title'>MY LIBRARIES</h1>
              <p>
                <a href='./mylibraries'>take me there.</a>
              </p>
            </div>
          </label>
          <label className='Slide' htmlFor='Slide3' id='Slide3'>
            <div className='content'>
              <h1 className='explore-games-title'>EXPLORE GAMES</h1>
              <p>
                <a href='./exploregames'>take me there.</a>
              </p>
            </div>
          </label>
          <label className='Slide' htmlFor='Slide4' id='Slide4'>
            <div className='content'>
              <h1 className='how-it-works-title'>HOW IT WORKS</h1>
              <div className='row'>
                <div className='col s12 m6 l6'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='card-title'>My Libraries</div>
                    </div>
                  </div>
                </div>
                <div className='col s12 m6 l6'>
                  <div className='card'>
                    <div className='card-content'>
                      <div className='card-title'>Explore Games</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Home
