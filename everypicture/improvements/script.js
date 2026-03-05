(function(){
    'use strict';
    console.log("reading js");

    window.addEventListener('load', function () {
    const sliderContent = document.querySelector('.a');
    const sliderWidth = sliderContent.offsetWidth;

    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";
    document.querySelector('#slider').appendChild(cloned);

    let root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth}px`;
    root.style.setProperty('--sliderWidth', endLeftPos);

    document.querySelector('#slider').classList.add("animate");

    const heading = document.querySelector('h2');
    
    document.querySelector('#section1').addEventListener('click', function() {
        const slider = document.querySelector('#slider');
        slider.classList.toggle('paused');
        heading.textContent = "hey, that's me when i was little! i must have been at least 5 years old"
    });

    document.querySelector('#section2').addEventListener('click', function() {
        const slider = document.querySelector('#slider');
        slider.classList.toggle('paused');
        heading.textContent = "aww, my old drawings. i used to draw for hours and hours a day back then...";
    });

    document.querySelector('#section3').addEventListener('click', function(){
        const slider = document.querySelector('#slider');
        slider.classList.toggle('paused');
        heading.textContent = "no. way. i LOVE zelda games, i used to play them all the time growing up!";
    });

    document.querySelector('#section4').addEventListener('click', function(){
        const slider = document.querySelector('#slider');
        slider.classList.toggle('paused');
        heading.textContent = "those are the bangels my mom gave me so long ago.";
    });

    document.querySelector('#section5').addEventListener('click', function(){
        const slider = document.querySelector('#slider');
        slider.classList.toggle('paused');
        heading.textContent = "i got that plushie for valentine's day when i was little, i still sleep with it.";
    });

    });

})();
