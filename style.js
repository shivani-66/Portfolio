var modals = document.querySelectorAll('.modal');
var btns = document.querySelectorAll(".open-modal");
var spans = document.getElementsByClassName("close-modal");

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function() {
        modals[i].style.display = "block";
    }
}

for(let i = 0; i < spans.length; i++){
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
}

window.onclick = function(event) {
    for(let i = 0; i < modals.length; i++){
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
