let userScore=0;
let compScore=0;
  let drawScore =0;
const selectors =document.querySelectorAll(".select");
const  msg =document.querySelector("#msg");
const userPoint=document.querySelector("#score-user");
const comPoint =document.querySelector("#comp-score");
const drawPoint =document.querySelector("#score-draw")
//Generate computer choice
const comChoice =() => {
    const options =["rock","Paper","Scissors"];
    //Math.random() *3; //to generate a random number fumction.
  const randomno = Math.floor(Math.random() *3); //Math.floor use to remove a decimal //gives hole no.
  return options[randomno];
};
 
const showWinner =(userWin,User,com) =>{
    if(userWin){
        console.log("You Win");
        userScore++;
        userPoint.innerText =userScore;
       // msg.innerText="You Win";
       msg.innerText=`You Win! ${User} Beats ${com}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("Computer Win");
        compScore++;
        comPoint.innerText =compScore;
        //msg.innerText="You Lose";
        msg.innerText=`You Lose! ${com} Beats ${User}`;
        msg.style.backgroundColor="red";
    }
}

const palyGame =(User) =>{
    console.log("You Select=",User);
    const com  = comChoice();
    console.log("compChoice=",com); 
   

    if(User ===com){
        console.log("draw");
        //msg.innerText="Draw";
        msg.innerText=`Draw! `;
        msg.style.backgroundColor="Black";
          drawScore++;
         drawPoint.innerText =drawScore;
        
    }else{
        let userWin =true;
        if(User ==="rock"){
         userWin =  com==="Paper"? false :true;
        }
        else if(User ==="Paper"){
          userWin=  com==="Scissors" ? false:true;
        }
        else{
          userWin=  com==="rock"? false:true;
        }
        showWinner(userWin,User,com);
        }
    
    };
//     const drawGame =  () =>{
//         console.log("Draw");
//    msg.innerText=`Draw! ${User} = ${com}`;
//    msg.style.backgroundColor="Black";
//      draw++;
//     drawPoint.innerText =draw;
//    };

   
selectors.forEach((select) =>{
    // console.log(select);
    select.addEventListener("click",()=>{
        const User=select.getAttribute("id");
        // console.log("selector is clicked",selectId);
        palyGame(User);
    });
});