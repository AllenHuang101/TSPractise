"use strict";
// // 獲取 DOM 元素 <img class="img"/>
// const imgEl = document.querySelector('img');
exports.__esModule = true;
// if (imgEl !== null) {
//   // 類型縮小
//   imgEl.src = 'xxx';
//   imgEl.alt = 'yyy';
// }
// // 使用類型斷言
// const imgEl2 = document.querySelector('.img') as HTMLImageElement;
// imgEl2.src = 'xxx';
// imgEl2.alt = 'yyy';
// const myImg = document.getElementById('my-img') as HTMLImageElement;
// myImg.src = '...';
// 類型斷言的規則: 斷言只能斷言成更加具體的類型或者不太具體(any/unknown)的類型。
var age = 18;
// 錯誤的做法
// const age2 = age as string;
// TS 類型檢測是正確的，但是這個代碼本身不太正確。
var age3 = age;
var age4 = age3;
console.log(age4.split(' '));
