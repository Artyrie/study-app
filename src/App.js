import React from 'react';

function Movie(props) {
  return <div className="MovieCom">
    <h2>Movie name : {props.name}</h2>
  <img src={props.img} width="500px"></img>
  </div>
}

const Moviename = [
  {
    name: "flower",
    image: "https://i.imgur.com/XroHcwe.jpg"
  },
  {
    name: "dark nebula",
    image: "https://i.imgur.com/fMGVpco.jpg"
  },
  {
    name: "Crystalized amino",
    image: "https://i.imgur.com/yRlkwEc.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {Moviename.map(current =>
      <Movie name={current.name} img={current.image}></Movie>
      )}
      {/* current is each items.*/}
    </div>
  );
}

export default App;
