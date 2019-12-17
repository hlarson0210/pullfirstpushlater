import React from 'react'

function LogoAnimation (props) {
  return (
    <div className='container center' id='logo-animate'>
      <div id='wrap'>
        <div className='cube'>
          <div className='front'>
            <h1 data-splitting='chars'>GAME</h1>
          </div>
          <div className='left'>
            <h1 data-splitting='chars'>HARD.</h1>
          </div>
          <div className='right'>
            <h1 data-splitting='chars'>GAME</h1>
          </div>
          <div className='back'>
            <h1 data-splitting='chars'>HARD.</h1>
          </div>
        </div>
        <div className='cube'>
          <div className='front'>
            <h1 data-splitting='chars'>GET</h1>
          </div>
          <div className='left'>
            <h1 data-splitting='chars'>BOARD.</h1>
          </div>
          <div className='right'>
            <h1 data-splitting='chars'>GET</h1>
          </div>
          <div className='back'>
            <h1 data-splitting='chars'>BOARD.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LogoAnimation
