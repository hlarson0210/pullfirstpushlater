import React from 'react'
let style = {
  height: '10em',
  overflowY: 'scroll',
  transform: 'translateY(0%)'
}

let style2 = {
  margin: '2%'
}

function GameCard(props) {
    return (
        <div className="row">
            <div className="right col s12">
                <li className="collection-item hoverable" key={props.key}>
                    <div><a href={props.officialsite} target="_blank"><img className="left valign-wrapper" style={style2} src={props.image}></img></a></div> 
                    <div>{props.name}</div> 
                    <div>Price: ${props.price} | Rating: {props.rating}</div>
                </li>

        {/* <div className="btn-large blue lighten-1">
                    <h6>Add to library</h6>
                </div> */}
      </div>
    </div>
  )
}


export default GameCard