
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10;

let str = "hello"

let boo = true;

let title = '999';

const h1 = <h1>红红火火</h1>

const arr = [
    <h2 key='1'>222222</h2>,
    <h3 key='2'>333333</h3>
]


let arrStr = ['zako', 'tom', 'jack'];
//将普通字符串数组转化成DOM对象数组[方案一]
const arrDom = [];
arrStr.forEach(item => {
    let tmp = <h5 key={item}>{item}</h5>;//需要添加一个key
    arrDom.push(tmp);
})
//将普通字符串数组转化成DOM对象数组[方案2]
const result= arrStr.map(item=><h5 key={item}>{item}</h5>)

ReactDOM.render(<div>
    {a}
    <hr></hr>
    {str}
    <hr />
    {boo.toString()}
    <p title={title}>这是p标签</p>
    {h1}
    {arr}
    {/*arrDom*/}
    {
        //result
    }

    <p className='myclass'>！！！</p>
    <label htmlFor="ooo"></label>
</div>, document.getElementById('app'));
