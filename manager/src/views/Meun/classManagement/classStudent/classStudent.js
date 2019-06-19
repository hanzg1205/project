import React,{useEffect} from 'react'
import { Button , Icon , Table, Select , Form , Input , Tag , Divider , message} from 'antd'
import { connect } from 'dva'
import studentStyle from './classStudent.scss' 
function ClassStudent(props){
    let { getFieldDecorator} = props.form
    let { getClassData , getGrade , getStudet } = props
    useEffect(()=>{
        getClassData();
        getGrade();
        getStudet();
    },[])
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: '学号',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '班级',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '教室',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '密码',
          key: 'action',
        },
        {
          title: '操作',
          key: 'detail',
          render: (text, record) => (
            <span>
              <a>删除</a>
            </span>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
      
    console.log(props)
    return (
        <div>
            <p className={studentStyle.title}>学生管理</p>
            <div className={studentStyle.bottom}>
                <div>
                    <Form className={studentStyle.form}>
                        <Form.Item>
                            {getFieldDecorator('className',{
                                rules: [{required: true,message: '请填写班级名',}]
                            })(<Input placeholder="班级名" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('className',{
                                rules: [{required: true,message: '请填写班级名',}]
                            })(
                                <Select placeholder="教室号">
                                    {
                                        // getClassRoomDataS.map((item,index)=>{
                                        //     return  <Option key={index} value={item.room_id}>{item.room_text}</Option>
                                        // })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('className',{
                                rules: [{required: true,message: '请填写班级名',}]
                            })(
                                <Select placeholder="教室号">
                                    {
                                        // getClassRoomDataS.map((item,index)=>{
                                        //     return  <Option key={index} value={item.room_id}>{item.room_text}</Option>
                                        // })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                            <Button type="primary" >添加提交</Button>
                            <Button type="primary" style={{margin:'0 20px'}}>取消</Button>
                        </Form.Item>
                    </Form>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        ...state.class
    }
}
const mapDispatchToprops=(dispatch)=>{
    return {
        getClassData(){
            dispatch({type:'class/getClassName'})
        },
        getGrade(){
            dispatch({type:'class/getGradeData'})
        },
        getStudet(){
            dispatch({type:'class/getStudetS'})
        }
        // /manger/student
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Form.create()(ClassStudent))