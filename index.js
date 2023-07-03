
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
    $("h1").html("Level "+level);
    nextSequence();
    sarted=true;
}
});
$(".btn").on("click",function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animation(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});



function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").html("Level "+level);
    var num=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[num];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);

    

}

function animation(name){
    $("#"+name).addClass("pressed");
    setTimeout(function(){$("#"+name).removeClass("pressed"); },200);
   
}
function playsound(name){
    var sound=new Audio("./sounds/"+name+".mp3");
    sound.play();
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length)
        setTimeout(function(){nextSequence();},1000);
    }
    else{
        playsound("wrong");
        $("body").addClass("game-over");
        $("h1").html("Game Over, Press Any Key to Restart");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

