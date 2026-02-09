(function (){
    'use strict'
    console.log('reading js');

    const madlib = document.querySelector('#madlib');
    const form = document.querySelector('form');
    const overlay = document.querySelector('#overlay');
    const closeBtn = document.querySelector('#close');
    const errorMessage = document.querySelector('#error');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const lovedone = document.querySelector('#lovedone').value;
        const describe = document.querySelector('#describe').value;
        const activity = document.querySelector('#activity').value;
        const favorite = document.querySelector('#favorite').value;
        const relationship = document.querySelector('#relationship').value;
        const feelings = document.querySelector('#feelings').value;
        const name = document.querySelector('#name').value;

        let myText;

        if (lovedone == '') {
            myText = "please provide a name :3";
            document.querySelector('#lovedone').focus();
            errorMessage.innerHTML = myText;
        } else if (describe == '') {
            myText = "please provide an adjective :3";
            document.querySelector('#describe').focus();
            errorMessage.innerHTML = myText;
        } else if (activity == '') {
            myText = "please provide an activity :3";
            document.querySelector('#activity').focus();
            errorMessage.innerHTML = myText;
        } else if (favorite == '') {
            myText = "please provide your favorite food :3";
            document.querySelector('#favorite').focus();
            errorMessage.innerHTML = myText;
        } else if (relationship == '') {
            myText = "please provide your relationship :3";
            document.querySelector('#relationship').focus();
            errorMessage.innerHTML = myText;
        } else if (feelings == '') {
            myText = "please provide a feeling :3";
            document.querySelector('#feelings').focus();
            errorMessage.innerHTML = myText;
        } else if (name == '') {
            myText = "please provide your name :3";
            document.querySelector('#name').focus();
            errorMessage.innerHTML = myText;
        } else {
            myText = `<p class="answersp">Dear <span>${lovedone}</span>,</p>
                
                <p class="answersp">I think you are the most <span>${describe}</span>person ever! I love it when we <span>${activity}</span> together. To me, you are more special than <span>${favorite}</span>, and I REALLY love <span>${favorite}</span>. You are the best <span>${relationship}</span> ever, and you make me feel so <span>${feelings}</span></p></p>
                <p class="answersp">Love, <span>${name}</span></p>

                <img src="images/bear2.PNG" alt="drawing of white bear holding a letter" height="200" width="200">`

                document.querySelector('#lovedone').value = '';
                document.querySelector('#describe').value = '';
                document.querySelector('#activity').value = '';
                document.querySelector('#favorite').value = '';
                document.querySelector('#relationship').value = '';
                document.querySelector('#feelings').value = '';
                document.querySelector('#name').value = '';

                madlib.innerHTML = myText;
                overlay.style.display = "block";

        }

    });

    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        overlay.style.display = "none";
    });

    document.addEventListener('keydown', function (event){
        if (event.key === 'Escape') {
            overlay.style.display = "none";
        }
    });

}());