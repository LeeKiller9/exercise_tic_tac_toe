let row = +(prompt("Enter Row Of Board:"));
let col = +(prompt("Enter Column Of Board:"));
let b = document.getElementById("result");
let arrayRow = [];
let board = [];
let data = "";
let turn = "x";

for (let i = 0; i < col; i++) {
    arrayRow[i] = "+";
}

for (let i = 0; i < row; i++) {//phai co dong lenh nay` de khoi tao array board 2 chieu
    board[i] = [];
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        board[i][j] = arrayRow[j];
        data += board[i][j] + "&nbsp;";
    }
    data += "<br/>";
}
b.innerHTML = data;


function displayBoard() {
    let X = +(prompt("Enter position row (turn " + turn + ")"));
    let Y = +(prompt("Enter position col (turn " + turn + ")"));
    data = "";

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === X && j === Y) {
                board[X][Y] = turn;
            }
            data += board[i][j] + "&nbsp";
        }
        data += "<br/>";
    }
    b.innerHTML = data;

    let win = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if ((board[i][j] === turn && board[i][j + 1] === turn && board[i][j + 2] === turn) ||
                (board[i][j] === turn && board[i + 1][j] === turn && board[i + 2][j] === turn) ||
                (board[i][j] === turn && board[i + 1][j + 1] === turn && board[i + 2][j + 2] === turn) ||
                (board[i][j] === turn && board[i + 1][j - 1] === turn && board[i + 2][j - 2] === turn)) {
                win = 1;
            }
        }
    }

    if (win === 1) {
        alert(turn + ' win');
        document.getElementById('display').disabled = true;
    }
    if (turn === "x") {
        turn = "o";
    } else {
        turn = "x";
    }
}

function resetBoard() {
    data = "";
    turn = "x";
    for (let i = 0; i < col; i++) {
        arrayRow[i] = "+";
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            board[i][j] = arrayRow[j];
            data += board[i][j] + "&nbsp;";
        }
        data += "<br/>";
    }
    b.innerHTML = data;
    document.getElementById('display').disabled = false;
}