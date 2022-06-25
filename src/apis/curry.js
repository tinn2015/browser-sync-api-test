// add(1)(2)(3)

function add(m) {
  const temp = (n) => {
    return add(m+n)
  }
  temp.toString = function () {
    return m
  }
  return temp
}