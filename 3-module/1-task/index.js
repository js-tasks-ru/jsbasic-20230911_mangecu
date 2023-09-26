function namify(users) {
  const arr = [];
  for (let user in users) {
    arr.push(users[user].name);
  }
  return arr;
}


