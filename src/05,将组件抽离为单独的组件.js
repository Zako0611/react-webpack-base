
import React from 'react'
import ReactDOM from 'react-dom'

//导入Hello组件,没有配置需要带.jsx
import Hello from '@/components/Hello'

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

ReactDOM.render(<div>
    <Hello {...dog }></Hello> 
</div>, document.getElementById('app'))
