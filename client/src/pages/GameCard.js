import React from 'react'
let style = {
  marginRight: '8px'
}

<<<<<<< HEAD:client/src/components/GameCard/index.js
function GameCard(props) {
    return (
        <div className="row">
            <div className="right col s12">
                <li className="collection-item hoverable" key={props.key}>
                    <div><a href={props.officialsite} target="_blank"><img className="left valign-wrapper" style={style2} src={props.image}></img></a></div> 
                    <div>{props.name}</div> 
                    <div>Price: ${props.price} | Rating: {props.rating}</div>
                </li>
=======
function GameCard (props) {
  return (
    <div className='row'>
      <div className='right col s12'>
        <li className='collection-item hoverable popularGameLI'>
          <div>
            <a href={props.officialsite} target='_blank'>
              <img
                className='left valign-wrapper popularGameImg'
                style={style}
                src={props.image}
                alt=""
              ></img>
            </a>
          </div>
          <div>{props.name}</div>
          <div>
            Price: ${props.price} | Rating: {props.rating}
          </div>
          <div>
            <a href={props.officialsite} target='_blank'>
              Buy here
            </a>
          </div>
        </li>
>>>>>>> 0ef630eda7ea37373fa5351627297913646ed31e:client/src/pages/GameCard.js

        {/* <div className="btn-large blue lighten-1">
                    <h6>Add to library</h6>
                </div> */}
      </div>
    </div>
  )
}


export default GameCard