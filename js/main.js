
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
const combatStart = document.getElementById("combate");

// ELEMENTOS DE SECTION PICK ATTACK
const sectionPickAttack = document.getElementById("pick-attack");
const buttonFireAttack = document.getElementById("fire-attack");
const buttonWaterAttack = document.getElementById("water-attack");
const buttonEarthttack = document.getElementById("earth-attack");
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
const cellsBoard11 = document.getElementsByClassName("cell")[10];
const cellsBoard12 = document.getElementsByClassName("cell")[11];


// ELEMENTOS COMBAT RESULT
const sectionCombatResult = document.getElementById("combat-result");
const attackPlayerPicked = document.getElementById("attack-player-picked");
const attackEnemyPicked = document.getElementById("attack-enemy-picked");
const combarResult = document.getElementById("result");
const ImageResult = document.getElementById("image-result");


// ELEMENTOS WIN OR LOST SCREEN

const sectionWinOrLostScreen = document.getElementById("win-or-lost-screen");
const winOrLostText = document.getElementById("win-or-lost-text");
const winOrLostImg = document.getElementById("win-or-lost-text");



//PANTALLAS
sectionSelectMonster.style.display ='none'
sectionShowPlayerMonster.style.display ='none'
sectionShowEnemyMonster.style.display='none'
sectionPickAttack.style.display ='none'
sectionCombatResult.style.visibility ='hidden'
sectionWinOrLostScreen.style.display ='none'

//ENTRAR EN PANTALLA JUGAR
buttonPlayGame.addEventListener("click", () => {sectionMainPage.style.display ='none' 
buttonPlayGame.style.display = 'none'
buttonTutorial.style.display = 'none'
sectionSelectMonster.style.display ='initial'});

//ELIGIENDO MONSTRUO

// selectMonsterPyro.addEventListener('click', function() {
//     sectionSelectMonster.style.display ='none'
//     sectionShowPlayerMonster.style.display = 'initial'
//     ;
//   });


class ElementMonster {
    constructor(name, image, element) {
        this.name = name
        this.image = image
        this.element = element
        this.attacks = []
    }
}

const monsterPyro = new ElementMonster('Pyro', "../images/pyro.png", 'Fire');
const monsterFlow = new ElementMonster('Flow', "../images/flow.png", 'Water');
const monsterSlush = new ElementMonster('Slush', "../images/slush.png", 'Earth');

    selectMonsterPyro.addEventListener('click', function() {
    sectionSelectMonster.style.display = 'none';
    sectionShowPlayerMonster.style.display = 'initial';
    playerMonsterText.textContent = "Has Elegido a " + monsterPyro.name;
    playerMonsterImage.innerHTML = `<img class="monster" src="${monsterPyro.image}" alt="${monsterPyro.name}"  width="500" />>`;
});
selectMonsterFlow.addEventListener('click', function() {
    sectionSelectMonster.style.display = 'none';
    sectionShowPlayerMonster.style.display = 'initial';
    playerMonsterText.textContent = "Has Elegido a: " + monsterFlow.name;
    playerMonsterImage.innerHTML = `<img class="monster" src="${monsterFlow.image}" alt="${monsterFlow.name}">`;
});

selectMonsterSlush.addEventListener('click', function() {
    sectionSelectMonster.style.display = 'none';
    sectionShowPlayerMonster.style.display = 'initial';
    playerMonsterText.textContent = "Has Elegido a: " + monsterSlush.name;
    playerMonsterImage.innerHTML = `<img class="monster" src="${monsterSlush.image}" alt="${monsterSlush.name}">`;
});

// MONSTER ELEMENT ENEMIGO







jorney.addEventListener("click", pickEnemyMonster)
function pickEnemyMonster() {
    let randomPick = random(1,3)
    
    if (randomPick == 1) {
            sectionSelectMonster.style.display = 'none';
            sectionShowPlayerMonster.style.display = 'none';
            sectionShowEnemyMonster.style.display = 'initial';

            //AQUÍ DEBERÍA IR UN TEMPORIZADOR

            enemyMonsterText.textContent = "Has Encontrado a " + monsterPyro.name;
            enemyMonsterImage.innerHTML = `<img class="monster" src="${monsterPyro.image}" alt="${monsterPyro.name}"  width="500" />>`;
        } else if (randomPick == 2) {
            sectionSelectMonster.style.display = 'none';
            sectionShowPlayerMonster.style.display = 'none';
            sectionShowEnemyMonster.style.display = 'initial'
            enemyMonsterText.textContent = "Has Encontrado a " + monsterFlow.name;
            enemyMonsterImage.innerHTML = `<img class="monster" src="${monsterFlow.image}" alt="${monsterFlow.name}"  width="500" />>`;
        } else {
            sectionSelectMonster.style.display = 'none';
            sectionShowPlayerMonster.style.display = 'none';
            sectionShowEnemyMonster.style.display = 'initial'
            enemyMonsterText.textContent = "Has Encontrado a " + monsterSlush.name;
            enemyMonsterImage.innerHTML = `<img class="monster" src="${monsterSlush.image}" alt="${monsterSlush.name}"  width="500" />>`;  
    }
 }
 function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// COMIENZO DEL VIAJE
// (COMBATE)

combatStart.addEventListener("click", combatBoard)
function combatBoard() {
    sectionShowEnemyMonster.style.display = 'none';
    sectionPickAttack.style.display = 'flex';


}

