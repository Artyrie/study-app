import React from 'react';
import './SelectTheater.css';
import PropTypes from 'prop-types';
import { Theaterinfo } from './Theaterinfo';

class SelectTheater extends React.Component {
    constructor(props) {
        super(props);

        this.cancelSelectTheater = this.props.onCancelSelectTheater.bind(this);
        this.confirmTheater = this.props.onConfirmTheater.bind(this);
        this.chooseTheater = this.props.onChooseTheater.bind(this);
        this.showDropdown =this.props.onShowDropdown.bind(this);
        this.state = {
            dropdown: 'initial',
            tmpSelected: []
        }

        this.region = [];
    }

    cancelSelectTheaterr() {
        this.props.onCancelSelectTheater();
    }

    confirmTheater() {
        this.props.onCancelSelectTheater();
    }

    showDropdown(name) {
        this.props.onShowDropdown(name);
    }

    componentDidMount() {
        this.splitRegion();
        this.showDropdown(this.region[0]);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({dropdown: nextProps.Dropdown, tmpSelected: nextProps.tmpSelected });
    }
    
    splitRegion() {
        for(var i=0; i<Theaterinfo.length; i++) {
            var tmp = Theaterinfo[i]
            if (!this.region.includes(tmp.region)) {
                this.region.push(tmp.region);
            }
        }
    }

    subregionArray(name) {;
        var arr = [];
        for (var i=0; i<Theaterinfo.length; i++) {
            if ( Theaterinfo[i].region === name) {
                arr.push(Theaterinfo[i]);
            }
        }
        return arr;
    }

    renderDropdown(current) {
        var i = 0;
        var top = -(this.region.indexOf(current) * 35);
        if (current === this.state.dropdown) {
            var arr = this.subregionArray(current);
            return (
                <ul className="SubRegion" style={{top: top+'px'}}>
                    {arr.map(currents => {
                        i += 1;
                        if (this.state.tmpSelected.includes(currents.index)) {
                            return (<li key={current + i}><button
                            onClick={this.chooseTheater.bind(this, currents.index)}
                            style={{backgroundColor: 'rgb(224,224,224)'}}>{currents.name}</button></li>);
                        } else {
                            return (<li key={current + i}><button 
                                onClick={this.chooseTheater.bind(this, currents.index)}>{currents.name}</button></li>);
                        }
                    })}
                </ul>
            );
        }
    }

    renderRegion(current) {
        return (
            <li className="Mainregion" key={this.region.indexOf(current)}>
                <button onClick={this.showDropdown.bind(this, current)}>{current}</button>
                {this.renderDropdown(current)}
            </li>
        )
    }

    render() {
        return (
            <div className="SelectTheater">
                <div className="SelectTheNav">
                    <h2>지역 별</h2>
                    <button id="SelTheCancel" onClick={this.cancelSelectTheater}>취소</button>
                    <button id="SelThe" onClick={this.confirmTheater}>확인</button>
                </div>
                <div className="SelectTheContent">
                    <div id="Theaterdummy">
                        {this.state.tmpSelected.map(index => {
                            return (<button onClick={this.chooseTheater.bind(this,index)}
                                key={index-1}>{Theaterinfo[index-1].name}
                                <span id="cancelThe">X</span></button>);
                        })}
                    </div>
                    <ul>
                    {this.region.map(current => {
                            return (this.renderRegion(current));
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

SelectTheater.propTypes = {
    onCancelSelectTheater: PropTypes.func.isRequired,
    onConfirmTheater: PropTypes.func.isRequired,
    onChooseTheater: PropTypes.func.isRequired,
    onShowDropdown: PropTypes.func.isRequired,
    Dropdown: PropTypes.string.isRequired
};

export default SelectTheater;