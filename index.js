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

// Classes


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

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// }
//
// function User(firstName, lastName, email, password) {
//   // call super constructor:
//   Person.call(this, firstName, lastName);
//   this.email = email;
//   this.password = password;
// }
// User.prototype = Object.create(Person.prototype);
// User.prototype.setEmail = function(email) {
//   this.email = email;
// }
// User.prototype.getEmail = function() {
//   return this.email;
// }


// S.O.L.I.D


// Single Responsibility Principle

// class TodoList {
//     constructor() {
//         this.items = []
//     }
//
//     addItem(text) {
//         this.items.push(text)
//     }
//
//     removeItem(index) {
//         this.items = items.splice(index, 1)
//     }
//
//     toString() {
//         return this.items.toString()
//     }
// }
//
// class LocalStorage {
//     save() {
//         window.localStorage.setItem('items', this.items)
//     }
//
//     load() {
//         this.items = window.localStorage.getItem('items');
//     }
// }

// Open/Closed Principle

// class Coder {
//   constructor(fullName, language, hobby, education, workplace, position) {
//     this.fullName = fullName
//     this.language = language
//     this.hobby = hobby
//     this.education = education
//     this.workplace = workplace
//     this.position = position
//   }
// }
//
// class CoderFilter {
//     filterByName(coders, fullName) {
//         return coders.filter(coder => coder.fullName === fullName)
//     }
//     filterBySize(coders, language) {
//         return coders.filter(coder => coder.language === language)
//     }
//     filterByHobby(coders, hobby) {
//         return coders.filter(coder => coder.hobby === hobby)
//     }
// }
//
// const filterByProp = (array, propName, value) =>
//     array.filter(element => element[propName] === value);

// Liskov Substitution Principle

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//
//     getWidth() {
//         return this.width
//     }
//     getHeight() {
//         return this.height
//     }
//
//     setWidth(value) {
//         this.width = value
//     }
//     setHeight(value) {
//         this.height = value
//     }
//
//     getArea() {
//         return this.width * this.height
//     }
// }
//
// class Square extends Rectangle {
//     constructor(size) {
//         super(size, size)
//     }
//
//     setWidth(value) {
//         this.width = value
//         this.height = value
//     }
//
//     setHeight(value) {
//         this.height = value
//         this.width = value
//     }
// }

// Interface Segregation Principle

// v1

// function calculateBirthday(date) {
//     return user.birthday....
// }
//
// function getFullName(name, surname) {
//     return user.birthday....
// }
//
// calculateBirthday(user.birthday)
// getFullName(user.name, user.surname)

// v2

// class Phone {
//   constructor() {
//     if (this.constructor.name === 'Phone')
//       throw new Error('Phone class is absctract');
//   }
//
//   call(number) {}
//
//   takePhoto() {}
//
//   connectToWifi() {}
// }
//
// class IPhone extends Phone {
//   call(number) {
//     // працює
//   }
//
//   takePhoto() {
//     // працює
//   }
//
//   connectToWifi() {
//     // працює
//   }
// }
//
// class Nokia3310 extends Phone {
//   call(number) {
//     // працює
//   }
//
//   takePhoto() {
//     // не має камери
//   }
//
//   connectToWifi() {
//     // не має wifi модулю
//   }
// }

// Dependency Inversion Principle

// no ok

class FileSystem {
  writeToFile(data) {
    //  якась логіка
  }
}

class ExternalDB {
  writeToDatabase(data) {
    // якась логіка
  }
}

class LocalPersistance {
  push(data) {
    //  якась логіка
  }
}

class PersistanceManager {
  saveData(db, data) {
    if (db instanceof FileSystem) {
      db.writeToFile(data)
    }

    if (db instanceof ExternalDB) {
      db.writeToDatabase(data)
    }

    if (db instanceof LocalPersistance) {
      db.push(data)
    }
  }
}

const db = new FileSystem();
const manager = new PersistanceManager(db, { a: 1 });

// ok1

class FileSystem {
  save(data) {
    // якась логіка
  }
}

class ExternalDB {
  save(data) {
    // якась логіка
  }
}

class LocalPersistance {
  save(data) {
    // якась логіка
  }
}

class PersistanceManager {
  saveData(db, data) {
    db.save(data);
  }
}

const db = new FileSystem();
const manager = new PersistanceManager(db, { a: 1 });
