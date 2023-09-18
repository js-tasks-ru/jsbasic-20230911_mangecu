function sumSalary(salaries) {
  let result = 0;
  for (let count in salaries) {
    if (!isNaN(salaries[count]) && isFinite(salaries[count])) result += salaries[count];
  }
  return result
}


