/* User Interface discussion
Clicking on buttons
Using the keyboard
Image on screen
Mouse & Touch

*/


let userChoice;
// This is an array. It is accessed via an index?
let choices = ["rock", "paper", "scissors"];


console.log(Math.floor (Math.random()*3));

let cpu = (Math.floor (Math.random()*choices.length));
// let user = prompt("Choose Rock, Paper, or Scissors");
console.log("the computer chose"+cpu);

function userRock(){
    6 = "rock";
    playRps();
}
function userPaper(){
    userChoice = "paper";
    playRps();
}
function userScissors(){
    userChoice = "scissors"
    playRps();
}

// function userInput() {
//     console.log("the user has chosen rock")
// }

function playRps() {
    console.log("The computer chose...: " + choices[cpu]);
    if (cpu == 0) {
        // createImage();
        // now js will put a rock image in the html document
        console.log("computer chose rock...");
        const para = document.createElement("p");
        para.innerText = 'computer chose rock...';
        document.body.appendChild(para);
    }
    else if (cpu == 1) {
        console.log("computer has chosen paper");
        const para = document.createElement("p");
        para.innerText = 'computer chose paper';
        document.body.appendChild(para);
    }
    // you need two equals signs or else it won't run all the cpu options: just the first two
    else if (cpu == 2) {
        console.log("computer has chosen scissors");
        const para = document.createElement("p");
        para.innerText = 'computer chose scissors';
        document.body.appendChild(para);
    }
    // these are functions (i think) that will run when the user choses an input
    if(cpu== 0 && userChoice == paper){

    }
    if(cpu== 0 && userChoice == scissors){
        
    }
    if(cpu== 1 && userChoice == rock){
        
    }
    if(cpu== 1 && userChoice == scissors){
        
    }
    if(cpu== 2 && userChoice == rock){
        
    }
    if(cpu== 2 && userChoice == paper){
        
    }if(cpu== userChoice) {
        
    }
}
