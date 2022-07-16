/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let num1 =  BigInt('0b' + a);
  let num2 =  BigInt('0b' + b);

  let num3 = num1 + num2;
  console.log(num3.toString(2))
  console.log(num3.toString(3))
  return num3.toString(2);

}
console.log(addBinary('10','10'))
