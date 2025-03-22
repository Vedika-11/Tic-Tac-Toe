let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector('.reset');
let newgamebtn=document.querySelector('.new-game');
let msgcontainer=document.querySelector('.message-container')
let msg=document.querySelector('.message');
let turn0=true;


const array=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if (turn0) {
            box.innerText='O';
            turn0=false;
        } else {
            box.innerText='X';
            turn0=true;
        }
        box.disabled = true;
        checkwinner();

    });
});

const checkwinner =()=> {
    for (pattern of array){
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText
        if (val1 != "" && val2 != "" && val3 != ""){
            if (val1===val2 && val2===val3){
                msg.innerText=`Congratilations! Winner is ${val1}`;
                msgcontainer.classList.remove('hide');
                disableboxes();
            }
        }
        
    }
};

const resetgame = () => {
    turn0=true;
    enableboxes();
    msgcontainer.classList.add('hide');
};

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);