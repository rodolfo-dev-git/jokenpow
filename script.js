const result = document.querySelector('.result');
const myScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

const title = document.querySelector('.title');

let scorePlayer = 0;
let scoreMachine = 0;

const part1 = document.querySelector('#first');
const part2 = document.querySelector('#second');
const part3 = document.querySelector('#third');

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (choiceHuman) => {
    // console.log(choiceHuman);

    result.innerHTML = "";
    animateTitle();

    // playGame(choiceHuman, playMachine());

    const machineChoice = playMachine();

    setTimeout(() => {
        playGame(choiceHuman, machineChoice);
    }, 900);
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


const playGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!";
    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS)) {
        scorePlayer++;
        myScore.innerHTML = scorePlayer;
        result.innerHTML = "Você ganhou!";
    } else {
        scoreMachine++;
        machineScore.innerHTML = scoreMachine;
        result.innerHTML = "A maquina ganhou!";
    }
}


const animateTitle = () => {
    // title.innerHTML = "Jo";

    // setTimeout(() => {
    //     title.innerHTML = "Joken";
    // }, 300);

    // setTimeout(() => {
    //     title.innerHTML = "JokenPô";
    // }, 600);


    part1.classList.add('animate', 'color1');

    setTimeout(() => {
        part1.classList.remove('animate');

        part2.classList.add('animate', 'color2');
    }, 300);

    setTimeout(() => {
        part2.classList.remove('animate');

        part3.classList.add('animate', 'color3');
    }, 600);

    setTimeout(() => {
        part3.classList.remove('animate');
        part1.classList.remove('color1');
        part2.classList.remove('color2');
        part3.classList.remove('color3');
    }, 900);
    
}


