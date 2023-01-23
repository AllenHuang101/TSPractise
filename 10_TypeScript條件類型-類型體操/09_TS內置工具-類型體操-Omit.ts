interface IKun {
  name: string;
  age: number;
  slogan?: string;
}

// 确实keys一定是可以作为key的联合类型
type HYOmit<T, K extends keyof T> = {
  // keyof T 可遍歷全部屬性，extends K ? never : P 不存在 K，才取出。
  [P in keyof T as P extends K ? never : P]: T[P];
};

type IKuns = HYOmit<IKun, 'slogan' | 'name'>;
type IKuns2 = Omit<IKun, 'slogan' | 'name'>;

export {};
