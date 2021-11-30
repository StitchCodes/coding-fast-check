// INICIAR CON EL TEXTO DEL MOCK UP
// BOTON DE INICIAR EL QUIZ QUE EJECUTA EL PROGRAMA
// INICIAR EL TIMER
// CAMBIAR EL TEXTO POR UNA PREGUNTA

// CREAR RESPUESTA PARA CADA PREGUNTA
// COMPARAR LA RESPUESTA DEL USUARIO CONTRA LA CORRECTA
// DAR UNA PUNTUACION Y PASAR A LA SIGUIENTE PREGUNTA
// AL FINAL DAR PUNTUACION Y MOSTRAR BOX PARA REGISTRAR EL NOMBRE
// REGISTRAR EL NOMBRE EN LOCALSTORAGE
// VER LOS NOMBRES EN LA PAGINA DE HIGHSCORES



// GLOBAL VARIABLES
// GET ELEMENTS

var mainText = mainEl.querySelectorAll("h1");
var countdwn = document.getElementById("#countdown");
var mainEl = document.getElementById("#main-section");
var startBtn = mainEl.getElementById("#startGameBtn");

console.log("coutndown", countdwn);
console.log("main section", mainEl);
console.log("h1 text", mainText);

// CREAR PREGUNTAS
var questionOne = {
    Question:"Are you happy?", 
    option1:"Yes", 
    option2:"No",
    option3:"dunno",
    option4:"maybe"
};
// ON CLICK EVENT
startBtn.addEventListener("click", gameStart());

// FUNCTIONS
// START GAME FUNCTION
function gameStart() {
    console.log("Game Will start soon.")
}

countdwn.textContent = "Time left: 4 seconds";


// BOTON PARA LIMIPAR EL HIGHSCORE
function clearHighscore() {
    console.log("highscore cleared");
}

// BOTON PARA VOLVER A JUGAR 
function replay() {
    console.log("I want to play again");
}