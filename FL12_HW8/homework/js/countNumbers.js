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

function countnums(str) {
  let makedNums = makeNumber(str);
  let countNums = {};

  for (let i = 0; i < makedNums.length; i++) {
    if (countNums[makedNums[i]]) {
      countNums[makedNums[i]] += 1;
    } else {
      countNums[makedNums[i]] = 1;
    }
  }
  return countNums;
}
countnums();