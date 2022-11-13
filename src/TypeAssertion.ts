/**
 * TypeScript allows changing a variable from one type to another. 
 * TypeScript refers to this process as Type Assertion. 
 * The syntax is to put the target type between < > symbols and place it in front of the variable or expression.
 * It is not type casting (which implies some sort of run time support) But this assertion is compile time construct
 * Using type assertion we provide hint to compiler, how to analyses your code.
*/
var str = '1' 
var str2:number = <number><any> str   //str is now of type number 
console.log(typeof(str2))
console.log(typeof(str))