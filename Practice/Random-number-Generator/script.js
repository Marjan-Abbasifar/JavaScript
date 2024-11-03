const generateButton = document.getElementById("generateBtn");
const numberElements = document.getElementById("random-number");

generateButton.addEventListener("click", ()=>{

     
    const randomNumbers = Math.floor(Math.random()*1000);
    numberElements.textContent=randomNumbers;
});
  
   



