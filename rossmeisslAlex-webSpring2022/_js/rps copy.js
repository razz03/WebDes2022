let user;
let choices = ["rock", "paper", "scissors"];
function userChoice(choice){
    user = choice;
    compare();
}

function randNum(things){
    return Math.floor(Math.random()* things.length);
}

function cpuChoice(){
    // computer has 3 choices, so we multiply the random number by 3
    return choices [randNum(choices)];
}
console.log (cpuChoice());

function userRock(){
    user = "rock";
}
function userPaper(){
    user = "paper";
}
function userScissors(){
    user = "scissors";
}

// console.log("the user choice is " +user);
// console.log("the randnum is " + randnum);
// console.log("the computer choice is " + cpu);

function getInputValue(){
    let user = document.getElementById("inputId").value;
    alert(user);
    return user;
}
function drawImg(pic, width, height, alt, id){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    // document.body.appendChild(x);
    document.getElementById(id).appendChild(x);
}
// I got this from javscripttutorial.net
// when i put this function in, none of the images appear. idk why
// function removeChild(id){
//     let identity = document.getElementById(id);
//     while (identity.firstChild){
//         identity.firstChild(identity.firstChild);
//     }
}

// when i click the buttons, all 3 images appear for player and computer. idk why
function compare(){
    let cpu = cpuChoice();
    // removeChild("Player");
    // removeChild("cpu");
    if (user == "rock"); {
        drawImg("_images/rock.png", "200", "200","rock", "player");
    }
    if (user == "paper"); {
        drawImg("_images/paper.jpg", "200", "200","paper", "player");
    }
    if (user == "scissors"); {
        drawImg("_images/scissors.jpg", "200", "200","scissors", "player");
    }
    if (cpu == "rock"); {
        drawImg("_images/rock.png", "200", "200","rock", "cpu");
    }
    if (cpu == "paper"); {
        drawImg("_images/paper.jpg", "200", "200","paper", "cpu");
    }
    if (cpu == "scissors"); {
        drawImg("_images/scissors.jpg", "200", "200","scissors", "cpu");
    }

    if ((user == "rock" && cpu == "scissors ") || 
        (user == "paper" && cpu == "rock") || 
        (user == "scissors" && cpu == "paper")){
            console.log("You win!");
    }
    if ((user == "rock" && cpu == "paper") || 
        (user == "paper" && cpu == "scissors") ||
        (user == "scissors" && cpu == "rock")){
            console.log ("Computer Wins");
    }
    else if (user == "rock" && cpu == "rock" ||
    user == "paper" && cpu == "paper" ||
    user == "scissors" && cpu == "scissors"){
    console.log ("You tie");
    }
    
}
function playRps(){
    console.log("The computer chose...: "  + choices[cpu]);
    if (cpu == 0 && userChoice == "scissors"){
        drawImg("_images/rock.jpg");
        console.log("computer wins...")
    }
    else if (cpu == 1 && userChoice == "scissors") {
        console.log("you win");
        drawImg("_images/paper.jpeg");
    }
    else if (cpu == 2 && userChoice == "scissors") {
        console.log("you tied");
    }
    else if (cpu == 0 && userChoice == "paper") {
        console.log("you win");
    }
    else if (cpu == 1 && userChoice == "paper") {
        console.log("you tied");
    }
    else if (cpu == 2 && userChoice == "paper") {
        console.log("you lost");
    }
}

console.log ("Thanks for playing!") 
// prompt user to play again?

