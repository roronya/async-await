const promise = new Promise((resolve, reject) => "GOOD")

promise.then(value=>console.log(value)).catch(value=>console.log(value))
