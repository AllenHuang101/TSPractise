import { sum } from './utils/math';

// 導入的是類型，推薦在類型的前面加上 type
// 明確告訴編譯器，此為type，讓一些非 TypeScript 編譯器(例如: babel)，可以直接安全移除，提升編譯速度。
// import { type IDType, type IPerson } from './utils/type';
// import type { IDType, IPerson } from './utils/type';

console.log(sum(20, 30));

const id1: IDType = 111;
console.log(id1);

let doc: Document;
// let promise = new Promise();
