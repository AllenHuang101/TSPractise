interface IKun {
  name: string;
  age: number;
  slogan?: string;
}

// 把IKun屬性都變必選的
type IKunRequired = Required<IKun>;

// 類型體操, Required 實現方式
type HYRequired<T> = {
  [P in keyof T]-?: T[P];
};
type IKunRequired2 = HYRequired<IKun>;

export {};
