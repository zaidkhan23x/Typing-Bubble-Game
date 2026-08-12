
let game_area = document.querySelector("#game-area");
let m_point=0; //missed point
let game_over = document.querySelector("#game-over");
let t1=1000,t2=25;
let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let s_game = document.getElementById("game-start");

s_game.addEventListener("click",()=>{
    s_game.classList.add("delete-animation");
    const over = setInterval(CreateBubble,t1);
    setInterval(()=>{
    if(m_point===15){
        clearInterval(over);
    }
    
},t1);
});
// CreateBubble();

function CreateBubble(){
let letter= letters[Math.floor(Math.random()*letters.length)]   ;
let bubble= document.createElement("div");
bubble.classList.add("bubbles"); //Class add
game_area.appendChild(bubble);
bubble.textContent= letter;
let e_left = Math.random()*(window.innerWidth-70);
bubble.style.left = e_left + "px"
bubble.style.top = "-50px";
let a=-50;
const fall = setInterval(()=>{
    s_game.remove();
    // console.log(a);
      a+=3;
      bubble.style.top=a+"px";
    if(a > window.innerHeight){
        bubble.remove();
        clearInterval(fall);
         m_point++;
         document.getElementById("m-point").textContent=m_point;
    }
    if(m_point>=15){
        clearInterval(fall);
        //  game_over.style.color="red";
        game_over.textContent="Game over";
    }
},t2);
   bubble.dataset.interval = fall;
}

let score=0; //game point
document.addEventListener("keydown", (dets)=>{
    const key = dets.key.toUpperCase();
    let bubbles = document.querySelectorAll(".bubbles");
    for(let bubble of bubbles){

        if(bubble.innerText === key && m_point<15){
          clearInterval(bubble.dataset.interval);
          bubble.remove();
          score += 5;
          t2 -= 0.20;
          document.getElementById("g-point").textContent=score;
          break;
        }
    }
})