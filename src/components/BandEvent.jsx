import React from 'react'


import  'bootstrap/dist/css/bootstrap.css'


//#region 
    //可折叠区域
//#endregion


export default class BandEvent extends React.Component {
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
           
            <button className="btn btn-primary" onClick={()=>this.myclick()}>按钮</button>
            <h3>{this.state.msg}</h3>
        </div>
    }

    myclick() {
        //在react中不能用this.state.**=**修改state的值
        //应该调用this.setState({msg:'111222'})
        // this.state.msg='oooooooo'
        // console.log(this.state.msg)

        this.setState({
            msg:'ooooooo'
        },function(){
            console.log(this.state.msg)
        })

        // console.log(this.state.msg)
    }

}