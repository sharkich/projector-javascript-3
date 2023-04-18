'use strict';

// const list = [1, 2, 3, 4, 5]
//
// // const shuffle = (arr) => arr.sort(() => Math.round(Math.random() * 2) - 1);
//
// function shuffle() {
//     this.sort(() => Math.round(Math.random() * 2) - 1);
// }
//
// list.shuffle = shuffle;
//
// Array.prototype.shuffle = shuffle;


// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName
//   }
// }
//
// class User extends Person {
//   constructor(firstName, lastName, email, password) {
//     super(firstName, lastName)
//     this.email = email
//     this.password = password
//    }
//    getEmail() {
//      return this.email
//    }
//    getPassword() {
//      return this.password
//    }
// }
//
// let user1 = new User('John','Cena','john@cena.com', 'iLuvWWE');
// user1.getEmail();

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
}

function User(firstName, lastName, email, password) {
  // call super constructor:
  Person.call(this, firstName, lastName);
  this.email = email;
  this.password = password;
}
User.prototype = Object.create(Person.prototype);
User.prototype.setEmail = function(email) {
  this.email = email;
}
User.prototype.getEmail = function() {
  return this.email;
}
