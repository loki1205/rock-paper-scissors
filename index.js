const chances = ["rock","paper","scissor"];
const rock = document.getElementById("user-rock");
const paper = document.getElementById("user-paper");
const scissor = document.getElementById("user-scissors");
let computerScore = Number(document.getElementById("c-score").textContent);
let userScore = Number(document.getElementById("u-score").textContent);
let result;
let user_choice;
let x;
rock.onclick = function(){
   user_choice="rock";
   x = Math.floor((Math.random() * 3));
   if (chances[x]=="rock")
   {
        result="draw";
   }
   else if (chances[x]=="paper")
   {
    result="lose";
   }
   else if (chances[x]=="scissor")
   {
    result="win";
   }
   updateGame(result);
   updateComputerEmojis();
   updateUserEmojis();
   updateGameMode();
}
paper.onclick = function(){
    user_choice="paper"
    x = Math.floor((Math.random() * 3));
    if (chances[x]=="rock")
    {
         result="win";
    }
    else if (chances[x]=="paper")
    {
     result="draw";
    }
    else if (chances[x]=="scissor")
    {
     result="lose";
    }
    updateGame(result);
    updateComputerEmojis();
    updateUserEmojis();
    updateGameMode();
}
scissor.onclick = function(){
    user_choice="scissor"
    x = Math.floor((Math.random() * 3));
    if (chances[x]=="rock")
    {
        result="lose";
    }
    else if (chances[x]=="paper")
    {
     result="win";
    }
    else if (chances[x]=="scissor")
    {
     result="draw";
    }
    updateGame(result);
    updateComputerEmojis();
    updateUserEmojis();
    updateGameMode();
}

function updateGame(result)
{
    if(result=="draw")
    {
        document.getElementById("c-score").classList.remove("win");
        document.getElementById("u-score").classList.remove("win");
        loseTone();
    }
    else if (result=="win")
    {
        userScore++;
        document.getElementById("u-score").classList.add("win");
        document.getElementById("c-score").classList.remove("win");
        winTone();
    }
    else if (result=="lose")
    {
        computerScore++;
        document.getElementById("c-score").classList.add("win");
        document.getElementById("u-score").classList.remove("win");
        loseTone();
    }
    document.getElementById("c-score").textContent = computerScore;
    document.getElementById("u-score").textContent = userScore;
    console.log(chances[x],result);
}

function updateComputerEmojis(){
        if (chances[x]=="paper")
        {
            document.getElementById("computer-current").textContent = "📃";
        }
        else if (chances[x]=="scissor")
        {
            document.getElementById("computer-current").textContent = "✂️";
        }
        else if (chances[x]=="rock")
        {
            document.getElementById("computer-current").textContent = "⛰️";
        }
}

function updateUserEmojis(){
    if (user_choice=="paper")
    {
        document.getElementById("user-current").textContent = "📃";
    }
    else if (user_choice=="scissor")
    {
        document.getElementById("user-current").textContent = "✂️";
    }
    else if (user_choice=="rock")
    {
        document.getElementById("user-current").textContent = "⛰️";
    }
}

function updateGameMode(){
    document.getElementById("choose").classList.add("hide");
    document.getElementById("reset").classList.remove("hide");
    document.getElementById("img").style.animation="none";
}

document.getElementById("reset").onclick = function(){
    document.getElementById("c-score").textContent = 0;
    document.getElementById("u-score").textContent = 0;
    document.getElementById("user-current").textContent = "";
    document.getElementById("computer-current").textContent = "";
    document.getElementById("choose").classList.remove("hide");
    document.getElementById("reset").classList.add("hide");
    document.getElementById("c-score").classList.remove("win");
    document.getElementById("u-score").classList.remove("win");
    document.getElementById("img").style.animation="animate 0.25s alternate-reverse infinite;";
};

function winTone(){
    var audio = new Audio("assets/correct-choice-43861.mp3")
    audio.play();
}

function loseTone(){
    var audio = new Audio("assets/wronganswer-37702.mp3")
    audio.play();
}