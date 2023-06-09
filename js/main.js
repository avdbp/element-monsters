const sectionMainPage = document.getElementById("main-page");
const buttonTutorial = document.getElementById('tutorial');
const audio = document.getElementById('audio');
const buttonPlayGame = document.getElementById('play-game');

const sectionSelectMonster = document.getElementById("select-monster");
const selectMonsterPyro = document.getElementById("pyro");
const selectMonsterFlow = document.getElementById("flow");
const selectMonsterSlush = document.getElementById("slush");

const sectionShowPlayerMonster = document.getElementById("show-player-monster");
const playerMonsterText = document.getElementsByClassName("player-monster-text")[0];
const playerMonsterImage = document.getElementById("player-monster-image");
const jorney = document.getElementById("jorney")

const sectionShowEnemyMonster = document.getElementById("show-enemy-monster");
const enemyMonsterText = document.getElementsByClassName("enemy-monster-text")[0];
const enemyMonsterImage = document.getElementById("enemy-monster-image");
const combatStart = document.getElementById("combat");
const combatStartAgain = document.getElementById("combat-again");

const sectionPickAttack = document.getElementById("pick-attack");
const FireAttack = document.getElementById("fire-attack");
const WaterAttack = document.getElementById("water-attack");
const Earthattack = document.getElementById("earth-attack");
const pickAttackText = document.getElementById("pick-attack-text");
const elementsAttack = document.getElementById("elements-attack");
const board = document.getElementById("board");
const colums = board.children;

const sectionCombatResult = document.getElementById("combat-result");
const attackPlayerPicked = document.getElementById("attack-player-picked");
const attackPlayerImage = document.getElementById("attack-player-image");
const attackEnemyPicked = document.getElementById("attack-enemy-picked");
const attackEnemyImage = document.getElementById("attack-enemy-image");
const combatResult = document.getElementById("result");
const textWinner = document.getElementById("text-winner");
const ImageResult = document.getElementById("image-result");
const sectionRoundResult = document.getElementById("round-result");
const nextRound = document.getElementById("next-round");

const sectionAttackResult = document.getElementById("round-result");

const sectionWinOrLostScreen = document.getElementById("win-or-lost-screen");
const winOrLostText = document.getElementById("win-or-lost-text");
const winOrLostImg = document.getElementById("win-or-lost-text");

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

sectionSelectMonster.style.display ='none';
sectionShowPlayerMonster.style.display ='none';
sectionShowEnemyMonster.style.display='none';
sectionPickAttack.style.display ='none';
sectionCombatResult.style.visibility ='hidden';
sectionAttackResult.style.visibility ='hidden';
sectionWinOrLostScreen.style.display ='none';
combatStartAgain.style.visibility='hidden';
textWinner.style.visibility='hidden';


buttonPlayGame.addEventListener("click", () => {
    sectionMainPage.style.display ='none' 
    buttonPlayGame.style.display = 'none'
    buttonTutorial.style.display = 'none'
    sectionSelectMonster.style.display ='flex'
    audio.play();
});

let elementMonsters = [];
let playerElementMonster;
let enemyElementMonster;
let playerAttack;
let enemyAttack;
let currentMonsterPosition = 0;
let moves = 0;

class ElementMonster {
    constructor(name, image, element) {
        this.name = name
        this.image = image
        this.element = element
    }

    //METODOS ATTACK

    fireAttack(){
        if(this.element == "Fire"){
            return 3;
        }
        return 1;
    }
    waterAttack(){
        if(this.element == "Water"){
            return 3;
        }
        return 1;
    }
    earthAttack(){
        if(this.element == "Earth"){
            return 3;
        }
        return 1;
    }

    //METODO COMBAT
    combatMonster(){
        
    }
}

const monsterPyro = new ElementMonster('Pyro', "./images/pyro.png", 'Fire');
const monsterFlow = new ElementMonster('Flow', "./images/flow.png", 'Water');
const monsterSlush = new ElementMonster('Slush', "./images/slush.png", 'Earth');

elementMonsters.push(monsterPyro,monsterFlow,monsterSlush)

class Attack extends ElementMonster {
    constructor(name,image) {
        super(name, image);
    }
}

const fireAttack = new Attack('Fire', "./images/fire.gif");
const waterAttack = new Attack('water', "./images/water.gif");
const earthAttack = new Attack('Earth', "./images/earth.gif");



function monsterClicked(monster) {
    playerElementMonster = monster;
    sectionSelectMonster.style.display = 'none';
    sectionShowPlayerMonster.style.display = 'initial';
    playerMonsterText.textContent = "Has Elegido a " + playerElementMonster.name;
    playerMonsterImage.innerHTML = `<img class="monster" src="${playerElementMonster.image}" alt="${playerElementMonster.name}"  width="500" />`;
}


selectMonsterPyro.addEventListener('click', function() {
    monsterClicked(monsterPyro);
});

selectMonsterFlow.addEventListener('click', function() {
    monsterClicked(monsterFlow);
});

selectMonsterSlush.addEventListener('click', function() {
    monsterClicked(monsterSlush);
});


jorney.addEventListener("click", pickEnemyMonster);

function pickEnemyMonster() {
    let randomPick = random(1, 3);
    if (randomPick == 1) {
        enemyElementMonster = monsterPyro;
    } else if (randomPick == 2) {
        enemyElementMonster = monsterFlow;
    } else if (randomPick == 3) {
        enemyElementMonster = monsterSlush;
    }
    sectionSelectMonster.style.display = 'none';
    sectionShowPlayerMonster.style.display = 'none';
    sectionShowEnemyMonster.style.display = 'initial';
    enemyMonsterText.textContent = "Has Encontrado a " + enemyElementMonster.name;
    enemyMonsterImage.innerHTML = `<img class="monster" src="${enemyElementMonster.image}" alt="${enemyElementMonster.name}"  width="500" />`;
   
}


combatStart.addEventListener("click", combatBoard)
function combatBoard() {
    sectionShowEnemyMonster.style.display = 'none';
    sectionPickAttack.style.display = 'flex';
}
combatStartAgain.addEventListener("click", combatBoard)
function combatBoard() {
    sectionShowEnemyMonster.style.display = 'none';
    sectionPickAttack.style.display = 'flex';
    pickAttackText.style.visibility = 'visible';
    elementsAttack.style.visibility = 'visible';
    sectionAttackResult.style.visibility = 'hidden';
    sectionCombatResult.style.display = 'initial';

}

function attackClicked(attack) {
    playerAttack = attack;
    sectionAttackResult.style.visibility = 'visible';
    sectionCombatResult.style.visibility = 'visible';
    attackPlayerPicked.textContent = 'Has elegido un ataque de ' + attack;
    attackPlayerImage.innerHTML = `<img id="attack-player-image" src="${enemyElementMonster.image}" alt="${enemyElementMonster.name}" width="500" />`;

    function crearMensaje(resultado) {
        pickAttackText.style.visibility = 'hidden';
        elementsAttack.style.visibility = 'hidden';
        combatResult.textContent = resultado;
    }

    function enemyPickedMonster() {
        let randomPick = random(1, 3);
        if (randomPick === 1) {
            enemyAttack = 'Fuego';
        } else if (randomPick === 2) {
            enemyAttack = 'Agua';
        } else if (randomPick === 3) {
            enemyAttack = 'Tierra';
        }
        attackEnemyPicked.textContent = 'Tu enemigo ha usado un ataque de ' + enemyAttack;
        enemyMonsterImage.innerHTML = `<img class="monster" src="${enemyElementMonster.image}" alt="${enemyElementMonster.name}" width="500" />`;

        combate(); 
    }

    function combate() {
        moves += 1;
        let puntos = 0;

        if (playerAttack === enemyAttack) {
            puntos = 1;
            crearMensaje("Wow, por poco, han empatado y eso te hizo avanzar una casilla");
            
        } else if (
            (playerAttack === 'Fuego' && enemyAttack === 'Tierra') ||
            (playerAttack === 'Agua' && enemyAttack === 'Fuego') ||
            (playerAttack === 'Tierra' && enemyAttack === 'Agua')
        ) {
            puntos = 3;
            crearMensaje("Ganaste este combate y avanzas 3 casillas");
            
        } else {
            puntos = 0;
            crearMensaje("Has perdido este combate y te quedas en la misma casilla... continua intentándolo");
        }

        currentMonsterPosition += puntos;

        if (currentMonsterPosition > 9) {
            currentMonsterPosition = 9;
        }

        updateBoard();

        if (currentMonsterPosition === 9) {
            endGame('GAME OVER ¡Llegaste has ganado los combates suficientes para llegar al otro lado de la isla, así que... GANASTE!');
            return;
        }

        if (moves === 5) {
            endGame('GAME OVER !Has combatido 5 veces y tu Monster Element a muerto, por lo que perdiste!');
        }
    }

    function endGame(text) {
        textWinner.style.visibility = 'visible';
        textWinner.textContent = text;
        nextRound.style.visibility = 'hidden';
    }


    function updateBoard() {
        for (let i = 0; i < colums.length; i++) {
            colums[i].innerText = "";
        }
        colums[currentMonsterPosition].innerHTML = `<img class="monster" src="${playerElementMonster.image}" alt="${playerElementMonster.name}" width="150" />`;
    }

    
    enemyPickedMonster();
}
function playerAttackButton (){
FireAttack.addEventListener('click', function() {
    attackClicked('Fuego');
});

WaterAttack.addEventListener('click', function() {
    attackClicked('Agua');
});

Earthattack.addEventListener('click', function() {
    attackClicked('Tierra');
});
}
playerAttackButton();

function siguienteRound() {
    playerAttack = null;
    enemyAttack = null;
    combatStartAgain.style.visibility='visible';

    sectionAttackResult.style.visibility = 'hidden';
    sectionCombatResult.style.visibility = 'hidden';
    combatStart.style.visibility='hidden';
    sectionPickAttack.style.display='none';
    

    attackPlayerPicked.textContent = '';
    attackEnemyPicked.textContent = '';
    combatResult.textContent = '';
    pickEnemyMonster();
};

nextRound.addEventListener("click", siguienteRound);
