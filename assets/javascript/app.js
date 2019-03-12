//background array
// var bgArray = ['../images/arches.jpg', '../images/milky-way.jpg', '../images/road.jpg'],
//     selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];
// $("body").css("background", "url(' + selectBG + ')");


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
        answer: {
            a: "680 ft",
            b: "2000 ft",
            c: "2940 ft",
            d: "1450 ft"
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
    {
        question: "Levan, Utah is: ",
        answer: {
            a: "In the middle of the state",
            b: "Navel spelled backward",
            c: "Named by Brigham Young",
            d: "All of the above"
        },
        correct: "d"
    },
    {
        question: "The world's largest natural-rock span standing 278 feet wide and 309 feet high is called? ",
        answer: {
            a: "Delicate Arch",
            b: "Devil's Garden",
            c: "Rainbow Bridge",
            d: "Landscape Arch"
        },
        correct: "c"
    },
    {
        question: "What is the deepest point of the Great Salt Lake? ",
        answer: {
            a: "34 ft",
            b: "62 ft",
            c: "13 ft",
            d: "28 ft"
        },
        correct: "a"
    },
    {
        question: "Utah's state symbol symbolizes thrift and industry. What is it? ",
        answer: {
            a: "Sewing Machine",
            b: "Semi-Truck",
            c: "Beehive",
            d: "Seagull"
        },
        correct: "c"
    },
    {
        question: "Utah is the ___ largest state in the U.S.? ",
        answer: {
            a: "11th",
            b: "32nd",
            c: "6th",
            d: "19th"
        },
        correct: "a"
    },
    {
        question: "The largest employer in Utah is? ",
        answer: {
            a: "Adobe",
            b: "LDS Church",
            c: "Rio Tinto",
            d: "United States Goverment"
        },
        correct: "d"
    },
    {
        question: "If you boiled down 1 quart of water from the Great Salt Lake, how much salt would remain? ",
        answer: {
            a: "4 tablespoons",
            b: "1/2 cup",
            c: "1/4 cup",
            d: "1 cup"
        },
        correct: "b"
    },
    {
        question: "Utah is the ____ driest state in the U.S.? ",
        answer: {
            a: "2nd",
            b: "1st",
            c: "5th",
            d: "8th"
        },
        correct: "a"
    },
    {
        question: "Which one of these is not a Utah National Park? ",
        answer: {
            a: "Canyonlands",
            b: "Capitol Reef",
            c: "Escalante",
            d: "Bryce Canyon"
        },
        correct: "c"
    },
    {
        question: "What was the last major river to be discovered in the contiguous United States?",
        answer: {
            a: "The San Juan River",
            b: "The Escalante River",
            c: "The Virgin River",
            d: "The Green river"
        },
        correct: "b"
    },

]


//random pick questions 
var questionTracker = [];
for (i = 0; i < 6; i++) {
    var randQuestions = Math.floor(Math.random() * quizQuestions.length);
    console.log(quizQuestions[randQuestions].question);
    console.log(quizQuestions[randQuestions].answer);
    console.log(quizQuestions[randQuestions].correct);
    $("#the-questions").append("<p>" + quizQuestions[randQuestions].question + "</p>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='option' value=''>" + quizQuestions[randQuestions].answer.a + "</label>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='option' value=''>" + quizQuestions[randQuestions].answer.b + "</label>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='option' value=''>" + quizQuestions[randQuestions].answer.c + "</label>");
    $("#the-questions").append("<label class='radio-inline'><input type='radio' name='option' value=''>" + quizQuestions[randQuestions].answer.d + "</label>");



    // quizQuestions[randQuestions].splice(0, 1);

};








// post questions and answers to radio buttons on html page

// 

// store answers in variable 


//done button



// answer page



// refresh page and background image with "play again" button