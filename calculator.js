function add(){

}
function subtract(){

}
function multiply(){

}
function divide(){

}

function clicked(){
    alert("CLikk");
}

let btns = document.querySelectorAll('.num');
btns.forEach(btn => {
    btn.addEventListener("click",clicked);
});

