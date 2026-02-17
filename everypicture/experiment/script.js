window.addEventListener('load', function () {
    'use strict';

    const sections = document.querySelectorAll('section');
    const headerP = this.document.querySelector('heeader p');
    let sectionTops = [];
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    sections.forEach(function (eachSection) {
        sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);

    window.addEventListener('resize', function (){
        clearTimeout(doneResizing);
        doneResizing = setTimeout(function() {
            console.log(window.innerWidth);
                resetPagePosition();
        }, 500); 
    });
    
    function resetPagePosition() {
        sectionTops = [];
        sections.forEach(function (eachSection){
            sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
        });

        const pagePosition = window.scrollY + sectionTops[0] + 10;
        counter = 0;
        sectionTops.forEach(function (eachSection){
            if (pagePosition > eachSection) {counter++;}
        });
        console.log(`counter is now ${counter}`);
        onSectionChange();
    }
    });
    console.log(sectionTops);

    window.addEventListener('scroll', function () {
        pageTop = this.window.scrollY + 100;
        // console.log(pageTop);
        if (pageTop > sectionTops[counter]) {
            counter++;
            // console.log(`scrolling down ${counter}`);
        }
        else if (counter > 1 && pageTop < sectionTops[counter - 1]) {
            counter--;
            // console.log(`scrolling up ${counter}`);
        }
        if (counter  != prevCounter) {
            
            onSectionChange();

            prevCounter = counter; 
        }

        function onSectionChange() {
        const myStyle = `bgcolor${counter}`;
            document.querySelector('body').className = myStyle;

            switch(counter) {
                case 1: headerP.innerHTML = "the first section is on the page"; break;
                case 2: headerP.innerHTML = "the second section is on the page"; break;
                case 3: headerP.innerHTML = "the third section is on the page"; break;
                case 4: headerP.innerHTML = "the fourth section is on the page"; break;
                case 5: headerP.innerHTML = "the fifth section is on the page"; break;
                default: headerP.innerHTML = "oops something went wrong!"; break;
            }

            for (const eachPost of sections) {
                eachPost.className = 'offscreen'
            }
            document.querySelector(`#section0${counter}`).className = 'onscreen';
        }
    });

});