//task 2
function change_text(){
    document.getElementById("content").innerHTML="You clicked the button and it changed";
}
//task 3
function showHide(){
    const div = document.getElementById('task3_div');
    if (div.style.visibility === 'hidden') {
        div.style.visibility='visible';
    } else {
        div.style.visibility='hidden';
    }
}
//task 4
const btn = document.getElementById('btn4');
let c=0;
btn.addEventListener('click', function handleClick() {
    if(c==0){
        btn.textContent = 'GoodBye';
        c=1;
    }
    else{
        btn.textContent = 'Hello';
        c=0;
    }
});

//task 5
function changeToRed(){
    document.body.style.backgroundColor = 'red';
}
function changeToGreen(){
    document.body.style.backgroundColor = 'green';
}
function changeToBlue(){
    document.body.style.backgroundColor = 'blue';
}
function changeToBlack(){
    document.body.style.backgroundColor = 'black';
}
function changeToYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function changeToPink(){
    document.body.style.backgroundColor = 'pink';
}
