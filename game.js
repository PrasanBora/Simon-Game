
let userInput =[];
var randomColor;
var userSelectedColor;
var round;


function startGame ()
{
    console.log(keypress);
    let diceno = Math.trunc(Math.random()*3 +1);
    console.log(diceno);
    
    randomColor= diceno===1 ?"green":diceno===2 ?"red" :diceno===3 ?"yellow" :"blue";
    console.log(randomColor);
    
    playSounds(randomColor);
    animation(randomColor);
    
    
}


//function for animating the clicked color 
function animation(randomClr)
{
    $(`.${randomClr}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}  


//function to play sound  
function playSounds(randomClrSound) 
{
    var audio=new Audio("sounds/" +randomClrSound +".mp3");
    audio.play();
}

//startGame();

$(".btn").click(function()
{
    userSelectedColor=$(this).attr("id")
    console.log(userSelectedColor);
    userInput[round]=userSelectedColor;
    animation(userSelectedColor);
    playSounds(userSelectedColor);
});
$(document).keypress( startGame());