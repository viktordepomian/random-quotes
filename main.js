// SKAPA FÖRST FUNKTIONALITETEN
// FIXA API SOM GÖR QUOTES ÅT DIG

const QUOTEOUTPUT = document.querySelector('.quote-output');
const GENERATEBTN = document.querySelector('.generate-quote');

GENERATEBTN.addEventListener('click', function(){
    apiRequest();
});

async function apiRequest(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    QUOTEOUTPUT.textContent = `${data.content} - ${data.author}`;
}