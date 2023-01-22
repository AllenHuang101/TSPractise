import { sum } from './utils/math';

const message: string = 'Hello World';

console.log(message.length, message);
console.log(sum(20, 30));

// lib.dom.d.ts
const h2El = document.createElement('h2');
h2El.textContent = 'Hello TypeScript';
document.body.append(h2El);

// lib.es2015.d.ts
const promise = new Promise((resolve, reject) => {});
console.log(message.startsWith('Hello'));
