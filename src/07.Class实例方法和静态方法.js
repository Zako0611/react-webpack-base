
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.say=function(){
    console.log("这是person的实例方法")
}

Person.show=function(){
    console.log("这是person的静态方法")
}

const p1 = new Person('zako', '18')
console.log(p1)
p1.say()
Person.show()



class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static info='eeee' //静态属性

    jiao(){
        console.log("实例方法")
    }

    static show(){
        console.log("静态方法")
    }
}

const a1 = new Animal('大黄', 3)
console.log(a1)
a1.jiao()
Animal.show()