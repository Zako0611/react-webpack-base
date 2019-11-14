import React from 'react'

export default function Hello(props) {

    return <div>这是一个组件
    {props.name}
    {props.age}
    </div>
}


// export default Hello //把组件暴露出去