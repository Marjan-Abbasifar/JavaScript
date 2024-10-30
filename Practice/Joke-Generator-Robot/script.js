const chat = document.getElementById('-chat');
const jokeBtn = document.getElementById('jokeBtn');


generateJoke();
jokeBtn.addEventListener('click', generateJoke);

async function generateJoke(){
    jokeBtn.disabled = true;
    const message = createMessageElement('Hey robot, could you tell me a joke?');
    appendMessage(message);
    const joke = createMessageElement();
    setElementContent(joke, '<i class="fa-solid fa-ellipsis"></i>>');
    appendMessage(joke);
    const response = await fetch('https://icanhazdadjoke.com/',{headers:{accept:'application/json',},})


    if(response.ok){
        const data = await response.json();
        console.log(data);
        setElementContent(joke, data.joke);
        jokeBtn.disabled = false;
    }
}


function createMessageElement(content){
    const element = document.createElement('div');
    element.classList.add('message');
    if(content){
        element.classList.add('response');
        setElementContent(element,content);
    }else{
        element.classList.add('joke');
    }
    return element;

}

function setElementContent(element,content){
    element.innerHTML = content;

}

function appendMessage(element){
    chat.appendChild(element);


}
