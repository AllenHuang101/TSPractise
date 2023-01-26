// interface IPerson {
//   name: string;
//   age: number;
//   height: number;
// }

// const p: IPerson = {
//   name: 'why',
//   age: 18,
//   height: 1.88,
// };

// console.log(p.address);

// 1.索引簽名
interface InfoType {
  // 索引簽名: 通過字符串索引, 獲取一個值, 也是字符串
  [key: string]: string;
}

function getInfo(): InfoType {
  return { name: 'Allen', address: '板橋' };
}

const info = getInfo();
console.log(info.name, info.address);

// 2. 索引簽名的案例
interface ICollection {
  [index: number]: string;
  length: number;
}

function printCollection(collection: ICollection) {
  // collection 一定有 length，且 index 一定是 number，因此可以這樣遍歷
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    console.log(item.length);
  }
}

const array = ['abc', 'cba', 'nba'];
const tuple: [string, string] = ['why', '广州'];
printCollection(array);
printCollection(tuple);
export {};
