interface IIndexType {
  // 返回值類型的目的是告知通過索引去獲取到的值是什麼類型
  [index: number]: string;
  // [index: string]: any;
  // [index: string]: string;
}

// 索引簽名: [index: number]: string
const names: IIndexType = ['abc', 'cba', 'nba'];

// 索引签名: [index: string]: any: 没有报错
// 1.索引要求必须是字符串类型 names[0] => names["0"]
// const names: IIndexType = ["abc", "cba", "nba"]

// 索引簽名: [index: string]: string: 會報錯
// 嚴格字面量賦值檢測: ["abc", "cba", "nba"] => Array實例 => names[0] names.forEach

// const names: IIndexType = ["abc", "cba", "nba"]
// names["forEach"] => function
// names["map/filter"] => function

export {};
