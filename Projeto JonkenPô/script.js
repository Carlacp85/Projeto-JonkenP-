const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

let playHuman = (humanChoice) => {
  playTheGame(humanChoice, playtMachine());
};

const playtMachine = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

let playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Máquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para a Alexa";
  }
};
