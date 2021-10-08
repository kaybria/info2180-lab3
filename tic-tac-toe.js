 
 window.onload = function(){
    let gamelayout = document.querySelectorAll("#board div");
    for(let i=0; i<gamelayout.length; i++){
        gamelayout[i].classList.add("square");
        const xClass= "X"
        const  oClass= "O"
        let circleTurn 
    gamelayout.forEach(element => { element.addEventListener("click",isClicked)     
    })
    const gameplay = []
    function isClicked(ele){
        const space = ele.target
        const currentClass = circleTurn ? oClass :  xClass
        placePlay(space,currentClass)
        console.log(currentClass)
        gameplay.push(currentClass)
        console.log(gameplay)
        circleTurn =! circleTurn

         
    }}
    function placePlay(space,currentClass){
        space.textContent = currentClass
        space.classList.add(currentClass)
    }
    
 }

