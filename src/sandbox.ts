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


console.log('heeeyy')


let greet: Function;

greet = () => {
    console.log("hellooooo world");
    
}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a+b, c);
}

add(5,10)


type StringOrNum = string | number;
type ObjectWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has id of ${uid}`);
    
}

const greeting = (user: ObjectWithName) => {
    console.log(`${user.name} saying hello`);
}

let great: (a: string, b: string) => void

great = (name: string, word: string) => {
    console.log(name, word);
    
}

let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo
    } else {
        return numTwo - numOne }   
}

let logDetailss: (obj: {name: string, age: number}) => void

type Person = {name:string, age: number}

logDetailss = (ninja: Person) =>{
    console.log(ninja.name, ninja.age);
    
}