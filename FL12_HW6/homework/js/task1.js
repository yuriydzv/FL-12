let a1 = prompt('Please enter: a'),
  b1 = prompt('Please enter: b'),
  c1 = prompt('Please enter: c'),
  a = parseInt(a1),
  b = parseInt(b1),
  c = parseInt(c1),
  D = b * b - 4 * a * c,
  x1,
  x2;

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {
  console.log('Invalid input data');
} else if (D > 0) {
  x1 = (-b + Math.sqrt(D)) / 2 * a;
  x2 = (-b - Math.sqrt(D)) / 2 * a;
  console.log(`D = ${D} \nx1 = ${x1.toFixed(2)} \nx2 = ${x2.toFixed(2)}`);
} else if (D === 0) {
  x1 = (-b + Math.sqrt(D)) / 2 * a;
  console.log(`x = ${x1}`);
} else if (D < 0) {
  console.log('no solution');
}