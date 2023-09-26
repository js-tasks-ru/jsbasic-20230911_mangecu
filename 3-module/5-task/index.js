function getMinMax(str) {
  str = str
    .split(' ')
    .map(el => +el)
    .filter(el => !isNaN(el));
  return {min: Math.min.apply(0, str), max: Math.max.apply(0, str)};
}

