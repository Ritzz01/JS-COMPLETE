// let arr=[1,2,3]
// let[a,b]=arr
// console.log(a);
// console.log(b);

// let user={name:"xyz",age:24,address:"abc"}
// let {name,address}=user
// console.log(name);
// // console.log(age);8
// console.log(address);



// let num1=[10,20,30,40,50]
// let num2=[40,50]
// let[a,b,...c]=num1
// console.log(a);
// console.log(b);
// console.log(c);


// let num1=[10,20,30,40,50]
// let num2=[40,50]
// let[a,b,...c]=[...num1,...num2]
// console.log(a);
// console.log(b);
// console.log(c);

let a={name:"tom",color:"gray",age:5}
let b={name:"jerry",color:"brown",breed:"labro"}
// let{name,age}=a
// console.log(name);
// console.log(age);

// let{name,color}={...a,...b}
// console.log(name);
// console.log(color);

let{name,color,...obj}={...a,...b}
console.log(name);
console.log(color);
console.log(obj);
