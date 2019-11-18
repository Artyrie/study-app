import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
    state = {
        isLoading: true, // When page mount, loading.
        movies: []
    };

    getMovies = async () => { //async says 'we want little times.'
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // await <- what you want to wait? (async 비동기)
        //this.setState({movies:movies})
        this.setState({movies,isLoading: false});
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return ( <section className = "container" >
            { isLoading ? (
                <div className="loader">
                    <span className="loader">Loading...</span>
                </div>
                ) : (
                    <div className="movies">
                    {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                    />
                ))}
                </div>
            )}
        {/*this.state.isLoading*/ }
        </section>
        );
    }
}

export default App;