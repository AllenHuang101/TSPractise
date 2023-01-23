// TypeScript 提供了映射類型
// 映射類型不能使用 interface 定義
// Type = IPerson
// keyof = "name" | "age"
interface IPerson {
  name: string;
  age: number;
}

type MapPerson<T> = {
  // keyof = "name" | "age"
  [P in keyof T]: T[P];
};

type NewPerson = MapPerson<IPerson>;

// 拷貝一份 IPerson
// interface NewPerson {
//   name: string
//   age: number
// }
// type NewPerson = MapPerson<IPerson>;
export {};
