import  React, {Component} from 'react';
import typeStyle from './QuestionsType.css'
import { Button, Input , Icon, Table, Modal } from 'antd'
import { connect } from 'dva';

class QuestionsType extends Component{   
    constructor(props){
        super(props)
        this.state={
            visible: false,
            value:''
        }
    }
    handleCancel = e => {
        this.setState({
            visible: false
        })
    };
    typeAdd = () => {
        this.setState({
            visible: true
        })
    };
    handleOk = e => {
        let { questionType } = this.props
        
        this.setState({
            visible: false
        })
    };
    render(){
        const columns = [
            {
              title: '类型ID',
              dataIndex: 'name',
            },
            {
              title: '类型名称',
              dataIndex: 'age',
            },
            {
              title: '操作',
              dataIndex: 'address',
            },
        ];
    const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
            {
              key: '4',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
        ];
        return (
            <div className={typeStyle.wrap}>
                <p className={typeStyle.title}>试题分类</p>
                <div className={typeStyle.bottom}>
                    <div>
                        <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
                            添加类型
                        </Button>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input placeholder="请输入类型名称" value={this.state.value}
                                onChange={(e)=>{this.setState({value:e.target.value})}}
                            />
                        </Modal>
                    </div>
                    <div className={typeStyle.list}>
                        <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuestionsType)