// console.log('ok')

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.info="111"
const p1 = new Person('zako', '18')

console.log(p1.name) //实例属性
console.log(Person.info) //静态属性


class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static info='eeee' //静态属性
}

const a1 = new Animal('大黄', 3)
console.log(a1)
console.log(Animal.info)