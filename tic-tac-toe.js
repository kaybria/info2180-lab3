 window.onload = function(){
    let gamelayout = document.querySelectorAll("#board div");
    for(let i=0; i<gamelayout.length; i++){
        gamelayout[i].classList.add('square');
        
    }}