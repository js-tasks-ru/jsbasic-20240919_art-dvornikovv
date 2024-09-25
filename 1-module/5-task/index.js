function truncate(str, maxlength) {
  if (str.length >= maxlength) {
    newStr = str.slice(0, maxlength - 1);
    return `${newStr}…`;
  } else {
    return str;
  }
}

