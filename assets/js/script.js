// INICIAR CON EL TEXTO DEL MOCK UP
// INICIAR EL TIMER
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
    // Add question to DOM
    mainSection.innerHTML = "<h1>" + questions.question1.question;
    // Create ol
    var createList = document.createElement("ol");
    // Create li Items
    var listItems1 = document.createElement("li");
    listItems1.innerHTML = questions.question1.option1;
    var listItems2 = document.createElement("li");
    listItems2.innerHTML = questions.question1.option2;
    var listItems3 = document.createElement("li");
    listItems3.innerHTML = questions.question1.option3;
    var listItems4 = document.createElement("li");
    listItems4.innerHTML = questions.question1.option4;

    // Add class to each li
    listItems1.setAttribute("class", "questions");
    listItems2.setAttribute("class", "questions");
    listItems3.setAttribute("class", "questions");
    listItems4.setAttribute("class", "questions");

    // Append each li
    createList.appendChild(listItems1);
    createList.appendChild(listItems2);
    createList.appendChild(listItems3);
    createList.appendChild(listItems4);
    
    // Send List to DOM
    mainSection.appendChild(createList);
    // Create Buttons to DOM
    var quitbtn = document.createElement("button");
    // quitbtn.setAttribute("id", "button");
    quitbtn.innerHTML = "Quit"
    mainSection.appendChild(quitbtn);

    var nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next";
    mainSection.appendChild(nextBtn);

    // Compare question
    var qstnTrigger = document.getElementsByClassName("questions");
    console.log("qstn", qstnTrigger);
    // qstnTrigger.addEventListener("click", compare);

    for (let i = 0; i < qstnTrigger.length; i++) {
        qstnTrigger[i].addEventListener("click", compare);
        
    }
}




// Compare function
function compare(event) {
    tgt = event.tgt;

    console.log("Triggered Event Target", tgt);
    
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