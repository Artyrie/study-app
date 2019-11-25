import React from 'react';

import { Seateach, Seatshow, Seats2, Seatsinit } from '../Seat';

import '../Seat/Seatbook.css'


class Seatbook extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.count = 0;

    this.state = {
      Seatinfo: []
    }
  }

  componentDidMount() {
    this.setState({Seatinfo: Seats2});
  }

  componentWillUnmount() {
    for (var i=0; i < Seats2.length; i++) {
      if(Seats2[i].Bookings === 'sel') {
        Seats2[i].Bookings = 'ava';
      }
    }
  }
  

  handleClick(row, col) {
    var tmp = this.state.Seatinfo;
    // colnum : 10 , Seatinfo2와 같게
    var index = 10 * (row - 1) + col - 1;
    if (tmp[index].Bookings === 'ava') {
      tmp[index].Bookings = 'sel'
      this.count += 1;
      return this.setState({Seatinfo: tmp});
    } else if (tmp[index].Bookings === 'sel') {
      tmp[index].Bookings = 'ava'
      this.count -= 1;
      return this.setState({Seatinfo: tmp});
    }
  }

  render() {
    return (
      <div className="Seatbooksum">
        <h1>인원 / 좌석 선택</h1>
        <div className="Seatbook">
          <div className="Seatselection">
            <h1>Screen</h1>
            {this.state.Seatinfo.map(current => {
              return (
                <Seateach key={10*(current.Row-1)+current.Col-1}
                onhandleClick={this.handleClick.bind(this, current.Row, current.Col)}
                Seat={current}
                Row={current.Row}
                Col={current.Col}/>
              )
            })}
          </div>
          <div className="Seatinformation">
            <h1>영화 이미지</h1>
            <ul>
              <li>영화관 이름 자리</li>
              <li>영화 시간 자리</li>
              <li>총 인원 : {this.count}</li>
            </ul>
            <Seatshow Seat={this.state.Seatinfo}/>
            <p>{this.count*9}.000 원</p>
            <button>이전</button>
            <button>다음</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Seatbook;
