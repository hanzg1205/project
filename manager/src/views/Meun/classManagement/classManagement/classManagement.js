import React, {Component} from 'react'
import { connect } from 'dva'
import { Button, Icon,Table, Divider, Modal, Input, Select, Form} from 'antd'
import classManagementStyle from './classManagement.scss'

class ClassManagement extends Component{
    constructor(props){
        super(props)
        this.state={
            visible: false,
            value:'',
            num:0,
            selectedRowKeys: [],
        }
    }
    componentDidMount(){
        let { getClassRoomName , getClassData} = this.props
        getClassRoomName()
        getClassData()
    }
    handleCancel = e => {
        this.setState({
            visible: false
        })
    };
    handleOk = e => {
        let { examadd } = this.props;
        examadd({text:this.state.value,sort:Math.floor(Math.random()*100)})
        this.setState({
            visible: false
        })
    };
    render(){
        const { getFieldDecorator } = this.props.form
        const { Option } = Select;
        console.log(this.props)
        let { getClassRoomData , getClassRoomDataS } = this.props
        const columns = [
            {
              title: '班级名',
              dataIndex: 'grade_name',
              key: 'grade_name'
            },
            {
              title: '课程名',
              dataIndex: 'subject_text',
              key: 'subject_text',
            },
            {
              title: '教室号',
              dataIndex: 'room_text',
              key: 'room_text',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a href="javascript:;">修改</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">删除</a>
                </span>
              ),
            },
          ];
          const data = getClassRoomData
        return (
            <div className={classManagementStyle.wrap}>
                <p className={classManagementStyle.title}>班级管理</p>
                <div className={classManagementStyle.bottom}>
                    <Button type="primary" onClick={()=>{  this.setState({visible: true})}}><Icon type="plus" />添加班级</Button>
                    <Modal
                        title="创建新类型"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Form>
                            <Form.Item label="班级名" hasFeedback>
                                {getFieldDecorator('className', {
                                    rules: [{required: true,message: 'Please input your password!'}],
                                })(<Input placeholder="班级名" />)}
                            </Form.Item>
                            <Form.Item label="教室号">
                                {getFieldDecorator('classRoomName', {
                                    rules: [{required: true,message: 'Please confirm your password!',}]
                                })(<Select placeholder="教室号">
                                        {
                                            getClassRoomDataS.map((item,index)=>{
                                                return  <Option key={index} value={item.room_id}>{item.room_text}</Option>
                                            })
                                        }
                                    </Select>)}
                            </Form.Item>
                            <Form.Item label="课程名">
                                {getFieldDecorator('curriculumName', {
                                    rules: [{ required: true, message: 'Please input your nickname!'}],
                                })(<Select placeholder="课程名">
                                         {
                                            getClassRoomData.map((item,index)=>{
                                                return  <Option key={index} value={item.grade_id}>{item.subject_text}</Option>
                                            })
                                        }
                                    </Select>)}
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table columns={columns} dataSource={data} style={{marginTop:'20px'}} rowKey={record=>`${record.grade_id}`}/>
                </div>  
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        ...state.class
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        //获取所有班级名称和课程
        getClassRoomName(){
            dispatch({type:'class/getClassRoom'})
        },
        //获取教室号数据
        getClassData(){
            dispatch({type:'class/getClassName'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(ClassManagement) )