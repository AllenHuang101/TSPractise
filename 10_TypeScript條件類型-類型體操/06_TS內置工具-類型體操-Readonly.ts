interface IKun {
  name: string;
  age: number;
  slogan?: string;
}

// 把IKun屬性都變唯讀的
type IKunReadonly = Readonly<IKun>;

// 類型體操, Readonly 實現方式
type HYReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
type IKunReadonly2 = HYReadonly<IKun>;

export {};
