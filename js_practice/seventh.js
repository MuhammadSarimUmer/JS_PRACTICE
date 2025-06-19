// // console.log("one");
// // console.log("two");
// // console.log("three");

// // function hello(){
// // console.log("Hello World");
// // }

// // setTimeout(hello,2000)


// function generateData(data,generate){

//     setTimeout(()=>{
//         console.log("data is",data);

//         if(generate){
//             generate();
//         }
//     },2000)
// }

// generateData("hello1",()=>{
//     console.log("hello1");
//     generateData("hello3",()=>{
//         console.log("hello3");
//     })
// })

// generateData("hello again");

// let promise = new Promise((resolve,reject)=>{
//     console.log("promise is created");
//     resolve("done");
//     reject("error");
// })
//promise.then((val)=>{
    //console.log(val);
//})
//promise.catch((val)=>{
    //console.log(val);
//}) .then works on the promise if it is fulfilles
//.catch works on the promise if it is rejected

function asyncfunc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("async function");
            resolve("done");
        },2000);
    });
}
function asyncfunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("async function 2");
            resolve("done 2");
        },2000);
    });
}
// console.log("fetching data");
// let promise1 = asyncfunc();
// promise1.then((res)=>{
//     console.log("fetching data 2");
//     let promise2 = asyncfunc2();
//     promise2.then((res)=>{
//     })
// });
