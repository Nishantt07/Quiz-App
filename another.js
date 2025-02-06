
let outof = document.getElementsByClassName("noofquestions")[0];
let correctAnswers = 0;
let clickit = true;
let isAnswered = false;
let cont = document.getElementsByClassName("container")[0];
let quizcontainer = document.getElementsByClassName("quizcontainer")[0];
let categorys = null ;
let numberofquiz = null;
let start = document.getElementsByClassName("quiz-button")[0];
function changecolor(button){
    numberofquiz = button.innerText;
    // console.log(numberofquiz);
    let allbuttons = document.querySelectorAll(".lengthoquiz")
    allbuttons.forEach((element)=>{
    element.style.backgroundColor = "white";
    })

    button.style.backgroundColor = " #FEE715";
}

function changeitscolor( button ){
    categorys = button.innerText;
    // console.log(category)
    let buttons = document.querySelectorAll(".buttonsofcategory");
    buttons.forEach((element)=>{
        element.style.backgroundColor = "white"
    })

    button.style.backgroundColor = " #FEE715";
}

start.addEventListener("click" , function(){
    if(categorys === null && numberofquiz === null || categorys!== null && numberofquiz === null || categorys === null && numberofquiz !== null){
        alert("Fill up all the details")
    }
    else {
outof.innerHTML = `${currentIteration+1} out of ${numberofquiz} Questions`;

        let cat = document.querySelectorAll(".buttonsofcategory");
        let size = document.querySelectorAll(".lengthoquiz");
        cat.forEach((element)=>{
            element.style.backgroundColor = "white";
        })
            size.forEach((element)=>{
                element.style.backgroundColor  = "white";
            })
        findCategroryQuestion(categorys,numberofquiz)
        showoptions()


        }
})
   

    let ques;
    let selectedQuestions;
function findCategroryQuestion(quizcategory,iteration){
        ques = questions.filter((types)=>{
             return types.category.toLowerCase() === quizcategory.toLowerCase();
          })
        //   console.log(ques);
        selectedQuestions =  ques.slice(0,iteration);
    
}

let currentIteration = 0;
let currentoption = 0;
let listofoptions = document.getElementsByClassName("unorderlist")[0];
let htmlquestion = document.getElementsByClassName("realquestion")[0];

function showoptions(){
    cont.style.display = "none";
    quizcontainer.style.display = "block";

htmlquestion.innerHTML = 
`${selectedQuestions[currentIteration].question}`


listofoptions.innerHTML=
    
    `  <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption]}</li>
        <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption+1]}</li>
        <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption+2]}</li>
        <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption+3]}</li>`

        currentIteration = currentIteration + 1;

// addRightandWrong();

}


let next = document.getElementsByClassName("questionchangebutton")[0];
let endingPage = document.getElementsByClassName("endingpage")[0];
next.addEventListener("click", function(){
    let li = document.querySelectorAll("li");
    li.forEach((list)=>{
        list.style.cursor = "pointer";
    })
outof.innerHTML = `${currentIteration+1} out of ${numberofquiz} Questions`;

    clickit = true;
    if(isAnswered == false){
        alert("Give the answer of the question")
    }
    else if (isAnswered == true){
        if(currentIteration<numberofquiz){
            htmlquestion.innerHTML = 
        `${selectedQuestions[currentIteration].question}`
        
            listofoptions.innerHTML=
            
            `  <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption]}</li>
                <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption+1]}</li>
                <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption+2]}</li>
                <li class = "" onclick="checkoption(this)">${selectedQuestions[currentIteration].options[currentoption+3]}</li>`
        
                currentIteration = currentIteration + 1;
                isAnswered = false
        }
        
        else if (currentIteration >= numberofquiz){
            quizcontainer.style.display = "none";
            
let ending = document.getElementsByClassName("input")[0];
ending.innerHTML = `You answered ${correctAnswers} out of ${numberofquiz} questions correctly. Great Effort!`
            endingPage.style.display = "block";
            isAnswered = false;
            

        
        }
    }


})


let restart = document.getElementsByClassName("itsbutton")[0]
restart.addEventListener("click" , function(){
currentIteration = 0;
currentoption = 0;
selectedQuestions = null;
quizcontainer.style.display = "none";
endingPage.style.display = "none";
correctAnswers = 0;

location.reload();
})


function checkoption(that){

    let anotherCurrentIteration = currentIteration - 1;
    if(clickit == true){
        if(that.innerText.trim() === selectedQuestions[anotherCurrentIteration].correctAnswer.trim()){
            that.style.backgroundColor = "#DAF7A6";
            isAnswered = true;
            correctAnswers++;

            let i = document.createElement("i");
            i.classList.add("fa-solid","fa-circle-check","right");
            i.setAttribute("id","right")

            that.appendChild(i);

            let li = document.querySelectorAll("li");
            li.forEach((list)=>{
                list.style.cursor = "not-allowed";
            })
        }
        else if(that.innerText.trim() !== selectedQuestions[anotherCurrentIteration].correctAnswer.trim()) {
            that.style.backgroundColor = "#FAA0A0";
            let listofoptionss = document.querySelectorAll("li");
            let i = document.createElement("i");
            i.classList.add("fa-solid","fa-circle-xmark", "wrong")
            i.setAttribute("id","wrong")
            that.appendChild(i);
            listofoptionss.forEach((list)=>{
                if(selectedQuestions[anotherCurrentIteration].correctAnswer.trim() === list.innerText.trim()){
                list.style.backgroundColor = "#DAF7A6";
                let i = document.createElement("i");

                i.classList.add("fa-solid","fa-circle-check","right");
            i.setAttribute("id","right")

                list.appendChild(i);
    
                }
    
            })

            isAnswered = true;
            let li = document.querySelectorAll("li");
            li.forEach((list)=>{
                list.style.cursor = "not-allowed";
            })
        }
        clickit = false;
    }

}
