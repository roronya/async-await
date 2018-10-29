class C {
  async f() {
    return "GOOD"
  }
}

const c = new C()
console.log(c.f)
c.f().then(v => console.log(v))
