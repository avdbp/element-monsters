
// ELEMENTOS DE SECTION MAIN PAGE
const sectionMainPage = document.getElementById("main-page");
const buttonTutorial = document.getElementById('tutorial');
const buttonPlayGame = document.getElementById('play-game');

// ELEMENTOS DE SECTION SELECT MONSTER
const sectionSelectMonster = document.getElementById("select-monster");
const selectMonsterPyro = document.getElementById("pyro");
const selectMonsterFlow = document.getElementById("flow");
const selectMonsterSlush = document.getElementById("slush");

// ELEMENTOS DE SECTION SHOW PLAYER MONSTER
const sectionShowPlayerMonster = document.getElementById("show-player-monster");
const playerMonsterText = document.getElementsByClassName("player-monster-text")[0];
const playerMonsterImage = document.getElementById("player-monster-image");
const jorney = document.getElementById("jorney")
// ELEMENTOS DE SECTION SHOW ENEMY MONSTER

const sectionShowEnemyMonster = document.getElementById("show-enemy-monster");
const enemyMonsterText = document.getElementsByClassName("enemy-monster-text")[0];
const enemyMonsterImage = document.getElementById("enemy-monster-image");
const combatStart = document.getElementById("combat");

// ELEMENTOS DE SECTION PICK ATTACK
const sectionPickAttack = document.getElementById("pick-attack");
const FireAttack = document.getElementById("fire-attack");
const WaterAttack = document.getElementById("water-attack");
const Earthattack = document.getElementById("earth-attack");
const pickAttackText = document.getElementById("pick-attack-text");
const elementsAttack = document.getElementById("elements-attack");
const board = document.getElementById("board");
const cellsBoard1 = document.getElementsByClassName("cell")[0];
const cellsBoard2 = document.getElementsByClassName("cell")[1];
const cellsBoard3 = document.getElementsByClassName("cell")[2];
const cellsBoard4 = document.getElementsByClassName("cell")[3];
const cellsBoard5 = document.getElementsByClassName("cell")[4];
const cellsBoard6 = document.getElementsByClassName("cell")[5];
const cellsBoard7 = document.getElementsByClassName("cell")[6];
const cellsBoard8 = document.getElementsByClassName("cell")[7];
const cellsBoard9 = document.getElementsByClassName("cell")[8];
const cellsBoard10 = document.getElementsByClassName("cell")[9];



// ELEMENTOS COMBAT RESULT
const sectionCombatResult = document.getElementById("combat-result");
const attackPlayerPicked = document.getElementById("attack-player-picked");
const attackPlayerImage = document.getElementById("attack-player-image");
const attackEnemyPicked = document.getElementById("attack-enemy-picked");
const attackEnemyImage = document.getElementById("attack-enemy-image");
const combarResult = document.getElementById("result");
const ImageResult = document.getElementById("image-result");
const sectionRoundResult = document.getElementById("round-result");

//ELEMENTOS ATTACK RESULT
const sectionAttackResult = document.getElementById("round-result");



// ELEMENTOS WIN OR LOST SCREEN

const sectionWinOrLostScreen = document.getElementById("win-or-lost-screen");
const winOrLostText = document.getElementById("win-or-lost-text");
const winOrLostImg = document.getElementById("win-or-lost-text");

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//PANTALLAS
sectionSelectMonster.style.display ='none'
sectionShowPlayerMonster.style.display ='none'
sectionShowEnemyMonster.style.display='none'
sectionPickAttack.style.display ='none'
sectionCombatResult.style.visibility ='hidden'
sectionAttackResult.style.visibility ='hidden'
sectionWinOrLostScreen.style.display ='none'


//ENTRAR EN PANTALLA JUGAR
buttonPlayGame.addEventListener("click", () => {sectionMainPage.style.display ='none' 
buttonPlayGame.style.display = 'none'
buttonTutorial.style.display = 'none'
sectionSelectMonster.style.display ='flex'});


let elementMonsters = [];
let playerElementMonster;
let enemyElementMonster;
let playerAttack;
let enemyAttack;
let playerAttackResult;
let enemyAttackResult;
let playerAttackResultImage;
let enemyAttackResultImage;
let playerAttackResultText;
let enemyAttackResultText;



class ElementMonster {
    constructor(name, image, element) {
        this.name = name
        this.image = image
        this.element = element
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
    playerMonsterImage.innerHTML = `<img class="monster" src="${playerElementMonster.image}" alt="${playerElementMonster.name}" width="500" />`;
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


// MONSTER ELEMENT ENEMIGO

jorney.addEventListener("click", pickEnemyMonster)
function pickEnemyMonster() {
    let randomPick = random(1,3)
    if (randomPick == 1) {
            enemyElementMonster = monsterPyro;
            } else if (randomPick == 2) {
                enemyElementMonster = monsterFlow;
                } else if (randomPick == 3) {
                    enemyElementMonster = monsterSlush;
                    }
                    sectionSelectMonster.style.display = 'none';
                    sectionShowPlayerMonster.style.display = 'none';
                    sectionShowEnemyMonster.style.display = 'initial'
                    enemyMonsterText.textContent = "Has Encontrado a " + enemyElementMonster.name;
                    enemyMonsterImage.innerHTML = `<img class="monster" src="${enemyElementMonster.image}" alt="${enemyElementMonster.name}"  width="500" />`;
    }

// COMIENZO DEL VIAJE
// (COMBATE)

combatStart.addEventListener("click", combatBoard)
function combatBoard() {
    sectionShowEnemyMonster.style.display = 'none';
    sectionPickAttack.style.display = 'flex';
}

//ATAQUES

function attackClicked(attack) {
    playerAttack = attack;
    pickAttackText.style.visibility = 'hidden'
    elementsAttack.style.visibility = 'hidden'
    sectionAttackResult.style.visibility ='visible'    
    sectionCombatResult.style.visibility ='visible'
    attackPlayerPicked.textContent = 'Has elegido un ataque de ' + attack;
    attackPlayerImage.innerHTM = `<img id="attack-player-image" src="${enemyElementMonster.image}" alt="${enemyElementMonster.name}"  width="500" />`;

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
        enemyElementMonster.name;
        enemyMonsterImage.innerHTML = `<img class="monster" src="${enemyElementMonster.image}" alt="${enemyElementMonster.name}" width="500" />`;
    }

    enemyPickedMonster();
}

FireAttack.addEventListener('click', function() {
    attackClicked('Fuego');
});

WaterAttack.addEventListener('click', function() {
    attackClicked('Agua');
});

Earthattack.addEventListener('click', function() {
    attackClicked('Tierra');
});
