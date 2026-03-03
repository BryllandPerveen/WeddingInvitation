// Countdown
const weddingDate=new Date("April 23, 2026 15:00:00").getTime();

setInterval(()=>{
const now=new Date().getTime();
const distance=weddingDate-now;

document.getElementById("days").innerText=Math.floor(distance/(1000*60*60*24));
document.getElementById("hours").innerText=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
document.getElementById("minutes").innerText=Math.floor((distance%(1000*60*60))/(1000*60));
document.getElementById("seconds").innerText=Math.floor((distance%(1000*60))/1000);
},1000);

// Floating Flowers
const container=document.querySelector('.flowers');
const icons=["🌸","🌼","🌷"];

function createFlower(){
const flower=document.createElement("div");
flower.classList.add("flower");
flower.innerText=icons[Math.floor(Math.random()*icons.length)];
flower.style.left=Math.random()*100+"vw";
flower.style.fontSize=(18+Math.random()*20)+"px";
flower.style.animationDuration=(8+Math.random()*6)+"s";
container.appendChild(flower);
setTimeout(()=>flower.remove(),14000);
}

setInterval(createFlower,900);
