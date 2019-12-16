import React from 'react';
import GameCard from '../../pages/GameCard';
import SearchGames from '../../pages/SearchGames';
import bgaApiCall from '../../utils/bgaApiCall';
import { AppContext } from "../../appContext";
import './style.css';

class ExploreGames extends React.Component {
  static contextType = AppContext;
  constructor(props) {
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
    this.loadPopularGames();
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
      .catch(err => console.log(err))
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

    if (!this.state.searchGames) {
      alert(`Please enter the game you'd like to search`)
      return
    } else {
      this.queryGame()
    }
  }

  render() {
    const { error, isLoaded, popularGames, searchedGames } = this.state
    if (error) {
      return <div> Error: {error.message} </div>
    } else if (!isLoaded) {
      return (
        <div className='center'>
          {' '}
          <h1> Loading... </h1>
        </div>
      )
    } else {
      return (
        <main>
          <div className='row center' id='heading'>
            <h1 className='center'> Explore Games </h1>
            <div className='input-field col s10 m10 l10' id='search-bar'>
              <input
                id='nameOfGame'
                type='text'
                value={this.state.searchGames}
                placeholder='search games here...'
                name='searchGames'
                onChange={this.handleInputChange}
                className='validate'
              ></input>
            </div>
            <div className='col s2 m2 l2' id='search-button'>
              <button
                className='waves-effect waves-light btn-large searching blue lighten-1'
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </div>
          </div>
          <div className='container left'>
            <div className='row' id='search-games'>
              <div className='col s12 m12 l12'>
                {' '}
                {searchedGames.map((item, index) => (
                  <SearchGames
                    name={item.name}
                    key={index}
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
                    handleClick={this.context.update}
                  ></SearchGames>
                ))}{' '}
              </div>{' '}
            </div>{' '}
          </div>
          <div className='col s3 m3 l3' id='popular-games'>
            <div>
              {' '}
              <h4 className='center'> Popular Games </h4>
            </div>
            <ul className='collection'>
              {' '}
              {popularGames.map((item, index) => (
                <GameCard
                  name={item.name}
                  key={index}
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
                  image={item.images.thumb}
                  rules={item.rules_url}
                ></GameCard>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
        </main>
      )
    }
  }
}

export default ExploreGames
