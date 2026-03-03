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

console.log('CJJR Wedding Website Loaded! 💒');
console.log('✅ Paths: public/image.png & public/audio.mp3');
console.log('✅ Hero spacing improved for desktop');
console.log('📱 Files needed in public/ folder');