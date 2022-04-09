//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름 d
//만약에 유저가 래ㅔㄴ덤번호를 맞추면 , 맞췃스비니다
//랜덤번호가 유저번호 다운
//랜덤번호가 유저번호 업
//리셋 버튼 누르면 게임 리셋
//5번의 기회 다쓰면 게임 끝 

let com=0;
let play=document.getElementById("play");
let user=document.getElementById("save");
let area=document.getElementById("area");
let resultimg = document.querySelector(".mainimg");
let reset=document.getElementById("reset");
let chancearea=document.getElementById("chancearea");
let history=[];

let chance=5;
let game = false;
play.addEventListener("click",pplay);
reset.addEventListener("click",rreset);
user.addEventListener("focus",function(){user.value=""});



function pick(){
    com=Math.floor(Math.random()*100)+1;
    console.log("정답",com);
}

function pplay(){
    let uservalue = user.value;
    if(uservalue<1 || uservalue>100){
        area.textContent="1부터100사이의 숫자를 입력하세요."
        return;
    }

    if(history.includes(uservalue)){
        area.textContent="이미 입력한 숫자 입니다."
    return;
    }
    
    chance--;
    chancearea.textContent=`남은 찬스 : ${chance}번`;
    if(uservalue<com){
        resultimg.src="../image/up.gif"
        area.textContent="up!!!"
    }else if(uservalue>com){
        resultimg.src="../image/down.gif"
        area.textContent="down!!!"
    }else{
        resultimg.src="../image/cor.gif"
        area.textContent="정답입니다^^"
        game=true;
    }

    history.push(uservalue);
    if (chance <1 &&uservalue!=com) {
        area.textContent=`gameover!정답은 ${com}!`;
        resultimg.src="../image/qu.gif"
        game = true;
      }
    
      if (game == true) {
        play.disabled = true;
      }
}


function rreset(){
    user.value="";
    history.length=0;
   
    area.textContent="정답을 맞춰보세요😎"
    resultimg.src="../image/updown.gif"

    game = false;
    play.disabled = false;
    chance = 5;
    chancearea.textContent=`남은 찬스 : ${chance}번`;;
     pick();
}
pick();