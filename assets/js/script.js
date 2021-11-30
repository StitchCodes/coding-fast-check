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

var mainSection = document.getElementById("main-section");
var mainText = mainSection.querySelectorAll("h1");
var startBtn = document.getElementById("startGameBtn");
var countdwn = document.getElementById("countdown");


// CREAR PREGUNTAS
var questionOne = {
    Question:"Are you happy?", 
    option1:"Yes", 
    option2:"No",
    option3:"dunno",
    option4:"maybe"
};

var questions = {
    question1: {
        question: "are you happy?",
        option1: "Yes", 
        option2: "No",
        option3: "dunno",
        option4: "maybe"
    },

    question2: {
        question: "Are you married?",
        option1: "Yes", 
        option2: "No",
        option3: "dunno",
        option4: "maybe"
    }
};


// ON CLICK START GAME 
startBtn.addEventListener("click", gameStart);

// FUNCTIONS
// START GAME FUNCTION
function gameStart() {
    console.log("Game Will start soon.")
    mainSection.innerHTML = "<h1>" + questions.question1.question;
    var createList = document.createElement("ol");
    var listItems = document.createElement("li");

    var optionList = listItems.innerHTML = questions.question1.option1;

    createList.appendChild(optionList);

    // var listQuestions = createList.createElement("<li>");
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