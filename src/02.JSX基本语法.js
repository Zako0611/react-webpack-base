//入口文件
//console.log('ok111');

//1.引入
import React from 'react' //创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟DOM放到页面展示


// const mydiv = React.createElement('div', null, '这是一个Div', myh1)

//HTML 是最优秀的标记语言;
//注意在JS中，默认不能写HTML的标记，否则打包会失败，
//这种在js中，混入HTML的语法，叫做JSX语法，符合XML规范的JS 
//可以使用Babel来转换这些标记
//JSX语法的本质是在运行的时候被转换成了CreateElement形式来执行

const mydiv = <div id="mydiv" title="111">
这是一个Div
<h1>hhhh</h1>
</div>

ReactDOM.render(mydiv, document.getElementById('app'));
