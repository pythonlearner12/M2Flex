const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;
const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;

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

function draw()
{
    clearCanvas();
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle  = "#004400";
        //we gebruiken hier de x en y van het rectangle object
        // vul bij de ??? ook de h & w in, net als bij de x en y gedaan is!
        g.fillRect(pos.x, pos.y, pos.h, pos.w);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
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

createBoardPositions()
draw()
