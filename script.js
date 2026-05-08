const result = document.querySelector('.result');
const myScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let scorePlayer = 0;
let scoreMachine = 0;

const playHuman = (choiceHuman) => {
    console.log(choiceHuman);

    playGame(choiceHuman, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber];
}


const playGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!";
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'rock' && machine === 'scissors')) {
        scorePlayer ++;
        myScore.innerHTML = scorePlayer;
        result.innerHTML = "Você ganhou!";
    } else {
        scoreMachine++;
        machineScore.innerHTML = scoreMachine;
        result.innerHTML = "A maquina ganhou!";
    }
}