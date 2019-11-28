import React from 'react';
import PropTypes from 'prop-types';

class Seatshow extends React.Component {

    render() {
        return (
            <div className="Seatshow">
                <ul>
                    {this.props.Seat.map(current => {
                        if (current.Bookings === 'sel') {
                            var index = 10 * (current.Row - 1) + current.Col - 1;
                            return (<li key={index}>{current.Row}C{current.Col}</li>)
                        }
                    })}
                </ul>
            </div>
        );
    }
}

Seatshow.propTypes = {
    Seat: PropTypes.array.isRequired
};

export default Seatshow;