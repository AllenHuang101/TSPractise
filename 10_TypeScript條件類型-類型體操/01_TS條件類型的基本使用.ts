type IDType = number | string;

// 判断 number 是否是 extendsIDType
// const res = 2 > 3? true: false
type ResType = number extends IDType ? true : false;

// 函數重載
// function sum(num1: number, num2: number): number;
// function sum(num1: string, num2: string): string;

// 怎麼將上面簽名變成一個???
// 錯誤的做法: 類型擴大化
// function sum(num1: string|number, num2: string|number): string
function sum<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? number : string;
function sum(num1, num2) {
  return num1 + num2;
}

const res = sum(20, 30);
const res2 = sum('abc', 'cba');
