import React from 'react';
import { Menu, Icon, Layout  } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
//添加国际划
import { injectIntl } from 'react-intl'
const MenuView = (props) => {
    const { SubMenu }  = Menu;
    const { Sider } = Layout;
    return (
    <Sider style={{overflow: 'auto', height: '100%',left: 0, width:'100%'}}>
        <Menu theme="dark"
            defaultOpenKeys={['sub1']}
            mode="inline">
            {
                props.myView.map((item)=> {
                    return <SubMenu key={item.name} title={
                        <span>
                            <Icon type={item.icon}/>
                            <span>{props.intl.formatMessage({id:item.name})}</span>
                        </span>}>
                        {
                            item.children.map((value)=>{
                                return value.name ? <Menu.Item key={value.id}>
                                    <Link to={value.path}>{props.intl.formatMessage({id:value.name})}</Link>
                                </Menu.Item> : null
                            })                           
                        }
                    </SubMenu>
                })
            }
        </Menu>
    </Sider>
    );
};

MenuView.propTypes = {
};

const mapStateProps = state => {
    return {
        myView: state.user.myView
    }
}

export default injectIntl(connect(mapStateProps)(MenuView));