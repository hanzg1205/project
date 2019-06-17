import React, { useEffect } from "react";
import { connect } from "dva";
import { Form, Input, Button, Select, InputNumber, DatePicker } from 'antd';
// import moment from 'moment';
import './examAdd.scss';

function AddUser(props) {
    useEffect(()=>{

    },[]);
    // 表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log( +values.start_time._d )
                console.log('Received values of form: ', values);
            }
        });
    }
    const { Option } = Select;
    // const dateFormat = 'YYYY/MM/DD';
    const { getFieldDecorator } = props.form;
    return <div className="exam-wrapper">
        <h2 className="user-title">添加考试</h2>
        <div className="exam-add-box">
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item label="试卷名称：">
                    {getFieldDecorator('tite', {
                        rules: [{ required: true, message: '请输入试卷名称!' }],
                    })(
                        <Input
                            style={{ width: '50%' }}
                            className='exam-title'
                        />,
                    )}
                </Form.Item>
                <Form.Item label="选择考试类型：">
                    {getFieldDecorator('exam_id', {
                        rules: [{ required: true, message: '请选择考试类型!' }],
                        initialValue: ''
                    })(
                        <Select style={{ width: 160 }}>
                            <Option value="1" key='1'>11111</Option>
                            <Option value="2" key='2'>11111</Option>
                            <Option value="3" key='3'>11111</Option>
                            <Option value="4" key='4'>11111</Option>                        
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="选择课程：">
                    {getFieldDecorator('subject_id', {
                        rules: [{ required: true, message: '请选择课程!' }],
                        initialValue: ''
                    })(
                        <Select style={{ width: 160 }}>
                            <Option value="1" key='1'>11111</Option>
                            <Option value="2" key='2'>11111</Option>
                            <Option value="3" key='3'>11111</Option>
                            <Option value="4" key='4'>11111</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="设置题量：">
                    {getFieldDecorator('number', {
                        rules: [{ required: true, message: '请设置题量!' }],
                        initialValue: '4'
                    })(
                        <InputNumber
                            style={{ width: 150 }}
                        />,
                    )}
                </Form.Item>
                <Form.Item label="考试时间：" style={{ marginBottom: 0 }}>
                    <Form.Item style={{ display: 'inline-block'}}>
                        {getFieldDecorator('start_time', {
                            rules: [{ required: true, message: '请选择开始时间!' }],
                            // initialValue: moment('2015/01/01', dateFormat)
                        })(
                            <DatePicker placeholder="开始时间"/>
                        )}                  
                    </Form.Item>
                    <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                    <Form.Item style={{ display: 'inline-block'}}>
                    {getFieldDecorator('end_time', {
                        rules: [{ required: true, message: '请选择结束时间!' }],
                        // initialValue: moment('2015/01/01', dateFormat)
                    })(
                        <DatePicker placeholder="结束时间"/>
                    )}
                    </Form.Item>
                </Form.Item>

                <Button type="primary" htmlType="submit" className='login_form_button'>
                    创建试卷
                </Button>
            </Form>
        </div>
    </div>
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
    
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(AddUser));