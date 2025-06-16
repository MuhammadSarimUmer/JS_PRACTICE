// // function myFunction(){
// //     console.log("Hello World");
// // }
// // myFunction();


// // a = 10
// // b = 45

// // function add(a,b){
// //     return a+b;

// // }
// // console.log(add(a,b));

// // const sum = (a,b) =>{
// //     return a+b;
// // }
// // let vcount = 0;
// // let userinput = prompt("Enter your name");
// // function vowel(userinput){
// //     for(let val of userinput){
// //        if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
// //            vcount++;
// //        }
// //     }
// //     console.log(`your name has ${vcount} vowels in it`);
// // }

// // vowel(userinput);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach(function(val){
//     console.log(val);
// })

// arr.forEach((val)=>{
//     console.log(val);
// })


// arr.forEach((val,idx,arr) => 
// {
//     console.log(val);
//     console.log(idx);
//     console.log(arr);


// })

let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach((val)=>{
    console.log(val**2);
})


let newArr = numbers.map((val)=>{
    return val**2;
})
console.log(newArr);

let newArr2 = numbers.filter((val)=>{
    // return val%2==0;
    return (val>3&&val%3==0);
})

console.log(newArr2);