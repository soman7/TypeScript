"use strict";
//explicit types
// let char: string;
// let age: number;
// let isLogged: boolean;
//arrays
let ninjas = [];
ninjas.push('jkjk');
//union type
let mixed = [];
mixed.push('string');
mixed.push(23);
mixed.push(false);
console.log(mixed);
let uid;
uid = '123';
uid = 123;
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'mrio', age: 20, belt: 'balk' };
//any type
let age = 25;
age = true;
//functions
let greet = () => {
    console.log("Hello");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'Soman');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const hello = (user) => {
    console.log(`${user.name} says hello`);
};
//Function Signatures
let greetNew;
greetNew = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetails1;
logDetails1 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
