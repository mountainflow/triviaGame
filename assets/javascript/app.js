// randomize background array.
var bgArray = ["./assets/images/arches.jpg", "./assets/images/milky-way.jpg", "./assets/images/road.jpg", "./assets/images/anotherArch.jpg",
    "./assets/images/ArchesNationalParkUtah.jpg", "./assets/images/bridalViel.jpg", "./assets/images/castleValley.jpg", "./assets/images/bryce.jpg",
    "./assets/images/castleValley_02.jpg", "./assets/images/conservationArch.jpg", "./assets/images/floodedFlats.jpg", "./assets/images/moreArches.jpg",
    "./assets/images/mtnReflection.jpg", "./assets/images/ponyExpress.jpg", "./assets/images/sunrise.jpg", "./assets/images/twistyRiver.jpg"
];
var selectBG = [Math.floor(Math.random() * bgArray.length)];
$("body").css("background-image", "url(" + bgArray[selectBG] + ")"); //getting file not found error even when hard coding url path
console.log("selectBG: " + selectBG); // this logs random correctly, but as an integer
console.log("random image: " + bgArray[selectBG]); // This logs random image file paths correctly


// Timer
var timeleft = 10;
var timer = setInterval(function () {
    timeleft--;
    $("#countdown").text(timeleft);

    if (timeleft === 0) {
        clearInterval(timer);
        console.log("times up");


        // Need to go to answer page here
    }
}, 1000);


// make array with questions and answers objects
var quizQuestions = [{
        question: "Beaverdam wash is the lowest point in Utah. What is the elevation? ",
        answer: [
            " 680 ft",
            " 2000 ft",
            " 2940 ft",
            " 1450 ft"
        ],
        correct: "2000 ft"
    },
    {
        question: "What is the highest point in the state of Utah? ",
        answer: [
            " Bald Mtn",
            " Lone Peak",
            " Mt Timpanogos",
            " Kings Peak"
        ],
        correct: "Kings Peak"
    },
    {
        question: "What is the state bird of Utah? ",
        answer: [
            " Perrigrine Falcon",
            " Hummingbird",
            " Quail",
            " California Gull"
        ],
        correct: "California Gull"
    },
    {
        question: "Levan, Utah is: ",
        answer: [
            " In the middle of the state",
            " Navel spelled backward",
            " Named by Brigham Young",
            " All of the above"
        ],
        correct: "All of the above"
    },
    {
        question: "The world's largest natural-rock span standing 278 feet wide and 309 feet high is called? ",
        answer: [
            " Delicate Arch",
            " Devil's Garden",
            " Rainbow Bridge",
            " Landscape Arch"
        ],
        correct: "Rainbow Bridge"
    },
    {
        question: "What is the deepest point of the Great Salt Lake? ",
        answer: [
            " 34 ft",
            " 62 ft",
            " 13 ft",
            " 28 ft"
        ],
        correct: "34 ft"
    },
    {
        question: "Utah's state symbol symbolizes thrift and industry. What is it? ",
        answer: [
            " Sewing Machine",
            " Semi-Truck",
            " Beehive",
            " Seagull"
        ],

        correct: "Beehive"
    },
    {
        question: "Utah is the ___ largest state in the U.S.? ",
        answer: [
            " 11th",
            " 32nd",
            " 6th",
            " 19th"
        ],
        correct: "11th"
    },
    {
        question: "The largest employer in Utah is? ",
        answer: [
            " Adobe",
            " LDS Church",
            " Rio Tinto",
            " United States Goverment"
        ],
        correct: "United States Goverment"
    },
    {
        question: "If you boiled down 1 quart of water from the Great Salt Lake, how much salt would remain? ",
        answer: [
            " 4 tablespoons",
            " 1/2 cup",
            " 1/4 cup",
            " 1 cup"
        ],
        correct: "1/2 cup"
    },
    {
        question: "Utah is the ____ driest state in the U.S.? ",
        answer: [
            " 2nd",
            " 1st",
            " 5th",
            " 8th"
        ],
        correct: "2nd"
    },
    {
        question: "Which one of these is not a Utah National Park? ",
        answer: [
            " Canyonlands",
            " Capitol Reef",
            " Escalante",
            " Bryce Canyon"
        ],
        correct: "Escalante"
    },
    {
        question: "What was the last major river to be discovered in the contiguous United States?",
        answer: [
            " The San Juan River",
            " The Escalante River",
            " The Virgin River",
            " The Green river"
        ],
        correct: "The Escalante River"
    },

]


// random pick questions 
// post questions and answers to radio buttons on html page
// store answers in variable
var correctAnswers = 0;
var incorrectAnswers = 0;
var unselectedAnswers = 0;
for (i = 0; i < 6; i++) {
    var randQuestions = Math.floor(Math.random() * quizQuestions.length);
    console.log(quizQuestions[randQuestions].question);
    console.log(quizQuestions[randQuestions].answer);
    console.log(quizQuestions[randQuestions].correct);
    $("#the-questions").append("<p>" + quizQuestions[randQuestions].question + "</p>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='" + quizQuestions[randQuestions].question + "' value='" + quizQuestions[randQuestions].answer[0] + "'>" + quizQuestions[randQuestions].answer[0] + "</label>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='" + quizQuestions[randQuestions].question + "' value='" + quizQuestions[randQuestions].answer[1] + "'>" + quizQuestions[randQuestions].answer[1] + "</label>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='" + quizQuestions[randQuestions].question + "' value='" + quizQuestions[randQuestions].answer[2] + "'>" + quizQuestions[randQuestions].answer[2] + "</label>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='" + quizQuestions[randQuestions].question + "' value='" + quizQuestions[randQuestions].answer[3] + "'>" + quizQuestions[randQuestions].answer[3] + "</label>");


    quizQuestions.splice(randQuestions, 1);
};

// create Done button at bottom, after questions

// in Done button, function (if/else); also works for timing out

// clear page & do following logic:

// if (radio button checked value === found question's correct answer) -> increment correctAnswer
// else if -> unselected -> increment unselectedAnswer
// else -> increment incorrectAnswer

// answer page with results

// refresh page and background image with "play again" button