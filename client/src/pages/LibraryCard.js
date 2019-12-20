import React from 'react'

function LibraryCard (props) {
  return (
    <div
      className='card col s4'
      style={{
        marginRight: '1%',
        marginLeft: '1%',
        width: '31%',
        maxHeight: '375px'
      }}
    >
      <div className='card-image waves-effect waves-block waves-light center'>
        <img
          className='activator'
          src={props.image}
          alt=''
          style={{
            padding: '0',
            width: '200px',
            height: '200px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundImage:
              'url("https://image.flaticon.com/icons/png/512/103/103226.png")',
            backgroundSize: '200px'
          }}
        ></img>
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {props.name}
          <i className='material-icons right'>more_vert</i>
        </span>
        <p>
          <a href={props.rules} target='_blank' rel='noopener noreferrer'>
            Link to Rules
          </a>
        </p>
      </div>
      <div className='card-reveal'>
        <div>
          <span className='card-title grey-text text-darken-4'>
            {props.name}
            <i className='material-icons right'>close</i>
          </span>
          <table>
            <tbody>
              <tr>
                <td>COMPLEXITY</td>
                <td>
                  <p className='libcardstats'>{props.complexity}</p>
                </td>
              </tr>
              <tr>
                <td>PLAYERS</td>
                <td>
                  <p className='libcardstats'>
                    {props.minPlayers} to {props.maxPlayers}
                  </p>
                </td>
              </tr>
              <tr>
                <td>PLAY TIME</td>
                <td>
                  <p className='libcardstats'>
                    {props.minPlaytime} to {props.maxPlaytime} minutes
                  </p>
                </td>
              </tr>
              <tr>
                <td>FOR AGES</td>
                <td>
                  <p className='libcardstats'> {props.minAge}+</p>
                </td>
              </tr>
              <tr>
                <td>RATING</td>
                <td>
                  {' '}
                  <p className='libcardstats'> {props.rating}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button
            onClick={() => props.onUpdate(props.id)}
            data-id={props.id}
            className='btn waves-effect waves-light blue-grey lighten-3 col s4'
            name='action'
            style={{ margin: '10% 15% 0 7%' }}
          >
            <i className='material-icons'>edit</i>
          </button>
          <button
            onClick={() => props.onDelete(props.id)}
            data-id={props.id}
            className='btn waves-effect waves-light blue-grey lighten-3 col s4'
            name='action'
            style={{ margin: '10% 0 0 0' }}
          >
            <i className='material-icons'>delete</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LibraryCard
