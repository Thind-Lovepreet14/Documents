// an object is a standalone entity, with properties and type

// refers to the object it belongs to
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.





// Create an empty object literal named fruits.
// Use the fruits variable and push 5 different types of fruit to this object.

const fruits = {};
fruits.key1='apples';
fruits.key2='bananas';
fruits.key3='grapes';
fruits.key4='kiwis';
fruits.key5='strawberries';

console.log(fruits);