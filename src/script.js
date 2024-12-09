// document.addEventListener('DOMContentLoaded', () => {
//     const menuIcon = document.querySelector('.menu-icon');
//     const navLinks = document.querySelector('.nav-links');

//     menuIcon.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });


//     const slides = document.querySelector('.slides');
//     const slideElements = document.querySelectorAll('.slide');
//     const dots = document.querySelectorAll('.dot');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');

//     let currentIndex = 0;

//     function updateSlider() {
//         slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//         dots.forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentIndex);
//         });
//     }

//     function showNextSlide() {
//         currentIndex = (currentIndex + 1) % slideElements.length;
//         updateSlider();
//     }

//     function showPrevSlide() {
//         currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
//         updateSlider();
//     }

//     dots.forEach(dot => {
//         dot.addEventListener('click', () => {
//             currentIndex = parseInt(dot.getAttribute('data-slide'));
//             updateSlider();
//         });
//     });

//     nextButton.addEventListener('click', showNextSlide);
//     prevButton.addEventListener('click', showPrevSlide);

//     updateSlider();


    // script.js
let currentIndex = 0;

function autoSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the start
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);



