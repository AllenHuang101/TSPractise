class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

interface ICTORPerson {
  // 構造函數簽名
  new (name: string): Person;
}

// 透過工廠，傳入可以構造person的函數構建person對象
function factory(fn: ICTORPerson) {
  const f = new fn('Allen');
  return f;
}

factory(Person);
