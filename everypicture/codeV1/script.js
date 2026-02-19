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

    allFigures.forEach(function(figure) {
        figure.addEventListener('click', function() {
            const slider = document.querySelector('#slider');
            slider.classList.toggle('paused');
        });
        });
    });

})();
