
// [1,2,[3,4], 5, [6,7,8]] => [1,2,3,4,5,6,7,8]

Array.prototype.flatten = function () {
  let len = this.length
  if (!len ) return []
  const result =this.reduce((res, item, index, arr) => {
    if (Array.isArray(item)) {
      return res.concat(item.flatten())
    } else {
      return res.concat(item)
    }
  }, [])
  return result
}