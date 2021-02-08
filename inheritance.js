class Parent{
    constructor() {
        this.fatherName = "Nilu Mia";
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name ;
    }

    getFullName() {
        return this.name +' '+this.fatherName;
    }
}
const baby = new Child('Anowar') ;
const baby2 = new Child('Rupa');
console.log(baby);
console.log(baby2.getFullName());
console.log(baby.getFullName());