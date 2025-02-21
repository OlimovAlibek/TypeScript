import { Invoice } from './classes/invoice.js';
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
const invOne = new Invoice('Ali', 'website', 300);
const invTwo = new Invoice('Nafisa', 'Finance', 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.amount, inv.client, inv.format());
});
