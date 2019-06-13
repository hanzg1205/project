import React from 'react'
import { Radio } from 'antd';
import styleSee from './QuestionsSee.css'
function QuestionsSee(){
    return <div className={styleSee.wrap}>
        <h2 className={styleSee.title}>查看试题</h2>
        <div className={styleSee.bottom}>
           <div className={styleSee.Bottom_top}>
            课程类型:
            <Radio.Group defaultValue="a" buttonStyle="solid" style={{border:'none'}}>
                    <Radio.Button value="a" style={{border:'none'}}>Hangzhou</Radio.Button>
                    <Radio.Button value="b" style={{border:'none'}}>Shanghai</Radio.Button>
                    <Radio.Button value="c" style={{border:'none'}}>Beijing</Radio.Button>
                    <Radio.Button value="d" style={{border:'none'}}>Chengdu</Radio.Button>
                </Radio.Group>
           </div>
        </div>
    </div>
}
export default QuestionsSee