// VARIABLES GLOBALES
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarMascota = document.getElementById('select-monster')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const sectionShowMonster = document.getElementById("show-monster")

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const divImagesMonsters = document.getElementById('divImagesMonsters')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge 🔥', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🌎', id: 'boton-tierra' },
)

capipepo.ataques.push(
    {nombre: '🌎', id: 'boton-tierra' },
    {nombre: '🌎', id: 'boton-tierra' },
    {nombre: '🌎', id: 'boton-tierra' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego' },

)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🌎', id: 'boton-tierra' }, 
)


mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego() {

sectionShowMonster.style.display = 'none'
sectionSeleccionarAtaque.style.display = 'none'

mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
    divImagesMonsters.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')

})

botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)


botonFuego.addEventListener('click', ataqueFuego)

botonAgua.addEventListener('click', ataqueAgua)

botonTierra.addEventListener('click', ataqueTierra)


botonReiniciar.addEventListener('click', reiniciarJuego)



}

//FUNCIÓN DE SELECCION DE MASCOTA DEL JUGADOR
function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionShowMonster.style.display = 'flex'
    
    
    sectionSeleccionarAtaque.style.display = 'none'
    
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

// FUNCION DE SELECCION DE LA MASCOTA DEL ENEMIGO
function seleccionarMascotaEnemigo() {

let mascotaAleatoria = aleatorio(1,3)

if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
} else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
} else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//FUNCIONES DE ATAQUES JUGADOR - FUEGO, AGUA Y TIERRA

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}

//FUNCIÓN ATAQUE ENEMIGO, JUSTO DESPUES DEL ATAQUE JUGADOR
function ataqueAleatorioEnemigo() {
   let ataqueAleatorio = aleatorio(1,3)
   
   if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO'
   } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA'
   } else {
    ataqueEnemigo = 'TIERRA'
   }

  combate() 
}

//FUNCIÓN DE COMBATE
function combate() {
if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("ES EMPATE");
    
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) { 
    crearMensaje("GANASTE ");

//MENSAJE VIDAS ENEMIGO
vidasEnemigo--
spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else {
    crearMensaje("PERDISTE");

//MENSAJE VIDAS JUGADOR
vidasJugador--
spanVidasJugador.innerHTML = vidasJugador  
    }

//REVISAR VIDAS
revisarVidas()
}
//FUNCIÓN DE REVISAR VIDAS
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Ganaste la Batalla, Felicitaciones')
    }else if(vidasJugador == 0) {
        crearMensajeFinal('Perdiste la Batalla, lo sentimos')
    } 
}

//FUNCIÓN DE CREAR MENSAJE
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//FUNCION DE MENSAJE FINAL
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'   
}

//FUNCIÓN REINICIAR
function reiniciarJuego() {
    location.reload()
}

//FUNCION DE ALEATORIEDAD PARA QUE ELIJA MASCOTA POR EL ENEMIGO
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego)






