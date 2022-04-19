class myPromise {
  static all (promiseList) {
    const result = []
    let len = 0
    return new Promise((resolve, reject) => {
      promiseList.forEach((p, index) => {
        p().then(res => {
          len += 1
          result[index] = res
          console.log(len, res)
          if (len === promiseList.length) {
            resolve(result)
          }
        }).catch(err => {
          reject(err)
        })
      })
    })
  }
}

function p1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p1')
    }, 500)
  })
}

function p2 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2')
    }, 800)
  })
}

function p3 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3')
    }, 10000)
  })
}

myPromise.all([p1, p2, p3]).then(res => {
  console.log('[myPromise all]', res)
})