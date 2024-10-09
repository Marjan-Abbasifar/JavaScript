let a="HELLO";
a[0]="h";
console.log(a);

let b="Hello";
b="heLLO";
console.log(b);

var firstName="Marjan";
var lastName="Abbasifar";
console.log(`my first name is ${firstName} and my last name is ${lastName}`);
console.log('My JavaScript course is going \"on\"');
console.log('line1\nline2');


//js string fucnctions
let text1='Hello';
let text2='WORLD';
//concat method
let result=text1.concat(' ',text2);
console.log(result);

//convert to upper case
let textresult=text1.toLocaleUpperCase();
console.log(textresult);

let textresult2=text2.toLocaleLowerCase();
console.log(`textresult2 is: ${textresult2}`);

//trim method
const text3="                  H E L L O  W O R L D    "
console.log(text3);
let newText =text3.trim();
console.log(newText);

//split method
var text4="I want to be a good programmer"
let text5=text4.split();
console.log(text5);

//slice method
let text6="I want to be a good programmer"
let sliceResult=text6.slice(0,10);
console.log(sliceResult);



