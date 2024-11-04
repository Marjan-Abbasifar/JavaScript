let count = 0;
const value = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn=>{

    btn.addEventListener("click" , e=>{
        let elemetId = e.currentTarget.id;
        if (elemetId == 'decrease-btn'){
            count--;
        }else if( elemetId == 'reset-btn'){
            count = 0;
        }else{
            count++
        }
        value.textContent = count;
        value.style.color= count<0 ? "red" : count>0 ? "green" : "#000"
    })
})

