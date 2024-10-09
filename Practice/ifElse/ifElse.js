var mark1= parseInt(prompt("Enter the mark of first subject","Enter"));
var mark2= parseInt(prompt("Enter the mark of second subject" ,"Enter"));
var mark3= parseInt(prompt("Enter the mark of third subject" ,"Enter"));

var total= mark1+mark2+mark3;
var percent= total*100/150;

alert(percent);
if(percent>=80){
    alert("You got A grade");
}
    else if(percent>=60){
        alert("You got B grade");
    }
    else if(percent>=40){
        alert("You got C grade");
    }
    else{
        alert("You got D grade");
    }

