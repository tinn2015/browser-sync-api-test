function Person (name) {
  this.name = name
}

const ben = new Person('ben')

console.log(ben instanceof Person)

//判断target2是不是在target1的原型链上

function _instanceof (target1, target2) {
  const _target = target2.prototype
  let cur = target1.__proto__
  let flag = true
  let res = false
  while (flag) {
    if (cur === null) {
      flag = false
    }
    if (cur === _target) {
      res = true
      flag = false
    }
    cur = cur.__proto__
  }
  return res
  // if (target1.__proto__ === target2.prototype) {
  //   return true
  // }
  // return false
}

var flag = _instanceof(ben, Object)
console.log(flag)