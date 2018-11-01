function* range(arrey1, arrey2) {
  let returnVal = '';
  let pos = 1;
  let nextOutIndex = 0;
  for (let i of arrey1) {
    returnVal += '' + arrey1[i];
    if (arrey2[nextOutIndex] == pos) {
      yield returnVal;
      pos = 1;
      nextOutIndex++;
      returnVal = '';
    } else {
      pos++;
    }
  }
}

for (let i of range([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3, 4])) {
  console.log(i)
}