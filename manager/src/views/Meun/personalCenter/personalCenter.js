import React,{useState,useEffect} from 'react'
import { connect } from 'dva'
import { findDomNode } from 'react-dom';
function Personal(props){
    console.log(props)
    let [canvas,setCanvas]=useState("");
    let [change,setChange]=useState("");
    useEffect(()=>{
        props.getData()
    },[])
    function changeCan(){
        let cxt = canvas && canvas.getContext('2d');
        if(props.base&&props.base){
           
        }else{
            
        }
    //     if(srcImg){
    //         newImg.src = srcImg;
    //       cxt.drawImage(newImg,0,0,1200,633,0,0,250,158);
    //      if(change){
    //         let files = change;
    //         var reader = new FileReader();
    //         reader.onload = function(){
    //             setimgs(this.result);
    //             if(newTopImg){
    //              cxt.drawImage(newTopImg,0,0,533,299,150,25,104,77);
    //              if(!imgSrc){
    //                 props.changeImg({base64:canvas.toDataURL()})
    //              }
    //             }
    //         }
    //         reader.readAsDataURL(files[0]);
    //      }
    //   }
    }
    return (<div>
        <canvas id="myCanvas" style={{width: '300px',height: '300px',border: '1px solid #ccc'}} ref={ref=>{
         setCanvas(ref);
         changeCan();
     }} />
        <input type="file" onChange={(e)=>{setChange(e.target.files)}}></input>
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
        }       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Personal)