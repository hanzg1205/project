import React, {Component}from 'react';
import { connect } from 'dva';
import styles from './Meun.css';
import { Menu, Dropdown, Icon, Layout  } from 'antd';
import 'antd/dist/antd.css'

class ExaminationMenu extends Component {
    
    constructor(props){
        super(props)
        this.state={
            openKeys: ['sub1']
        }
        this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    }
    onOpenChange = openKeys => {
        
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
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
          const { Sider, Content } = Layout;
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
                        <Layout className={styles.section}>
                        <Sider>
                        <Menu
                            mode="inline"
                            theme="dark"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                        >
                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                                </span>
                            }
                            >
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                            key="sub2"
                            title={
                                <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                                </span>
                            }
                            >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            </SubMenu>
                            <SubMenu
                            key="sub4"
                            title={
                                <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                                </span>
                            }
                            >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
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
