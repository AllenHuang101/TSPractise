declare module 'lodash' {
  export function join(...args: any[]): any;
}

// 為自己的變量定義類型聲明
declare const whyName: string;
declare const whyAge: number;
declare const whyHeight: number;

declare function foo(bar: string): string;

// 類別聲明
declare class Person {
  // name: string;
  // age: number;
  constructor(public name: string, public age: number);
}

// 聲明文件模塊
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

// 聲明命名空間

declare namespace $ {
  export function ajax(settings: any): any;
}
