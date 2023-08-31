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
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshi', age: 40 });
// let docTwo = addUID('hello')
console.log(docOne.age);
//generics with interfaces
//enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc3 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'Soman' }
};
const doc4 = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { title: 'Name of the wind' }
};
console.log(doc3, doc4);
//tuples
let arr = ['ryi', 4, true];
arr[0] = false;
arr[1] = 'Yoshi';
arr = [30, false, 'Hello'];
let tup = ['eou', 34, true];
tup[0] = 'kema';
tup[1] = 23;
let student;
student = ['chun-li', 131231];
