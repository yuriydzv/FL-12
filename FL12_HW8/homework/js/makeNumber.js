function makeNumber(str) {
  let nums = '';

  if (!str) {
    return '';
  }
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') {
      nums += str[i];
    }
  }
  return nums;
}
makeNumber();