import { getClassData, getClassNameData, getExamType , addClass , updataClass , remoteClassRoom , addClassRoom , remoteClassroom , getGradeDatas , getStudent} from '@/services'
import { message } from 'antd'
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
        getClassRoomData:[],
        getClassRoomDataS:[],
        getClassType:[],
        getGrade:[]
    },

    // 异步操作
    effects: {
        *getClassRoom({payload},{call,put}){
            let data = yield call(getClassData)
            yield put({
                type:'getClassData',
                action:data.data
            })
        },
        *getClassName({payload},{call,put}){
            let data = yield call(getClassNameData)
            console.log(data.data)
            yield put({
                type:'getClassRoomDatas',
                action:data.data
            })
        },
        *getExamTypeData({payload},{call,put}){
            let data = yield call(getExamType)
            console.log(data.data)
            yield put({
                type:'getExamData',
                action:data.data
            })
        },
        *addClassRoom({payload},{call,put}){
            let data=yield call(addClass,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *upData({payload},{call,put}){
            let data = yield call(updataClass,payload) 
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *setClassNum({payload},{call,put}){
            console.log(payload)
            let data = yield call(remoteClassRoom,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *setClassData({payload},{call,put}){
            let data = yield call(addClassRoom,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *remoteRoom({payload},{call,put}){
            let data = yield call(remoteClassroom,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *getGradeData({payload},{call,put}){
            let data=yield call(getGradeDatas)
            console.log(data)
            yield put({
                type:'getGrades',
                action:data.data
            })
        },
        *getStudetS({payload},{call,put}){
            let data = yield call(getStudent)
            console.log(data)
        }
    },

    // 同步操作
    reducers: {
        getClassData(state,{action}){
            return {
                ...state,
                getClassRoomData:action
            }
        },
        getClassRoomDatas(state,{action}){
            return {
                ...state,
                getClassRoomDataS:action
            }
        },
        getExamData(state,{action}){
            return {
                ...state,
                getClassType:action
            }
        },
        getGrades(state,{action}){
            return {
                ...state,
                getGrade:action
            }
        }
    }
};