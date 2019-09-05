// Write a JavaScript function that reverses a number.


function reversedNum(num) {
    return (
      parseFloat(num.toString().split('').reverse().join('') ) * Math.sign(num)
    )                 
  }

console.log(reversedNum(8721))
// 8721.tostring() "8721"
// .split ['8','7','2','1']
// .reverse ['1','2','7','8']
// .join "1278"
// parseFloat('1278') = 1278
// 1278 * 1 = 1278

console.log(reversedNum(458000))

console.log(reversedNum(-8721))

 console.log(reversedNum(1234.567))


 function reversedNum2(num, newNum) {
   var num = prompt('Please select a multiple digit number');
   var newNum = parseFloat(num.toString().split('').reverse().join('') ) * Math.sign(num)

  return (
    document.write(newNum)
  )                 
}

reversedNum2();