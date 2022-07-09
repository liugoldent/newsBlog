function hasWhiteSpace(s) {
  s = s.trim()
  let resultArr = s.split(' ')
  let resultFinalIndex = resultArr.length -1
  return resultArr[resultFinalIndex].length
}

const test = "luffy is still joyboy"
const a = hasWhiteSpace(test)
console.log(a)
