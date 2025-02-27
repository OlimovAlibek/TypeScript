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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: 'Ali', age: 21 });
console.log(docThree.name);
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Ali' }
};
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
const docone = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { title: 'name of the wind' },
    resourceName: ''
};
const doctwo = {
    uid: 10,
    resourceType: resourceType.PERSON,
    data: { name: 'Ali' },
    resourceName: ''
};
console.log(docone, doctwo);
