import React from 'react'
import { List, Avatar, Button, Skeleton } from 'antd';
import '../views/Meun/questionsManagement/QuestionsSee/Table.scss'
function TableView(props){
    let list=[
        {
            name:111
        },
        {
            name:111
        },{
            name:111
        }
    ]
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={list}
            style={{padding:20}}
            renderItem={item => (
            <List.Item actions={[<a>编辑</a>]} style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <p>机器人归位</p>
                    <div className="color">
                        <p className="content_every_cont_left_left_y">代码不全</p>
                        <p className="content_every_cont_left_center_y">javasxript</p>
                        <p className="content_every_cont_left_right_y">周考一</p>
                    </div>
                    <p>dingshaoshan 发布</p>
                </div>
            </List.Item>
        )}
      />
    )
}
export default TableView