import { sum } from './utils/math';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance } from 'axios';
import React from 'react';
import _ from 'lodash';
import kobeImage from './img/kobe02.png';

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

// axios

// lodash
console.log(_.join(['abc', 'cba']));

// 需要編寫類型聲明
console.log(whyName, whyAge, whyHeight);
console.log(foo('why'));

const p = new Person('why', 18);

// 圖片文件的使用
const imgEl = document.createElement('img');
imgEl.src = kobeImage;
document.body.append(imgEl);

// jquery
$.ajax({
  url: 'http://codercba.com:8000/home/multidata',
  success: function (res: any) {
    console.log(res);
  },
});
