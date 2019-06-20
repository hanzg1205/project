import React from 'react'
import MarkingStyle from './markingManagement.scss'
import { Table } from 'antd'
function Marking (props){
    const columns = [
        {
          title: '姓名',
          dataIndex: 'student_name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '学号',
          dataIndex: 'student_id',
          key: 'age',
        },
        {
          title: '班级',
          dataIndex: 'grade_name',
          key: 'address',
        },
        {
          title: '教室',
          key: 'tags',
          dataIndex: 'room_text'
        },
        {
          title: '密码',
          key: 'action',
          dataIndex: 'student_pwd'
        },
        {
          title: '操作',
          key: 'detail',
          render: (text, record) => (
            <span>
              <a>批卷</a>
            </span>
          ),
        },
      ];
      let data=[]
    return (
        <div>
            <p className={MarkingStyle.title}>待批班级</p>
            <div className={MarkingStyle.bottom}>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
} 
export default Marking