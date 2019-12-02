import React from 'react';
import PropTypes from 'prop-types';

class DateSlide extends React.Component {
    constructor(props) {
        super(props);

        this.selectDate = this.props.onSelectDate.bind(this);

        this.state = {
            selected: 0,
            clicked: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({selected: nextProps.selected, clicked: nextProps.clicked});
    }

    selectDate(index) {
        this.props.onSelectDate(index);
    }

    makingDateString(year, month, date) {
        var weekend = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
        var day = new Date(year,month,date);
        var week = day.getDay();
        week = weekend[week];
        var DateString = String(month) + "/" + String(date) + week;
        return DateString;
    }

    makingDateZone(year, month, today) {
        var arr = [];

        for (var i=0; i<30; i++) {
            var date = new Date(year, month, today+i);
            var year2 = date.getFullYear();
            var month2 = date.getMonth()+1;
            var today2 = date.getDate();
            var DateString = this.makingDateString(year2, month2, today2);
            arr.push(DateString);
        }
        return arr;
    }

    makingDateSet() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var today = date.getDate();
        var days = this.makingDateZone(year, month, today);

        return days;
    }

    renderSlide(num) {
        var days = this.makingDateSet();
        if (num === this.state.clicked) {
            return <button className="LocalDate" key={num} style={{backgroundColor: 'rgb(48,156,166)'}}
            onClick={this.selectDate.bind(this, num)}>{days[num]}</button>
        } else {
            return <button className="LocalDate" key={num}
            onClick={this.selectDate.bind(this, num)}>{days[num]}</button>
        }
    }

    renderDatebar() {
        var days = this.makingDateSet();
        var index = [0,1,2,3,4];
        return (
            <div className="DateSlide">
                <button className="MoveDate"
                onClick={this.selectDate.bind(this, this.state.selected-1)}>◀</button>
                {/*<button className="LocalDate"
                onClick={this.selectDate.bind(this, this.state.selected)}>{days[this.state.selected]}</button>
                <button className="LocalDate"
                onClick={this.selectDate.bind(this, this.state.selected+1)}>{days[this.state.selected+1]}</button>
                <button className="LocalDate"
                onClick={this.selectDate.bind(this, this.state.selected+2)}>{days[this.state.selected+2]}</button>
                <button className="LocalDate"
                onClick={this.selectDate.bind(this, this.state.selected+3)}>{days[this.state.selected+3]}</button>
                <button className="LocalDate"
                onClick={this.selectDate.bind(this, this.state.selected+4)}>{days[this.state.selected+4]}</button>*/}
                {index.map(current => {
                    return this.renderSlide(current+this.state.selected);
                })}
                <button className="MoveDate"
                onClick={this.selectDate.bind(this, this.state.selected+1)}>▶</button>
            </div>
        );
    }

    render() {
        return (
            this.renderDatebar()
        )
    }
}

DateSlide.propTypes = {
    selected: PropTypes.number.isRequired,
    onSelectDate: PropTypes.func.isRequired
}

export default DateSlide;