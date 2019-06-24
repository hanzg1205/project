import React ,{useEffect}from 'react'
import { connect } from 'dva'
import detailStyle from './examDetail.scss'
import ReactMarkdown from 'react-markdown'
function ExamDetail(props){
    let parmas=props.match.params.id.slice(1,-1).split(',')
    let { getDetail } = props
    useEffect(()=>{
        getDetail()
    },[])
    let detail=[]
    parmas.forEach((item)=>{
        props.getQuestionsData&&props.getQuestionsData.forEach((items)=>{
            if(item===items.questions_id){
                detail.push(items)
            }
        })
    })
    return (
        <div>
            <p className={detailStyle.title}>试卷详情</p>
            <div className={detailStyle.bottom}>
                {
                    detail.map((item,index)=>{
                        return <div key={index} className={detailStyle.top}>
                           <ReactMarkdown source={item.questions_stem}></ReactMarkdown>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        ...state.questions
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        //获取试题详情
        getDetail(){
            dispatch({type:'questions/getQuestions'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExamDetail)