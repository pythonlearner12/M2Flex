const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;
const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;



let gameState = gamestate_start;
let ingameState = ingamestate_start;

let boardPositionSize= 50;
let pawnPositions = [];
let boardPositions=[];
let playerAmountButtons = [];



let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");
console.log(g)


class createRect{
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;

    }
}


var createBoard_f = [
    { x: 60, y: 550, w: 50, h: 50 },
    { x: 120, y: 550, w: 50, h: 50 },
    { x: 180, y: 550, w: 50, h: 50 },
    { x: 240, y: 550, w: 50, h: 50 },
    { x: 300, y: 550, w: 50, h: 50 },
    { x: 360, y: 550, w: 50, h: 50 },
    { x: 420, y: 550, w: 50, h: 50 },
    { x: 480, y: 550, w: 50, h: 50 },
    { x: 540, y: 550, w: 50, h: 50 },
    { x: 540, y: 490, w: 50, h: 50 },
    { x: 540, y: 430, w: 50, h: 50 },
    { x: 480, y: 430, w: 50, h: 50 },
    { x: 420, y: 430, w: 50, h: 50 },
    { x: 360, y: 430, w: 50, h: 50 },
    { x: 300, y: 430, w: 50, h: 50 },
    { x: 240, y: 430, w: 50, h: 50 },
    { x: 180, y: 430, w: 50, h: 50 },
    { x: 120, y: 430, w: 50, h: 50 },
    { x: 60, y: 430, w: 50, h: 50 },
    { x: 60, y: 370, w: 50, h: 50 },
    { x: 60, y: 310, w: 50, h: 50 },
    { x: 120, y: 310, w: 50, h: 50 },
    { x: 180, y: 310, w: 50, h: 50 },
    { x: 240, y: 310, w: 50, h: 50 },
    { x: 300, y: 310, w: 50, h: 50 },
    { x: 360, y: 310, w: 50, h: 50 },
    { x: 420, y: 310, w: 50, h: 50 },
    { x: 480, y: 310, w: 50, h: 50 },
    { x: 540, y: 310, w: 50, h: 50 },
    { x: 540, y: 250, w: 50, h: 50 },
    { x: 540, y: 190, w: 50, h: 50 },
    { x: 480, y: 190, w: 50, h: 50 },
    { x: 420, y: 190, w: 50, h: 50 },
    { x: 360, y: 190, w: 50, h: 50 },
    { x: 300, y: 190, w: 50, h: 50 },
    { x: 240, y: 190, w: 50, h: 50 },
    { x: 180, y: 190, w: 50, h: 50 },
    { x: 120, y: 190, w: 50, h: 50 },
    { x: 60, y: 190, w: 50, h: 50 },
    { x: 60, y: 130, w: 50, h: 50 },
    { x: 60, y: 70, w: 50, h: 50 },
    { x: 120, y: 70, w: 50, h: 50 },
    { x: 180, y: 70, w: 50, h: 50 },
    { x: 240, y: 70, w: 50, h: 50 },
    { x: 300, y: 70, w: 50, h: 50 },
    { x: 360, y: 70, w: 50, h: 50 },
    { x: 420, y: 70, w: 50, h: 50 },
    { x: 480, y: 70, w: 50, h: 50 },
    { x: 540, y: 70, w: 50, h: 50 },
    { x: 600, y: 70, w: 50, h: 50 }
];
function createBoardPositions_f()
{   boardPositions = []
    for(let i = 0; i<createBoard_f.length; i+=1)
    {
        boardPositions.push(new createRect(createBoard_f[i].x, createBoard_f[i].y, createBoard_f[i].w, createBoard_f[i].h));
        console.log(i)
    }
}


function draw()
{
    //clearCanvas();
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];


        //draw square
        g.fillStyle  = "#004400";
        g.fillRect(pos.x, pos.y, pos.h, pos.w);


        //draw number
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);

    }
}

function clearCanvas()
{
    g.fillStyle = "lightslategray";
    g.fillRect(0,0, canvas.width, canvas.height);
}


createBoardPositions_f()
draw()
var count = 0
function dice_roll() {
    clearCanvas()
    createBoardPositions_f()
    draw()
    let random_number = Math.floor(Math.random() * 5)+1;
    console.log(random_number);
    count+=random_number
    document.getElementById('output').innerHTML = 'you rolled: '+random_number;
    g.fillText("person 1",createBoard_f[count].x, createBoard_f[count].y);
}














/*



*/