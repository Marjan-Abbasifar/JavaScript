var num= parseInt(prompt("Enter a number", "Enter"));
var count=0;
while(num>0){
num = Math.trunc(num/10);
    count++;
}
document.write("digits:" ,count);