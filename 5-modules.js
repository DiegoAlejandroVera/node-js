const greet = require('./1-greet')
const { diego, lucas } = require('./2-names')
const { names, singlePerson } = require('./3-different-flavors')
require('./4-mind-grenade')

console.log(greet(diego))
console.log(greet(lucas))
console.log(names, singlePerson)
