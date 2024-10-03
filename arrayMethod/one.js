let students = [
  { name: "John Doe", age: 20, grade: "A" },
  { name: "Jane Smith", age: 19, grade: "B" },
  { name: "Michael Brown", age: 21, grade: "A-" },
  { name: "Emily Davis", age: 22, grade: "B+" },
  { name: "Sarah Wilson", age: 20, grade: "A+" },
];

// let a = students.find((i) => {
//  return(i.name.includes("John"))

// });
// console.log(a);

// let a=students.filter((i)=>{
// return (i.name.includes("John"))
// })
// console.log(a);

// let b=students.map((i)=>{
//   console.log(i.name);

// })

// let a=students.reduce((acc,i)=>{
//         console.log(acc,i);
//         return (i.age%2==0)

// },0)

// console.log(a);

let b = [1, 2, 3, 4, 5];
// let max=b[0]
// let c = b.reduce((acc, i) => {
//   if (acc > i) {
//     return acc;
//   } else {
//     return i;
//   }
// }, max);

// console.log(c);


function isPrime(num) {
  if (num < 2) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Divisible by another number
  }
  return true; // Prime if not divisible
}

let a=b.reduce((acc,i)=>{
  
  if(isPrime(i))
  {
    acc.push(i);
  }
  return acc
  
},[])
console.log(a);
