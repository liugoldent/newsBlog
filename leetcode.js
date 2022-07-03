var a = 1;
var b = 1;
var c = 1;

function test(a){
  console.log(a)
  var b = 2;
  console.log(b)
  if(true){
    let c = 5
    var d = 6
    const e = 7
  }
  console.log(c)
  console.log(d)
  console.log(e)
}

test()
