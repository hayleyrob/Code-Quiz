//DOM assignment
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const counter = document.getElementById('counter')
const answerA = document.getElementById('A')
const answerB = document.getElementById('B')
const answerC = document.getElementById('C')
const answerD = document.getElementById('D')
const counter = document.getElementById('counter')
const scoreDiv = document.getElementById('score')

//Array of Questions
const questions = [
  {
    question: "What does CSS stand for?",
    answerA: "Current Style Source",
    answerB: "Cascading Style Sheet",
    answerC: "Cascading Style Source",
    answerD: "Color Style Sheet",
    correctAnswer: 'b'

  },

  {
    question: "What does HTML stand for?",
    answerA: "Hypertext Markup Language",
    answerB: "How To Make Languages",
    answerC: "Hosting Takeover Make Language",
    answerD: "Hundred Text Markup Language",
    correctAnswer: "a"
  },

  {
    question: "What does Javascript do?",
    answerA: "Provides interactive functionality",
    answerB: "Styles website",
    answerC: "Creates structure of webpage",
    answerD: "None of the above",
    correctAnswer: "a"
  }
];

//define variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0
const questionTime = 10;
let TIMER = setInterval(renderCounter, 1000);
let score = 0;

//render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = '<h6>' + q.question + '</h6>';
  answerA.innerHTML = q.answerA;
  answerB.innerHTML = q.answerB;
  answerC.innerHTML = q.answerC;
  answerD.innerHTML = q.answerD;
}

//startquiz function
function startQuiz() {
  renderQuestion();
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}

//checkAnswer function
function checkAnswer(answer) {
  if (answer === questions[runningQuestion].correct) {
    score++
  } else {
  }


  function counterRender() {
    if (count <= questionTime) {

      counter.innerHTML = count;
      count++
    } else {
      count = 0;
      answerisWrong();
      if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
      } else {
        clearInterval(TIMER);
        scoreRender();
      }

    }
  }

  startQuiz()
  renderQuestion()
  runningQuestionIndex++
  renderQuestion()