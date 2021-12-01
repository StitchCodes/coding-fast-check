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
var score = 0;
var recentPlayers = {};


// CREAR PREGUNTAS
var questions = {
    question1: {
        question: "Are you happy?",
        option1: "Yes", 
        option2: "No",
        option3: "dunno",
        option4: "maybe"
    },

    question2: {
        question: "Are you married?",
        option1: "Yes", 
        option2: "No",
        option3: "Long Ago",
        option4: "Obvs!"
    }
};


// ON CLICK START GAME 
startBtn.addEventListener("click", gameStart);

// FUNCTIONS
// START GAME FUNCTION
function gameStart() {
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

    // Timer Start
    timer();
    // Compare question
    var qstnTrigger = document.getElementsByClassName("questions");

    for (let i = 0; i < qstnTrigger.length; i++) {
        qstnTrigger[i].addEventListener("click", compare);
        
    }
}



// **************************************************************************************
// Compare function
function compare(event) {
    tgt = event.target.innerText;

    if (tgt !== "Yes") {
        score = score;
        nextQuestion();
    }   else {
        score = score + 10;
        nextQuestion();
    }
}

// **************************************************************************************
// Next Question Function
function nextQuestion() {
    // Add new question
    mainSection.innerHTML = "<h1>" + questions.question2.question

    // Create List
    var createList = document.createElement("ol");
    var listItems1 = document.createElement("li");
    listItems1.innerHTML = questions.question2.option1;
    var listItems2 = document.createElement("li");
    listItems2.innerHTML = questions.question2.option2;
    var listItems3 = document.createElement("li");
    listItems3.innerHTML = questions.question2.option3;
    var listItems4 = document.createElement("li");
    listItems4.innerHTML = questions.question2.option4;

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

    for (let i = 0; i < qstnTrigger.length; i++) {
        qstnTrigger[i].addEventListener("click", compare2);
        
    }
}

// **************************************************************************************
// Compare function 2
function compare2(event) {
    tgt = event.target.innerText;

    if (tgt !== "Long Ago") {
        console.log("tgt", tgt);
        score = score;
        showScore();
    }   else {
        score = score + 10;
        showScore();
    }
}

// Timmer function
function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        countdwn.innerHTML='Time left: 00:'+ sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("You are out of time!");
            showScore();
        }
    }, 1000);
}

// Show score function
function showScore() {
    mainSection.innerHTML = "<h1>" + "Your score is: " + score;
    saveScore = document.createElement("p");
    saveScore.innerHTML = "Write your name to save your score."
    mainSection.appendChild(saveScore);

    // create input box
    var inputBox = document.createElement("input");
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('value', 'Name');
    inputBox.setAttribute("id", "textBox")

    mainSection.appendChild(inputBox);

    // Buttons
    var saveScoreBtn = document.createElement("button");
    var seeHighscoreBtn = document.createElement("button");
    var clearScore = document.createElement("button");
    var replay = document.createElement("button");

    saveScoreBtn.setAttribute("id", "saveScore");
    seeHighscoreBtn.setAttribute("id", "seeHighscore");
    clearScore.setAttribute("id","clearHS");
    replay.setAttribute("id", "replay");

    saveScoreBtn.innerHTML = "Save Score";
    seeHighscoreBtn.innerHTML = "See Highscores";
    clearScore.innerHTML = "Clear Highscore";
    replay.innerHTML = "Play Again";

    mainSection.appendChild(saveScoreBtn);
    mainSection.appendChild(seeHighscoreBtn);
    mainSection.appendChild(clearScore);
    mainSection.appendChild(replay);

    var scoreStore = document.getElementById("saveScore");
    scoreStore.addEventListener("click", storage);
    clearScore.addEventListener("click", clearHighscore);
    replay.addEventListener("click", playAgain);
    
}

// BOTON PARA LIMIPAR EL HIGHSCORE
function clearHighscore() {
    localStorage.clear();
    console.log("highscore cleared");
}

// BOTON PARA VOLVER A JUGAR 
function playAgain() {
    console.log("I want to play again");
    gameStart();
}

// save to local storage
function storage() {
    var nameValue = document.getElementById("textBox");
    var nameStorage = nameValue.value;
    playerStorage = localStorage.setItem("Name", nameStorage);
    recentPlayers.name = nameStorage; 
    recentPlayers.score = score;
    var recentString = JSON.stringify(recentPlayers);
    console.log(recentString);

    var ol = document.createElement("ol");
    ol.setAttribute("id", "ScoreList")
    var li = document.createElement("li");

    mainSection.appendChild(ol);
    var ol = document.getElementById("ScoreList");
    li.innerHTML = recentPlayers.name + " " + recentPlayers.score;
    ol.appendChild(li);
}