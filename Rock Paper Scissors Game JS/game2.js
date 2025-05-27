let myscore=0;
let botscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScore=document.querySelector("#my-score");
const compScore=document.querySelector("#bot-score");

const botChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    //by doing *3 it will generate number between 0-2 
    // math.random is used for generating random number between 0 and 1
    // and math.floor is used for generating whole numbers
    return options[randomIndex];
}

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#09355e";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    msg.style.border = "none";
    msg.style.borderRadius="1rem";
    msg.style.padding="0.5rem";
    if(userWin){
        myscore++;
        userScore.innerText=myscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        botscore++;
        compScore.innerText=botscore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const gameStart= (userChoice)=>{
    console.log(userChoice);
    const compChoice=botChoice();
    console.log(compChoice);

    if(userChoice===compChoice) {
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock") {
            userWin=compChoice==="paper" ? false: true;
        } else if (userChoice==="paper") {
            userWin=compChoice==="scissors" ? false: true;
        } else {
            userWin=compChoice==="rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        gameStart(userChoice);
    });
});