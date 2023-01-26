// 在沒有對TS進行特殊配置的情況下，this是any類型

// 1.對象中的函數中的this
const obj = {
  name: 'why',
  studying: function () {
    // 默認情况下, this是any類型
    console.log(this.name.length, 'studying');
  },
};

obj.studying();
// // obj.studying.call({})

// 2.普通的函數
function foo() {
  // console.log(this);
}
export {};
