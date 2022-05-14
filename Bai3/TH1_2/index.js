const math = require('./myMath.js');
const x = 40, y = 20, r = 5;
console.log('Tong hai so bang ' + math.add(x, y));
console.log('Hieu hai so bang ' + math.sub(x, y));
console.log('Tich hai so bang ' + math.mul(x, y));
console.log('Thuong hai so bang ' + math.div(x, y));

console.log('Chu vi hinh tron ban kinh r = '+ r + ' bang ' + math.circuit(r));
console.log('Dien tich hinh tron ban kinh r = '+ r + ' bang ' + math.area(r));