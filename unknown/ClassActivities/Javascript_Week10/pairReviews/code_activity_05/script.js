// Write a JavaScript function that accepts a string as a 
// parameter and counts the number of vowels within the string

function countVowels(str) {
    var vowelCount = 0;

    var string = str.toString();

    for(i=0; i < string.length ; i++) {
        if(string.charAt(i) ==='a' 
        || string.charAt(i) === 'e' 
        || string.charAt(i) === 'i' 
        || string.charAt(i) === 'o' 
        || string.charAt(i) === 'u'
        || string.charAt(i) === 'A'
        || string.charAt(i) === 'E'
        || string.charAt(i) === 'I'
        || string.charAt(i) === 'O'
        || string.charAt(i) === 'U') 
        {
            vowelCount +=1;
        }
    }
    return vowelCount;
}

console.log(countVowels('My name is Juan'));