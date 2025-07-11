function playGame(){ //GOTTTA ARRANGE STUFF PROPERLY IN THIS
    console.log("Hello world")
    function getComputerChoice(){   //code to get computer's choice
        let num=Math.floor(Math.random() * 3);
        if(num==0){
            return "rock";
        }
        else if(num==1){
            return "scissor";
        }
        else return "paper";
    }

    function getHumanChoice(){
        let CHOICE= prompt("Enter your choice for rps ");
        let choice = CHOICE.toLowerCase();
        return choice;
    }


    let humanScore =0, computerScore =0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock" && computerChoice=="scissor"){
            console.log("PLAYER WINS!!")
            return humanScore; //gotta experiment with returning and incrementing the scores
        }
        if(humanChoice == "scissor" && computerChoice=="paper"){
            console.log("PLAYER WINS!!")
            return humanScore;
        }
        if(humanChoice == "paper" && computerChoice=="rock"){
            console.log("PLAYER WINS!!")
            return humanScore;
        }
        if(humanChoice == "rock" && computerChoice=="scissor"){
            console.log("COMPUTER WINS!!")
            return computerScore;
        }
        if(humanChoice == "rock" && computerChoice=="paper"){
            console.log("COMPUTER WINS!!")
            return computerScore;
        }
        if(humanChoice == "scissor" && computerChoice=="rock"){
            console.log("COMPUTER WINS!!")
            return computerScore;
        }
        if(humanChoice == computerChoice){
            console.log("TIE!!")
        }
    }
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        for(var i=1; i<5;i++){
            playRound(humanSelection,computerSelection);
        }
        console.log(huma)
    }

playGame();