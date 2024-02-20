"use strict";
// let result: Function;
// let sayHello: (a: string, b:string) => void;
// sayHello = (name: string, greet: string) => {
//     console.log(`Hello ${name}, ${greet}`);
// }
// example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }
// example 3
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number}
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
