// for(let i = 0; i<10;i++){
// console.log(i);
// }
// console.log("done");

// let str = "Muhammad Sarim Umer";
// let size = 0;
// for( let val of str){
//     console.log(val);
//     size++;
// }
// console.log("The size of string Muhammad Sarim Umer is",size);
// console.log(str.length)

//  let student = {
//     name:"Muhammad Sarim Umer",
//     age:19,
//     discipline : "ComputerScience"
//  }

//  for(let val in student){
//     console.log(val,student[val]);
//  }

// let number = 0;
// for(let i =0;i<100;i++){
//     if(number%2==0){
//         console.log(number,"is even");
//     }
//     else{
//         console.log(number,"is odd");
//     }
//     number++;
// }

// let ActualNum = 35;
// let UserNum = prompt("Enter the correct number to win");

// while(ActualNum != UserNum){
//     UserNum = prompt("Enter the correct number to win");
// }

// console.log("You won and the correct number was",ActualNum)
// let str = "Muhammad Sarim Umer";
// for(let i = 0;i<str.length;i++){
//     console.log(str[i]);
// }

// let Object = "bottle";
// let price = 20;
// let sentence  = `      The price of ${Object} is ${price}    `;

// console.log(sentence);

// let Object2 = "fridge";
// let price2 = 25000;
// let sentence2 = `The price of ${Object2} is ${price2} rupees`;
// console.log(sentence2);
// console.log(sentence.length);
// console.log(sentence2.toUpperCase());
// console.log(sentence2.toLowerCase());
// console.log(sentence.trim())

// let str = "0123456";
// let str2 = "789";
// console.log(str.concat(str2));
// console.log(str.slice(3,5));

// let str = "hellow"
// console.log(str.replace("h","y"));
// console.log(str.charAt(4));

//QUIZ:-
let userinput = prompt("Enter your username");
while(userinput.includes(" ")){
    console.log("Please enter a valid username");
    userinput = prompt("Enter your username");

}
size = userinput.length;
console.log(`Welcome @${userinput}${size}`);