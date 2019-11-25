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
        
        this.tmpSelected = this.props.tmpSelected;
        /*
        this.showDropdown = this.showDropdown.bind(this);

        this.region = [];
        
        this.state = {
            showing: false
        };
        */
    }

    cancelSelectTheaterr() {
        this.props.onCancelSelectTheater();
    }

    confirmTheater() {
        this.props.onCancelSelectTheater();
    }

    
    chooseTheater(index) {
        this.props.onChooseTheater(index);
    }

    /*
    splitRegion() {
        for(var i=0; i<Theaterinfo.length; i++) {
            var tmp = Theaterinfo[i]
            if (!this.region.includes(tmp.region)) {
                this.region.push(tmp.region);
            }
        }
    }

    showDropdown() {
        if ( this.state.showing === false ) {
            this.setState({showing: true});
        } else {
            this.setState({showing: false});
        }
    }

    renderRegion(current) {
        var arr = [];
        for (var i=0; i<Theaterinfo.length; i++) {
            if ( Theaterinfo[i].region === current) {
                arr.push(Theaterinfo[i]);
            }
        }
        return (
            <div className="MainRegion">
                <button onClick={this.showDropdown}>{current}</button>
                <div className="SubRegion" key={Theaterinfo.indexOf(arr[0])}>
                    {arr.map(subregion => {
                        return(<button key={subregion.index}
                            style={{display: this.state.showing ? 'block': 'none'}}>{subregion.name}</button>)
                    })}
                </div>
            </div>
        )
    }
    */

    renderRegion(current) {
        if (this.tmpSelected.includes(current.index)) {
            return (
                <div className="SelectTheSet" key={current.index}>
                    <button onClick={this.chooseTheater.bind(this, current.index)} id="AlreadyThe">
                    <p>{current.name}</p>
                    {current.region}
                    </button>
                </div>
            );
        } else {
            return (
                <div className="SelectTheSet" key={current.index}>
                    <button onClick={this.chooseTheater.bind(this, current.index)}>
                    <p>{current.name}</p>
                    {current.region}
                    </button>
                </div>
            );
        }
    }

    render() {
        /*this.splitRegion();*/
        return (
            <div className="SelectTheater">
                <div className="SelectTheNav">
                    <h2>지역 별</h2>
                    <button id="SelTheCancel" onClick={this.cancelSelectTheater}>취소</button>
                    <button id="SelThe" onClick={this.confirmTheater}>확인</button>
                </div>
                <div className="SelectTheContent">
                    <div id="Theaterdummy"></div>
                    {/*
                    {this.region.map(current => {
                            return (this.renderRegion(current));
                    })}
                    */}
                    {Theaterinfo.map(current => {
                        return (this.renderRegion(current));
                    })}
                </div>
            </div>
        )
    }
}

SelectTheater.propTypes = {
    onCancelSelectTheater: PropTypes.func.isRequired,
    onConfirmTheater: PropTypes.func.isRequired
};

export default SelectTheater;