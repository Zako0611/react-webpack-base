//入口文件
//console.log('ok111');

//1.引入
import React from 'react' //创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟DOM放到页面展示

//2.创建虚拟DOM元素
    //参数1：创建元素的类型，字符串，
    //参数2：是一个对象或是null，表示当前DOM的属性
    //参数3：子节点（包括 其他虚拟DOM　文本子节点）
    //参数n:其他子节点
//<h1 id="myh1" title="this is a h1">这是一个H1</h1>
// const myh1 = React.createElement('h1', null, '这是一个H1')
const myh1 = React.createElement('h1', {id:'myh1',title:'this is a h1'}, '这是一个H1')

const mydiv = React.createElement('div', null, '这是一个Div',myh1)

//3.使用ReactDOM 把虚拟DOM渲染到页面
    //参数1：要渲染的虚拟DOM元素
    //参数2：指定页面上一个容器,接收一个DOM元素
ReactDOM.render(mydiv,document.getElementById('app'));
