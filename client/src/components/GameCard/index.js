import React from "react";
let style = {
    "height": "10em",
    "display": "block",
    "overflow-y": "scroll",
    "transform": "translateY(0%)"
}

let style2 = {
    "margin": "2%"
}

function GameCard(props) {
    // return (
    //     <div className="row">
    //         <div className="right col s12">
    //             < div className="card horizontal hoverable" key={props.name}>
    //                 <div className="card-image valign-wrapper">
    //                     <a href={props.officialsite} target="_blank"><img src={props.image}></img></a>
    //                 </div>
    //                 <div className="card-stacked">
    //                     <div className="card-content">
    //                         <a href={props.officialsite} target="_blank"><h5 className="header">{props.name}</h5></a>
    //                         <p style={style}><h6>{props.description}</h6></p>
    //                     </div>
    //                     <div className="card-action">
    //                         <div>Price: ${props.price}</div>
    //                         {/* <div>Players: {props.minplayers}-{props.maxplayers}</div>
    //                         <div>Play Time: {props.minplaytime}-{props.maxplaytime}min</div>
    //                         <div>For ages {props.minage}+</div> */}
    //                         <div>Rating: {props.rating}</div>
    //                         <a href={props.officialsite} target="_blank">Buy it here</a>
    //                         {/* <a href={props.rules} target="_blank">Rules</a> */}
    //                         <div className="btn-large blue lighten-1">
    //                             <h6>Add to library</h6>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="row">
            <div className="right col s12">
                <li className="collection-item hoverable" key={props.name}>
                    <div><a href={props.officialsite} target="_blank"><img className="left valign-wrapper" style={style2} src={props.image}></img></a></div> 
                    <div>{props.name}</div> 
                    <div>Price: ${props.price} | Rating: {props.rating}</div>
                    <div><a href={props.officialsite} target="_blank">Buy here</a></div></li>

                {/* <div className="btn-large blue lighten-1">
                    <h6>Add to library</h6>
                </div> */}
            </div>
        </div>
    );
}


export default GameCard;