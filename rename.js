const rename = function(str){
    str = str.toLowerCase()
    str = str.replace(/ /g,'-')
    return str
}
const result = rename('Implement Queue using Stacks')
console.log(result)