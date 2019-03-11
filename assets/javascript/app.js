// Timer
var timeleft = 10;
var timer = setInterval(function () {
    $("#countdown").text(timeleft);
    timeleft--;
    if (timeleft === 0) {
        clearInterval(timer);

        // Need to go to answer page here
    }
}, 1000);

// make array with questions and answers objects
var quizQuestions = [{
        question: "Beaverdam wash is the lowest point in Utah. What is the elevation? ",
        answer: {
            a: "680'",
            b: "2000'",
            c: "2940'",
            d: "1450'"
        },
        correct: "b"
    },
    {
        question: "What is the highest point in the state of Utah? ",
        answer: {
            a: "Bald Mtn",
            b: "Lone Peak",
            c: "Mt Timpanogos",
            d: "Kings Peak"
        },
        correct: "d"
    },
    {
        question: "What is the state bird of Utah? ",
        answer: {
            a: "Perrigrine Falcon",
            b: "Hummingbird",
            c: "Quail",
            d: "California Gull"
        },
        correct: "d"
    },

]


//random pick 10 questions 
for (i = 0; i < quizQuestions.length; i++) {
    var randQuestions = Math.floor(Math.random() * quizQuestions.length);
    // console.log(quizQuestions[i].question);
    console.log(quizQuestions[randQuestions].question);
};



// post questions and answers to radio buttons on html page

// 

// store answers in variable 


//done button



// answer page



// refresh page and background image with "play again" button