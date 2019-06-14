import React from 'react'
import {connect} from 'dva'
import { List, Avatar, Button, Skeleton } from 'antd';
import '../views/Meun/questionsManagement/QuestionsSee/Table.scss'
function TableView(props){
    console.log(props.questionsData.questions.getQuestionsData&&props.questionsData.questions.getQuestionsData)
    let list=props.questionsData.questions.getQuestionsData.action&&props.questionsData.questions.getQuestionsData.action
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={list}
            style={{padding:20}}
            renderItem={item => (
            <List.Item actions={[<a>编辑</a>]} style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <p>{item.title}</p>
                    <div className="color">
                        <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                        <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                        <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                    </div>
                    <p>{item.user_name}</p>
                </div>
            </List.Item>
        )}
      />
    )
}
const mapStateToProps=(state)=>{
    return {
        questionsData:state
    }
}
export default connect(mapStateToProps)(TableView)