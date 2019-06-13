import React, {useEffect} from 'react'
import { Radio, Select, Button } from 'antd';
import { connect } from 'dva';
import styleSee from './QuestionsSee.scss'
import TableView from  '../../../../components/Table.js'
const { Option } = Select;

function QuestionsSee(props){
    useEffect(()=>{
        // 获取考试类型
        props.examType();
        // 获取课程类型
        props.subjectType();
        // 获取题目类型
        props.questionsType();
    },[])

    return (
        <div className={styleSee.wrap}>
            <h2 className={styleSee.title}>查看试题</h2>
            <div className={styleSee.bottom}>
                <div className={styleSee.Bottom_top}>
                    <div className={styleSee.Bottom_tit}>课程类型:</div>
                    <Radio.Group defaultValue="a" buttonStyle="solid" className={styleSee.radio_list}>
                        <Radio.Button value="a" className={styleSee.radio_item}>All</Radio.Button>
                        {                
                            props.subjectTypeData.map(item=>(
                                <Radio.Button value={item.subject_id} className={styleSee.radio_item}>{item.subject_text}</Radio.Button>
                            ))
                        }
                    </Radio.Group>
                </div>
                <div className={styleSee.top_search}>
                    <div className={styleSee.Bottom_babel}>
                        <div className={styleSee.Bottom_tit}>考试类型:</div>
                        <Select defaultValue="请选择考试类型" style={{ width: '80%' }}>
                        {                
                            props.examTypeData.map(item=>(
                                <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                            ))
                        }
                        </Select>
                    </div>
                    <div className={styleSee.Bottom_babel}>
                        <div className={styleSee.Bottom_tit}>题目类型:</div>
                        <Select defaultValue="请选择题目类型" style={{ width: '80%' }}>
                        {                
                            props.subjectTypeData.map(item=>(
                                <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                            ))
                        }
                        </Select>
                    </div>
                    <Button type="primary" icon="search" >Search</Button>
                </div>
            </div>
            <div className={styleSee.see_context}>
                <TableView />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state...",state)
    return{
        ...state.questions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // 获取考试类型
        examType(){
            dispatch({
                type:"questions/examType"
            })
        },
        // 获取课程类型
        subjectType(){
            dispatch({
                type:"questions/subjectType"
            })
        },
        // 获取题目类型
        questionsType(){
            dispatch({
                type:"questions/questionsType"
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuestionsSee)