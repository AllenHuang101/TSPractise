interface IPerson {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info: IPerson = {
  name: 'why',
  age: 18,
};

// 訪問屬性: 可選鏈: ?.
console.log(info.friend?.name);

// 屬性賦值
// 方案一: 類型縮小
if (info.friend) {
  info.friend.name = 'kobe';
}

// 方案二: 非空類型斷言(有點危險, 只有確保 friend 一定有值的情況才能使用)
info.friend!.name = 'james';

export {};
