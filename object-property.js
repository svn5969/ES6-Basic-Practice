const students = [
    {id: 21, name:"shovon"},
    {id:31, name:"sourav"},
    {id:41, name:"svn"},
    {id:51, name:"arjun"}
]
const student = students.map(s =>s.name)
const bigger = students.filter(s =>s.id>40)
const biggerOne = students.find(s =>s.id>40)
console.log(student);
console.log(bigger);
console.log(biggerOne);

