let humanScore =0, computerScore =0;
function playGame(){ //GOTTTA ARRANGE STUFF PROPERLY IN THIS
    function getComputerChoice(){   //code to get computer's choice
        let num=Math.floor(Math.random() * 3);
        let C_choice = "";
        if(num==0){
            C_choice = "rock";
        }
        else if(num==1){
            C_choice = "scissors";
        }
        else{ 
            C_choice = "paper";
        }
        console.log("Computer chose", C_choice);
        return C_choice;
    }
    
    function getHumanChoice(){
        let CHOICE;
        while (true) {
            CHOICE = prompt("Enter rock, paper, or scissors:");
            if (!CHOICE) continue;
            CHOICE = CHOICE.toLowerCase();
            if (CHOICE === "rock" || CHOICE === "paper" || CHOICE === "scissors") {
                console.log("You chose", CHOICE);
                return CHOICE;
            } else {
                alert("Invalid input! Please enter rock, paper, or scissors.");
            }
        }
    }
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            console.log("TIE!!")
        }
        else if(humanChoice == "rock" && computerChoice=="scissors"){
            console.log("PLAYER WINS!!")
            humanScore++;
        }
        else if(humanChoice == "scissors" && computerChoice=="paper"){
            console.log("PLAYER WINS!!")
            humanScore++;
        }
        else if(humanChoice == "paper" && computerChoice=="rock"){
            console.log("PLAYER WINS!!")
            humanScore++;
        }
        else if(humanChoice == "paper" && computerChoice=="scissors"){
            console.log("COMPUTER WINS!!")
            computerScore++;
        }
        else if(humanChoice == "rock" && computerChoice=="paper"){
            console.log("COMPUTER WINS!!")
            computerScore++;
        }
        else if(humanChoice == "scissors" && computerChoice=="rock"){
            console.log("COMPUTER WINS!!")
            computerScore++;
        }
    }   
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`Your current score is ${humanScore} Computer's score is ${computerScore}`)
}
let i=1;
while(humanScore < 3 && computerScore < 3){
    console.log(`Round ${i}`)
    playGame();
    console.log("----------------------------");
    i++;
}
console.log(`Final Score → You: ${humanScore}, Computer: ${computerScore}`);

if (humanScore === 3) {
    console.log("🎉 Player Wins the BEST OF 3 MATCH!");
} else {
    console.log("💻 Computer Wins the BEST OF 3 MATCH!");
}
