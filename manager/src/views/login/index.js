import React, { Component } from 'react';
import style from './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.login_wrapper}>
                <div className={style.login_form}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入您的用户名!' }],
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
                                rules: [{ required: true, message: '请输入您的密码!' }],
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
                                登 录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }else{
            // this.props.history.push('/')
          }
        });
      };
}

export default Form.create()(Login);