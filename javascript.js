console.log("Hello world")
function getComputerChoice(){
    let num=Math.floor(Math.random() * 3);
    if(num==0){
        return "rock";
    }
    else if(num==1){
        return "scissor";
    }
    else return "paper";
}

console.log(getComputerChoice());