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

// let arr = [3, 6, 2, 9, 1];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 8️⃣ Print all pairs of elements in the array (nested loops).

// let arr = [3, 6, 2, 9, 1];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i], arr[j])
//     }
// }

// 🔹 Challenge:
// 9️⃣ Print a pattern like this:

// *
// **
// ***
// ****
// *****

/*
Row 1 → 1 star
Row 2 → 2 stars
Row 3 → 3 stars

So on row i, you print exactly i stars.
*/

// for (let i = 1; i <= 5; i++) {          // outer loop (rows) (how many rows to print).
//     let str = "";                       // empty string for current row
//     for (let j = 1; j <= i; j++) {      // inner loop (columns)
//         str += "*";                     // add one * to the string
//     }
//     console.log(str);                   // print the string after inner loop
// }

// 🔟 Print a pattern like this:

// 1
// 12
// 123
// 1234
// 12345

// let n=5;
// for(let i=1; i<=n; i++){
//     let str="";
//     for(let j=1; j<=i; j++){
//         str+=j;
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 5; i++) {      // outer loop → rows
//     let str = "";                   // string to build each row
//     for (let j = 1; j <= i; j++) {  // inner loop → columns
//         str += j;                   // append current j
//     }
//     console.log(str);               // print the row
// }

/*
🚀 How it works:
When i = 1:
j runs from 1 → 1

str = "1"
prints → 1

When i = 2:
j runs from 1 → 2

str = "12"

prints → 12

When i = 3:
j runs from 1 → 3

str = "123"

prints → 123

…and so on up to i = 5.
*/

// 7️⃣ Reverse number pattern:

// 54321
// 5432
// 543
// 54
// 5

// n = 5
//       i         j coulmn
// row - 1 , str - 5
// row - 2 , str - 4
// row - 3 , str - 3
// row - 4 , str - 2
// row - 5 , str - 1

// let n=5;
// for(let i=1; i<=n; i++){
//     let str= "";
//     for(let j=n; j>=i; j--){
//         str+=j;
//     }
//     console.log(str);
// }

// for(i = 1; i<=5; i++){
//     let str = "";
//     for(j= 5; j>= i; j--){   // 5 5
//         str += j;
//     }
//     console.log(str);
// }

// 8️⃣ Right-aligned stars:

//     *
//    **
//   ***
//  ****
// *****

// n = 5
//       i           j          k
// row - 1 , space - 4 , star - 1
// row - 2 , space - 3 , star - 2
// row - 3 , space - 2 , star - 3
// row - 4 , space - 1 , star - 4
// row - 5 , space - 0 , star - 5

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=(n-i); j++){
//         str+=" ";
//     }
//     for(let k=1; k<=i; k++){
//         str+= "*";
//     }
//     console.log(str)
// }

//or

// for(i=1; i<=5; i ++){
//     let str = "";
//     for(j=4; j>=i; j--){
//         str += " ";
//     }

//     for(k = 1; k<=i; k++){
//         str+="*";
//     }
//     console.log(str);

// }

// 9️⃣ Pyramid pattern:

//     *
//    ***
//   *****
//  *******
// *********

// n = 5
//       i           j          k
// row - 1 , space - 4 , star - 1
// row - 2 , space - 3 , star - 3
// row - 3 , space - 2 , star - 5
// row - 4 , space - 1 , star - 7
// row - 5 , space - 0 , star - 9

// let n=5;
// for(let i=1; i<=n; i++){
//     str="";
//     for(let j=1; j<=n-i; j++){
//         str+=" ";
//     }
//     for(let k=1; k<=(2*i)-1; k++){
//         str+="*"
//     }
//     console.log(str);
// }

// let n = 5;
// for (i = 1; i <= n; i++) {
//   //row
//   let str = "";
//   for (j = 1; j <= n - i; j++) {
//     //space
//     str += " ";
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     // star
//     str += "*";
//   }
//   console.log(str);
// }

/*
🚀 1️⃣ Most Important Questions for for Loop (including patterns)
📋 Numbers & Logic:
✅ Print numbers from 1 → N
✅ Print even & odd numbers between 1 → N
✅ Sum of first N natural numbers
✅ Factorial of N (N!)
✅ Reverse a number (e.g., 123 → 321)
✅ Check if a number is Palindrome
✅ Check if a number is Prime
✅ Print Fibonacci series up to N terms

📋 Patterns:
✅ Right-angled triangle:

markdown
Copy
Edit
*
**
***
****
*****
✅ Right-aligned triangle:

markdown
Copy
Edit
    *
   **
  ***
 ****
*****
✅ Pyramid:

markdown
Copy
Edit
    *
   ***
  *****
 *******
*********
✅ Inverted pyramid:

markdown
Copy
Edit
*********
 *******
  *****
   ***
    *
✅ Diamond:

markdown
Copy
Edit
    *
   ***
  *****
   ***
    *
✅ Number patterns:

yaml
Copy
Edit
1
12
123
1234
12345
✅ Reverse number triangle:

yaml
Copy
Edit
54321
5432
543
54
5
✅ Floyd’s triangle:

Copy
Edit
1
2 3
4 5 6
7 8 9 10
🚀 2️⃣ Most Important Questions for Arrays
✅ Print all elements of an array
✅ Find the maximum & minimum element
✅ Find the second largest element
✅ Reverse an array
✅ Count frequency of each element
✅ Print all pairs of elements
✅ Print all unique pairs (i < j)
✅ Find all triplets in an array that sum to a given number
✅ Find all unique triplets that sum to 0 (3-sum)
✅ Find the missing number in an array of 1 → N
✅ Find duplicate elements in an array
✅ Find intersection (common elements) of two arrays

🚀 3️⃣ Most Important Questions for Strings
✅ Reverse a string (e.g., hello → olleh)
✅ Check if a string is a Palindrome (madam)
✅ Count vowels & consonants
✅ Remove duplicate characters
✅ Find the most frequent character
✅ Count occurrences of each character
✅ Check if two strings are anagrams (listen ↔ silent)
✅ Capitalize the first letter of each word
✅ Check if string contains only letters / only digits
✅ Count words in a string

📝 Suggested Strategy:
✨ Start with For Loops + Patterns → get strong in basic loops & nested loops.
✨ Then Arrays → because they add indexing, conditions, and nested logic.
✨ Then Strings → because they test manipulation, conditions, and attention to detail.

If you want:
🔷 I can give you one-by-one questions with hints
🔷 Or I can give you code templates
🔷 Or I can create a practice sheet/PDF for you

💬 Just tell me:
✅ Start from For Loop #1
✅ Give me arrays now
✅ Give me all one by one with hints

How do you want to proceed? 🚀







*/ /*

Ask ChatGPT

📋 Array Interview Questions

🔷 Easy
Find the largest and smallest element in an array.

*/
// let arr =[1,3,2,5,-2,7,4]
//     let min = arr[0];
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//         if(arr[i]>max){
//             max=arr[i]
//         }

//     }
//     console.log("Largest element is", max);
//     console.log("smallest element is", min);
/*
Reverse an array in-place.


function reverseArray(arr){
    let start = 0;
    let end = arr.length-1
    while (start<end){
        let temp = arr[start]
        arr[start]= arr[end]
        arr[end] = temp;
        start ++;
        end --;
    }
    return arr;
}
const arr = [1, 2, 4, 6, 5];
console.log("Reverse array is ", reverseArray(arr)) */

/*
Find the second largest element.

*/
// function secondLargest(arr){
//     if(arr.length)
// }
function findSecondLargestSmallest(arr) {
  if (arr.length < 2) {
    return null; // not enough elements
  }

  // Remove duplicates & sort
  const uniqueArr = [...new Set(arr)];
  if (uniqueArr.length < 2) {
    return null; // all elements are equal
  }

  // Sort ascending
  uniqueArr.sort((a, b) => a - b);

  const secondSmallest = uniqueArr[1];
  const secondLargest = uniqueArr[uniqueArr.length - 2];

  return { secondLargest, secondSmallest };
}

// Example usage:
const arr = [5, 2, 9, 1, 6];
const result = findSecondLargestSmallest(arr);

if (result) {
  console.log(`Second Largest: ${result.secondLargest}`);
  console.log(`Second Smallest: ${result.secondSmallest}`);
} else {
  console.log("Array does not have enough unique elements.");
}

/*
Check if an array is sorted (ascending/descending).

*/ 

/*
Remove duplicates from a sorted array.

*/ 

/*
Count the number of even and odd elements.

*/ 

/*
Find the sum of all elements.

*/ 

/*
Rotate an array by k positions.

*/

/*
Find the missing number in an array of size n where numbers are 1 to n+1.
*/

/*
Merge two sorted arrays.
*/ 

/*
🔷 Medium
Find the subarray with maximum sum (Kadane’s Algorithm).

Find all pairs of elements in an array whose sum is equal to a given number.

Move all zeros to the end without changing the order of non-zero elements.

Find the majority element in an array.

Find the length of the longest consecutive sequence.

Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).

Find the first repeating and first non-repeating element.

Find if a subarray with sum 0 exists.

🔷 Tricky
Trapping Rain Water problem.

Maximum product subarray.

Count inversions in an array.

📋 String Interview Questions

🔷 Easy
Reverse a string.

Check if a string is a palindrome.

Count vowels and consonants.

Remove all spaces from a string.

Find the length of the longest word in a string.

🔷 Medium
Find the first non-repeating character.

Check if two strings are anagrams.

Check if a string contains all unique characters.

Implement strstr (find a substring in a string).

Find the longest common prefix in an array of strings.

🔷 Tricky
Longest palindromic substring.

Longest substring without repeating characters.

Minimum window substring (containing all characters of another string).

Print all permutations of a string.

Compress a string (like: aabcccccaaa → a2b1c5a3).

🚀 Preparation Tips
🎯 Practice writing code on paper or whiteboard.
🎯 Explain your approach before coding.
🎯 Optimize if they ask for better time/space complexity.
🎯 Know the Big O complexities of your solution.


*/
