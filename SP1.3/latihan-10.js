var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x > n - y - 2) {
      document.write("&nbsp" + " +");
    } else {
      document.write("&nbsp" + " - ");
    }
  }
  document.write("<br>");
}
