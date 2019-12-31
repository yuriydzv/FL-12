function isBigger(x, y) {
  return x > y;
}

function isSmaller(x, y) {
  if (x === y) {
    return false;
  } else {
    let min = !isBigger(x, y);
    return min;
  }
}
isSmaller();