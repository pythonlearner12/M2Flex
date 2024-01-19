let canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");


class Rect{   
    constructor(x, y, w, h)
    {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
}


let board_positions = [];
function calculates_board_positions()
{
    const board_position_size= 50;
    let x = 0;
    let y = canvas.height-board_position_size;
    const path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//goes right
        {
            x+=board_position_size+10
        }
        else if(path[i] == 3)//goes left
        {
            x-=board_position_size+10
        }
        else if(path[i] == 0)//goes up
        {
            y-=board_position_size+10
        }
        board_positions.push(new Rect(x,y,board_position_size,board_position_size));
    }
}


let player_position_index = [0, 0, 0, 0];
function draw(random_number)
{
    for(let i = 0; i < board_positions.length; i++)
    {
        //makes code more readable
        let pos = board_positions[i];


        //draws the square
        g.fillStyle  = "#004400";
        g.fillRect(pos.x, pos.y, pos.h, pos.w);


        //draws the number
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);




    }


    //draws the snakes, ladders and trophies
    const Snake_ladder_trophy_img = new Image();
    Snake_ladder_trophy_img.src = "img/snakes_ladders_trophy.png";
    Snake_ladder_trophy_img.onload = function() {g.drawImage(Snake_ladder_trophy_img, 0, 45, canvas.width/1.37, canvas.height/1);};


    //draws dice
    const dice_img = new Image();
    dice_img.src = "img/dice"+(random_number)+".png";
    dice_img.onload = function() {g.drawImage(dice_img, 0, 545, canvas.width/16, canvas.height/16);};


    //draws players postion
    //player_position_extra_ prevents overlap with other players when on the same tile
    let player_position_extra_x = [0, 25, 25, 0]
    let player_position_extra_y = [0, 0, 25, 25]
    for(let i = 0; i< amount_of_players; i++)
    {
        
        g.fillText("player "+(i+1)+"", board_positions[player_position_index[i]].x, board_positions[player_position_index[i]].y);

        let pawn_img = new Image();
        pawn_img.src = "img/pawn"+(i)+".png";
        
        pawn_img.onload = () => g.drawImage(
            pawn_img,
            board_positions[player_position_index[i]].x+player_position_extra_x[i],
            board_positions[player_position_index[i]].y+player_position_extra_y[i],
            canvas.width/30, canvas.height/30
        );

    }
    
}


calculates_board_positions()
draw()


function clear_canvas()
{
    g.fillStyle = "lightslategray";
    g.fillRect(0,0, canvas.width, canvas.height);
}


//why does this have to be a var?
var amount_of_players = [];
function submit_text() 
{
    //Fetches amount of players from website
    var amount = document.getElementById("textInput").value;
    amount_of_players.push(amount)
    
    
    // Displays the submitted text
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Submitted Text: " + amount;
}


let players_turn = 0;
function dice_roll() 
{
    //inputs the rolled dice number to the website
    let random_number = Math.floor(Math.random() * 6)+1;


    //prints random number on website
    document.getElementById('output').innerHTML = 'you rolled: '+random_number;
    

    calculates_players_position(random_number, players_turn)
    clear_canvas()
    draw(random_number)


    //passes turn on to next player
    if (players_turn == amount_of_players - 1) {
        players_turn = 0
    } else {
        players_turn += 1
    }
}


function calculates_players_position(random_number, players_turn)
{
    player_position_index[players_turn] += random_number

    
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

    if(player_position_index[players_turn] == 49){
        console.log("player number: "+(players_turn+1)+" has won")

    }
}
