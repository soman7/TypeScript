// //Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string):void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'Soman',
//     age: 20,
//     speak(text: string): void {
//         console.log(text); 
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// }

// const greetPeron = (person: IsPerson) => {
//     console.log("Hello", person.name);
// }

// greetPeron(me)
// console.log(me)

import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('MArio', 'plumbing work', 200)

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

// const invOne = new Invoice('Mario', 'Work on the website', 250);
// const invTwo = new Invoice('Luigi', 'Work on the other website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
    
})

//Generics

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Yoshi', age: 40 })
// let docTwo = addUID('hello')
console.log(docOne.age);

//generics with interfaces
//enums

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T
}

const doc3: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {name: 'Soman'}
}

const doc4: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: {title: 'Name of the wind'}
}

console.log(doc3, doc4);

//tuples

let arr = ['ryi', 4, true]
arr[0] = false;
arr[1] = 'Yoshi'
arr = [30, false, 'Hello']


let tup: [string, number, boolean] = ['eou', 34, true]
tup[0] = 'kema';
tup[1] = 23;

let student: [string, number];
student = ['chun-li', 131231]
