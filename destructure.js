const person = {name:"shovon",age:25, job: "web Dev", address: "fp",phone:018282737387}




const{address,job}=person
// const address = person.address
// const service = person.job
console.log(address,job);
console.log(address,job);
console.log(address,job);
console.log(address,job);


//////////////////////////////////////////////////////

const friends = ['A','b','c','d','e']
const [smallFriend,nextFriend,...restFriends] = friends
console.log(restFriends)
console.log(nextFriend)
console.log(smallFriend)

//////////////////////////////////////////////////////

const complexObject = {
    name:'abc',
    info : {
    address:'kola bagan',
    leader: 'Tiger Leader'

}
}
const {leader} = complexObject.info
console.log(leader);    