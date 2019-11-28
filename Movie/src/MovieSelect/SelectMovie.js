import React from 'react';
import './SelectMovie.css';
import PropTypes from 'prop-types';
import { MovieSet } from './SampleSet';

class SelectMovie extends React.Component {
    constructor(props) {
        super(props);

        this.cancelSelectMovie = this.props.onCancelSelectMovie.bind(this);
        this.selectAll = this.props.onSelectAll.bind(this);
        this.chooseMovie = this.props.onChooseMovie.bind(this);
        this.confirmMovie = this.props.onConfirmMovie.bind(this);
        this.tmpSelected = this.props.tmpSelected;
    }

    cancelSelectMovie() {
        this.props.onHandleClick();
    }

    chooseMovie(index) {
        this.props.onChooseMovie(index);
    }

    selectAll() {
        this.props.onSelectAll();
    }

    confirmMovie() {
        this.props.onConfirmMovie();
    }

    renderMovieSet(current) {
        if (this.tmpSelected.includes(current.index)) {
            return (
                <div className="SelectMovSet" key={current.index}>
                    <button onClick={this.chooseMovie.bind(this, current.index)} id="AlreadyMov">
                    <img src={current.img} alt={current.name} width="130px" height="190px" ></img>
                    <p><span className={'SelMov' + current.age}>{current.age}</span>{current.name}</p>
                    </button>
                </div>
            );
        } else {
            return (
                <div className="SelectMovSet" key={current.index}>
                    <button onClick={this.chooseMovie.bind(this, current.index)}>
                    <img src={current.img} alt={current.name} width="130px" height="190px" ></img>
                    <p><span className={'SelMov' + current.age}>{current.age}</span>{current.name}</p>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="SelectMovie">
                <div className="SelectMovNav">
                    <h2>모든 영화</h2>
                    <button id="SelMovCancel" onClick={this.cancelSelectMovie}>취소</button>
                    <button id="SelMov" onClick={this.confirmMovie}>확인</button>
                </div>
                <div><button id="SelMovAll" onClick={this.selectAll}>All</button></div>
                <div className="SelectMovContent">
                    {MovieSet.map(current => {
                        return (this.renderMovieSet(current))
                    })}
                </div>
            </div>
        );
    }
}

SelectMovie.propTypes = {
    onCancelSelectMovie: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onChooseMovie: PropTypes.func.isRequired,
    onConfirmMovie: PropTypes.func.isRequired,
    tmpSelected: PropTypes.array.isRequired
}

export default SelectMovie;