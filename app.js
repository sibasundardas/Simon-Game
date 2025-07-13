let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
h2= document.querySelector("h2");

let btns = ["yellow", "green", "red", "purple"];

document.addEventListener("keypress", function(){
    if (started == false) {
        console.log("Started");
        started = true;
    }
    levelUp();
    
});
function btnflash(btn){
    btn.classList.add("btnflash");
    setTimeout(function(){
        btn.classList.remove("btnflash");
    }, 150);
}
function gameReset() {
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
}


// Check the answer

function checkAnswer(idx){
    
    if (gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("correct");
        
    }else{
        h2.innerHTML=`Game Over. Your Previous Score is <b>${level}</b> Press any Key to Start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "White";
        },200);
        gameReset();
    }
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randidx=Math.floor(Math.random()*3);
    let randcolor= btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    
}
//  For Access all buttons 
function btnpress(){
    console.log("btn pressed");
    let btn = this;
    // console.log(btn);
    btnflash(btn);
    usercolor= btn.getAttribute("id");
    // console.log(usercolor);
    userSeq.push(usercolor);
    // console.log(`User sq ${userSeq}`);
    checkAnswer(userSeq.length-1);
    // gameReset();
}

let allbtns= document.querySelectorAll('.btn');
for (btn of allbtns){
    btn.addEventListener("click", btnpress);
}
