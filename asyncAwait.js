let myPromise=new Promise((resolve,reject)=>{
    resolve("hello world")
})

async function main() {
    let b=await myPromise
    // console.log(b)
    return b
}
main().then((data)=>console.log(data))