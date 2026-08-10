// ==========================================================================================================
// Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// ==========================================================================================================
let questionMethod = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

function Question(title, options, correctAnswerIndex) {
  let quiz = Object.create(questionMethod);
  quiz.title = title;
  quiz.options = options;
  quiz.correctAnswerIndex = correctAnswerIndex;
  return quiz;
}

let firstQuestionWithPrototypalPattern = Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestionWithPrototypalPattern = Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

// ==========================================================================================================
// Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// ==========================================================================================================
function Question(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

let firstQuestionWithPseudoclassicalPattern = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestionWithPseudoclassicalPattern = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
// ==========================================================================================================
// Create using class
// ==========================================================================================================
class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestionWithClass = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestionWithClass = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
