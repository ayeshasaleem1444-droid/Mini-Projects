//start screen id
const firstscreen = document.querySelector("#first-screen");
let startbtn = document.querySelector("#start-button");
// quiz screen id
const quizscreen = document.querySelector("#quiz-screen");
const questionheader = document.querySelector("#question");
const questionnumber = document.querySelector("#question-numbers");
const scorenumber = document.querySelector("#score-number");
const optioncontainer = document.querySelector("#option-container");
const progress = document.querySelector("#progress");
// result screen
const resultscreen = document.querySelector("#result-screen");
const gotscore = document.querySelector("#got-score");
const comment = document.querySelector("#comment");
const restartbtn = document.querySelector("#restart");

const questions = [
  {
    question:
      "If I were completely broke and needed to hide from the law, where is the first place you’d look for me?",
    answers: [
      {
        text: "Hidden inside a massive pile of unwashed laundry",
        correct: false,
      },
      {
        text: "In the back corner of the nearest cafe, drinking a coffee I can't afford",
        correct: false,
      },
      {
        text: "At your house, raiding your fridge like nothing happened",
        correct: true,
      },
      {
        text: "Boarding a flight to a remote island under the alias 'Bob'",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is my absolute worst, most ridiculous habit that you secretly tolerate?",
    answers: [
      {
        text: "Texting you 15 separate messages instead of sending one normal paragraph",
        correct: true,
      },
      {
        text: "Sending you unhinged reels at 3:00 AM expecting an immediate reply",
        correct: false,
      },
      {
        text: "Repeating the exact same joke five times because I think it’s peak comedy",
        correct: false,
      },
      {
        text: "Ghosting plans to stay home, only to ask you what you're doing 10 minutes later",
        correct: false,
      },
    ],
  },
  {
    question:
      "If we were trapped in a zombie apocalypse, what would our team dynamic honestly look like?",
    answers: [
      {
        text: "I would accidentally trip over a pebble and get caught immediately",
        correct: false,
      },
      {
        text: "You would sacrifice me to the zombies to save yourself without hesitation",
        correct: false,
      },
      {
        text: "We would argue so loud about where to hide that the zombies would find us in seconds",
        correct: true,
      },
      {
        text: "We would actually survive, but only because we hid in a grocery store snack aisle",
        correct: false,
      },
    ],
  },
  {
    question:
      "If a movie was made about our friendship, what would the genre and title be?",
    answers: [
      {
        text: "A chaotic comedy called 'Two Idiots, Zero Shared Braincells'",
        correct: true,
      },
      {
        text: "A psychological thriller called 'Why Do I Answer Their Calls?'",
        correct: false,
      },
      {
        text: "A dramatic survival film called 'Surviving the Group Chat'",
        correct: false,
      },
      {
        text: "A fantasy movie called 'The Constant Search for Where We Left Our Keys'",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the fastest, easiest way to instantly bribe me or fix my bad mood?",
    answers: [
      { text: "Buying me food or a favorite snack", correct: true },
      { text: "Showing me a viral, stupidly funny meme", correct: false },
      {
        text: "Agreeing with me completely when I’m ranting about something minor",
        correct: false,
      },
      {
        text: "Canceling our outdoor plans so we can just stay in and do absolutely nothing",
        correct: false,
      },
    ],
  },
];
//quiz variables
let currentQindex = 0;
let score = 0;
let answerDisabled = false;
//event listeners
startbtn.addEventListener("click", startquiz);
restartbtn.addEventListener("click", restartquiz);
function startquiz() {
  currentQindex = 0;
  score = 0;
  scorenumber.textContent = 0;
  progress.style.width = "0%";
  firstscreen.classList.remove("active");
  quizscreen.classList.add("active");

  showquestion();
}
function showquestion() {
  answerDisabled = false;
  const currentquestionnumber = questions[currentQindex];
  questionnumber.textContent = currentQindex + 1;
  const progresspercent = (currentQindex / questions.length) * 100;
  progress.style.width = progresspercent + "%";
  questionheader.textContent = currentquestionnumber.question;
  optioncontainer.textContent = "";
  currentquestionnumber.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    optioncontainer.appendChild(button);
  });
}
function selectAnswer(event) {
  //if already click so return means stop right there
  if (answerDisabled) return;
  // if not then lock it so second click is not allowed
  answerDisabled = true;
  const selectedbtn = event.target;
  //check if selected button is correct or not
  const iscorrect = selectedbtn.dataset.correct === "true";
  Array.from(optioncontainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedbtn) {
      button.classList.add("incorrect");
    }
  });
  if (iscorrect) {
    score++;
    scorenumber.textContent = score;
  }
  setTimeout(() => {
    currentQindex++;
    if (currentQindex < questions.length) {
      showquestion();
    } else {
      showresult();
    }
  });
}
function showresult() {
  quizscreen.classList.remove("active");
  resultscreen.classList.add("active");
  gotscore.textContent = score;

  //result calculation
  const percentage = (score / questions.length) * 100;

  if (percentage === 100) {
    comment.textContent = "You really know me.";
  } else if (percentage >= 80) {
    comment.textContent = "how the hell did you get wrong on 1 question huh??";
  } else if (percentage >= 60) {
    comment.textContent = "You disappointed me bro!!!";
  } else if (percentage >= 40) {
    comment.textContent = "You do not me at all bro!!!";
  } else {
    comment.textContent = "What the hell bro!!!";
  }
}
function restartquiz() {
  currentQindex = 0;
  score = 0;
  scorenumber.textContent = 0;
  progress.style.width = "0%";
  resultscreen.classList.remove("active");
  quizscreen.classList.add("active");
  scorenumber.textContent = 0;
  showquestion();
}
