let n = 9;
let res = "";
let star = 1;
let spaces = n - 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= spaces; j++) {
    res += " ";
  }

  for (let j = 1; j <= star; j++) {
    res += "*";
  }
  res += "\n";
  if (i < Math.ceil(n / 2)) {
    star++;
    spaces--;
  } else {
    spaces++;
    star--;
  }
}
console.log(res);
