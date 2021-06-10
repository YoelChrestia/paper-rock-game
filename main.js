const $rules = document.getElementById('rules');
const $dark = document.getElementById('dark');
const $cruz = document.getElementById('cruz');
const $cruz__desktop = document.getElementById('cruz__desktop');
const $paper = document.getElementById('paper');
const $scissors = document.getElementById('scissors');
const $rock = document.getElementById('rock');
const $paper_bonus = document.getElementById('paper_bonus');
const $scissors_bonus = document.getElementById('scissors_bonus');
const $rock_bonus = document.getElementById('rock_bonus');
const $spock = document.getElementById('spock');
const $lizard = document.getElementById('lizard');
const $main = document.getElementById('main');
const $combat = document.getElementById('combat');
const $playagain = document.getElementById('play-again');
const $pickblue = document.getElementById('pick_blue');
const $pickyellow = document.getElementById('pick_yellow');
const $pickred = document.getElementById('pick_red');
const $pickgreen = document.getElementById('pick_green');
const $pickpurple = document.getElementById('pick_purple');
const $rightblue = document.getElementById('right_blue');
const $rightyellow = document.getElementById('right_yellow');
const $rightred = document.getElementById('right_red');
const $rightgreen = document.getElementById('right_green');
const $rightpurple = document.getElementById('right_purple');
const $result = document.getElementById('result');
const $points = document.getElementById('points');
const $bonus = document.getElementById('bonus');
const $normal = document.getElementById('normal');
const $main__bonus = document.getElementById('main__bonus');
const $logo = document.getElementById('logo');
const $logo__bonus = document.getElementById('logo_bonus');
const $rules__img = document.getElementById('rules__img');
const $bonus__img = document.getElementById('bonus__img');
let numRandom = 0;
let numPick = 0;
let numRandom_bonus = 0;
let count = 0;
let gameMode = 0;

const housePick = () => {
        if(gameMode === 0) {
            numRandom = Math.floor(Math.random() * 3); 
        } else {
            numRandom = Math.floor(Math.random() * 5);
        }
        if(numRandom === 0){
            $rightblue.classList.remove('display__none');
        } else if (numRandom === 1) {
            $rightyellow.classList.remove('display__none');
        } else if (numRandom === 2) {
            $rightred.classList.remove('display__none');
        } else if (numRandom === 3) {
            $rightgreen.classList.remove('display__none');
        } else if (numRandom === 4) {
            $rightpurple.classList.remove('display__none');
        }
}

const countScore = () => {
    if(count < 0) {
        count = 0;
    }
    $points.textContent = count;
}

countScore();

const combatResult = () => {
    if(numPick === numRandom) {
        $result.textContent = "YOU DRAW";
    } else if( (numPick === 0 && numRandom === 2) || (numPick === 1 && numRandom === 0) || (numPick === 2 && numRandom === 1) || 
     (numPick === 0 && numRandom === 3) || (numPick === 4 && numRandom === 0) || (numPick === 4 && numRandom === 3) || 
     (numPick === 1 && numRandom === 4) || (numPick === 2 && numRandom === 4) || (numPick === 3 && numRandom === 1) || (numPick === 3 && numRandom === 2)){
        $result.textContent = "YOU WIN";
        count += 2;
    } else {
        $result.textContent = "YOU LOSE";
        count -= 1;
    }
    countScore();
}


$paper.addEventListener('click', () => {
    $main.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickblue.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 0;
    housePick();
    combatResult();
})

$scissors.addEventListener('click', () => {
    $main.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickyellow.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 1;
    housePick();
    combatResult();
})

$rock.addEventListener('click', () => {
    $main.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickred.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 2;
    housePick();
    combatResult();
})

$paper_bonus.addEventListener('click', () => {
    $main__bonus.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickblue.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 0;
    housePick();
    combatResult();
})

$scissors_bonus.addEventListener('click', () => {
    $main__bonus.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickyellow.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 1;
    housePick();
    combatResult();
})

$rock_bonus.addEventListener('click', () => {
    $main__bonus.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickred.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 2;
    housePick();
    combatResult();
})

$spock.addEventListener('click', () => {
    $main__bonus.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickgreen.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 3;
    housePick();
    combatResult();
})

$lizard.addEventListener('click', () => {
    $main__bonus.classList.add('display__none');
    $combat.classList.remove('display__none');
    $pickpurple.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.add('display__none');
    numPick = 4;
    housePick();
    combatResult();
})

$playagain.addEventListener('click', () => {
    if(gameMode === 0){
        $combat.classList.add('display__none');
        $main.classList.remove('display__none');
        $pickblue.classList.add('display__none');
        $pickyellow.classList.add('display__none');
        $pickred.classList.add('display__none');
        $rightblue.classList.add('display__none');
        $rightyellow.classList.add('display__none');
        $rightred.classList.add('display__none');
        $bonus.classList.remove('display__none');
    } else {
        $combat.classList.add('display__none');
        $main__bonus.classList.remove('display__none');
        $pickblue.classList.add('display__none');
        $pickyellow.classList.add('display__none');
        $pickred.classList.add('display__none');
        $pickgreen.classList.add('display__none');
        $pickpurple.classList.add('display__none');
        $rightblue.classList.add('display__none');
        $rightyellow.classList.add('display__none');
        $rightred.classList.add('display__none');
        $rightgreen.classList.add('display__none');
        $rightpurple.classList.add('display__none');
        $normal.classList.remove('display__none');
    }
})

$rules.addEventListener('click', () => {
    $dark.classList.toggle('display__none');
})

$cruz.addEventListener('click', () => {
    $dark.classList.add("display__none");
})

$cruz__desktop.addEventListener('click', () => {
    $dark.classList.add("display__none");
})

/* bonus */

$bonus.addEventListener('click', () => {
    gameMode = 1;
    $main.classList.add('display__none');
    $main__bonus.classList.remove('display__none');
    $bonus.classList.add('display__none');
    $normal.classList.remove('display__none');
    $logo__bonus.classList.remove('display__none');
    $logo.classList.add('display__none');
    $rules__img.classList.add('display__none');
    $bonus__img.classList.remove('display__none');
})

$normal.addEventListener('click', () => {
    gameMode = 0;
    $main__bonus.classList.add('display__none');
    $main.classList.remove('display__none');
    $normal.classList.add('display__none');
    $bonus.classList.remove('display__none');
    $logo.classList.remove('display__none');
    $logo__bonus.classList.add('display__none');
    $bonus__img.classList.add('display__none');
    $rules__img.classList.remove('display__none');
})