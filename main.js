// SKAPA FÖRST FUNKTIONALITETEN
// FIXA API SOM GÖR QUOTES ÅT DIG

const QUOTEOUTPUT = document.querySelector('.quote-output');
const GENERATEBTN = document.querySelector('.generate-quote');

function generateQuote(){
    //fetch etc....

    GENERATEBTN.addEventListener('click', function(){

        
        //QUOTEOUTPUT.textContent = 'teadakdwapdpwaad';
    });
}

generateQuote();


fetch('https://api.github.com/users/manishmshiva')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors