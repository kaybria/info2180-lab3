 
 window.onload = function(){startGame()}
 function startGame(){
    let gamelayout = document.querySelectorAll("#board div");
    for(let i=0; i<gamelayout.length; i++){
        gamelayout[i].classList.add("square");
        const xClass= "X"
        const  oClass= "O"
        let circleTurn 
        newgame = document.querySelector(".btn")
    gamelayout.forEach(element => { element.addEventListener("click",isClicked)     
    })
    const gameplay = []
    function isClicked(ele){
        const space = ele.target
        const currentClass = circleTurn ? oClass :  xClass
        placePlay(space,currentClass)
        console.log(circleTurn)
        gameplay.push(currentClass)
        console.log(gameplay)
        circleTurn =! circleTurn

    }
    newgame.onclick = () =>{
        window.location.reload();

    }
    //const restartGame = document.getElementsByClassName("btn")
    gamelayout.forEach(element => { element.addEventListener("mouseover",hoverchange)     
    })
    function hoverchange(ele){
        ele.target.classList.add("hover")
    }
    gamelayout.forEach(element => { element.addEventListener("mouseout",hoverout)     
    })
    function hoverout(ele){
        ele.target.classList.remove("hover")
    }
    }
}


function placePlay(space,currentClass){
    space.textContent = currentClass
    space.classList.add(currentClass)
    space.style.pointerEvents = "none"
}

