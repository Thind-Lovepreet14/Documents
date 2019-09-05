// Write an Object constructor for people that includes properties for
//  firstName, lastName, and age. Include methods for introduce() that 
//  prints out “My name is [firstName] [lastName] and I am a [age]-years old.” and a 
//  discountEligible() method that shows if they are eligible or not for senior citizen’s discount (65+).

function People(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.introduce = function () {
        return `My name is ${this.firstName} ${this.lastName} and I am a ${this.age}-years old.`
    } 

    this.discountEligible = function () {
        return (this.age>=65) 
        ? `${this.firstName} ${this.lastName} is eligible for senior citizen's discount` 
        : `${this.firstName} ${this.lastName} is not eligible for senior citizen's discount` 
        
    }

} 

const Walter = new People('Walter','Marikwa', '20');
 const info = Walter.introduce();
 console.log(info);
const discount = Walter.discountEligible();
console.log(discount);

const Braxton = new People('Braxton', 'Jackson', '82');
console.log(Braxton.introduce());
console.log(Braxton.discountEligible());