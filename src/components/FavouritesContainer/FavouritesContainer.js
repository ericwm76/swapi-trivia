import React from 'react';
import './FavouritesContainer.scss';
import SideBar from '../SideBar/SideBar';
import Character from '../Character/Character';
import PropTypes from 'prop-types';

const FavouritesContainer = (props) => {
  const noFavsMsg = () => {
    if (props.favourites.length) {
      return props.favourites.map((character, i) => {
        return (
          <Character
          character={character}
          updateFavourites={props.updateFavourites}
          key={ i + character.name }
          /> 
        )
      })
    } else {
      return (
      <p className="no-fav-msg">Add some favourites!</p>
      )
    }
  }
    return (
      <section className='Favourites-container'>
        <SideBar />
        {noFavsMsg()}
      </section> 
    ) 
}

export default FavouritesContainer;

FavouritesContainer.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  rank: PropTypes.string,
  favourites: PropTypes.array,
  updateFavourites: PropTypes.func
}