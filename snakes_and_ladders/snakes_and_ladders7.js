let boardPositionSize= 50;



let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");








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



    // Display the submitted text
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Submitted Text: " + amount;
}



player1_position_index = 0;
player2_position_index = 0;
player3_position_index = 0;
player4_position_index = 0;


players_turn = 0;
function dice_roll() {



    random_number = Math.floor(Math.random() * 5)+1;
    console.log(random_number);
    document.getElementById('output').innerHTML = 'you rolled: '+random_number;


    console.log("players_turn: ",players_turn)
    console.log("amount_of_players: ",amount_of_players)

    for(let i = 0; i <amount_of_players; i++)
    {
        if(players_turn == i)
        {
            player_position_index[i]+=random_number
            draw_players_position()

            if(i == amount_of_players)
            {
                players_turn = 0
                let i = 0
                break
            }else
            {
                players_turn +=1
                let i = 0
                break
            }
        }
    }



    /*
    //player 1
    if(players_turn == 0)
    {

        player1_position_index+=random_number
        player_position_index[0]+=random_number
        
        draw_players_position()
        if(amount_of_players >1)
        {
            players_turn = 1;
            return;
        }

    }

    //player 2
    if(players_turn == 1)
    {

        player2_position_index+=random_number
        player_position_index[1]+=random_number

        draw_players_position()
        if(amount_of_players >2)
        {
            players_turn = 2;
            return;
        }
        else
        {
            players_turn = 0;
            return;
        }

    }

    //player 3
    if(players_turn == 2)
    {

        player3_position_index+=random_number
        player_position_index[2]+=random_number

        draw_players_position()
        if(amount_of_players >3)
        {
            players_turn = 3;
            return;
        }
        else
        {
            players_turn = 0;
            return;
        }

    }

    //player 4
    if(players_turn == 3)
    {

        player4_position_index+=random_number
        player_position_index[3]+=random_number

        draw_players_position()
        if(amount_of_players >4)
        {
            players_turn = 4;
            return;
        }
        else
        {
            players_turn = 0;
            return;
        }

    }*/




}
console.log("boardPositions.length: ", boardPositions.length)



function draw_players_position()
{
    clearCanvas()
    createBoardPositions()
    draw()
    console.log(random_number)


    //if(player1_position_index == 5){
    //    player1_position_index = 49
    //}


    //rule: you must land excactly on square 50 or else you will be going backwards.
    for(let i = 0; i < player_position_index.length; i++)
    {
        if(player_position_index[i] > 49){
            player_position_index[i] = 49-(player_position_index[i]-49)

        }
    }
    player1_position_index = player_position_index[0]
    player2_position_index = player_position_index[1]
    player3_position_index = player_position_index[2]
    player4_position_index = player_position_index[3]



    //count amount of players
    for(let i = 0; i< amount_of_players; i++)
    {
        
        g.fillText("person "+String(i+1)+"", boardPositions[player_position_index[i]].x, boardPositions[player_position_index[i]].y);
    }
    
}













/*



*/