import React from 'react'

function GameCard (props) {
  return (
    <div className='card-horizontial hoverable'>
      <div className='card-image'>
        <a href={props.officialsite} target='_blank'>
          <img className='left popularGameImg' src={props.image} alt=''></img>
        </a>
      </div>
      <div className='card-stacked'>
        <div className='card-content'>
          <div className='name'>{props.name}</div>
          <div className='price'>Price: ${props.price}</div>
          <div className='rating'>Rating: {props.rating}</div>
        </div>
        <div className='card-action'>
          <div className='buyhere'>
            <a href={props.officialsite} target='_blank'>
              Buy here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
