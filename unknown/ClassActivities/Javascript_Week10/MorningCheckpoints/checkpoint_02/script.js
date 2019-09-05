//a callback function is a function contained within another function that is later invoked to perform a certain task

//an anonymous function is a single function that contains no other function

// let smiley = ":-)"

// function getSmiley() {
//     console.log(`This is my console log ${smiley}`)
// }


// getSmiley();

function greeting(name) {
    alert(`Hello ${name}`);
}

function processUserInput(callback) {
    var name = prompt(`Please enter your name.`);
    callback(name);
}

processUserInput(greeting);