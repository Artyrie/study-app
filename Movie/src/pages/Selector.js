import React from 'react';
import { MovieSelector } from '../MovieSelect';
import { TheaterSelector } from '../TheaterSelect';

class Selector extends React.Component {
    render() {
        return (
            <div className="Selector">
                <div className="LeftSelector">
                    <TheaterSelector></TheaterSelector>
                    <MovieSelector></MovieSelector>
                </div>   
            </div>
        );
    }
}

export default Selector;