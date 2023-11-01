// Hlavní hra
const questions = [
    {
        question: "Co je CBD zkratkou?",
        answers: ["Cannabidiol", "Cannabis", "Cannabigerol"],
        correctAnswer: "Cannabidiol",
    },
    {
        question: "Která část rostliny Cannabis obsahuje nejvíce CBD?",
        answers: ["Květy", "Kořeny", "Listy"],
        correctAnswer: "Květy",
    },
    {
        question: "Jaký je hlavní účinek CBD?",
        answers: ["Psychoaktivní", "Uklidňující", "Euforizující"],
        correctAnswer: "Uklidňující",
    },
    {
        question: "V jakém roce vyšlo album Yzomandias?",
        answers: ["2015", "2018", "2016"],
        correctAnswer: "2015",
    },
    {
        question: "Jaká písnička není v albu Yzomandias?",
        answers: ["Zlato", "NahoruDolu", "Hvshthvg"],
        correctAnswer: "NahoruDolu",
    },
    {
        question: "Na jaké z těchto písniček má feat Karlo? #FREEKARLO",
        answers: ["How High 3", "Bye Bye", "Loupež"],
        correctAnswer: "Loupež",
    },
    {
        question: "V jaké písničce se nachází tento text? ´Díky těm věcem, co se dějou, už přestávám cejtit v žilách life´",
        answers: ["Nikdy už nebudu Ok", "FREE KARLO", "Rodinnej Typ"],
        correctAnswer: "FREE KARLO",
    },
    {
        question: "Doplň text: ´Kdy jsi byl naposled u Tří prasátek?´",
        answers: ["Hejtuj hru, nehejtuj hráče", "Pomalej seš, ty nemáš náběh", "A ty máš problém se mnou, tak žaluj mě nebo žaluj mámě"],
        correctAnswer: "Pomalej seš, ty nemáš náběh",
    },
    {
        question: "Kdo se nenachází na albu Yzomandias II?",
        answers: ["Lvcas Dope", "Karlo", "Doktor601"],
        correctAnswer: "Lvcas Dope",
    },
    {
        question: "Ve kterém tracku se neobjevuje Nik Tendo?",
        answers: ["Odpočívej v Pokoji", "Hlad", "NEVÍŠ NIC pt. 1"],
        correctAnswer: "Odpočívej v Pokoji",
    },
    {
      question: "Kteří dva interpreti se nacházejí na tracku číslo 13.VÁHY?",
      answers: ["Lvcas Dope, CBCH", "Jickson, Hasan", "Saul, Zkrat"],
      correctAnswer: "Saul, Zkrat",
    },
    {
      question: "Doplň, jak pokračuje text v tracku JÁN JÁKOBY vs SVĚT -  ´Yzo dal Vary na mapu´",
      answers: ["Legenda budu jak Guwop", "Koukej mama, všechno to klaplo", "Jediný, co chci, je moolah"],
      correctAnswer: "Koukej mama, všechno to klaplo",
    },
    {
      question: "Kolik tracku se nachází na YZOMANDIAS II: Zpátky na svojí planetu?",
      answers: ["13", "8", "19"],
      correctAnswer: "13",
    },
    {
      question: "Kolik tracku se nachází na YZOMANDIAS II: Zpátky na svojí planetu?",
      answers: ["13", "8", "19"],
      correctAnswer: "13",
    },
    {
      question: "Kdo z beatmakeru dělal všechny beaty? na YZOMANDIAS II: Zpátky na svojí planetu?",
      answers: ["Nobodylisten", "HAARP", "Decky"],
      correctAnswer: "Decky",
    }
];


  
  let currentQuestionIndex = 0;
  let seedCount = 0;
  
  const startButton = document.getElementById("start-button");
  const introContainer = document.getElementById("intro-container");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-button");
  const seedCountText = document.getElementById("seed-count");
  const resetButton = document.getElementById("reset-button");
  
  startButton.addEventListener("click", startGame);
  resetButton.addEventListener("click", resetGame);
  
  window.alert(`Vítej v naší hře na poctu Yzovi! Tvůrci: Džon, Advy, Dejvis :)`);
  const nameOfPlayer = window.prompt(`Jak se jmenuješ, příteli?` , `Yzo`);
  window.alert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo. `);

  const playerNameDiv = document.createElement("div");
  playerNameDiv.textContent = `Jméno hráče: ${nameOfPlayer}`;
  playerNameDiv.id = "nameofUser";
  document.getElementById("game-container").insertBefore(playerNameDiv, document.querySelector(".title"));

  const introMusic = new Audio('krajni.mp3'); 
  
  function playIntroMusic() {
    introMusic.play();
  }
  
  function stopIntroMusic() {
    introMusic.pause();
    introMusic.currentTime = 0; 
  }
  
  function startGame() {
    playerNameDiv.style.display = "none";
    startButton.style.display = "none";
    introContainer.style.display = "block";
    seedCount = 0;
    currentQuestionIndex = 0;
    updateQuestion();
  
    playIntroMusic();
  
    setTimeout(function () {
      introContainer.style.display = "none";
      questionContainer.style.display = "block";
      stopIntroMusic();
    }, 8000);
  }
  
  function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      questionText.textContent = question.question;
      for (let i = 0; i < 3; i++) {
        answerButtons[i].textContent = question.answers[i];
        answerButtons[i].addEventListener("click", checkAnswer);
      }
    } else {
      endGame();
    }
  }
  
  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  
    if (selectedAnswer === correctAnswer) {
      seedCount++;
      seedCountText.textContent = seedCount;
    }
  
    currentQuestionIndex++;
    if (seedCount === 15) {
      endGame();
    } else {
      updateQuestion();
    }
  }
  
  function endGame() {
    questionContainer.style.display = "none";
    const videoContainer = document.getElementById("video-container");
    const message = document.getElementById("message");
    const message2 = document.getElementById("message2");

    const restartButton = document.getElementById("restart-button");
  
    if (seedCount <= 5) {
      videoContainer.style.display = "block";
      videoContainer.style.textAlign = "center";
      message.textContent = "Ty jsi úplně vypatlanej, zkus to znovu.";
      restartButton.style.display = "block";
    } else if (seedCount >= 6 && seedCount <= 14) {
      const midMessage = document.getElementById("mid-message");
      midMessage.style.display = "block";
      midMessage.style.textAlign = "center";
      message2.textContent = "Nejsi marný. Chce to jen mnohem více tréninku!";
      restartButton.style.display = "block"; 
    } else if (seedCount === 15) {
      const winMessage = document.getElementById("win-message");
      winMessage.style.display = "block"; 
      playWinSound(); 
    }
  }
  
  
  
  
  
  
  const winSound = new Audio('beat.mp3');
  
  function playWinSound() {
    winSound.play();
  }
  
  function resetGame() {
    location.reload(); // Refresh stránky (Díky stackoverflow)
  }
  