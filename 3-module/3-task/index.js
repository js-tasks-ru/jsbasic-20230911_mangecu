function camelize(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }
  str = str.filter(el => el !== '-').join('');
  return str;
}

