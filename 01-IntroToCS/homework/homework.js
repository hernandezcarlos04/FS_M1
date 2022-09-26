'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    decimal = decimal + num [i]*2**(num.length-1-i);
  }

  return decimal;

}



function DecimalABinario(num) {
  // tu codigo aca
let resultad =[];

while(num>0){
  resultad.push(num%2);
  num=Math.floor(num/2);
}
return resultad.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}