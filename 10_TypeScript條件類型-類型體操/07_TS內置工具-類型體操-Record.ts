interface IKun {
  name: string;
  age: number;
  slogan?: string;
}

type Res = keyof any; // => number | string | symbol
// 確保 keys 一定是可以作為 key 的聯合類型
type HYRecord<Keys extends keyof any, T> = {
  [P in Keys]: T;
};

type t1 = '上海' | '北京' | '洛杉磯';
// type IKuns = Record<t1, IKun>;
type IKuns = HYRecord<t1, IKun>;

const ikuns: IKuns = {
  上海: {
    name: 'aaa',
    age: 10,
  },
  北京: {
    name: 'bbb',
    age: 20,
  },
  洛杉磯: {
    name: 'ccc',
    age: 5,
  },
};
export {};
