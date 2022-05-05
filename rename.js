const rename = function(str){
    str = str.toLowerCase()
    str = str.replace(/ /g,'-')
    return str
}
const result = rename('Input Array Is Sorted')
console.log(result)