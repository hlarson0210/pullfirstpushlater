import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

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
