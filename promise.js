let myPromise=new Promise((resolve,reject)=>
{
    let age=30
    if(age<=18)
    {
       reject("You are a teen")
    }
    else{
        resolve("You are an adult")
    }
})

myPromise.then((msg)=>console.log(msg)).catch((err)=>console.log(err)).finally(()=>console.log("msg"))
