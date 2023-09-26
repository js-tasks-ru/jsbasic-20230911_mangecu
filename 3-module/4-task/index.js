function showSalary(users, age) {
  let result = [];
  for (let item in users) {
    if (users[item].age <= age) {
      result.push(`${users[item].name}, ${users[item].balance}`)
    }
  }
  return result.join('\n');
}

