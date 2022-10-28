var startbtn = document.querySelector(".start") //start button
var timer = document.querySelector(".timer"); //timer box
var option1 = document.querySelector("#option1"); //answer 1 box
var option2 = document.querySelector("#option2"); // answer 2 box
var option3 = document.querySelector("#option3"); //answer 3 box
var option4 = document.querySelector("#option4"); //answer 4 box
var question = document.querySelector(".questions"); // question box
var score = document.querySelector(".score"); // score box
var allchoices = document.querySelector(".allchoices"); // all four answer options
var questionNumber = document.querySelector(".questionnumber"); // number user is on

//timer variables
var count = 30;
var timerInterval;

//questionvariables
var questionCount = 0; 
var score = 0;

const allQuestions = [
    {
        id: 0,
        question: "Which is not a data type?",
        option1: "string", 
        option2: "option",
        option3: "boolean",
        option4: "number",
        answer: "option"
    },
    {
        id: 1,
        question: "How do you link a javascript page?",
        option1: "<script>",
        option2: "<html>",
        option3: "<java>",
        option3: "<js>",
        answer: "option"
    },
    {
        id: 2,
        question: "How do you declare a variable?",
        option1: "myName",
        option2: "add",
        option3: "option",
        option4: "var",
        answer: "option"
    },
    {
        id: 3,
        question: "How do you create a pop up window for the user?",
        option1: "var",
        option2: "document",
        option3: "window",
        option4: "alert",
        answer: "option"
    },
    { 
        id: 4,
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        option1: "position",
        option2: "standard",
        option3: "window",
        option4: "location",
        answer: "option"
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
    
  }, 1000);
}

//this function will start the quiz
function startQuiz() {
    //then i will start the timer
    setTime();
  //timer set then show questions & options choices
  question.innerHTML = allQuestions[0].question;
  option1.innerHTML = allQuestions[0].option1;
  option2.innerHTML = allQuestions[0].option2;
  option3.innerHTML = allQuestions[0].option3;
  option4.innerHTML = allQuestions[0].option4;
  
  
}


//checking if answer is correct or not, if correct will add to score
function checkAnswer (userAnswer) {
 var correctAnswer = option1.innertext
}

console.log(checkAnswer);
    //look at my questions array and check what my current question is and what the answer is, if it matches then score will increase.
//once score updated
//increment question count, then call next question 

option1.addEventListener("click", function(event){
    
    console.log(option1.innerText)
})
option2.addEventListener("click", function(event){
    
    console.log(option2.innerText)

})

option3.addEventListener("click", function(event){
    
    console.log(option3.innerText)

})
option4.addEventListener("click", function(event){
    
    console.log(option4.innerText)

})

startbtn.addEventListener("click", startQuiz)



