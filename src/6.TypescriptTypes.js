/**
 * The TypeScript language supports different types of values like string, number, any.
 * It provides data types for the JavaScript to transform it into a strongly typed programing language.
 * JavaScript doesn't support data types, but with the help of TypeScript, we can use the data types feature in JavaScript.
 *
 * Static Types
 *      1. static types mean "at compile time" or "without running a program."
 *      2. variables, parameters, and objects have types that the compiler knows at compile time which is already set in static typed language like c, c++,java, typescript.
 *      3. The compiler used this information to perform the type checking.
 *      4. Static type has built in type -
 *          number - includes integers and fractions, also supports Binary(Base 2), Octal(Base 8), Decimal(Base 10),
 *          string - String type work with textual data.
 *          boolean - have only two values - "true" and "false."
 *          void - A void is a return type of the functions which do not return any type of value. It is used where no data type is available.
 *          null - Null represents a variable whose value is undefined. Much like the void, it only accepts one value that is null.
 *          any - It is the "super type" of all data type & used to represents any JavaScript value, When we can not declare variable with available datatypes then we use it.
 *          undefined - The Undefined primitive type denotes all uninitialized variables in TypeScript and JavaScript. It has only one value, which is undefined.
 *       5.User Data Types -
 *          Array - An array is a collection of elements of the same data type.
 *          Object -
 *          Touple - The Tuple is a data type which includes two sets of values of different data types. We can define two type in touple and make a pair.
 *          Interface - defines the syntax for classes to follow, class has to implement all its members. It can not instantiated but implemented
 *          Class - Classes are used to create reusable components and acts as a template for creating objects. where we store variables and functions to perform operations.
 *          Function - A function is the logical blocks of code to organize the program, these could be named function or as an anonymous function.
 *          Enums - Enums define a set of named constant. TypeScript provides both string-based and numeric-based enums. By default it uses the numeric with 0;
 * Generic Data Types - it is used to work with variety of datatypes not just with single one.
 *        TypeScript uses generics with the type variable <T> that denotes types.
 * Decorators - It is special type of datatypes that can be attached to class and methods, it's parameters.
 *        It provides both annotations and meta programming syntax classes and functions
 *        It is used with @ symbols
 *
*/
var first = 2.0; // number   
var second = 0x25CF; // hexadecimal  
var third = 219; // octal  
var fourth = 49; // binary  
console.log(first); // 123  
console.log(second); // 14287  
console.log(third); // 255  
console.log(fourth);
console.log('Number Data Types ', typeof (first), typeof (second), typeof (third), typeof (fourth)); // 57 
var stringType = " ";
console.log("String data type ", stringType, typeof (stringType));
var booleanType = false;
console.log("Boolean data type ", booleanType, typeof (booleanType));
/*When we set void then we can pass null or undefined value to function or variable*/
function voidFunc() {
    console.log('This function returning void ');
}
voidFunc();
var testVoid = undefined;
testVoid = null;
//tempNum = 123; //error
console.log('Void Data Types', typeof (testVoid));
var num = null;
var bool = null;
var str = null;
console.log('null type- ', typeof (num), typeof (bool), typeof (str));
var num1 = undefined;
var bool1 = undefined;
var str1 = undefined;
console.log('undefined type- ', typeof (num1), typeof (bool1), typeof (str1));
console.warn('Nulland undefined can set to all types...');
var val = 'Hi';
console.log("Any data types - ", typeof (val));
val = 555; // OK
console.log("Any data types - ", typeof (val));
val = true; // OK   
console.log("Any data types - ", typeof (val));
var list = [1, 3, 5];
// generic array type:
var list2 = [1, 3, 5];
console.log('User Defined Datatypes - Array Data type', typeof (list));
// Declare a tuple  
var a;
// Initialize it  
//a = ["hi", 8, "hrlsdv", 10.8]; 
a = ["hi", 8]; // OK 
console.log('Touple  Data type', typeof (a));
var Calculator = {
    subtract: function (first, second) {
        return first - second;
    }
};
console.log('Interface  Data type', typeof (Calculator));
//all datatypes like array, interface & tuple are object
//class & function has function datatype 
var Student = /** @class */ (function () {
    function Student(_RollNo, _Name) {
        console.log('_RollNo: %d, _Name: %d', _RollNo, _Name);
        this.RollNo = _RollNo;
        this.Name = _Name;
        console.log('this.RollNo: %d, this.Name: %d', this.RollNo, this.Name);
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
        return this.RollNo + " : " + this.Name;
    };
    return Student;
}());
var clsObj = new Student(2, 'Chetan');
console.log('object print :', clsObj);
//console.log('showMethod in class access through object:', clsObj.showDetails());
console.log('Class  Data type', typeof (Student));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c;
var Color1 = Color.Green; //type of this color1 will be 1 as this return 1 index in enum
console.log('Enum  Data type', Color, typeof (Color), Color1, typeof (Color1));
//named function with number as parameters type and return type  
function add(a, b) {
    return a + b;
}
//anonymous function with number as parameters type and return type  
var sum = function (a, b) {
    return a + b;
};
console.log('function  Data type', typeof (sum), typeof (add));
//Generic
//using T, we can return helloWorldFun with variety of datatype
function helloWorldFun(argunt) {
    return argunt;
}
var output1 = helloWorldFun("myString"); //Type of function return is string 
var output2 = helloWorldFun(100); //Type of function return is number 
console.log('Generic Data Types:', typeof (output1), typeof (output2));
//Decorators
//We are going to attache one function to class as a method of that class itself
// function f():any {  
//     console.log("f(): evaluated");  
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {  
//         console.log("f(): called");  
//     }  
// }  
// class C {  
//     @f();  //Attached decorator as method to class
//     method(){console.log('Method from c class called');} ;
// }  
// let cObj  = new C();
// cObj.f();
// cObj.method();
//Object And Array type define
var dataObject = { name: "Chetan", phone: 9527364127 };
var dataArray = ["chetan", "korde", "kalgavahan"];
var dataArrayNumber = [1, 2, 3, 4];
