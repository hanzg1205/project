import React, {Component}from 'react';
import { connect } from 'dva';
import styles from './Meun.css';
import { Menu, Dropdown, Icon, Layout, Switch  } from 'antd';
import 'antd/dist/antd.css'

class ExaminationMenu extends Component {
    
    constructor(props){
        super(props)
        this.state={
            openKeys: ['sub1']
        }
    }
    handleClick = e => {
        console.log(e);
        this.setState({
          current: e.key,
        });
      };
    
    render(){
        const menu = (
            <Menu>
              <Menu.Item key="1">1st menu item</Menu.Item>
              <Menu.Item key="2">2nd memu item</Menu.Item>
              <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
          );
          const { SubMenu }  = Menu;
          const { Header, Footer, Sider, Content } = Layout;
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <div className={styles.headerTop}>
                        <img className={styles.headerImg} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
                        <div className={styles.headerBottom}>
                            {
                               <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#" className={styles.headerBottomList}>
                                  <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
                                  <span>chenmanjie</span>
                                </a>
                             </Dropdown>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    {
                        <Layout className={styles.center}>
                        <Sider  style={{
                            overflow: 'auto',
                            height: '100%',
                            left: 0,
                            width:'100%'
                        }}>
                        <Menu
                            theme="dark"
                            onClick={this.handleClick}
                            defaultOpenKeys={['sub1']}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                            >
                            <SubMenu
                                key="sub1"
                                title={
                                <span>
                                    <Icon type="project" />
                                    <span>试题管理</span>
                                </span>
                                }
                        >
                                <Menu.Item key="1">添加试题</Menu.Item>
                                <Menu.Item key="2">试题分类</Menu.Item>
                                <Menu.Item key="3">查看试题</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                <span>
                                    <Icon type="user" />
                                    <span>用户管理</span>
                                </span>
                                }
                            >
                                <Menu.Item key="5">添加用户</Menu.Item>
                                <Menu.Item key="6">用户展示</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                <span>
                                    <Icon type="setting" />
                                    <span>考试管理</span>
                                </span>
                                }
                            >
                                <Menu.Item key="9">添加考试</Menu.Item>
                                <Menu.Item key="10">试卷列表</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={
                                <span>
                                    <Icon type="desktop" />
                                    <span>班级管理</span>
                                </span>
                                }
                            >
                                {/* <Menu.Item key="15">班级管理</Menu.Item>
                                <Menu.Item key="16">教室管理</Menu.Item>
                                <Menu.Item key="17">学生管理</Menu.Item> */}
                            </SubMenu>
                            <SubMenu
                                key="sub7"
                                title={
                                <span>
                                    <Icon type="appstore" />
                                    <span>阅卷管理</span>
                                </span>
                                }
                            >
                                <Menu.Item key="25">特批班级</Menu.Item>
                            </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                          <Content>Content</Content>
                        </Layout>
                      </Layout>
                    }
                </div>
            </div>
          );
    }
}

ExaminationMenu.propTypes = {

};

export default connect()(ExaminationMenu);
