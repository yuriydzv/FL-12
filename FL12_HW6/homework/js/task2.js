let a1 = prompt('Please enter: a'),
  b1 = prompt('Please enter: b'),
  c1 = prompt('Please enter: c'),
  a = parseInt(a1),
  b = parseInt(b1),
  c = parseInt(c1);

if ((isNaN(a) || a === '' || typeof a === 'undefined') ||
  (isNaN(b) || b === '' || typeof b === 'undefined') ||
  (isNaN(c) || c === '' || typeof c === 'undefined')) {
  alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
}

if (a + b > c && b + c > a && a + c > b) {
  if (a === b && b === c) {
    console.log('Equilateral triangle');
  } else if ((a === b || b === c || a === c)) {
    console.log('Isosceles triangle');
  } else if (a !== b && b !== c && a !== c) {
    console.log('Scalene triangle');
  }
} else if (true) {
  console.log('Triangle doesn’t exist');
}