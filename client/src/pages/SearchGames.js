import React from 'react'

let style = {
  height: '10em',
  display: 'block',
  overflowY: 'scroll',
  transform: 'translateY(0%)'
}

function SearchGames (props) {
  return (
    <div className='row'>
      <div className='left'>
        <div className='card horizontal'>
          <div className='card-image'>
            <a
              href={props.officialsite}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={props.image}></img>
            </a>
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              <a
                href={props.officialsite}
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4 className='header'>{props.name}</h4>
              </a>
              <p style={style}>{props.description}</p>
            </div>
            <div className='card-action'>
              <div>Price: ${props.price}</div>
              <div>
                Players: {props.minplayers}-{props.maxplayers}
              </div>
              <div>
                Play Time: {props.minplaytime}-{props.maxplaytime}min
              </div>
              <div>For ages {props.minage}+</div>
              <div>Rating: {props.rating}</div>
              <a
                href={props.officialsite}
                target='_blank'
                rel='noopener noreferrer'
              >
                Buy it here
              </a>
              <a href={props.rules} target='_blank' rel='noopener noreferrer'>
                Rules
              </a>
              <div className='btn-small blue lighten-1'>
                <h6>Add to library</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchGames
