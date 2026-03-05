// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Music Player
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicText = document.querySelector('.music-text');

let isPlaying = false;

// Music Toggle Button
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
            alert('Unable to play music. Please check if audio.mp3 exists in public/ folder.');
        });
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Smooth scroll for anchor links
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

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
// Countdown
document.addEventListener("DOMContentLoaded", function () {

    const weddingDate = new Date("2026-08-26T15:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance <= 0) {
            document.getElementById("countdown").innerHTML = "Today is the Wedding Day!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

});

// Flower Falling Animation

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

const leftLanes=[2,4,6,8];
const rightLanes=[92,94,96,98];

const side = Math.random() < 0.5;

if(side){

flower.style.left = Math.random()*20 + "vw";
flower.style.animation = "fall-left linear forwards";

}else{

flower.style.left = 80 + Math.random()*20 + "vw";
flower.style.animation = "fall-right linear forwards";

}

const duration=12+Math.random()*6;

flower.style.animationDuration=duration+"s";

flower.style.width=14+Math.random()*10+"px";

flowerContainer.appendChild(flower);

setTimeout(()=>{
flower.remove();
},duration*1000);

}

// generate flowers continuously
setInterval(createFlower, 600);

/* PRENUP GALLERY CAROUSEL */

document.addEventListener("DOMContentLoaded", function(){

const carousel = document.getElementById("galleryCarousel");

const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

if(nextBtn && prevBtn && carousel){

nextBtn.addEventListener("click", () => {

carousel.scrollBy({
left: 320,
behavior: "smooth"
});

});

prevBtn.addEventListener("click", () => {

carousel.scrollBy({
left: -320,
behavior: "smooth"
});

});

}

});

/* CINEMATIC AUTO SLIDE */

let autoSlide;

function startAutoSlide(){

autoSlide = setInterval(()=>{

carousel.scrollBy({
left:320,
behavior:"smooth"
});

if(carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5){
carousel.scrollTo({
left:0,
behavior:"smooth"
});
}

},3500); // speed of slideshow

}

function stopAutoSlide(){
clearInterval(autoSlide);
}

/* start automatically */
startAutoSlide();

/* pause when user interacts */

carousel.addEventListener("mouseenter",stopAutoSlide);
carousel.addEventListener("mouseleave",startAutoSlide);

carousel.addEventListener("touchstart",stopAutoSlide);
carousel.addEventListener("touchend",startAutoSlide);

/* PRENUP LIGHTBOX */

const galleryImages = document.querySelectorAll("#galleryCarousel img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const nextLight = document.querySelector(".lightbox-next");
const prevLight = document.querySelector(".lightbox-prev");
const closeLight = document.querySelector(".lightbox-close");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src = img.src;
currentIndex=index;

});

});

closeLight.onclick=()=>{
lightbox.style.display="none";
};

nextLight.onclick=()=>{

currentIndex=(currentIndex+1)%galleryImages.length;
lightboxImg.src=galleryImages[currentIndex].src;

};

prevLight.onclick=()=>{

currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length;
lightboxImg.src=galleryImages[currentIndex].src;

};

console.log('CJJR Wedding Website Loaded! 💒');
console.log('✅ Paths: image/banner.png & public/audio.mp3');
console.log('✅ Hero spacing improved for desktop');
console.log('📱 Files needed in public/ folder');
