import { getClassData, getClassNameData } from '@/services'
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
        getClassRoomData:[],
        getClassRoomDataS:[]
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
            console.log(action)
            return {
                ...state,
                getClassRoomDataS:action
            }
        }
    }
};