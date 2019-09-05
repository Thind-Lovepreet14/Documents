// Create two arrays.  Name the first array ‘odd’ have it contain only the old numbers from 1 to 10.  
// Name the second array ‘even’ have it contain only the even numbers from 1 to 10.
// Combine the two arrays ( odd & even) into a new array named ‘allNums’
// Use an alert and pull out the number 9.  Use an alert to pull out the number 4.

let odd = [1,3,5,7,9]
let even = [2,4,6,8,10]

let allNums = odd.concat(even);
console.log(allNums);

alert(allNums.splice(4,1));
alert(allNums.splice(5,1));