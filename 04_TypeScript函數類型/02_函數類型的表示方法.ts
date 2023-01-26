// 方案一: 函數類型表達式 function type expression
// 格式: (參數列表) => 返回值
type BarType = (num1: number) => number;
const bar: BarType = (arg: number): number => {
  return 123;
};

export {};
