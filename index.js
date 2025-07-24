document.getElementById("play").addEventListener("click",function(){
    changeDice1();
});

function changeDice1(){
const player1 = Math.floor((Math.random()*6)+1);
const dice1 = "./images/dice"+player1+".png";
document.getElementsByClassName("img1")[0].src=dice1;
const player2 = Math.floor((Math.random()*6)+1);
const dice2 = "./images/dice"+player2+".png";
document.getElementsByClassName("img2")[0].src=dice2;
    if(player1===player2){
        document.getElementsByClassName("result")[0].innerHTML="Its a tie";
    }
    else if(player1>player2){
        document.getElementsByClassName("result")[0].innerHTML="Player 1 won";
    }
    else{
        document.getElementsByClassName("result")[0].innerHTML="player 2 won";
    }
console.log("dice is rolled");
}
