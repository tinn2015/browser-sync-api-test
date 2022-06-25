// [['a', 'b'], [1,2,3], ['w']]

function compose (arr, index) {
  // 获取两个数组的所有组合配列
  function subCompose(arr1, arr2) {
    if (!arr1.length) return arr2
    const temp = []
    arr1.forEach(i => {
      arr2.forEach(j => {
        temp.push(`${i}-${j}`)
      })
    })
    return temp
  }
  // 通过reduce方法获取所有数组的排列组合
  const res = arr.reduce((pre, cur) => {
    return subCompose(pre, cur)
  }, []).map(i => {
    return i.split('-')
  })
  return res
}
const res = compose([['a', 'b'], [1,2,3], ['w']])
console.log(res)