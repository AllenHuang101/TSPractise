// 1.字面量類型的基本使用
const name: 'why' = 'why';
let age: 18 = 18;

// 2.將多個字面量類型聯合起來 |
type Direction = 'left' | 'right' | 'up' | 'down';
const d1: Direction = 'left';

// 封裝請求的方法
type MethodType = 'get' | 'post';
function request(url: string, method: MethodType) {}
request('http://codercba.com/api/aaa', 'post');

const info = {
  url: 'xxxx',
  method: 'post',
};
// 下面的做法會報錯: info.method 獲取的是 string 類型
// request(info.url, info.method);

// 解決方案一: info.method 進行類型斷言
request(info.url, info.method as 'post');

// 解決方案二: 直接讓 info 對象類型是一個字面量類型
// const info1: { url: string; method: 'post' | 'get' } = {
//   url: 'xxxx',
//   method: 'post',
// };

// 透過 as const 直接將 info 對象變成字變量類型
const info2 = {
  url: 'xxxx',
  method: 'post',
} as const;

// xxx 本身就是一個 string
request(info2.url, info2.method);

export {};
