


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
      //this.x2 = x+w;
      //this.y2 = y+h;

    }
  }



function clearCanvas()
{
    g.fillStyle = "lightslategray";
    g.fillRect(0,0, canvas.width, canvas.height);
}



function createBoardPositions()
{
    let x= 0;
    let y = canvas.height-boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//gaan naar rechts
        {
            //bedenk hier wat je met de x moet doen
            x+=boardPositionSize+10
        }
        else if(path[i] == 3)//gaan naar links
        {
            // bedenk hier wat je met de x moet doen
            x-=boardPositionSize+10
        }
        else if(path[i] == 0)//gaan hier naar boven
        {
            //bedenk hier wat je met de y moet doen
            y-=boardPositionSize+10
        }
        boardPositions.push(new createRect(x,y,boardPositionSize,boardPositionSize));
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
    g.fillText("person 1",60, 550);
}


createBoardPositions()
console.log(boardPositions)

draw()

function printMessage() {
    let random_number = Math.floor(Math.random() * 6)+1;
    console.log(random_number);
    document.getElementById('output').innerHTML = 'you rolled: '+random_number;
    //boardPositions[random_number]
    g.fillText("person 1",60, 550);
}
