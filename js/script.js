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