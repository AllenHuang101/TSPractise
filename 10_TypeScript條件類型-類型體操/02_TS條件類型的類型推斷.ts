type CalcFnType = (num1: number, num2: string) => number;

function foo() {
  return 'abc';
}

// 自己封裝一個 ReturnType
// 類型體操題目: MyReturnType
// (...args: any[]) => any 限制類型為函數
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type MyParameterType<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

// 獲取一個函數的返回值類型
// type CalcReturnType = ReturnType<CalcFnType>;
// type FooReturnType = ReturnType<typeof foo>;
type CalcReturnType = MyReturnType<CalcFnType>;
type FooReturnType = MyReturnType<typeof foo>;

type CalcParameterType = MyParameterType<CalcFnType>;

export {};
