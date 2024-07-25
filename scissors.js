
console.log("first to five. fight")
    let humanScore = 0
    let computerScore = 0
    let roundsPlayed = 0
function getComputerChoice() {
        let randomner = Math.random()
             if (randomner >= 0.66) {
                    return "paper"
                }
            else if (randomner >= 0.33 && randomner < 0.66) {
                    return "scissors"
                }
            else if (randomner < 0.33) {
                    return "rock"
                } }
function playRound(humanChoice, computerChoice) {
        computerChoice = getComputerChoice()
        roundsPlayed++
        if(humanChoice === computerChoice) {
        document.getElementById("scoremessages").textContent=("tie! the score is " + `${humanScore}` + " - " + `${computerScore}`)
        }
        if ((humanChoice === "rock" && computerChoice === "scissors")||(humanChoice === "scissors" && computerChoice === "paper")||(humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++
        document.getElementById("scoremessages").textContent=("human wins, " + `${humanChoice}` + " beats " + `${computerChoice}` + ". score is " + `${humanScore}` + " - " + `${computerScore}`)
        }
        if ((humanChoice === "rock" && computerChoice === "paper")||(humanChoice === "scissors" && computerChoice === "rock")||(humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++
        document.getElementById("scoremessages").textContent=("computer wins, your " + `${humanChoice}` + " loses to " + `${computerChoice}` + ". score is " + `${humanScore}` + " - " + `${computerScore}`)
        }
if ((humanScore == 5)||(computerScore == 5)) {
    if (humanScore == 5) {
    document.getElementById("winnermessage").textContent="human won. good job cavemen. rounds played: " + `${roundsPlayed}`;
    }
    if (computerScore == 5) {
    document.getElementById("winnermessage").textContent="computer won. great job machine. rounds played: " + `${roundsPlayed}`;
    }
 }}



const buttons = document.querySelectorAll('button') 

   
for (let i = 0, lengthtrue = buttons.length; i < lengthtrue; i++) {
buttons[i].addEventListener("click", () => {  
    if (buttons[i].id) {
        playRound(buttons[i].id)
    }})};
