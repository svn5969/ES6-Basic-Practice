class student{
         constructor(sId, sName){
             this.id =sId;
             this.name = sName
         }
}
const student1 = new student(12,"shovon")
const student2 = new student(10,"sourav")
console.log(student1, student2);
console.log(student1.name, student2.id);