class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.salary = salary ;
    }
}

const normalPerson = new Person('Hero', 'Balam', 30000);
console.log(normalPerson);

const heroPerson = new Person('Kalam', 'Alom', 40000);
console.log(heroPerson);

function Person1(firstName, lastName, salary) {
    this.firstName = firstName ;
    this.lastName = lastName ;
    this.salary = salary ;
}

const oldPerson = new Person('Grand', 'papa', 12000);
console.log(oldPerson);