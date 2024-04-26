 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector(".reset");
 let NewGame=document.querySelector(".new");
 let winmsg=document.querySelector(".Winmsg");
 let turn=true;

 const winPattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log('clicked');
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        ckwinner();

    },false);
 });
 const ShowWinner=(winner)=>{
    NewGame.style.visibility='visible';
    winmsg.innerText=`Player ${winner} winned!`;
 };
 const ckwinner = () =>{
    for(let pattern of winPattrens){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="")
        {
            if(pos1===pos2 && pos2===pos3){
                console.log(pos1);
                ShowWinner(pos1);
            }
        }
    }
 };