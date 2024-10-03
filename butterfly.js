// let res = "";
// let n = 5;
// let spaces = 2 * n - 1;
// let star = 1;
// for (let i = 1; i <= 2 * n; i++) {
//   for (let j = 1; j <=star; j++) {
//     res += "*";
//   }

//   for (let j = 1; j <= spaces; j++) {
//     res += " ";
//   }

//   for (let j = 1; j <=star; j++) {
//     res += "*";
//   }

//   if (i <n) {
//     spaces -= 2;
//     star += 1;
//   } else {
//     spaces += 2;
//     star -= 1;
//   }
//   res += "\n";
// }
// console.log(res);

let res = "";
let n = 5;
let spaces = 2 * n - 1;
let star = 1;
for (let i = 1; i <= 2 * n; i++) {
  for (let j = 1; j <= star; j++) {
    if (j == 1 || j == star) {
      res += "*";
    } else {
      res += " ";
    }
  }

  for (let j = 1; j <= spaces; j++) {
    res += " ";
  }

  for (let j = 1; j <= star; j++) {
    if (j == 1 || j == star) {
      res += "*";
    } else {
      res += " ";
    }
  }

  if (i < n) {
    spaces -= 2;
    star += 1;
  } else {
    spaces += 2;
    star -= 1;
  }
  res += "\n";
}
console.log(res);
