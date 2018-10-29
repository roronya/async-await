const promise = new Promise((resolve, reject) => {
  if (process.argv[2] === 'a') {
    resolve("GOOD")
  } else {
    reject("BAD")
  }
})

promise.then(value=>console.log(value)).catch(value=>console.log(value))
