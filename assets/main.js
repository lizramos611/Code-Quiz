var startbtn = document.querySelector(".start") //start button
var timer = document.querySelector(".timer"); //timer box
var option1 = document.querySelector(".option1"); //answer 1 box
var option2 = document.querySelector(".option2"); // answer 2 box
var option3 = document.querySelector(".option3"); //answer 3 box
var option4 = document.querySelector(".option4"); //answer 4 box
var question = document.querySelector(".questions"); // question box
var score = document.querySelector(".score"); // score box
var allchoices = document.querySelector(".allchoices"); // all four answer options
var questionNumber = document.querySelector(".questionnumber"); // number user is on
var count = 30;
var timerInterval;
var questionCount = 0; 
var score = 0;
const allQuestions = [
    {
        question: "Which is not a data type?",
        option1: "string",
        option2: "option",
        option3: "boolean",
        option4: "number",
        answer: 2
    },
    {
        question: "How do you link a javascript page?",
        option1: "<script>",
        option2: "<html>",
        option3: "<java>",
        option3: "<js>",
        answer: 1
    },
    {
        question: "How do you declare a var?",
        option1: "myName",
        option2: "add",
        option3: "option",
        option4: "var",
        answer: 4
    },
    {
        question: "How do you create a pop up window for the user?",
        option1: "var",
        option2: "document",
        option3: "window",
        option4: "alert",
        answer: 4
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        option1: "position",
        option2: "standard",
        option3: "window",
        option4: "location",
        answer: 3
    },
]

function setTime() {

  var timerInterval = setInterval(function() {
    count--;
    timer.innerHTML = count;

    if(count <= 0) {
     
      clearInterval(timerInterval);
      timer.textContent = "time is up!";
      gameOver();

    }
    else if(questionCount >= allQuestions.length +1) {
        clearInterval(timerInterval);
        gameOver();
    }
    
  }, 2000);
}

console.log(allQuestions)
function startQuiz(){
    startbtn.addEventListener("click", setTime())
  
    }

startQuiz();







