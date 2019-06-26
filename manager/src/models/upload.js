import { getUploadImg } from '@/services'
export default {
    // 命名空间
    namespace: 'upload',

    // 模块内部的状态
    state: {
        base:'',
        img:''
    },

    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }) { // eslint-disable-line},
        }
    },

    // 异步操作
    effects: {
       *getData({payload},{call,put}){
           let data = yield call(getUploadImg)
           yield put({
               type:'baseImg',
               action:data.data.base64
           })
       },
    },

    // 同步操作
    reducers: {
        baseImg(state,{action}){
            return{
                ...state,
                base:action
            }
        },
        setImg(state,{payload}){
            return {
                ...state,
                img:payload
            }
        }
    },
};
