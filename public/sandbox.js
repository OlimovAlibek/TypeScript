"use strict";
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5));
let char;
let num;
let done;
let mixed = [];
mixed.push('123');
let mixed2 = [];
mixed2.push(12);
mixed2.push('adsasd');
let obj;
obj = { name: 'adasd' };
let obj2;
console.log('heeeyy');
let greet;
greet = () => {
    console.log("hellooooo world");
};
const add = (a, b, c) => {
    console.log(a + b, c);
};
add(5, 10);
const logDetails = (uid, item) => {
    console.log(`${item} has id of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} saying hello`);
};
let great;
great = (name, word) => {
    console.log(name, word);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne;
    }
};
let logDetailss;
logDetailss = (ninja) => {
    console.log(ninja.name, ninja.age);
};
