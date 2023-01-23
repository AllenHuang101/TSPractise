interface IKun {
  name: string;
  age: number;
  slogan?: string;
}

// 類型體操, Partial 實現方式
type HYPartial<T> = {
  [P in keyof T]?: T[P];
};

// 把IKun都變成可選的
// type IKunOptional = Partial<IKun>;
type IKunOptional = HYPartial<IKun>;

export {};
