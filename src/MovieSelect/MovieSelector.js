import React from 'react';
import './MovieSelector.css';

import SelectMovie from './SelectMovie';
import { MovieSet } from './SampleSet';

class MovieSelector extends React.Component {
    constructor() {
        super();

        this.state = {
            Selected : [],
            tmpSelected : [],
            modal: false
        };

        this.moveSelectMovie = this.moveSelectMovie.bind(this);
        this.cancelSelectMovie = this.cancelSelectMovie.bind(this);
        this.selectAllMovie = this.selectAllMovie.bind(this);
        this.chooseMovie = this.chooseMovie.bind(this);
        this.confirmMovie = this.confirmMovie.bind(this);
        this.cancelMovie = this.cancelMovie.bind(this);
    }

    moveSelectMovie() {
        this.setState({modal: true});
    }

    cancelSelectMovie() {
        var tmp = this.state;
        const tmplength = tmp.tmpSelected.length;
        for (var i=0; i<tmplength; i++) {
            if (tmp.Selected.includes(tmp.tmpSelected[i]) === false) {
                var j = tmp.tmpSelected.indexOf(tmp.tmpSelected[i]);
                tmp.tmpSelected.splice(j,1);
            }
        }
        tmp.modal = false;
        this.setState({tmp});
    }

    selectAllMovie() {
        var tmp = this.state;
        const sellength = tmp.Selected.length;
        const tmplength = tmp.tmpSelected.length; 
        for (var i=0; i<sellength; i++) {
            tmp.Selected.pop();
        }
        for (i=0; i<tmplength; i++) {
            tmp.tmpSelected.pop();
        }
        tmp.modal = false;
        this.setState({tmp});
    }

    chooseMovie(index) {
        var tmp = this.state;
        if (tmp.tmpSelected.includes(index)) {
            var i = tmp.tmpSelected.indexOf(index);
            tmp.tmpSelected.splice(i,1);
        } else if (tmp.tmpSelected.length < 4) {
            tmp.tmpSelected.push(index);
        } else {
            alert("4개까지 선택 가능합니다.");
        }
        this.setState(tmp);
    }

    confirmMovie() {
        var tmp = [];
        for (var i=0; i<this.state.tmpSelected.length; i++) {
            tmp.push(this.state.tmpSelected[i]);
        }
        this.setState({Selected: tmp, modal: false});
    }

    cancelMovie(index) {
        var tmp = this.state;
        const tmpindex = tmp.Selected.indexOf(index);
        tmp.Selected.splice(tmpindex,1);
        const tmpindex2 = tmp.tmpSelected.indexOf(index);
        tmp.tmpSelected.splice(tmpindex2,1);
        this.setState({tmp});
    }

    makingSelectedMovie(current) {
        var index = 10 * (current.Row - 1) + current.Col - 1;
        return (
            <div key={current} className="ConfirmImg">
            <button onClick={this.cancelMovie.bind(this, index)}>X</button>
            <img src={MovieSet[current-1].img} alt={MovieSet[current-1].name} width="95px" height="140px" ></img>
            </div>
        );
    }

    renderSelectedMovie() {
        if (this.state.Selected.length === 0) {
            return (
                <div className="MovieSelector">
                    <div className="MovieSelNav">
                        <h2>영화</h2>
                        <button onClick={this.selectAllMovie}></button>
                    </div>
                    <div className="MovieSelContent">
                        <div className="SelectedMovie">
                            <h1>모든영화</h1>
                        </div>
                        <button id="MoveSelectMovie"
                        onClick={this.moveSelectMovie.bind(this)}>영화선택 > </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="MovieSelector">
                    <div className="MovieSelNav">
                        <h2>영화</h2>
                        <button onClick={this.selectAllMovie}></button>
                    </div>
                    <div className="MovieSelContent">
                        <div className="ConfirmedMovie">
                            {this.state.Selected.map(current => {
                                return (this.makingSelectedMovie(current));
                            })}
                        </div>
                        <button id="MoveSelectMovie"
                            onClick={this.moveSelectMovie.bind(this)}>영화선택 > </button>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderSelectedMovie()}
                <div className="modalMov" style={{display: this.state.modal ? 'block': 'none'}}>
                    <SelectMovie
                    Modal={this.state.modal}
                    onCancelSelectMovie={this.cancelSelectMovie}
                    onSelectAll={this.selectAllMovie}
                    onChooseMovie={this.chooseMovie}
                    onConfirmMovie={this.confirmMovie}
                    tmpSelected={this.state.tmpSelected}
                    Selected={this.state.Selected}></SelectMovie>
                </div>
            </div>
        );
    }
}

export default MovieSelector;