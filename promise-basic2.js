promise = Promise.resolve("GOOD")

promise.then(value=>console.log(value)).catch(value=>console.log(value))
