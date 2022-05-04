const rename = function(str){
    str = str.toLowerCase()
    str = str.replace(/ /g,'-')
    return str
}
const result = rename('Sort an Array')
console.log(result)