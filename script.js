// ======================
// INITIALIZE AOS
// ======================

AOS.init({
duration:1000,
once:true,
offset:100,
easing:'ease-in-out'
});


// ======================
// MUSIC PLAYER
// ======================

const musicToggle=document.getElementById("musicToggle");
const backgroundMusic=document.getElementById("backgroundMusic");
const musicText=document.querySelector(".music-text");

let isPlaying=false;

musicToggle.addEventListener("click",()=>{

if(isPlaying){

backgroundMusic.pause();
musicText.textContent="Play Music";
isPlaying=false;

}else{

backgroundMusic.play();
musicText.textContent="Playing Music";
isPlaying=true;

}

});


// ======================
// MOBILE MENU
// ======================

const mobileMenu=document.getElementById("mobileMenu");
const navLinks=document.getElementById("navLinks");

mobileMenu.addEventListener("click",()=>{
mobileMenu.classList.toggle("active");
navLinks.classList.toggle("active");
});


// ======================
// HEADER SCROLL
// ======================

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.pageYOffset>50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({
top:target.offsetTop-60,
behavior:"smooth"
});

}

});

});


// ======================
// COUNTDOWN
// ======================

const weddingDate=new Date("2026-08-26T15:00:00").getTime();

function updateCountdown(){

const now=new Date().getTime();
const distance=weddingDate-now;

if(distance<=0){
document.getElementById("countdown").innerHTML="Today is the Wedding Day!";
return;
}

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;

}

setInterval(updateCountdown,1000);
updateCountdown();


// ======================
// FLOWERS
// ======================

const flowerContainer=document.getElementById("flower-container");

const flowers=[
"image/flower1.png",
"image/flower2.png",
"image/flower3.png"
];

function createFlower(){

const flower=document.createElement("img");

flower.src=flowers[Math.floor(Math.random()*flowers.length)];

flower.classList.add("flower");

const side=Math.random()<0.5;

if(side){

flower.style.left=Math.random()*20+"vw";
flower.style.animation="fall-left linear forwards";

}else{

flower.style.left=80+Math.random()*20+"vw";
flower.style.animation="fall-right linear forwards";

}

const duration=12+Math.random()*6;

flower.style.animationDuration=duration+"s";
flower.style.width=14+Math.random()*10+"px";

flowerContainer.appendChild(flower);

setTimeout(()=>{
flower.remove();
},duration*1000);

}

setInterval(createFlower,600);


// ======================
// PRENUP GALLERY
// ======================

const carousel=document.getElementById("galleryCarousel");
const nextBtn=document.querySelector(".carousel-btn.next");
const prevBtn=document.querySelector(".carousel-btn.prev");

if(nextBtn){

nextBtn.addEventListener("click",()=>{

carousel.scrollBy({
left:320,
behavior:"smooth"
});

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

carousel.scrollBy({
left:-320,
behavior:"smooth"
});

});

}


// AUTO SLIDE

let autoSlide=setInterval(()=>{

carousel.scrollBy({
left:320,
behavior:"smooth"
});

if(carousel.scrollLeft+carousel.clientWidth>=carousel.scrollWidth){

carousel.scrollTo({
left:0,
behavior:"smooth"
});

}

},4000);


// ======================
// LIGHTBOX
// ======================

const galleryImages=document.querySelectorAll("#galleryCarousel img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const closeBtn=document.querySelector(".lightbox-close");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{
lightbox.style.display="none";
});

lightbox.addEventListener("click",(e)=>{
if(e.target===lightbox){
lightbox.style.display="none";
}
});
