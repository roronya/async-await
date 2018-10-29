const promise = new Promise((resolve, reject) => {
  if (process.argv[2] === 'a') {
    resolve("GOOD")
  } else {
    reject("BAD")
  }
})

const hoge = promise.then(value=>value).catch(value=>value)
console.log(hoge)
