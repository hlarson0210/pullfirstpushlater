import React from 'react'
import { Link } from 'react-router-dom'

let style = {
  height: '10em',
  display: 'block',
  overflowY: 'scroll',
  transform: 'translateY(0%)'
}

function SearchGames (props) {
  return (
    <div className='row'>
      <div className='left col s12'>
        <div className='card horizontal'>
          <div className='card-image'>
            <a
              href={props.officialsite}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='searchImage' alt='' src={props.image}></img>
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
                <Link
                  to='/addgames'
                  onClick={() => {
                    props.handleClick({
                      gameName: props.name,
                      minPlayers: props.minplayers,
                      maxPlayers: props.maxplayers,
                      minPlaytime: props.minplaytime,
                      maxPlaytime: props.maxplaytime,
                      minAge: props.minage,
                      rating: props.rating,
                      rules: props.rules,
                      image: props.image,
                      complexity: ''
                    })
                  }}
                >
                  <h6>Add to library</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchGames
