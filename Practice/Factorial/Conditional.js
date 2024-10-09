let number = parseInt( prompt("Enter a positive number"));

if(number<0){
    console.log("Error the number must be positive");
    console.log(number);
}
else if(number===0){
    console.log("The factorial for 0 is 1");
    }
    else{
        let fact= 1;
        for(var i=1; i<=number; i++){
        fact=fact*i;
    }
    console.log('The factorial of',number,'is', fact);
    }