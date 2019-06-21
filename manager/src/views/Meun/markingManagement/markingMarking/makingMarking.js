import React,{useState,useEffect} from 'react'
import { Table } from 'antd'
import { connect } from 'dva'
import { Link } from 'dva/router'
function MarkingMark(props){
    let { getData }= props
    useEffect(()=>{
        getData()
    },[])
    let { getStudentDatas } = props
    let classData=getStudentDatas.filter((item,index)=>{
        if(props.match.params.grade_id===item.grade_id){
            return item
        }
     })
     let marking=()=>{
        
     }
    const columns = [
        {
          title: '班级',
          dataIndex: 'grade_name',
          key: 'name',
        },
        {
          title: '姓名',
          dataIndex: 'student_name',
          key: 'age',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <Link to='/marking/notFount'>批卷</Link>
            </span>
          ),
        },
      ];
    return (
        <div style={{padding:'20px',background:'#fff'}}>
            <p>试卷列表</p>
            <Table columns={columns} dataSource={classData} />
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        ...state.class
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getData(){
            dispatch({type:'class/getStudetS'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MarkingMark)