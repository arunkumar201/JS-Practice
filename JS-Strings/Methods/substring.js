let a="arun kumar";
console.log(a.substring(0, 4));
// Any argument value < 0 is treated as 0.
// Any argument value > str.length is treated as str.length.
// Any NaN argument value is treated as 0.
// If indexStart is greater than indexEnd,
//  the two arguments are swapped,
//  i.e. str.substring(a, b) will be str.substring(b, a).
console.log(a.substring(4, 0));
console.log(a.substring(4, NaN));
console.log(a.substring(4, -232323232));


