function Stack() {
  // 此处不用this.items 可以起到变量局部使用保证内部安全
  var items = [];
  // 添加元素 push
  this.push = function (item) {
    items.push(item);
  };
  // 弹出元素 pop
  this.pop = function () {
    return items.pop();
  };
  // 获取栈顶元素 top
  this.top = function () {
    return items[items.length - 1];
  };
  // 栈内元素是否为空 isEmpty
  this.isEmpty = function () {
    return items.length === 0;
  };
  // 栈内元素数量 size
  this.size = function () {
    return items.length;
  };
  // 清空栈 clear
  this.clear = function () {
    items = [];
  };
}

// 左右是否成对匹配
// 1. 遇左入栈
// 2. 遇右判断: 非空出栈,否则非法
// 3. 栈空合法,非空非法
function bracket_method(string) {
  var stack = new Stack();
  for (var i = 0; i < string.length; i++) {
    const item = string[i];
    // 遇左入栈
    if (item == "(") {
      stack.push(item);
    }
    // 遇右判断
    else if (item == ")") {
      // 非空出栈
      if (!stack.isEmpty()) {
        stack.pop();
      } else {
        // 否则非法
        return false;
      }
    }
  }
  // 栈空合法,非空非法
  return stack.isEmpty();
}
let result = bracket_method("(222(33(3(444)55)5)666)");
console.log(result);
