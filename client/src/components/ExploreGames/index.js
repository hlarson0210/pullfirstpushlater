import React from 'react'
import GameCard from '../../pages/GameCard'
import SearchGames from '../../pages/SearchGames'
import bgaApiCall from '../../utils/bgaApiCall'
import $ from 'jquery'
import M from 'materialize-css'
import { AppContext } from '../../appContext'
import './style.css'

class ExploreGames extends React.Component {
  static contextType = AppContext
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      popularGames: [],
      searchGames: '',
      searchedGames: [],
      randomGame: []
    }
  }

  componentDidMount () {
    M.Toast.dismissAll()
    this.loadPopularGames()
  }

  queryGame = () => {
    bgaApiCall
      .search(this.state.searchGames)
      .then(response => {
        this.setState({
          searchedGames: response,
          isLoaded: true,
          searchGames: ''
        })
      })
      .catch(err => alert(err.response.data))
  }

  loadPopularGames = () => {
    bgaApiCall
      .getPopularGames()
      .then(response => {
        this.setState({
          popularGames: response,
          isLoaded: true
        })
      })
      .catch(err =>
        this.setState({
          isLoaded: true,
          error: err
        })
      )
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value, name } = event.target

    // Updating the input's state
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    $('.clearFields').removeClass('valid')
    if (!this.state.searchGames) {
      alert(`Please enter the game you'd like to search`)
      return
    } else {
      this.queryGame()
    }
  }

  render () {
    const { error, isLoaded, popularGames, searchedGames } = this.state
    if (error) {
      return <div className='container error'> Error: {error.message} </div>
    } else if (!isLoaded) {
      return (
        <div className='loading'>
          {' '}
          <h1> Loading... </h1>
        </div>
      )
    } else {
      return (
        <div className='page-container'>
          <div className='row one'>
            <div className='col s12 m12 l12'>
              <h1 className='title'> Explore Games </h1>
              {/* begin explore games search bar */}
              <div className='input-field' id='search-bar'>
                <input
                  id='nameOfGame'
                  type='text'
                  value={this.state.searchGames}
                  placeholder='NAME A GAME...'
                  name='searchGames'
                  onChange={this.handleInputChange}
                  className='validate clearFields'
                ></input>
              </div>
              <div className='col s2 m2 l2' id='search-button'>
                <button
                  className='waves-effect waves-light btn-small searching #f44336 red'
                  onClick={this.handleFormSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className='row two'>
            {/* begin results row */}
            <div className='col s9 m9 l9' id='searchGames'>
              {' '}
              {searchedGames.map((item, index) => (
                <SearchGames
                  name={item.name}
                  key={`s+${index}`}
                  price={item.price}
                  rating={
                    item.average_user_rating
                      ? item.average_user_rating.toFixed(2)
                      : ''
                  }
                  minplaytime={item.min_playtime}
                  maxplaytime={item.max_playtime}
                  minage={item.min_age}
                  minplayers={item.min_players}
                  maxplayers={item.max_players}
                  officialsite={item.official_url}
                  description={item.description_preview}
                  image={item.images.medium}
                  rules={item.rules_url}
                  handleClick={this.context.update}
                ></SearchGames>
              ))}{' '}
            </div>{' '}
            {/* popular games column */}
            <div className='col s3 m3 l3' id='popular-games'>
              <ul className='collection'>
                <h4 className='sub-title'>Trending Games</h4>{' '}
                {popularGames.map((item, index) => (
                  <GameCard
                    name={item.name}
                    key={`p+${index}`}
                    price={item.price}
                    rating={
                      item.average_user_rating
                        ? item.average_user_rating.toFixed(2)
                        : ''
                    }
                    minplaytime={item.min_playtime}
                    maxplaytime={item.max_playtime}
                    minage={item.min_age}
                    minplayers={item.min_players}
                    maxplayers={item.max_players}
                    officialsite={item.official_url}
                    description={item.description_preview}
                    image={item.images.small}
                    rules={item.rules_url}
                  ></GameCard>
                ))}{' '}
              </ul>{' '}
            </div>{' '}
          </div>
        </div>
      )
    }
  }
}

export default ExploreGames
