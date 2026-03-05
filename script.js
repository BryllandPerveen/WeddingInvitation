// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});


// =============================
// MUSIC PLAYER
// =============================

const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicText = document.querySelector('.music-text');

let isPlaying = false;

musicToggle.addEventListener('click', () => {

    if (isPlaying) {

        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicText.textContent = 'Play Music';
        isPlaying = false;

    } else {

        backgroundMusic.play().then(() => {

            musicToggle.classList.add('playing');
            musicText.textContent = 'Playing Music';
            isPlaying = true;

        }).catch(error => {

            console.log('Music play error:', error);

        });

    }

});


// =============================
// MOBILE MENU
// =============================

const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');

});

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');

    });

});


// =============================
// HEADER SCROLL EFFECT
// =============================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});


// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            const headerOffset = 60;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

        }

    });

});


// =============================
// COUNTDOWN TIMER
// =============================

document.addEventListener("DOMContentLoaded", function () {

const weddingDate = new Date("2026-08-26T15:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();
const distance = weddingDate - now;

if(distance <= 0){
document.getElementById("countdown").innerHTML = "Today is the Wedding Day!";
return;
}

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

updateCountdown();
setInterval(updateCountdown,1000);

});


// =============================
// FLOWER ANIMATION
// =============================

const flowerContainer = document.getElementById("flower-container");

const flowers = [
"image/flower1.png",
"image/flower2.png",
"image/flower3.png"
];

function createFlower(){

const flower = document.createElement("img");

flower.src = flowers[Math.floor(Math.random()*flowers.length)];

flower.classList.add("flower");

const side = Math.random() < 0.5;

if(side){

flower.style.left = Math.random()*20 + "vw";
flower.style.animation = "fall-left linear forwards";

}else{

flower.style.left = 80 + Math.random()*20 + "vw";
flower.style.animation = "fall-right linear forwards";

}

const duration = 12 + Math.random()*6;

flower.style.animationDuration = duration + "s";
flower.style.width = 14 + Math.random()*10 + "px";

flowerContainer.appendChild(flower);

setTimeout(()=>{
flower.remove();
},duration*1000);

}

setInterval(createFlower,600);


// =============================
// PRENUP CAROUSEL
// =============================

document.addEventListener("DOMContentLoaded", function(){

const carousel = document.getElementById("galleryCarousel");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

if(!carousel) return;


// ARROW CONTROLS

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


// DUPLICATE IMAGES FOR LOOP

const items = Array.from(carousel.children);

items.forEach(item=>{
const clone = item.cloneNode(true);
carousel.appendChild(clone);
});


// CONTINUOUS AUTO SCROLL

let speed = 0.5;

function autoScroll(){

carousel.scrollLeft += speed;

if(carousel.scrollLeft >= carousel.scrollWidth/2){
carousel.scrollLeft = 0;
}

requestAnimationFrame(autoScroll);

}

autoScroll();


// PAUSE ON HOVER

carousel.addEventListener("mouseenter",()=>{speed=0;});
carousel.addEventListener("mouseleave",()=>{speed=0.5;});

});


// =============================
// LIGHTBOX
// =============================

document.addEventListener("DOMContentLoaded", function(){

const galleryImages = document.querySelectorAll("#galleryCarousel img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox-close");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src = img.src;

});

});

if(closeBtn){

closeBtn.addEventListener("click",()=>{
lightbox.style.display="none";
});

}

lightbox.addEventListener("click",(e)=>{

if(e.target === lightbox){
lightbox.style.display="none";
}

});

});


console.log("Wedding Website Loaded 💒");
