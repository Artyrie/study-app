import React from 'react';
import './TimeSelector.css';
import TimeSlide from './TimeSlide';

class TimeSelector extends React.Component {
    render() {
        return (
            <div className="TimeSelector">
                <div className="TimeSelNav">
                    <h2>날짜</h2>
                    <button onClick={this.selectAllTheater}></button>
                </div>
                <div className="TimeSelContent">
                    <button>◀</button>
                    <TimeSlide></TimeSlide>
                    <button>▶</button>
                </div>
            </div>
        );
    }
}

export default TimeSelector;