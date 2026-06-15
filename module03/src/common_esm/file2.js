const {a: x} = require('./file1')
const {a: y} = require('./file3')
// const add = require('./utility/add.js')
// console.log('Addition', add(x, y))

const { f1: add, f2: sub } = require('./utility/index')

console.log("Additions : ", add(x, y))
console.log("Sub : ", sub(x, y))
// console.log(x, y)