module.exports = function solveEquation(equation) {
  var arr, a, b, c, d, x1, x2;
  var answ = [];
  var str = equation;

str = str.replace(/\s\*\sx\^2\s/,",");
str = str.replace(/\s/,"");
str = str.replace(/\s\*\sx\s/,",");
str = str.replace(/\s/,"");

arr = str.split(",");
arr = arr.map(function(item) {
return Number(item);
})    

a = arr[0]; b = arr[1]; c = arr[2];

d = b * b - 4 * a * c;
x1 = Math.round((-b + Math.sqrt(d))/ (2 * a));
x2 = Math.round((-b - Math.sqrt(d))/ (2 * a));

(x1 > x2) ? answ.push(x2, x1) : answ.push(x1, x2);

return answ;
}
