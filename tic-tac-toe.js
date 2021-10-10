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
    const winmessage = document.getElementById("status");
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
        //element.setAttribute("id",count);
        //count++
    })
    //console.log(gamelayout[i].innerText)
    const gameplay = []
    function isClicked(ele){
        const space = ele.target
        const currentClass = circleTurn ? oClass :  xClass
        placePlay(space,currentClass)
        circleTurn =! circleTurn
        //trying if statments 
        if(gamelayout[0].innerHTML == "X" && gamelayout[1].innerHTML == "X" &&gamelayout[2].innerHTML == "X"){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! X is the Winner!"
            //console.log(winmessage)
        }else if (gamelayout[0].innerHTML == "O" && gamelayout[1].innerHTML == "O" &&gamelayout[2].innerHTML == "0"){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! O is the Winner!"
          }else if (gamelayout[3].innerHTML == "X" && gamelayout[4].innerHTML == "X" &&gamelayout[5].innerHTML == "X"){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! X is the Winner!"
          }else if (gamelayout[3].innerHTML == "O" && gamelayout[4].innerHTML == "O" &&gamelayout[5].innerHTML == "O"){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! O is the Winner!"
          }else if (gamelayout[6].innerHTML == "X" && gamelayout[7].innerHTML == "X" &&gamelayout[8].innerHTML == "X"){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! X is the Winner!"
          }else if (gamelayout[6].innerHTML == "O" && gamelayout[7].innerHTML == "O" &&gamelayout[8].innerHTML == "O"){
            winmessage.setAttribute("class","you-won")
            winmessage.innerHTML ="Congratulations! O is the Winner!"
          }
    
    newgame.onclick = () =>{
        window.location.reload();

    }
    
    //const restartGame = document.getElementsByClassName("btn")
    
    }
}
 }
function placePlay(space,currentClass){
    space.textContent = currentClass
    space.classList.add(currentClass)
    space.style.pointerEvents = "none"
}