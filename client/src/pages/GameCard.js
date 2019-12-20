import React from 'react'

function GameCard (props) {
  return (
    <div className='card-horizontial hoverable'>
      <div id='trend' className='row'>
        <div id='picture' className='col s6 m6 l6'>
          <div id='game-card-image' className='card-image'>
            <a
              href={props.officialsite}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='popularGameImg' src={props.image} alt=''></img>
            </a>
          </div>
        </div>
        <div id='info' className='col s6 m6 l6'>
          <div className='card-stacked'>
            <div id='gameCardContent' className='card-content'>
              <p className='name'>{props.name}</p>
              <p className='price'>Price: ${props.price}</p>
              <p className='rating'>Rating: {props.rating}</p>
            </div>
            <div id='gameCardAction' className='card-action'>
              <div className='buyhere'>
                <a
                  href={props.officialsite}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Buy here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
