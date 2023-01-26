// 類型別名: type
type MyNumber = number;
const age: MyNumber = 18;

// 給 ID 的類型起一個別名
type IDType = number | string;

function printID(id: IDType) {
  console.log(id);
}

type PointType = { x: number; y: number; z?: number };
function printCoordinate(point: PointType) {
  console.log(point.x, point.y, point.z);
}
