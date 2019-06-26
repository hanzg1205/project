import React,{useState,useEffect} from 'react'
import { connect } from 'dva'
import { findDomNode } from 'react-dom';
function Personal(props){
    console.log(props)
    useEffect(()=>{
        props.getData()
    },[])
    const [visible,setvisible]=useState(false)
    const [val,setval]=useState('https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg')
    let inpChange=e=>{
        let files=e.target.files
        var reader=new FileReader()
        reader.onload=function(e){
            setval(this.result)
            let base=e.target.result
            props.setImg(base)
        }
        reader.readAsDataURL(files[0])
    }

    return (<div>
          <p><input type="file" onChange={inpChange}/></p>
    </div>)
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        ...state.upload
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getData(){
            dispatch({type:'upload/getData'})
        },
        setImg(payload){
            dispatch({type:'upload/setImg',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Personal)