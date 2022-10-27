var startbtn = document.querySelector(".start")
var timer = document.querySelector(".timer");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var question = document.querySelector(".questions");
var score = document.querySelector(".score");
var allchoices = document.querySelector(".allchoices")

var count = 30;

var timerInterval;


var score = 0;

function startQuiz() {
    allchoices.style.display= "block";
   
}

function gameOver() {
    allchoices.style.display = "none";
    score.style.display = "block";
    console.log(score)
    // show final score
    score.textContent = "Your final score is :" + score ;
    // clearInterval(timerInterval);  
    timer.style.display = "none"; 
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    count--;
    timer.innerHTML = count;

    if(count <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timer.textContent = "time is up!";
      gameOver();

    }
    else if(questionCount >= allQuestions.length +1) {
        clearInterval(timerInterval);
        gameOver();
    }
    
  }, 1000);
}





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




