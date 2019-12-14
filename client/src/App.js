import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import MyLibrary from './components/MyLibrary';
import ExploreGames from './components/ExploreGames';
import SideNav from './components/SideNav';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer';
import AddGames from './components/AddGames';
import { AppContext } from "./appContext";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: this.update,
    };
  }

  update = (newState) => {
    this.setState(newState);
  }

  render () {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <div>
            <Route render={(history) => 
              <SideNav history={history} />
            } />
            <AppContainer>
              <Route exact path='/' component={Home} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/MyLibrary' component={MyLibrary} />
              <Route exact path='/ExploreGames' component={ExploreGames} />
              <Route exact path='/addgames' component={AddGames} />
            </AppContainer>
            <Footer />
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App
