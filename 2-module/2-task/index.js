function isEmpty(obj) {
  let isEmpty = true;
  for (let key in obj) {
    isEmpty = false;
  }
  return isEmpty;
}

let schedule = {};
isEmpty(schedule);
