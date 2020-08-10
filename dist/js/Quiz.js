window.onload = function(){
    show(0);
}
// Questions
let questions = [
    {
        id:1,
        question: "What does RAM stands for ?",
        answer: "Random Access Memory",
        options:[
            "Random Access Memory",
            "Read And Meat",
            "Randomly Access Memory",
            "None Of These"
        ]
    },
    {
        id:2,
        question: "What is the capital of Pakistan ?",
        answer: "Islamabad",
        options:[
            "Karachi",
            "Punjab",
            "Islamabad",
            "None Of These"
        ]
    },
    {
        id:3,
        question: "What does CPU stands for ?",
        answer: "Central Processing Unit",
        options:[
            "Control Program Unit",
            "Central Processing Unit",
            "Camera Print Unit",
            "None Of These"
        ]
    },
    {
        id:4,
        question: "What does E-mail stands for ?",
        answer: "Electronic Mail",
        options:[
            "Electronic Mail",
            "Electric Mail",
            "English Mail",
            "None Of These"
        ]
    },
    {
        id:5,
        question: "What does GUI stands for ?",
        answer: "Graphical User Interface",
        options:[
            "Graphical User Interest",
            "Graphical User Internet",
            "Graphical User Interface",
            "None Of These"
        ]
    },
    {
        id:6,
        question: "Who is the father of computer ?",
        answer: "Charles Babbage",
        options:[
            "Charles Gabbage",
            "Charles Babbage",
            "Charles Habbage",
            "None Of These"
        ]
    },
    {
        id:7,
        question: "What does IDE stands for ?",
        answer: "Integrated Development Environment",
        options:[
            "Internal Data Erase",
            "International Deuterium Elixer",
            "Integrated Development Environment",
            "None Of These"
        ]
    },
    {
        id:8,
        question: "What does PEC stands for ?",
        answer: "Pakistan Engineering Council",
        options:[
            "Pakistan Engineering Council",
            "Pakistan Energy Crisis",
            "Poland's En-riched Cereal",
            "None Of These"
        ]
    },
    {
        id:9,
        question: "What does ROM stands for ?",
        answer: "Read Only Memory",
        options:[
            "Random Online Memory",
            "Read On-time Metallurgy",
            "Read Only Memory",
            "None Of These"
        ]
    },
    {
        id:10,
        question: "What is the capital of Rome ?",
        answer: "Italy",
        options:[
            "Ecuador",
            "Paris",
            "Italy",
            "None Of These"
        ]
    },
]
function submitForm(e){
e.preventDefault();
let name = document.forms["welcome_form"]["name"].value;

// Store player name
sessionStorage.setItem("name", name);
location.href="quiz.html";
}

let question_count = 0;
let point = 0;

function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // To check the answer given by the user
    if(user_answer == questions[question_count].answer){
        point+= 1;
        sessionStorage.setItem("points", point);
    }
    if(question_count == questions.length-1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(myTime);
        location.href="end.html";
        return;
    }
   
    
    question_count++;
    show(question_count);
}
function show(count){
    let question = document.getElementById('questions');
    question.innerHTML = `<h2>Q${question_count+1}. ${questions[count].question}<h2>
    <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>`;
                toggleActive();
}
function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i<option.length;i++){
        option[i].onclick = function(){
            for(let j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active")
        }
    }
}