let myArray=[70,61,13,15,6,12,7,10];
console.log(myArray);
//Array of strings
let monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(monthArray);
//mixed array
let mixedArray=["Marjan","32","Amsterdam",52];
console.log(`Her name is ${mixedArray[0]} and she is ${mixedArray[1]} years old. She lives in ${mixedArray[2]}, she weights ${mixedArray[3]}`);

//modifying the array values
let myNumbers=[12,14,61,70,54,34,98,100];
console.log(myNumbers);
myNumbers[0]=150;
console.log(myNumbers);
console.log("length of array is:", myNumbers.length);


//working with arrays' methods
let myBooks=["The great Gatsby", "Crime and punishment", "Tess of the d'urbervilles", "All men are mortal",];
console.log(`My TBR consists of: ${myBooks}`);

//adding values to the array
let newTbr=myBooks.push("Idiot");
console.log(`My new TBR consists of: ${newTbr}`);
console.log(newTbr);
console.log(myBooks);
console.log(myBooks.push("War and Peace"));
console.log(myBooks);
//removing values from the array
console.log(myBooks.pop());
console.log(myBooks);
console.log(myBooks.splice(2,4));
console.log(myBooks);