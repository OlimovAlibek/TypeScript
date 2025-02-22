import {Invoice} from './classes/invoice.js'

// const form = document.querySelector('.new-item-form') as HTMLFormElement;

// const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault()

//     console.log(
//         type.value,
//         toFrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
    
// })




const invOne = new Invoice('Ali', 'website', 300)
const invTwo = new Invoice('Nafisa', 'Finance', 200)



let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.amount, inv.client, inv.format());
    
});



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
