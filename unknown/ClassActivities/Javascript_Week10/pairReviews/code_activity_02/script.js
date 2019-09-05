// Starting from scratch, write code that loops through the following array and logs the name of each animal on the farm to the console:
//  var myFarm = ["chickens", "pigs", "cows", "horses","ostriches"];
//       b.  Then check if the first letter in the animal's name begins with a "c" or "o".
// If it does, create an alert saying, "Starts with 'c' or 'o'!"
//             HINT: You can access the first character of a string as if it were the first element 
// of an array.

var myFarm = ["chickens", "pigs", "cows", "horses","ostriches"];



myFarm.forEach(x=> {
    console.log(x);
    if (x[0] === 'c' || x[0] === 'o') {
        alert(x + " starts with 'c' or 'o'!")
    }
})

