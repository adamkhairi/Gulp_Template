const popRules = document.querySelector(".rules"),
    rules = document.getElementById("rules"),
    exit = document.getElementById("exit");
// ******  Show and hide popup of RULES ***********//
function popUp() {
    popRules.classList.toggle("rules-hide");
}
////////////////////////////////////////

const tools = document.getElementsByClassName("icon");
const section = document.getElementById("section");

const imgs = [
    "./src/img/icon-paper.svg",
    "./src/img/icon-scissors.svg",
    "./src/img/icon-rock.svg"
];
const classes = ["paper", "scissors", "rock"];
const user = document.querySelector(".user");
const cpu = document.querySelector(".cpu");
const rst = document.getElementById('rst');

let score = document.getElementById("score-global");
let result = document.getElementById('result');


///////////////////////
for (let i = 0; i < 3; i++) {
    tools[i].addEventListener("click", function () {
    
        // /////// USER /////
        section.style.display = "none";
        const child1 = document.createElement("img");
        child1.setAttribute("src", imgs[i]);
        user.appendChild(child1);
        user.classList.add("icon");
        user.classList.add(classes[i]);

        //////// CPU ////////
        let cpuChoise = cpuChois();
        const child2 = document.createElement("img");
        child2.setAttribute("src", imgs[cpuChoise]);
        cpu.appendChild(child2);
        cpu.classList.add("icon");
        cpu.classList.add(classes[cpuChoise]);

        ////////// get Winner choice //////

        let userChoice = i;
        winner(userChoice, cpuChoise);
        rst.addEventListener('click', function () {
            reset(child1, child2, userChoice, cpuChoise);
        })
    });
}
////////////// Random Choise of CPU /////////////
function cpuChois() {
    return Math.floor(Math.random() * 3);
}
function winner(a, b) {
    ////////// Show Reset_BTN ///////
    rst.style.display = 'block';
    let globScore = Number(score.textContent);

    if ((a == 2 && b == 1) || (a == 1 && b == 0) || (a == 0 && b == 2)) {

        result.textContent = "You Win";
        ////////// Incrementing User Score ////////
        globScore++;
        score.textContent = globScore

    } else if (a == b) {
        choices = document.getElementById("choices");
        result.textContent = "It's a draw";

    } else {
        globScore = globScore - 1;
        score.textContent = globScore

        result.textContent = "You Lose...!";
    }
}
function reset(child1, child2, userChoice, cpuChoise) {
    rst.style.display = 'none';
    section.style.display = "block";

    user.removeChild(child1);
    user.classList.remove("icon");
    user.classList.remove(classes[userChoice]);

    cpu.removeChild(child2);
    cpu.classList.remove("icon");
    cpu.classList.remove(classes[cpuChoise]);
    result.textContent = ""
}

// function winner(a, b) {
//     if (((a == 0) && (b == 1 || b == 3)) || ((a == 1) && (b == 2 || b == 4)) || ((a == 2) && (b == 0 || b == 3)) || ((a == 3) && (b == 1 || b == 4)) || ((a == 4) && (b == 2 || b == 0))) {
//         alert("win");
//     } else if (a == b) {
//         alert("draw")
//     } else {
//         alert("lose")
//     }
// }