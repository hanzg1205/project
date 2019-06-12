import {type} from '@/services'

export default {
    // 命名空间
    namespace: 'type',

    // 模块内部的状态
    state: {
        
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
        *questionType({typeAdd},{call,put}){
            console.log('payload...',typeAdd)
            let data = yield call(type,typeAdd)
            console.log('data...',data)
            yield put({
                type: 'save',
                action: data.code === 1 ? 1 : -1
            });
        }
    },

    // 同步操作
    reducers: {
        save(state, {action}) {
            return {
                ...state,
                isLogin: action
            };
        },
    },
};
