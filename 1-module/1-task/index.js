function factorial(n) {
  switch (n) {
    case '0':
    case '1':
      return 1
    default:
      let i = 0;
      let result = 1;
      while (i < n) {
        result = result * (n - i);
        i++;
      }
      return result
  }
}

