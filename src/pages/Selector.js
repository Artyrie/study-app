import React from 'react';
import { MovieSelector } from '../MovieSelect';
import { TheaterSelector } from '../TheaterSelect';
import { DateSelector } from '../DateSelect';
import { TimeSelector } from '../TimeSelect';
import './Selector.css';

class Selector extends React.Component {
    render() {
        return (
            <div className="Selector">
                <div className="LeftSelector">
                    <DateSelector></DateSelector>
                    <TheaterSelector></TheaterSelector>
                    <MovieSelector></MovieSelector>
                </div>
                <div className="RightSelector">
                    <TimeSelector></TimeSelector>
                </div>
            </div>
        );
    }
}

export default Selector;