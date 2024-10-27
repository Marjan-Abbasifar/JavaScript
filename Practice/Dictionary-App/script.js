const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const sresultContainer = document.getElementById('resultContainer');
const wordTitle = document.getElementById('wordTitle');
const wordDescription = document.getElementById('wordDescription');
const audioButton = document.getElementById('audioButton');


searchButton.addEventListener('click', ()=>{
    search();
});

searchInput.addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
        search();
    }

});

function search(){
    const searchTerm = searchInput.value.trim();
    if(searchTerm === ""){
        alert("Please enter a word");
        return;
    }
    fetchDictionaryData(searchTerm);

}

async function fetchDictionaryData(searchTerm){

    try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        if(!response.ok){
            throw new Error("Network response was not ok");

        }
        const data = await response.json();
        displayResult(data);

    }

    catch(error){
        console.log(error);
        alert("An error occurred while fetching the data");

    }
    
}

function displayResult(data){
    resultContainer.style.display = 'block';

    const wordData= data[0]
    wordTitle.textContent = wordData.word;
    wordDescription.innerHTML = `
    <ul>
    ${wordData.meanings.map(meaning=>`

        <li>
        <p><strong> part of speech: </strong>${meaning.partOfSpeech}</p>
        <p><strong> Definition: </strong>${meaning.definitions[0].definition}</p>
        </li>
        
    `).join('\n')}
    </ul>
    `;
}


audioButton.addEventListener('click',()=>{
    const searchTerm = searchInput.value.trim();

    if(searchTerm === ""){
        alert("Please enter a word");
        return;
    }
    speak(searchTerm);
});

function speak(word){
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-us'
    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    



}