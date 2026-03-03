AOS.init();

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

// Falling PNG Flowers
const flowers=["public/flower1.png","public/flower2.png","public/flower3.png"];
const container=document.querySelector(".flowers");

function createFlower(){
const img=document.createElement("img");
img.src=flowers[Math.floor(Math.random()*flowers.length)];
img.classList.add("flower");
img.style.left=Math.random()*100+"vw";
img.style.width=(18+Math.random()*20)+"px";
img.style.animationDuration=(8+Math.random()*5)+"s";
container.appendChild(img);
setTimeout(()=>img.remove(),13000);
}

setInterval(createFlower,900);

// Music
const toggle=document.getElementById("musicToggle");
const music=document.getElementById("backgroundMusic");
const text=document.getElementById("musicText");

toggle.addEventListener("click",()=>{
if(music.paused){
music.play();
text.textContent="Playing Music";
}else{
music.pause();
text.textContent="Play Music";
}
});
