import React from 'react'

import CmtItem from '@/components/CmtItem_Css'
import cssobj from '../Css/cmtlist.scss'

// 如果引用包，可以省略node module目录
import bootcss from 'bootstrap/dist/css/bootstrap.css'

console.log(bootcss)

export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                { id: 1, user: 'qq ', content: '1111111 ' },
                { id: 2, user: 'aa ', content: '222222 ' },
                { id: 3, user: 'cc ', content: '3333333 ' }
            ]
        }
    }
    render() {
        return <div>
            {/* <h1 className={cssobj.title +" test"}  >评论</h1> */}
            <h1 className={[cssobj.title, "test"].join(' ')}  >评论</h1>
            {/* <button className={bootcss.btn} >按钮</button> */}


            <button className="btn btn-primary" onClick={()=>this.myclick(111)}>按钮</button>
            {/* <button className={[bootcss.btn,bootcss['btn-primary']].join(' ')} >按钮</button> */}
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
    myclick(arg1) {
        console.log('ok'+arg1)
    }

}