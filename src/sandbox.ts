//explicit types
// let char: string;
// let age: number;
// let isLogged: boolean;

//arrays
let ninjas: string[] = [];
ninjas.push('jkjk')

//union type
let mixed: (string|number|boolean)[] = [];
mixed.push('string')
mixed.push(23)
mixed.push(false)
console.log(mixed);

let uid: string|number;
uid = '123'
uid = 123

//objects

let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30}

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

ninjaTwo = {name: 'mrio', age: 20, belt: 'balk' }

//any type
let age: any = 25;
age= true;

//functions
let greet: Function = () => {
    console.log("Hello");
}

const add = (a: number, b: number, c: number|string = 10): void => {
    console.log(a+b);
    console.log(c);
}

add(5,10, 'Soman')

const minus = (a: number, b: number): number => {
    return a + b
}

let result = minus(10,7);


//type aliases
type StringOrNum = string|number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const hello = (user : objWithName) => {
    console.log(`${user.name} says hello`);
    
}


//Function Signatures
let greetNew: (a: string, b:string) => void;
greetNew = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number,b: number,c: string) => number
calc = (num1: number, num2: number, action: string) => {
    if (action === 'add'){
        return num1+num2
    }else{
        return num1-num2
    }
}


let logDetails1: (obj:{name: string, age: number}) => void
type person = {name: string, age: number}
logDetails1 = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`)
}






