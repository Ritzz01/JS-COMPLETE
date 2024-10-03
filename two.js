function sum(...a) {
  let j = 0;
  for (let i=0;i<=a.length;i++) {
    j += i;
  }
  return j;
}

console.log(sum(1, 2, 3));
console.log(sum(1)(2)(3));