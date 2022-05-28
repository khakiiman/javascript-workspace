// for logging some text use console.log or alert() 
// console.log("Heloo world");
// var. let , const
//not use var because it is Global!! insted use let

// let number = 30;
// console.log(number);

// primitive Data type
// like string,number,boolean,undefine and null
// let name = "Ali";
// const age = 20;
// const rate = 5.6;
// const isCold = true;
// let firstName = undefined;
// let lastName = null;

// Refrence Data type
// 1-object, 2-array, 3-Function
// Array
// element of array can be different type.
// let numbers = [5, 9, 1];
// elemnts start from 0 index.
// console.log(numbers);
//deference between Undefined,Null,Empty;

//object = type of nothing and everything
// const person = {
//     name: "nader",
//     age: 30,
//     gender: "male",
//     address: {
//         country: "Iran",
//         city: "Tehran",
//     },
//     hobbies: ["watching mov", "gaming", "coding"]
// }
// console.log(person.hobbies[0]);

//Function used for when you nead block func call to do sth
// function sayhello(name) {
//     console.log("Hello World except " + name);
// }

// sayhello("Mahdi");


// function addnum(num1, num2) {
//     console.log(num1 + num2);
//     return num1 + num2;
// }
// addnum(1, 2);
// nu = addnum(1, 2);


//diferrence between stack(primitive type) and heap(reference type)
//example for Object

// let name = "mahdi";
// let aName;
// aName = name;
// //change
// aName = "Bahram";
// console.log(name);
// console.log(aName);

// let person = { name: "Mahdi" };
// let aPerson;

//normal assignment
// aPerson = person;

//deep assignment
// aPerson = Object.assign({}, person);

// aPerson.name = "bahram";
// console.log(person);
// console.log(aPerson);

//ex for array
// numbers = [1, 2, 3, 4, 5];

//normal assgnment
// aNumbers = numbers;

//deep assgnment
// aNumbers = Object.assign([], numbers);

// aNumbers[2] = 10;
// console.log(numbers);
// console.log(aNumbers);

// investigating numbers
// let result;
// let num1 = 4;
// let num2 = 2;
// result1 = num1 + num2;
// result2 = num1 - num2;
// result3 = num1 * num2;
// result4 = num1 / num2;
// result5 = num1 % num2; //resedual of division
// result6 = num1 ** num2; //power

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);

// console.log(result1++);
// console.log(++result1);

//Math Object
// result7 = Math.PI;
// result7 = Math.E;
// result7 = Math.round(2.8);
// result7 = Math.ceil(2.1);
// result7 = Math.floor(2.9);
// result7 = Math.sqrt(16);
// result7 = Math.abs(-16);
// result7 = Math.pow(2, 3);
// result7 = Math.min(2, 3, 5, 15, 1);
// result7 = Math.max(2, 3, 5, 15, 1);
// result7 = Math.random(); //bet 0 till 0.9
// console.log(result7);

//String
// let result;
// let firstname = "Iman"
// let lastname = "Khaki";
// let age = 30;
// let job = "Web developer";

// result = 'It\'s a great code';
// console.log(result);
// result = "It's a great code ";

// //normal string with concat action
// result1 = firstname + " " + lastname;

// //template string with back qoute
// result2 = `hello my name is ${firstname} ${lastname} and myage is ${age}`;

// console.log(result);
// console.log(result2);


//primitive is not object and do not have any method
let firstname = "Iman"
let lastname = new String("Khaki");
console.log(typeof firstname);
console.log(typeof lastname);