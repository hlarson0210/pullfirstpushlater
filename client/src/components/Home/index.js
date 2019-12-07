import React from 'react'
// import './style.scss'
import './style.css'

function Home () {
  return (
    <div className='contenedor'>
      <form className='vert-nav-form'>
        <input
          type='radio'
          className='radio-btn'
          id='Slide1'
          name='slider'
          titulo='Home'
          autoFocus='autofocus'
        />
        <input
          type='radio'
          className='radio-btn'
          id='Slide2'
          name='slider'
          titulo='MyLibraries'
        />
        <input
          type='radio'
          className='radio-btn'
          id='Slide3'
          name='slider'
          titulo='ExploreGames'
        />
        <div className='labels'>
          <label className='Slide' htmlFor='Slide1' id='Slide1'>
            <div className='content'>
              <h1>
                <strong>GAME APP</strong>
              </h1>
            </div>
            <div className='icon'>
              <span />
              <span />
            </div>
          </label>
          <label className='Slide' htmlFor='Slide2' id='Slide2'>
            <div className='content'>
              <h1>MY GAME LIBRARIES</h1>
              <div className='block'>
                <span>
                  {' '}
                  <i className='fa fa-keyboard-o' />
                  <br />
                  <strong>No JS</strong>
                  <br />
                  CSS Rules!
                </span>
                <span>
                  {' '}
                  <i className='fa fa-keyboard-o' />
                  <br />
                  <strong>Keyboard navigation</strong>
                  <br />
                  Yep, no kidding
                </span>
                <span>
                  <i className='fa fa-bars' />
                  <br />
                  <strong>Lateral menu</strong>
                </span>
                <span>
                  <i className='fa fa-codepen' />
                  <br />
                  <strong>Autogenerate pages</strong>
                  <br />
                  Using Jade & SASS
                </span>
              </div>
            </div>
          </label>
          <label className='Slide' htmlFor='Slide3' id='Slide3'>
            <div className='content'>
              <h1>EXPLORE GAMES</h1>
              <div className='block'>
                <ol>
                  <li>
                    Add the pages title in the pageTitle array in the HTML
                    editor to generate pages
                  </li>
                  <li>
                    Add the number of pages in the $npages variable in the CSS
                    editor
                  </li>
                </ol>
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Home
