//fancy
var text = document.querySelector(".fancy");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + '</span>';
    
}

let char = 0;
let timer = setInterval(ontick, 50);
function ontick() {
    const span = document.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char ===splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = null;
}



///show-more
var ll = document.getElementsByClassName("col6-c")
var j = 1;

function ocultar(obj) {
    if (j==1) {
        var h = document.getElementById(obj);
        h.style.display = 'inline-block';
        j = -1;
        console.log("yes")
    }else{
        var h = document.getElementById(obj);
        h.style.display = 'none';
        j = 1;
        console.log("no")
    }
}






//menu

var s = 1
var side = document.querySelector('#side')
var menu = document.querySelector('#menu')
var fechar = document.querySelector('#close')
menu.addEventListener("click", show)
fechar.addEventListener("click", close)

function close() {
    side.style.left = '-400px'
    console.log("yessdas")
    s = 1;
}
function show() {
    if (s==1) {
        side.style.left = '0px'
        s = -1;
        console.log("yes")
    }else{
        side.style.left = '-400px'
        s = 1;
    }
}





//reveal

window.addEventListener("scroll", reveal)

function reveal() {
    var reveal = document.querySelectorAll(".reveal")
    
    for(var i = 0; i < reveal.length; i++){
        var windowHeight = window.innerHeight
        var revealTop = reveal[i].getBoundingClientRect().top
        var revealPoint =150

        if (revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add("active")
        }else{
            reveal[i].classList.remove("active")
        }
    }
} 
