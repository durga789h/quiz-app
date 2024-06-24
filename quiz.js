const questions = [
    {
    question: "What is Webpack primarily used "+"<br>"+"for?",
    options: [
        "Bundling individual JavaScript files for use in your website",
        "Sharing JavaScript code with other people",
        "Making JavaScript-reliant sites accessible to users who do not have JavaScript turned on",
        "None of the above"
    ],
    answer: "Bundling individual JavaScript files for use in your website"

    },
    {
    question: "What does the CSS selector a[href$='org'] select?",
    options: [
        "Links with the 'org' attribute",
        "All anchor elements with 'href' attribute ending with 'org'",
        "All anchor elements with 'href' attribute starting with 'org'",
        "All anchor elements"
    ],
    answer: "All anchor elements with 'href' attribute ending with 'org'"
},


    {
        question: "When using 'position: fixed' in " +"<br>" +" CSS, how will the element"+"<br>"+" behave?",
        options: [
            "It will be positioned relative to its containing element.",
            "It will scroll with the page and remain in a fixed position.",
            "It will be positioned absolutely within the nearest positioned ancestor.",
            "It will be hidden from the layout."
        ],
        answer: "It will scroll with the page and remain in a fixed position."
    },
    {
        question: "when using media queries,"+"<br>"+" media types are used to target  a device category.which choice "+"<br>"+" list current valid  media types?",
        options: ["screen", "print", "speech", "all"],
        answer: "all"
    },
    {
        question: "By default, a background-image"+"<br>"+" will repeat ?",
        options: ["indefinitely", "vertically", "horizontally", "all"],
        answer: "all"
    },
    {
        question: "Which is not valid color code?",
        options: ["color:#777;", "color:rgb(7,3,4)", "color:hsla(70, 84.678%, 94.0045%, 0.7)", "color:ffffff"],
        answer: "color:ffffff"
    },
    {
        question: "html stand for?",
        options: ["Hyper to market lan", "High Talk in mall", "Hyper Text Markup Language", "hello to mumbai local"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "In JavaScript, which function"+"<br>"+" is used to add an event listener"+"<br>"+" to an HTML element?",
        options: [" addEventListener", "onEvent", "attachEvent", "listenEvent"],
        answer: " addEventListener"
    },
    {
        question: "What selector and property"+"<br>"+" would  you use to scale an"+"<br>"+" element to be 50% smaller on"+"<br>"+" hover?",
        options: ["element:hover{transform:scale(0.5);}", "element:hover{scale(0.5);}", "element:hover{scale:50%;}", "element:hover{transform:scale(50%);}"],
        answer: "element:hover{transform:scale(0.5);}"
    }, 
    {
        question: "Which planet is known as"+"<br>"+" the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Mars"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionElement.innerHTML = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = `Score: ${score}`;
}

displayQuestion();
const restartButton = document.getElementById("restart-button");

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    scoreElement.textContent = "Score: 0";
    restartButton.style.display = "none";
}

restartButton.addEventListener("click", restartQuiz);
function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = `Score: ${score}`;
    restartButton.style.display = "block";
}
