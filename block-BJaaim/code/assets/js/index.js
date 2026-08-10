// let form = document.querySelector("form");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let quizElm = document.querySelector(".quiz");

let totalQuestions = document.querySelector(".total");

let showResult = document.querySelector(".show-result");

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return answer === this.options[this.correctAnswerIndex];
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }

  incrementScore() {
    this.score += 1;
  }
  nextQuestion() {
    this.activeIndex += 1;
    this.createUI();
  }
  prevQuestion() {
    this.activeIndex -= 1;
    this.createUI();
  }

  addQuestion(title, options, answerIndex) {
    let question = new Question(title, options, answerIndex);
    this.questions.push(question);
  }

  handleButtons() {
    if (this.activeIndex === 0) {
      prev.style.display = "none";
      showResult.style.display = "none";
    } else if (this.activeIndex === this.questions.length - 1) {
      next.style.display = "none";
      showResult.style.display = "inline-block";
    } else {
      next.style.display = "inline-block";
      prev.style.display = "inline-block";
    }
  }

  createUI() {
    quizElm.innerHTML = "";
    let activeQuestion = this.questions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.classList.add("question");

    legend.innerText = `Question No ${this.activeIndex + 1}: ${
      activeQuestion.title
    }`;

    let optionsElm = document.createElement("div");
    optionsElm.classList.add("options");

    let buttonWrapper = document.createElement("div");

    buttonWrapper.classList.add("button-wrapper");
    let button = document.createElement("button");
    button.type = "submit";
    button.innerText = "Submit";
    buttonWrapper.append(button);

    activeQuestion.options.forEach((option, index) => {
      let optionContainer = document.createElement("div");
      optionContainer.classList.add("options-container");

      let input = document.createElement("input");
      input.id = `option-${index}`;
      input.type = "radio";
      input.name = "options";
      input.value = option;
      let label = document.createElement("label");
      label.for = `option-${index}`;
      label.innerText = option;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.checked) {
          if (this.activeIndex !== this.questions.length - 1) {
            this.nextQuestion();
          } else {
            alert(`You have Finshed the quiz! Chcek your reselt.`);
          }
          activeQuestion.getCorrectAnswer();
          if (activeQuestion.isCorrect(input.value)) {
            this.incrementScore();
          } else {
            alert(`The Correct Answer is ${activeQuestion.getCorrectAnswer()}`);
          }
        }
      });
      optionContainer.append(input, label);
      optionsElm.append(optionContainer);
    });

    this.handleButtons();
    totalQuestions.innerText = `Total Questions: ${this.questions.length}`;

    fieldset.append(legend, optionsElm, buttonWrapper);
    form.append(fieldset);
    quizElm.append(form);
  }
}

function init() {
  let quiz = new Quiz();

  questionnire.forEach((question) => {
    quiz.addQuestion(question.title, question.options, question.answerIndex);
  });

  quiz.createUI();

  next.addEventListener("click", quiz.nextQuestion.bind(quiz));

  prev.addEventListener("click", quiz.prevQuestion.bind(quiz));

  showResult.addEventListener("click", () => {
    alert(`Your Score is ${quiz.score}`);
  });
}

init();
