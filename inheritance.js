class Parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}


class Child extends Parent{
    constructor(name){
        super()
        this.name = name
    }
}

const baby = new Child("Arnold")
const baby2 = new Child("Tom")
console.log(baby);
console.log(baby2);





class Parent2{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}


class Childd extends Parent2{
    constructor(name){
        super()
        this.name = name
    }
    getFullName(){
        return this.name + " " + this.fatherName
    }
    
}

const child = new Childd("Arnold")
const child2 = new Childd("Tom")
console.log(child.getFullName());
console.log(child2 .getFullName());