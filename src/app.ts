import {Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Shaxzoda', 'Media', 540)
docTwo = new Payment('Anastasia', 'SMM', 640)


let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs);


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter

    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    if(type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
    
})




// const invOne = new Invoice('Ali', 'website', 300)
// const invTwo = new Invoice('Nafisa', 'Finance', 200)



// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.amount, inv.client, inv.format());
    
// });



interface isPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(b: number): number
}
const me: isPerson = {
    name: 'Ali',
    age: 21,
    speak(text: string): void {
        console.log(text);    
    },
    spend(money: number): number {
        console.log('I spent', money);
        return money
    }

}
const greetPerson = (person: isPerson) => {
        console.log(person.name);
        
}

greetPerson(me)

console.log(me);


const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docThree = addUID({name: 'Ali', age: 21})
console.log(docThree.name);

interface Resource<T> {
    uid: number,
    resourceName: string,
    data: T
}

const docFour: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'Ali'}
}

enum resourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
    uid: number,
    resourceType: resourceType,
    data: T
}   

const docone: Resource<object> = {
    uid: 1,
    resourceType: resourceType.BOOK,
    data: { title: 'name of the wind' },
    resourceName: ''
}

const doctwo: Resource<object> = {
    uid: 10,
    resourceType: resourceType.PERSON,
    data: { name: 'Ali' },
    resourceName: ''
}

console.log(docone, doctwo);


const arr = ['Ali', 21, true]
arr[0] = false
arr[1] = 'Ali'
arr[2] = 21     

const tup: [string, number, boolean] = ['Ali', 21, true]
tup[0] = 'Ali'
tup[1] = 21
tup[2] = true   

let student: [string, number]
student = ['Ali', 21]
