const promise = new Promise((resolve, reject) => {
  if (process.argv[2] === 'a') {
    resolve("GOOD")
  } else {
    reject("BAD")
  }
})

const hoge = (
  () => {promise.then(value=>return value).catch(value=> return value)}
  )()
console.log(hoge)
