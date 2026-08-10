// =================================================================================================
// Without Object
// =================================================================================================

let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}
// =================================================================================================
//Organize using object
// =================================================================================================

let quizObject = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  getCorrectAnswer() {
    return quizObject.options[quizObject.correctAnswerIndex];
  },
  isAnswerCorrect(index) {
    return index === quizObject.correctAnswerIndex;
  },
};
// =================================================================================================
// Use a function to create object
// =================================================================================================

function quizFunction(title, options, correctAnswerIndex) {
  let quiz = {};
  quiz.title = title;
  quiz.options = options;
  quiz.correctAnswerIndex = correctAnswerIndex;
  quiz.getCorrectAnswer = function () {
    return quiz.options[quiz.correctAnswerIndex];
  };
  quiz.isAnswerCorrect = function (index) {
    return index === quiz.correctAnswerIndex;
  };
  return quiz;
}
const testQuizFunction = quizFunction(title, options, correctAnswerIndex);

// =================================================================================================
// Convert the function to use `this` keyword
// =================================================================================================

function quizFunctionWithThis(title, options, correctAnswerIndex) {
  let quiz = {};
  quiz.title = title;
  quiz.options = options;
  quiz.correctAnswerIndex = correctAnswerIndex;
  quiz.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  quiz.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  return quiz;
}
const testQuizFunctionWithThis = quizFunctionWithThis(
  title,
  options,
  correctAnswerIndex
);
