import React from 'react'








export default class BandInputValue extends React.Component {
    constructor() {
        super()
        this.state = {
           msg:'11111111111111111111',
           name:'zk',
           age:21
        }
    }
    render() {
        return <div>
            <h3>{this.state.msg}</h3>
            <input type='text' style={{width:'100%'}} value={this.state.msg} onChange={(e)=>this.texChange(e)} ref="txt"></input>
        </div>
    }

    texChange(e){
        //获取文本框的值
        //方案一：通过事件参数e
        // console.log(e.target.value)

        //方案2：ref引用
        console.log(this.refs.txt.value)

        this.setState({
            msg:this.refs.txt.value
        },function(){
            console.log(this.state.msg)
        })
    }

}