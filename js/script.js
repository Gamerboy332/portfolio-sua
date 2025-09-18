function scrolltoElement(elemementSelector, instance = 0){

    const elements = document.querySelectorAll(elemementSelector);

    if(elements.length > instance){

        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

let slideIndexBrickmerica = 1;
showSlidesBrickmerica(slideIndexBrickmerica);

function plusSlides(n) {
    showSlidesBrickmerica(slideIndexBrickmerica += n);
}

function showSlidesBrickmerica(n) {
    let slides = document.getElementsByClassName("slide-brickmerica");
    if (n > slides.length) {slideIndexBrickmerica = 1}
    if (n < 1) {slideIndexBrickmerica = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexBrickmerica-1].style.display = "block";
}

// --- Taurista Slideshow ---
let slideIndexTaurista = 1;
showSlidesTaurista(slideIndexTaurista);

function plusSlidesTaurista(n) {
    showSlidesTaurista(slideIndexTaurista += n);
}

function showSlidesTaurista(n) {
    let slides = document.getElementsByClassName("slide-taurista");
    if (n > slides.length) {slideIndexTaurista = 1}
    if (n < 1) {slideIndexTaurista = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexTaurista-1].style.display = "block";
}

// --- Warfronts Slideshow ---
let slideIndexWarfronts = 1;
showSlidesWarfronts(slideIndexWarfronts);

function plusSlideswarfronts(n) {
    showSlidesWarfronts(slideIndexWarfronts += n);
}

function showSlidesWarfronts(n) {
    let slides = document.getElementsByClassName("slide-warfronts");
    if (n > slides.length) {slideIndexWarfronts = 1}
    if (n < 1) {slideIndexWarfronts = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexWarfronts-1].style.display = "block";
}

// --- Vehicle Rental Slideshow ---
let slideIndexVehicleRental = 1;
showSlidesVehicleRental(slideIndexVehicleRental);

function plusSlidesVehicleRental(n) {
    showSlidesVehicleRental(slideIndexVehicleRental += n);
}

function showSlidesVehicleRental(n) {
    let slides = document.getElementsByClassName("slide-vehiclerental");
    if (n > slides.length) {slideIndexVehicleRental = 1}
    if (n < 1) {slideIndexVehicleRental = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexVehicleRental-1].style.display = "block";
}

// --- Recommender System Slideshow ---
let slideIndexRecommender = 1;
showSlidesRecommender(slideIndexRecommender);

function plusSlidesRecommender(n) {
    showSlidesRecommender(slideIndexRecommender += n);
}

function showSlidesRecommender(n) {
    let slides = document.getElementsByClassName("slide-recommendersystem");
    if (n > slides.length) {slideIndexRecommender = 1}
    if (n < 1) {slideIndexRecommender = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexRecommender-1].style.display = "block";
}

// WVSOLUTIONS slideshow functionality
let wvsolSlideIndex = 1;
showWvsolSlides(wvsolSlideIndex);

function plusSlidesWvsol(n) {
    showWvsolSlides(wvsolSlideIndex += n);
}

function showWvsolSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-wvsol");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) {
        wvsolSlideIndex = 1;
    }
    if (n < 1) {
        wvsolSlideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[wvsolSlideIndex-1].style.display = "block";
}

const link10 = document.getElementById("link10");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link10.addEventListener('click', () =>{
    scrolltoElement('.heading');
})

link1.addEventListener('click', () =>{
    scrolltoElement('.heading');
})

link2.addEventListener('click', () =>{
    scrolltoElement('.heading', 1);
})

link3.addEventListener('click', () =>{
    scrolltoElement('.heading', 2);
})

link4.addEventListener('click', () =>{
    scrolltoElement('.heading', 3);
})

// Header shrink on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

let lastScrollY = 0;
let isScrolling;

// Header hide/show on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    // Hide header while scrolling in any direction
    if (Math.abs(currentScroll - lastScrollY) > 10) {
        header.classList.add('hidden');
    }
    
    lastScrollY = currentScroll;
    
    // Clear the timeout throughout the scroll
    clearTimeout(isScrolling);
    
    // Set a timeout to show header when scrolling stops
    isScrolling = setTimeout(function() {
        header.classList.remove('hidden');
    }, 150); // Adjust this value to control how quickly the header appears after stopping
});

// Typing animation
document.addEventListener('DOMContentLoaded', function() {
    const text1 = "Aurelio Sua!";
    const text2 = "An aspiring CS Student";
    const typingText1 = document.querySelector('.typing-text');
    const typingText2 = document.querySelector('.typing-text-2');
    
    function typeText(element, text, delay = 0) {
        setTimeout(() => {
            let index = 0;
            element.textContent = '';
            
            function type() {
                if (index < text.length) {
                    element.textContent += text[index];
                    index++;
                    setTimeout(type, 100);
                }
            }
            
            type();
        }, delay);
    }
    
    typeText(typingText1, text1);
    typeText(typingText2, text2, 2000); // starts after first line
});