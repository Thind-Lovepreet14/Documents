// Write a function that checks whether a passed string is a palindrome or not?
// Note:  A palindrome is a word, phrase or sequence that reads the same backward as forward e.g. madam.

function palindromeChecker(word) {
    const reversed = word.split('').reverse().join('');    
    return word === reversed ? `It's a palindrome` : `It's not a palindrome`; 
 }
  
 console.log(palindromeChecker("madam")); 
 // madam.split('') ['m','a','d','a','m']
 // reverse() ['m','a','d','a','m']
 //join() 'madam'
 console.log(palindromeChecker("phone")); 
//phone.split('') ['p','h','o','n','e']
//reverse() ['e','n','o','h','p',]
//join() 'enohp'
