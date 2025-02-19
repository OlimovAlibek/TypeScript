var character = 'mario'
console.log(character);

var inputs = document.querySelectorAll('input')
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(5));


let char: string;
let num: number;
let done: boolean;

let mixed: string[] = []
mixed.push('123')

let mixed2: (string|number)[] = []
mixed2.push(12)
mixed2.push('adsasd')

let obj: object
obj = {name: 'adasd'}

let obj2: {
    name: string;
    age: number;
    big: boolean;
}
