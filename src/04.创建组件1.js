
import React from 'react'
import ReactDOM from 'react-dom'

//第一种创建组件的方式
function Hello(props) {
    // return null //return null 表示什么都不渲染
    //返回一个合法的JSX虚拟DOM树

    // props.age=12// 只读不可修改，会报错
    // console.log(props)
    return <div>这是一个组件
    {props.name}
    {props.age}
    </div>
}

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

ReactDOM.render(<div>
    {/* 直接使用组件*/}
    {/* <Hello nick={dog.name} age={dog.age}></Hello>  */}
    <Hello {...dog }></Hello> 

</div>, document.getElementById('app'))
