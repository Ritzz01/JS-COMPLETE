console.log("hi");

setTimeout(() => {
  console.log("Hello1");

  setTimeout(() => {
    console.log("Hello2");

    setTimeout(() => {
      console.log("Hello3");
    }, 500);
  }, 1000);
}, 2000);

console.log("Bye");
