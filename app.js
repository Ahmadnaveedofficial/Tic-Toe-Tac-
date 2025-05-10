# Tic-Toe-Tac-

  let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newbtn=document.querySelector("#newbtn");
let mescontainer=document.querySelector(".mess-container");
let mess=document.querySelector(".mess");

let player0=true;
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6 ],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player0){
            box.innerText="O";
            player0=false;
        }
        else{
            box.innerText="X";
            player0=true;
        }
      
      
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
          gameDraw();
        }

    });
})


const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !=""&&pos2 !=""&&pos3 !=""){
            if(pos1===pos2&&pos2===pos3){
                showWinner(pos1);
            }
        }
    }
}

const showWinner=(winner)=>{
mess.innerText=`Congratulations ${winner} Are the Winner OF The Game :) `;
mescontainer.classList.remove("hide");
boxesDisable();

}

let boxesDisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let boxesEnable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGmae=()=>{
    player0=true;
    count =0;   
    boxesEnable();
    mescontainer.classList.add("hide")
}
const gameDraw = () => {
    mess.innerText = `Game was a Draw.`;
    mescontainer.classList.remove("hide");
    boxesDisable();
  };

newbtn.addEventListener("click",resetGmae);
resetbtn.addEventListener("click",resetGmae);
