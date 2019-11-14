import React from 'react'


// let itemStyle = { 
//     border: '1px dashed #ccc', 
//     margin: 10, padding: 10, 
//     boxShadow: '0 0 10px #ccc' 
// }

// let cmtPeopleStyle={
//     fontSize:14
// }

// let cmtContentStyle={
//     fontSize:12
// }

import style from '@/style'

export default function CmtItem(props) {
    return <div style={style.itemStyle}>
        <h1 style={style.cmtPeopleStyle}>评论人{props.user}</h1>
        <h5 style={style.cmtContentStyle}>评论内容{props.content}</h5>
    </div>
}
