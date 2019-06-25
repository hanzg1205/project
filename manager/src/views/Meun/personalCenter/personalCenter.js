import React from 'react'
import { connect } from 'dva'
function Personal(){
    return <div>
        <canvas id="myCanvas" style="width: 800px;height: 500px;border: 1px solid #ccc"></canvas>
        <input type="file"></input>
    </div>
}
let mapStateToProps=()=>{

}
let mapDispatchToProps=()=>{

}
export default connect(mapStateToProps,mapDispatchToProps)(Personal)