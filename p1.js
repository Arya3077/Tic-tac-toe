let boxes=document.querySelectorAll(".box");
let res=document.querySelector(".reset");
let msgicontainer=document.querySelector(".msg")
let msgi=document.querySelector('.msg')


let turnO=true;


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false
        box.innerText="";
    }
}

const enabtn=()=>{
    turnO=true
    enableboxes()
    if (msgicontainer) { // Check if the element exists
        msgicontainer.classList.add("hide"); 
    }
}


boxes.forEach((box) => { box.addEventListener("click",
    ()=>{console.log("button was clicked")
    
        if(turnO){ box.innerText="O";
        turnO=false;}
        else{box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        winner();
    })
})

const re =()=>{ res . removeEventListener(
    "click", ()=>{

        for(let pattern of winpatterns){

            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
    
            if(pos1val!="" && pos2val!="" && pos3val!=""){
                if(pos1val===pos2val && pos3val===pos3val){
                    console.log("winner")
                    msg(pos1val)
                }
            }
    
  }
    }

)}
    
const disbtn=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
        

const msg=(pos1val)=>{ 
    if (msgi) { // Check if msgi is defined
        msgi.innerText = `Congratulations! The winner is ${pos1val}`; 
    }
    if (msgicontainer) { // Check if msgicontainer is defined
        msgicontainer.classList.remove("hide"); 
    }
    disbtn()
}


const winner =()=>{
    for(let pattern of winpatterns){

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos3val===pos3val){
                console.log("winner")
                msg(pos1val)
            }
        }

    }
}
      
res.addEventListener("click",enabtn)
  




