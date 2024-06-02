let a1 = 1;
let b1 = 6;
let c1 = 9;
let d1 = b1 ** 2  - 4*a1*c1;
value1 = -b1/2*a1;
console.log('The value to equation 1:', value1);

let a2 = 1;
let b2 = -4;
let c2 = -5;
let d2 = b2 ** 2 - (4*a2*c2);
value2 = (-b2 + Math.sqrt(d2))/2*a2;
value3 = (-b2 - Math.sqrt(d2))/2*a2;
console.log('The value to equation 2:', value2, value3);