/**
 * TypeScript will find the first usage of the variable within the code, 
 * determine the type to which it has been initially set and then assume 
 * the same type for this variable in the rest of your code block.
*/

var num = 2; // data type inferred as  number, It's First declaration of num
console.log("value of num "+num); 
num = "12"; //Error: Cannot convert 'string' to 'number'.
console.log(num);