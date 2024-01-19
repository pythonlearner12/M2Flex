let boardPositionSize= 50;



let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

// Load an image
let img = new Image();
img.src = "snakes_ladders_trophy.png"; // Replace with the actual path to your image

// Draw the image when it's loaded
img.onload = function() {g.drawImage(img, 0, 45, canvas.width/1.37, canvas.height/1);};






class createRect{
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;

    }
}


function createBoardPositions()
{
    boardPositions = [];
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
}

function clearCanvas()
{
    g.fillStyle = "lightslategray";
    g.fillRect(0,0, canvas.width, canvas.height);
}


createBoardPositions()
draw()

//starts here
amount_of_players = [];
player_position_index = []
function submitText() {

    // Get the input value
    var amount = document.getElementById("textInput").value;
    amount_of_players.push(amount)
    for(let i = 0; i<amount_of_players; i++)
    {
        player_position_index.push(0)
    }
    console.log("player_position_index: ", player_position_index)



    // Displays the submitted text
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Submitted Text: " + amount;
}





players_turn = 0;
function dice_roll() {


    //inputs the rolled dice number to the website
    random_number = Math.floor(Math.random() * 5)+1;
    console.log(random_number);
    document.getElementById('output').innerHTML = 'you rolled: '+random_number;



    //moves active player to the right square then passes turn on to next player
    player_position_index[players_turn] += random_number
    give_and_draw_players_position()

    if (players_turn == amount_of_players - 1) {
        players_turn = 0
    } else {
        players_turn += 1
    }

}




function give_and_draw_players_position()
{
    clearCanvas()
    createBoardPositions()
    draw()
    



    //ladder squares
    if(true)
    {

        if(player_position_index[players_turn] == 5)
        {
            player_position_index[players_turn] = 13
        }

        if(player_position_index[players_turn] == 16)
        {
            player_position_index[players_turn] = 22
        }

        if(player_position_index[players_turn] == 26)
        {
            player_position_index[players_turn] = 32
        }

        if(player_position_index[players_turn] == 37)
        {
            player_position_index[players_turn] = 42
        }

    }


    //snake squares
    if(true)
    {
        if(player_position_index[players_turn] == 15)
        {
            player_position_index[players_turn] = 3
        }

        if(player_position_index[players_turn] == 28)
        {
            player_position_index[players_turn] = 9
        }

        if(player_position_index[players_turn] == 38)
        {
            player_position_index[players_turn] = 19
        }

        if(player_position_index[players_turn] == 44)
        {
            player_position_index[players_turn] = 33
        }
    }


    //rule: you must land excactly on square 50 or else you will be going backwards.
    if(player_position_index[players_turn] > 49)
    {
        player_position_index[players_turn] = 49-(player_position_index[players_turn]-49)
    }
    


    //count amount of players to then draw them
    for(let i = 0; i< amount_of_players; i++)
    {
        
        g.fillText("person "+String(i+1)+"", boardPositions[player_position_index[i]].x, boardPositions[player_position_index[i]].y);
    }
    
}













/*



*/