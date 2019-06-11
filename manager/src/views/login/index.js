import React, { useState , useEffect } from 'react';
import style from './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'dva';
function Login(props){
    const { getFieldDecorator } = props.form;
    let  { login } = props
    useEffect(()=>{
           
        },[])
        // console.log(props)
        let state=useState(props.user)
        let handleSubmit = e => {
            e.preventDefault();
            props.form.validateFields((err, values) => {
            if (!err) {
                login({
                    user_name:values.username,
                    user_pwd:values.password
                })
                if(state.code==1){
                    console.log(props.history)
                    props.history.push('/meun')
                }else if(state.coed==0){
                    alert('请输入正确的账号或密码')
                }
            }
        });
      };
     return (
        <div className={style.login_wrapper}>
            <div className={style.login_form}>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                            validateTrigger:'onInput'
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                                className={style.login_input}
                            />,
                        )}
                    </Form.Item>
                     <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' },{pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/
                                , message: '请输入正确密码!' }]
                            })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                                className={style.login_input}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className={style.login_form_remember}>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                        </div>
                        <Button type="primary" htmlType="submit" className={style.login_form_button}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        ...state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       login(payload){
        dispatch({type:'user/login',payload})
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Login))