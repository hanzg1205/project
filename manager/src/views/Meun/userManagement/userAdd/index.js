import React, { Component } from "react";
import { connect } from "dva";
import userAddStyle from './userAdd.scss'
import { Form, Input, Button, Radio, Select, message} from 'antd';

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state={
            formLayout:'horizontal',
            flag:true
        }
    }
    componentDidMount(){
        let { choiceID , userData } = this.props 
        choiceID()
        userData()
    }
    handleFormLayoutChange = e => {
        this.setState({
            formLayout:e.target.value
        })
        this.state.formLayout==='horizontal'?this.setState({flag:false}):this.setState({flag:true})
    }
    handleSubmit = e => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
              if (!err) {
                let { addUser } = this.props
                console.log('Received values of form: ', values);
                addUser(values)
            }
        });
    };  render(){
        const { Option } = Select;
        // console.log(this.props)
        let { getUserIDs , getUserDatas } = this.props;
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={userAddStyle.wrap}>
                <p className={userAddStyle.title}>添加用户</p>
                <div className={userAddStyle.bottom}>
                    <div className={userAddStyle.bottom_Top}>
                        <div className={userAddStyle.bottom_Center}>
                            <Form style={{marginLeft:'10px'}} onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange} >
                                        <Radio.Button value="horizontal">添加用户</Radio.Button>
                                        <Radio.Button value="vertical">更新用户</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    style={this.state.flag?{display:'none'}:{display:'block'}}
                                >
                                   {
                                       getUserDatas.map((item,index)=>{
                                            return <Option value={item.user_id} key={index}>{item.user_name}</Option>
                                       })
                                   }
                                </Select>
                                <Form.Item>
                                    {
                                        getFieldDecorator('userName',{
                                            rules:[{required:true,message:"请输入用户名"}]
                                        })(
                                            <Input placeholder="请输入用户名" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('userPwd',{
                                            rules:[{required:true,message:"请输入密码"},{pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/,message: '请输入正确的密码!'}]
                                        })(
                                            <Input placeholder="请输入密码" />
                                        )
                                    }
                                </Form.Item >
                                <Form.Item>
                                    {
                                        getFieldDecorator('userId',{
                                            rules:[{required:true,message:"请选择用户"}]
                                        })(
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="请选则身份id"
                                                optionFilterProp="children"
                                            >      
                                            {
                                                getUserIDs.map((item,index)=>{
                                                    return <Option value={item.identity_id} key={index}>{item.identity_text}</Option>
                                                })
                                            }
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <Button type="primary" style={{marginLeft:'10px'}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className={userAddStyle.bottom_Center}>
                            <Form onSubmit={this.addIdentity}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal">
                                        <Radio.Button value="horizontal">添加身份</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item >
                                    {
                                        getFieldDecorator('userPwd',{
                                            rules:[{required:true,message:"请输入密码"}]
                                        })(
                                            <Input placeholder="请输入身份名称" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <Button type="primary">重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div>
                            <Form onSubmit={this.addIdentity}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal" >
                                        <Radio.Button value="horizontal">添加api接口权限</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('apiIdentity',{
                                            rules:[{required:true,message:"请输入api接口权限名"}]
                                        })(
                                            <Input placeholder="请输入api接口权限名" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('apiIdentityUr',{
                                            rules:[{required:true,message:"请输入api接口权限ur"}]
                                        })(
                                            <Input placeholder="请输入api接口权限ur" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('apiIdentityFunc',{
                                            rules:[{required:true,message:"请输入api接口权限方法"}]
                                        })(
                                            <Input placeholder="请输入api接口权限方法" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <Button type="primary">重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className={userAddStyle.bottom_Bottom}>
                        <div>
                            <Form onSubmit={this.addView}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal" style={{marginLeft:'10px'}}>
                                        <Radio.Button value="horizontal">添加视图接口</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('addView',{
                                            rules:[{required:true,message:"请选择视图接口权限"}]
                                        })(
                                            <Select
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary"  htmlType="submit">提交</Button>
                                    <Button type="primary">重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div>
                            <Form onSubmit={this.userId}>
                            <Form.Item>
                                    <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange} >
                                        <Radio.Button value="horizontal">添加用户</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('setID',{
                                            rules:[{required:true,message:"请选择身份id"}]
                                        })(
                                            <Select
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('setPower',{
                                            rules:[{required:true,message:"请选择接口权限"}]
                                        })(
                                            <Select
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary"  htmlType="submit">提交</Button>
                                    <Button type="primary">重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div>
                            <Form onSubmit={this.addStatusId}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal">
                                        <Radio.Button value="horizontal">给身份设置视图</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('statusId',{
                                            rules:[{required:true,message:"请选择身份"}]
                                        })(
                                            <Select
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('viewId',{
                                            rules:[{required:true,message:"请选则视图"}]
                                        })(
                                            <Select
                                                showSearch
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary"  htmlType="submit">提交</Button>
                                    <Button type="primary">重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        choiceID(){
            dispatch({type:'user/userID'})
        },
        addUser(payload){
            dispatch({type:'user/addUsers',payload:payload})
        },
        userData(){
            dispatch({type:'user/userData'})
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(AddUser));