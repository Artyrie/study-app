import React from 'react';
import { createSecureContext } from 'tls';
import PropTypes from 'prop-types';

function Movie({name, image, rating}) {
  return <div className="MovieCom">
    <h2>Movie name : {name}</h2>
    <h3>{rating} / 5.0</h3>
  <img src={image} width="500px" alt={name}></img>
  </div>
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const Moviename = [
  {
    id: 1,
    name: "flower",
    image: "https://i.imgur.com/XroHcwe.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "dark nebula",
    image: "https://i.imgur.com/fMGVpco.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Crystalized amino",
    image: "https://i.imgur.com/yRlkwEc.jpg",
    rating: 4.9
  }
]


function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {Moviename.map(mov => (
      <Movie key={mov.id} name={mov.name} image={mov.image} rating={mov.rating}></Movie>
      ))}
    </div>
  );
}

export default App;
