var actualPin=7811;
var pin;
var count=0;

do{
    pin= prompt("Enter the pin code");    
    count++;
    alert("You have entered wrong pin code");
}
while (pin != actualPin && count <3);
if (pin == actualPin) {
    document.write("Welcome to your account");
}
else  {
    document.write("Your account is blocked");
}
