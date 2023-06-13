#!/usr/bin/node
const myObject={
  type:"object",
  value:12,
  inc: ()=> this.value ++
};
console.log(myObject)
myObject.inc()
console.log(myObject)
myObject.inc()
console.log(myObject)
myObject.inc()
console.log(myObject)
