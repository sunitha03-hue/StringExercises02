string1= "JavaScript";
console.log(string1[8]);
string2= "Strings are sequences of characters.";
console.log(string2[5]);
string3 = "Wonderful";
console.log(string3.length);
string4 = "Do spaces count?";
console.log(string4.length);
let num = 1001;

//Returns 'undefined'.
num = 1001;
num=String(num);
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
 num1 = 123.45;
 num1=String(num1);
 console.log(num1.length);
 num1=num1.replace(".", "");
 console.log(num1.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6)


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
const input=require('readline-sync');
let num2=input.question("Enter a number:");
num2=String(num2);
if(num2.includes(".")){
  num3=num2.replace(".","");
  console.log(num3.length);
}
else
console.log(num2.length);
