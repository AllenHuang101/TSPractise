// 1.typeof: 使用最多
function printID(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.length, id.split(' '));
  } else {
    console.log(id);
  }
}

// 2.===/!==: 方向類型判斷
type Direction = 'left' | 'right' | 'up' | 'down';
function switchDirection(direction: Direction) {
  if (direction === 'left') {
    console.log('左:', '角色向左移動', direction);
  } else if (direction === 'right') {
    console.log('右:', '角色向右移動', direction);
  } else if (direction === 'up') {
    console.log('上:', '角色向上移動', direction);
  } else if (direction === 'down') {
    console.log('下:', '角色向下移動', direction);
  }
}

// 3. instanceof: 傳入一個日期, 打印日期
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getTime());
  } else {
    console.log(date);
  }

  // if (typeof date === "string") {
  //   console.log(date)
  // } else {
  //   console.log(date.getTime())
  // }
}

// 4.in: 判断是否有某一個屬性
interface ISwim {
  swim: () => void;
}

interface IRun {
  run: () => void;
}

function move(animal: ISwim | IRun) {
  // 確定 animal 對象是否具有 swim 屬性
  if ('swim' in animal) {
    animal.swim();
  } else if ('run' in animal) {
    animal.run();
  }
}

const fish: ISwim = {
  swim: function () {},
};

const dog: IRun = {
  run: function () {},
};

move(fish);
move(dog);
