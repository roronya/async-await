const f = async () => "GOOD"
const g = async () => {
  const y = await f()
  console.log('inner', y)
  return y
}

g().then(value => console.log('outer', value))
