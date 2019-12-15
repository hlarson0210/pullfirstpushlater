import React from 'react';
import { Link } from 'react-router-dom';
import ls from 'local-storage';
import { AppContext } from "../../appContext";
import './style.css';

class SideNav extends React.Component {
  static contextType = AppContext;

  logout = event => {
    ls.remove("myGameLibrary_userToken");
    ls.remove("myGameLibrary_userFullName");
    this.props.history.history.push("/home");
  }

  render() {
    return (
      <header>
        <ul id='slide-out' className='sidenav blue lighten-1'>
          <li>
            <div className='user=view'>
              <a>
                <img
                  className='circle'
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='Stock Profile'
                />
              </a>
              <a>
                <span id="username" className='name white-text'>{ls.get("myGameLibrary_userFullName") ? ls.get("myGameLibrary_userFullName") : "Hi User"}</span>
              </a>
            </div>
          </li>
          <li>
            <div className='divider' />
          </li>
          <li className='nav-item'>
            <Link
              to='/home'
              className={
                window.location.pathname === '/' ||
                  window.location.pathname === '/home'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Home
          </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/mylibrary'
              className={
                window.location.pathname === '/mylibrary'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              My Library
          </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/exploregames'
              className={
                window.location.pathname === '/exploregames'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Explore Games
          </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/addgames'
              className={
                window.location.pathname === '/addgames'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Add Games
          </Link>
          </li>
          <li className='nav-item' onClick={this.logout}>
            <a class="nav-link">Log Out</a>
          </li>
        </ul>
        <a data-target='slide-out' className='sidenav-trigger'>
          <i className='material-icons small menu'>menu</i>
        </a>
      </header>
    )
  }
}

export default SideNav