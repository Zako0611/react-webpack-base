import React from 'react'

import CmtItem from '@/components/CmtItem'

export default class CmtList extends React.Component {
    constructor(){
        super()
        this.state={
            CommentList:[
                {id: 1,user:'qq ',content:'1111111 '},
                {id:2 ,user:'aa ',content:'222222 '},
                {id: 3,user:'cc ',content:'3333333 '}
            ]
        } 
    }
    render() {
        return <div>
        <h1 style={{color:'red',fontSize:35,fontWeight:200,textAlign:'center'}}>评论</h1>
        {this.state.CommentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}