
class Person{ //父类
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class American extends Person{
    constructor(name,age,gender){

        super(name,age)
        this.gender=gender
    }
}

const a1 = new American('Jack', 20,'man')
console.log(a1)

class Chinese extends Person{
   
}
const c1=new Chinese('翠花',22)
console.log(c1)