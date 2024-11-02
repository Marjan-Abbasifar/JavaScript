const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");



const generatePassword = ()=>{
    const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%!@#$^&{}[]<>()+-_?\/=|";

    let password = "";
    const passwordLength = 10;
     for(let i = 0 ;i < passwordLength ; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length))
        //console.log(password);
     }
     passwordBox.value= password;

}



btn.addEventListener("click", generatePassword);


copyButton.addEventListener("click", ()=>{
    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy){
        alert("There is no a password to copy please generate the password")
        return;

    }
    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("The password has been copied")

    });
});



