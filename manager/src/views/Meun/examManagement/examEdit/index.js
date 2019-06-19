import React, {useEffect} from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import style from './examEdit.scss';

function examEdit(props){
    useEffect(()=>{

    },[])

    return <div className={style.exap_wrapper}>
        <h2 className='user-title'>创建试卷</h2>
        <div className={style.exam_main}>
            <Button>添加新题</Button>
            <div className={style.exam_content}>
                <h2>{props.createpaperList.title}</h2>
                <p>考试时间：1小时30分钟  监考人：刘于  开始考试时间：2018.9.10  10:00  阅卷人：刘于</p>
                <div className={style.exam_question_box}>
                    {
                        props.createpaperList.questions.map((item,index) => (
                            <div className={style.exam_item} key={item.questions_id}>
                                <h4>
                                    <p>{index+1}: {item.title}</p>
                                    <Button type="link">删除</Button>
                                </h4> 
                                <div>
                                    <ReactMarkdown source={item.questions_stem} />
                                    {/* <pre>{item.questions_stem}</pre> */}
                                </div>
                            </div>
                        ))
                    }  
                </div>
                <Button type="primary">创建试卷</Button>
            </div>
        </div>
    </div>
}

const mapState = state => {
    console.log(state)
    return {
        ...state.questions
    }
}
const mapDispatch = dispatch => {
    return {
        
    }
}
export default connect(mapState,mapDispatch)(examEdit);