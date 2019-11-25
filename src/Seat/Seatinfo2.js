// row by col 만큼 ava 좌석 어레이 생성
function seatMaker(row, col) {
    var Seats2 = [];
    for (var i=0; i<row; i++) {
        for (var j=0; j<col; j++) {
            Seats2.push({
                Row: i+1,
                Col: j+1,
                Bookings: 'ava'
            });
        } 
    }
    return Seats2;
}

// row, col 인 좌석을 nul로 변경
// colnum = col 개수, Seatset = 어레이
function seatNull(row, col, colnum, Seatset) {
    var index = colnum * (row - 1) + col - 1;
    Seatset[index].Bookings = 'nul';
    return Seatset;
}

// row, col 인 좌석을 dis로 변경
function seatDis(row, col, colnum, Seatset) {
    var index = colnum * (row - 1) + col - 1;
    Seatset[index].Bookings = 'dis';
    return Seatset;
}

// row, col 부터 num개 까지 nul로 변경
function seatNulls(row, col, num, colnum, Seatset) {
    var index = colnum * (row - 1) + col - 1;
    for (var i=index; i < index+num; i++) {
        Seatset[i].Bookings = 'nul';
    }
    return Seatset;
}

// row, col 부터 num개 까지 dis로 변경
function seatDiss(row, col, num, colnum, Seatset) {
    var index = colnum * (row - 1) + col - 1;
    for (var i=index; i < index+num; i++) {
        Seatset[i].Bookings = 'dis';
    }
    return Seatset;
}

var Seats22 = seatMaker(10,10);
for (var i=0; i<10; i++) {
    Seats22 = seatNull(i+1,3,10,Seats22);
    Seats22 = seatNull(i+1,8,10,Seats22);
}
Seats22 = seatNulls(4,3,8,10,Seats22);
Seats22 = seatNulls(7,3,5,10, Seats22);
Seats22 = seatNull(8,7,10, Seats22);
Seats22 = seatNull(9,7,10, Seats22);
Seats22 = seatNull(10,7,10, Seats22);
Seats22 = seatDis(4,1,10,Seats22);
Seats22 = seatDis(4,2,10,Seats22);
Seats22 = seatDis(5,4,10,Seats22);
Seats22 = seatDis(5,5,10,Seats22);
Seats22 = seatDis(6,4,10,Seats22);
Seats22 = seatDis(6,5,10,Seats22);

export const Seats2 = Seats22;

