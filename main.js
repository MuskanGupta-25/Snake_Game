//board
var blockSize = 25;
var rows = 25;
var cols = 25;
var board;
var context;

window.onload = function (){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    update();
}

function update(){
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height)
}