// 1.函數類型表達式
type BarType = (num1: number) => number;

// 2.函數調用簽名(從對象角度來看待函數, 也可以有其他属性)
// 函數完整的描述方式，既可以被調用又可以有自己的屬性。
interface IBar {
  name: string;
  age: number;
  // 函数可以調用: 函數調用簽名(Call Signatures)
  (num1: number): number;
}

const bar: IBar = (num1: number): number => {
  return 123;
};

bar.name = 'aaa';
bar.age = 18;
bar(123);

// 開發中如何選擇:
// 1.如果只是描述函數類型本身(函數可以被調用), 使用函數類型表達式(Function Type Expressions)
// 2.如果在描述函數作為對象可以被調用, 同时也有其他屬性時, 使用函數調用簽名(Call Signatures)

export {};
