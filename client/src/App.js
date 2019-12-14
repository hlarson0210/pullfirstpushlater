import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import MyLibrary from './components/MyLibrary'
import ExploreGames from './components/ExploreGames'
import SideNav from './components/SideNav'
import AppContainer from './components/AppContainer'
import Footer from './components/Footer'
import './App.css'
import { AppContext } from "./appContext";


// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: this.update,
      token: ""
    };
  }

  update = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <div>
            <SideNav />
            <AppContainer>
              <Route exact path='/' component={Home} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/MyLibraries' component={MyLibrary} />
              <Route exact path='/ExploreGames' component={ExploreGames} />
            </AppContainer>
            <Footer />
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App
