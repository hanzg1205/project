import React, {useState,useEffect} from 'react'
import { Select, Button, Form, Table, Radio } from 'antd';
import { Link } from 'dva/router'
import { connect } from 'dva';
import './examList.scss';
const { Option } = Select;

function examList(props){
    useEffect(()=>{
        // 获取考试类型
        props.examType();
        // 获取课程类型
        props.subjectType();
        // 获取试卷列表
        props.examList();
    },[])
    
    // 查询
    let handleSearch = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                props.examListFilter(values);
            }
        });        
    }
    // 计算考试时间
    function computTime(obj) {
        let startTime = obj.start_time*1;
        let endTime = obj.end_time*1;
        let newTime = Math.abs(endTime - startTime);
        // console.log(newTime)
         //计算出小时数
        var leave1 = newTime % (24 * 3600 * 1000);   
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000);     
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000);    
        var seconds = Math.round(leave3 / 1000);
        return hours + ":" + minutes + ":" + seconds;
    }
    
    // 切换按钮
    let [status,upDateStatus] = useState('all')
    let handleSizeChange = e => {
        upDateStatus(e.target.value)
        // console.log(e.target.value);
        props.toggleStatus(e.target.value);
    } 
    ;
    const columns = [
        {
            title: '试卷信息',
            dataIndex: 'title',
            key: 'title',
            render: (tags,obj) => {
                return <div>
                    <h4>{tags}</h4>
                    <p><span style={{marginRight:'10px'}}>考试时间：{computTime(obj)}</span><span>{obj.number}道题</span></p>
                    <p>作弊{obj.status}分</p>
                </div>
            },
        },
        {
            title: '班级',
            dataIndex: 'grade_name',
            key: 'grade_name',
            render: tags => (
                <div>
                    <h4>考试班级</h4>
                    {tags.map((tag,index) => {
                        return (
                            <p key={index} style={{margin:0}}>{tag}</p>
                        );
                    })}
                </div>
            ),
        },
        {
            title: '创建人',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: '开始时间',
            key: 'start_time',
            dataIndex: 'start_time',
            render: (item) => {
                return <>
                    <p>{new Date(item*1).toLocaleDateString('chinese',{hour12:false})}</p>
                    <p>{new Date(item*1).toLocaleTimeString('chinese',{hour12:false})}</p>
                </>
            }          
        },
        {
            title: '结束时间',
            key: 'end_time',
            dataIndex: 'end_time',
            render: (item) => {
                return <>
                    <p>{new Date(item*1).toLocaleDateString('chinese',{hour12:false})}</p>
                    <p>{new Date(item*1).toLocaleTimeString('chinese',{hour12:false})}</p>
                </>
            }            
        },
        {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text) => <Link style={{color:'#0139FD'}} to={`/exam/detail/${text.question_ids}`}>详情</Link>,
        },
    ];
    
    const { getFieldDecorator } = props.form; 
    return (
        <div className='exam-wrapper'>

            <Form onSubmit={handleSearch} className="login-form">
                <h2 className='user-title'>试卷列表</h2>
                <div className='bottom'>
                    <div className='top_search'>
                        <div className='Bottom_babel'>
                            <div className='Bottom_tit'>考试类型:</div>
                            <Form.Item>
                                {getFieldDecorator('exam_id', {
                                    initialValue: ''
                                })(
                                    <Select style={{ width: 160 }}>
                                    {                
                                        props.examTypeData.map(item=>(
                                            <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                        ))
                                    }
                                    </Select> 
                                )}
                            </Form.Item>
                        </div>
                        <div className='Bottom_babel'>
                            <div className='Bottom_tit'>课程:</div>
                            <Form.Item>
                                {getFieldDecorator('subject_id', {
                                    initialValue: ''
                                })(
                                    <Select style={{ width: 160 }}>
                                    {                
                                        props.subjectTypeData.map(item=>(
                                            <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                        ))
                                    }
                                    </Select>
                                )}
                            </Form.Item>                           
                        </div>
                        <Button type="primary" htmlType="submit" icon="search">查 询</Button>
                    </div>
                </div>
            </Form>
            <div className="exam-list-table">
                <h4>试卷列表 
                    <Radio.Group value={status} onChange={handleSizeChange}>
                        <Radio.Button value="all">全部</Radio.Button>
                        <Radio.Button value="have">进行中</Radio.Button>
                        <Radio.Button value="end">已结束</Radio.Button>
                    </Radio.Group>
                </h4>
                <Table columns={columns} dataSource={props.examListData} rowKey={record =>`${record.exam_exam_id}`}></Table>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log("state...",state)
    return{
        ...state.questions,
        ...state.exam
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
        // 获取试卷列表
        examList(payload){
            dispatch({
                type: "exam/examList",
                payload
            })
        },
        // 筛选试卷
        examListFilter(payload){
            dispatch({
                type: "exam/examListFilter",
                payload
            })
        },
        // 切换状态
        toggleStatus(status){
            dispatch({
                type: "exam/toggleStatus",
                status
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(examList))
