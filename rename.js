const rename = function(str){
    str = str.toLowerCase()
    str = str.replace(/ /g,'-')
    return str
}
const result = rename('Swap Nodes in Pairs')
console.log(result)