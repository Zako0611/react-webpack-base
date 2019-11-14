
import React from 'react'
import ReactDOM from 'react-dom'

// import './08.继承'


class Movie extends React.Component {


    constructor(){
        super()//调用的super之后，才能使用this关键字

        this.state={
            msg:'大家好，我是movie 组件'
        } //这个this.state相当于vue中的data(){return {}}
    }

    render() {
        this.state.msg="lllll" // 私有数据都是可读可写的。重新赋值

        return <div>movie---{this.props.name}----{this.state.msg}</div>
    }
}

let user = {
    name: 'zz',
    age: 18
}

ReactDOM.render(<div>
    123
    <Movie {...user}></Movie> 
</div>, document.getElementById('app'))
