const text = document.querySelector("textarea");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("charac-count");


text.addEventListener('keyup' , ()=>{
    charCount.innerHTML=text.value.length;
});


text.addEventListener('keyup', ()=>{
    let txt = text.value.trim();
    wordCount.textContent =txt.split(/\s+/).filter((item)=> item).length;
    

});





