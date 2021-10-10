var combinationsToWin = new Array([0,1,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    )
 window.onload = function(){startGame()}
 function startGame(){
    let gamelayout = document.querySelectorAll("#board div");
    for(let i=0; i<gamelayout.length; i++){
        gamelayout[i].setAttribute("class","square");
        gamelayout[i].setAttribute("id",i)
        const xClass= "X"
        const  oClass= "O"
        let circleTurn 
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
        newgame = document.querySelector(".btn")
    gamelayout.forEach(element => { element.addEventListener("click",isClicked)  
    })
     
    const gameplay = []
    function isClicked(ele){
        const space = ele.target
        const currentClass = circleTurn ? oClass :  xClass
        placePlay(space,currentClass)
        circleTurn =! circleTurn
        checkwinner(gamelayout,currentClass)
        //console.log(currentClass)
    
    newgame.onclick = () =>{
        window.location.reload();

    }
    
    }
}
 }
// to check if current player has won
function checkwinner(gamelayout,currentClass){
    const winmessage = document.getElementById("status");
    for(let i=0; i<combinationsToWin.length; i++){
        if(gamelayout[combinationsToWin[i][0]].innerHTML === currentClass && gamelayout[combinationsToWin[i][1]].innerHTML=== currentClass && gamelayout[combinationsToWin[i][2]].innerHTML===currentClass){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! " + currentClass + " is the Winner!"  
        }
    }
}
//to display X or O on board
function placePlay(space,currentClass){
    space.textContent = currentClass
    space.classList.add(currentClass)
    space.style.pointerEvents = "none"
}