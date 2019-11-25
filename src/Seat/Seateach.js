import React from 'react';
import PropTypes from 'prop-types';

class Seateach extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(row, col) {
        this.props.onhandleClick(row,col);
    }
    
    buttonMaiking() {
        if (this.props.Seat.Bookings === 'ava') {
            return (
                <button className="Available"
                onClick={this.handleClick.bind(this, this.props.Row, this.props.Col)}>
                    {this.props.Seat.Row}C{this.props.Seat.Col}
                </button>
            )
        } else if (this.props.Seat.Bookings === 'sel') {
            return (
                <button className="Selected"
                onClick={this.handleClick.bind(this, this.props.Row, this.props.Col)}>
                    {this.props.Seat.Row}C{this.props.Seat.Col}
                </button>
            )
        } else if (this.props.Seat.Bookings === 'dis') {
            return (
                <button className="Disable" disabled="disabled">
                    X
                </button>
            )    
        } else {
            return (
                <button className="Null" disabled="disabled">
                    null
                </button>
            )    
        }
    }

    render() {
        return (
            this.buttonMaiking()
        );
    }
}

Seateach.propTypes = {
    Seat: PropTypes.object.isRequired,
    Row: PropTypes.number.isRequired,
    Col: PropTypes.number.isRequired
};

export default Seateach;