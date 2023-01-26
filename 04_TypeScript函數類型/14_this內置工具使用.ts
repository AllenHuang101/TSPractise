function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info);
}

// type FooType = (this: { name: string }, info: { name: string }) => void;
// 取得函數類型
type FooType = typeof foo;

// 1.ThisParameterType: 獲取FooType類型中this的類型
type FooThisType = ThisParameterType<FooType>;

// 2.OmitOmitThisParameter: 删除this參數類型, 剩餘的參數類型
type PureFooType = OmitThisParameter<FooType>;

// 3.ThisType: 用於綁定一個上下文的this
interface IState {
  name: string;
  age: number;
}

interface IStore {
  state: IState;
  eating: () => void;
  running: () => void;
}

const store: IStore & ThisType<IState> = {
  state: {
    name: 'why',
    age: 18,
  },
  eating: function () {
    console.log(this.name);
  },
  running: function () {
    console.log(this.name);
  },
};

store.eating.call(store.state);

export {};
