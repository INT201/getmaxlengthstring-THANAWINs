const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  let b = []
  let max = 0
  if(arrayOfString === null || arrayOfString === undefined) return undefined
  for(x of arrayOfString){
    max = x.length > max?x.length:max
  }
  for(x of arrayOfString){
    if(x.length == max){
        b.push(x)
    }
  }
  return b
}
module.exports = getMaxLengthString
