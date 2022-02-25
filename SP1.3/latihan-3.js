var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x - 2 > y) {
      document.write(y, " ");
    } else {
      document.write(" ");
    }
  }
  document.write("<br >");
}
