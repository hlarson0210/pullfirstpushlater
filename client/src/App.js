import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import MyLibrary from './components/MyLibrary'
import ExploreGames from './components/ExploreGames'
import SideNav from './components/SideNav'
import AppContainer from './components/AppContainer'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <Router>
      <div>
        <SideNav />
        <AppContainer>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/MyLibrary' component={MyLibrary} />
          <Route exact path='/ExploreGames' component={ExploreGames} />
        </AppContainer>
        <Footer />
      </div>
    </Router>
  )
}

export default App
