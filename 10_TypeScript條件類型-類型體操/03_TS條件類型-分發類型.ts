type toArray<T> = T extends any ? T[] : number;

type NumArray = toArray<number>;

// 想得到 number[] | string[] 而不是 (number|string)[]
type NumAndStrArray = toArray<number | string>;
