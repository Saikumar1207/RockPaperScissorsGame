let userscore= 0;
let compscore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#messageid");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice = () => {
    let options = ["rock","paper","scissors"];
    const optionIDX = Math.floor(Math.random() * 3);
    return options[optionIDX];
}

const drawgame = () => {
    msg.innerText= "Game was Draw! Play Again";
    msg.style.backgroundColor= "#081b31";
}

const showwinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "Green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText= `You Lost! ${compChoice} beats your ${userChoice}`;        
        msg.style.backgroundColor= "Red";
    }
}


const playgames = (userChoice) =>{
    const compChoice = gencompchoice();

    if (userChoice === compChoice){
        drawgame();
    }

    else{
        let userwin = true;
        if (userChoice === "rock")
            userwin = compChoice === "paper" ? false : true;
        else if (userChoice === "paper")
            userwin = compChoice === "scissors" ? false : true;
        else{
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgames(userChoice);
    });
});