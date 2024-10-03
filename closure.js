function outer()
{
    let a=18

    return function inner()
    {
      
        console.log(a);

        
    }
}

let b=outer()
b()