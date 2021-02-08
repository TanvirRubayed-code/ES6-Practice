class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = 'Kolimonnesa School. ' ;
    }
}
const student1 = new Student(12, 'Shuvo') ;
const student2 = new Student(22, 'Mahiya') ;
const newStudent = new Student(323, 'Bappi');

console.log(student1.id, student2.name, newStudent.id, newStudent.name) ;