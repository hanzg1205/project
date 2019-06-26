import React from 'react'
import { Button } from 'antd';
function Personal(){
    return <div>
        <div className="uploadImg">
            <Button type="primary">上传头像</Button>
            <input type="file"/>
        </div>
    </div>
}
export default Personal