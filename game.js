
var userInput =[];
var colorGenerated=[];
var randomColor;
var userSelectedColor;

var level=0;
var allowKeypress=1;


//start Game with a user input i.e  any keypress

$(document).keypress( function()
{   if(allowKeypress)
    {startGame();}
    allowKeypress=0;

});

// collecting data of user selected color 

$(".btn").click(function()
{    
    userSelectedColor=$(this).attr("id")
    console.log(`usr selected ${userSelectedColor}`);
    
    userInput.push(userSelectedColor);
    
    animation(userSelectedColor);
    playSounds(userSelectedColor);
    
    matchInput(userInput.length-1);
    
});


// function with uses random function to generate random color 

function startGame ()
{    
    userInput=[];
    let diceno = Math.trunc(Math.random()*4 +1);
    //conolse.log(diceno);
    
    randomColor= diceno===1 ?"green":diceno===2 ?"red" :diceno===3 ?"yellow" :"blue";
    //console.log(randomColor);
    playSounds(randomColor);
    animation(randomColor);
   
    colorGenerated.push(randomColor);

}

//function for matching user selected color pattern to  random generated color pattern

function matchInput( current )
{   
    //console.log(" match function getting called");
    //console.log(userInput,colorGenerated);
    
    if(userInput[current]==colorGenerated[current])
    {  if(userInput.length===colorGenerated.length)
        {
        level++; 
        $("#level-title").text(`Level  ${level}`);
        console.log(userInput,colorGenerated);
         
        setTimeout(function () {
            startGame();
          }, 1000);
        
        }
         
    }
    
    else if (userInput[current]!=colorGenerated[current])
    {
      endGame();
    }
}

//function for animating the clicked color 

function animation(randomClr)
{
    $(`.${randomClr}`).fadeOut(100).fadeIn(100).fadeOut(75).fadeIn(75);
}  

//function to play sound  

function playSounds(randomClrSound) 
{
    var audio=new Audio("sounds/" +randomClrSound +".mp3");
    audio.play();
}

// function responsible for end game screen and reseting varibles to default 

function endGame()
{
       
    level=0;
    userInput=[];  
    colorGenerated=[];
    allowKeypress=1;
    
    $("#level-title").text("Game Over  !  Press Any Key to Restart" );
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 1000);
             
}




