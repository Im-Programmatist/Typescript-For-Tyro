/** SOmetime we know about the value of variable than typescript compiler and we want to use it any how
 * Type assertions are a way to tell the compiler that I know what I am doing, just let it process as given to you! 
 * A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.
 * Type assertions have two forms - as & <> angle bracket
*/


let someValue: unknown = "this is a string";
let strLength1: number = (someValue as string).length; 
let strLength2: number = (<string>someValue).length;