import React from 'react'


import cssobj from '@/Css/cmtItem.scss'
console.log(cssobj)
export default function CmtItem(props) {
    return <div id={cssobj.content}>
        <h1 >评论人{props.user}</h1>
        <h5 >评论内容{props.content}</h5>
    </div>
}
