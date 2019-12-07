import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'

function Home () {
  return (
    <main>
      <div class='slider'>
        <ul class='slides'>
          <li>
            <img
              src='https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/11/25/1416910214392/51b84e46-e586-4b72-a25c-2bf7703b5b66-2060x1236.jpeg'
              style={{ opacity: 0.3 }}
            />
            <div class='caption center-align'>
              <h1>FAST PLAY</h1>
              <h3 class='light grey-text text-lighten-3'>
                Find your board game fast.
              </h3>
            </div>
          </li>
          <li>
            <img src='https://lorempixel.com/580/250/nature/2' />
            <div class='caption left-align'>
              <h3>MY GAME LIBRARIES</h3>
              <h5 class='light grey-text text-lighten-3'>
                Create a searchable library of all your board game options.
              </h5>
            </div>
          </li>
          <li>
            <img src='https://lorempixel.com/580/250/nature/3' />
            <div class='caption right-align'>
              <h3>EXPLORE GAMES</h3>
              <h5 class='light grey-text text-lighten-3'>
                Find new games to purchase and add to your library.
              </h5>
            </div>
          </li>
          <li>
            <img src='https://lorempixel.com/580/250/nature/4' />
            <div class='caption center-align'>
              <h3>Life's short. Play fast.</h3>
            </div>
          </li>
        </ul>
      </div>
      <div className='container center instructions'>
        <br />
        <br />
        <h4>How it Works</h4>
        <i class='material-icons'>expand_more</i>
      </div>
    </main>
  )
}
export default Home

//  EFF THIS FOR NOW WE NEED MVP FOR TOMORROW AND THIS IS SHIT...reverting back to first slider concept for mvp presentation
/* import React from 'react'
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

export default Home */
