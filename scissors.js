

console.log("first to three. fight")
function playGame() {
    let humanScore = 0
    let computerScore = 0
    let roundsPlayed = 0
    function getHumanChoice() {
        let choice = window.prompt("What's your move: rock, paper, or scissors?");
            if (choice == null) {
                return("none")
            }  
            else if (choice.toLowerCase() == "rock") {
                return("rock")
            }
            else if (choice.toLowerCase() == "scissors") {
                return("scissors")
            }
            else if (choice.toLowerCase() == "paper") {
                return("paper")
            }
            else {
                return("none")
            } }
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
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        roundsPlayed++
        if(humanChoice === computerChoice) {
            console.log ("tie! the score is " + `${humanScore}` + " - " + `${computerScore}`)
        }
        if ((humanChoice === "rock" && computerChoice === "scissors")||(humanChoice === "scissors" && computerChoice === "paper")||(humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++
            console.log("human wins, " + `${humanChoice}` + " beats " + `${computerChoice}` + ". score is " + `${humanScore}` + " - " + `${computerScore}`)
        }
        if ((humanChoice === "rock" && computerChoice === "paper")||(humanChoice === "scissors" && computerChoice === "rock")||(humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++
            console.log("computer wins, your " + `${humanChoice}` + " loses to " + `${computerChoice}` + ". score is " + `${humanScore}` + " - " + `${computerScore}`)
        }
        if (humanChoice === "none") {
            computerScore++
            console.log("computer wins because the human did not pick. this human has the same amount of brain mass as the computer. " + `${humanScore}` + " - " + `${computerScore}`)
        }}
do {
    playRound()
}  while ((humanScore < 3) && (computerScore < 3))
if ((humanScore = 3) || (computerScore = 3)) {
    console.log("game over! lasted " + `${roundsPlayed}` + " rounds. refresh to play again.")
    return
}

}
    playGame()