import React from 'react';
import { MovieSelector } from '../MovieSelect';
import { TheaterSelector } from '../TheaterSelect';
import { TimeSelector } from '../TimeSelect';

class Selector extends React.Component {
    render() {
        return (
            <div className="Selector">
                <div className="LeftSelector">
                    <TimeSelector></TimeSelector>
                    <TheaterSelector></TheaterSelector>
                    <MovieSelector></MovieSelector>
                </div>   
            </div>
        );
    }
}

export default Selector;