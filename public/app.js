import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Shaxzoda', 'Media', 540);
docTwo = new Payment('Anastasia', 'SMM', 640);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const me = {
    name: 'Ali',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(money) {
        console.log('I spent', money);
        return money;
    }
};
const greetPerson = (person) => {
    console.log(person.name);
};
greetPerson(me);
console.log(me);
