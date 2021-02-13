const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    billCharge: function(ammount, tips, tax){
        console.log(this);
        return this.salary = this.salary - ammount - tips - tax;
    }
}
// normalPerson.billCharge(3434);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 25000,

}

const friendlyPerson = {
    firstName: 'Tipu',
    lastName: 'Alom',
    salary: 30000
}
// const heroCharge = normalPerson.billCharge.bind(heroPerson) ;
// heroCharge(1221);
// heroCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyPersonCharge = normalPerson.billCharge.bind(friendlyPerson);
// friendlyPersonCharge(20000);
// console.log(friendlyPerson.salary);


// normalPerson.billCharge.call(heroPerson, 9000);
// console.log(heroPerson.salary);
// normalPerson.billCharge.call(friendlyPerson, 3003);
// console.log(friendlyPerson.salary);


normalPerson.billCharge.apply(heroPerson, [1000, 500, 100]);
console.log(heroPerson.salary);