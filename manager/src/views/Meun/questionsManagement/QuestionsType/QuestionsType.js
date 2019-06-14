import  React, {Component} from 'react';
import typeStyle from './QuestionsType.css'
import { Button, Input, Table, Modal } from 'antd'
import { connect } from 'dva';

class QuestionsType extends Component{   
    constructor(props){
        super(props)
        this.state={
            visible: false,
            value:'',
            num:0
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
        let { examadd } = this.props;
        examadd({text:this.state.value,sort:Math.floor(Math.random()*100)})
        this.setState({
            visible: false
        })
    };
    componentDidMount(){
        let { exam } = this.props
        exam()
    }
    render(){
        const columns = [
            {
                key: 1,
                id: 1,
                title: '类型ID',
                dataIndex: 'questions_type_id',
            },
            {
                key: 2,
                id: 2,
                title: '类型名称',
                dataIndex: 'questions_type_text',
            },
            {
                key: 3,
                id: 3,
                title: '操作',
                dataIndex: "",
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
                            title="创建新类型"
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
                        <Table columns={columns} rowKey={record=>record.id} dataSource={this.props.typeList&&this.props.typeList} size="middle" />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        ...state.exam
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        exam(){
            dispatch({type:'exam/getQuestionsType'})
        },
        examadd(payload){
            console.log(payload)
            dispatch({type:'exam/insertQuestionsType',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuestionsType)