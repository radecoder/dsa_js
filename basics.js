// 1️⃣ Print all numbers from 1–10 using a for loop.

//     for (let index = 1; index < 11; index++) {
//         console.log(index)
//     }

// 2️⃣ Write a function to check if a number is even or odd.

// let n
// function checkEvenOdd(n) {
//     if (n%2 === 0)
//         console.log("even")
//     else{
//         console.log("odd")
//     }
// }
// checkEvenOdd(3)
// checkEvenOdd(4)
// const checkEvenOdd = (n) => {
//     return n%2===0 ? "EVEN" : "ODD";
// }
// console.log(checkEvenOdd(3));
// console.log(checkEvenOdd(4));

// 3️⃣ Given an array [1,2,3,4,5], create a new array with each element squared.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];
// for (let i = 1; i < arr1.length; i++) {
//   arr2.push(arr1[i] * arr1[i]);
// }
// console.log(arr2);

//  Output:
// [2,4,6,8,10]

// just double each number instead of squaring
// let arr = [1,2,3,4,5]
// let squared = arr.map(num => num*2)
// console.log(squared)

//  Output:
// [1, 4, 9, 16, 25]

// 1️⃣ Print numbers from 1 to 20.
// for(let i=1; i<=20;i++){
//     console.log(i);
// }
// 2️⃣ Print even numbers from 1 to 20.
// for(let i=1; i<=20; i++){
//     i%2===0 && console.log(i)
// }

// or

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// 3️⃣ Print the sum of numbers from 1 to 10.
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum = i+sum;
// }
// console.log(sum);
// 4️⃣ Print the multiplication table of 5 (up to 10).
// for(let i=1; i<=50; i++){
//     i%5===0 && console.log(i)
// }

// or

//multiplication table of 5
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// 🔹 Medium:
// 5️⃣ Given an array [3, 6, 2, 9, 1], print each element.
// let arr = [3, 6, 2, 9, 1];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// 6️⃣ Given the same array, print only the elements that are > 3.

// let arr = [3, 6, 2, 9, 1];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3) {
//     console.log(arr[i]);
//   }
// }

// 7️⃣ Find the maximum number in [3, 6, 2, 9, 1].

let arr = [3, 6, 2, 9, 1];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// 8️⃣ Print all pairs of elements in the array (nested loops).

// 🔹 Challenge:
// 9️⃣ Print a pattern like this:

// *
// **
// ***
// ****
// *****

// 🔟 Print a pattern like this:

// 1
// 12
// 123
// 1234
// 12345
