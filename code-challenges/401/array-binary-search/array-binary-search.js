function binarySearch(array, element) {
  function getBaseLog(x, y) {
    return Math.round(Math.log(y) / Math.log(x));
  }
  let limitStep = getBaseLog(2, array.length);
  let stop = false;
  let i = Math.round((array.length - 1) / 2);
  let duration = Math.round(i / 2);
  let step = 0;
  while (!stop) {
    if (step === limitStep) {
      return -1;
    } else if (element < array[i]) {
      i = i - duration;
    } else if ((element > array[i])) {
      i = i + duration;
    } else if (array[i] === element) {
      stop = true;
      return i;
    }
    duration = Math.round(duration / 2);
    step++;
  }
}
module.exports = binarySearch;
