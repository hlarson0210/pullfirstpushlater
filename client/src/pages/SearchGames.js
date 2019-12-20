import React from 'react'
import { Link } from 'react-router-dom'

let style = {
  backgroundColor: 'white',
  fontFamily: '"Open Sans", sans-serif',
  lineHeight: '1.5'
}

function SearchGames (props) {
  return (
    <div className='card horizontal'>
      <div id='searchCardImage' className='card-image'>
        <a href={props.officialsite} target='_blank' rel='noopener noreferrer'>
          <img className='searchImage' alt='' src={props.image}></img>
        </a>
      </div>
      <div className='card-stacked'>
        <div id='searchCardContent' className='card-content'>
          <a
            href={props.officialsite}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h4 className='header'>{props.name}</h4>
          </a>
          <ul className='collapsible'>
            <li>
              <div className='collapsible-header'>DESCRIPTION</div>
              <div className='collapsible-body active'>
                <span>
                  {' '}
                  <p style={style}>{props.description}</p>
                </span>
              </div>
            </li>
            <li>
              <div className='collapsible-header'>GAME STATS</div>
              <div className='collapsible-body'>
                <span>
                  <div id='stats' className='row'>
                    <table>
                      <tbody>
                        <tr>
                          <td>PRICE</td>
                          <td>${props.price}</td>
                        </tr>
                        <tr>
                          <td>PLAYERS</td>
                          <td>
                            {props.minplayers}-{props.maxplayers}
                          </td>
                        </tr>
                        <tr>
                          <td>PLAY TIME</td>
                          <td>
                            {props.minplaytime}-{props.maxplaytime}min
                          </td>
                        </tr>
                        <tr>
                          <td>FOR AGES</td>
                          <td>{props.minage}+</td>
                        </tr>
                        <tr>
                          <td>RATING</td>
                          <td>{props.rating}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div id='searchCardAction' className='card-action'>
          <a
            href={props.officialsite}
            target='_blank'
            rel='noopener noreferrer'
          >
            Buy it here
          </a>
          <a href={props.rules_url} target='_blank' rel='noopener noreferrer'>
            Rules
          </a>

          <div className='btn #f44336 red'>
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
                  rules: props.rules_url,
                  image: props.image,
                  complexity: ''
                })
              }}
            >
              <h6 className='add-to-library-button'>Add to library</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchGames
