import {login} from '../services'
export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        isLogin: false,
    },

    subscriptions: {
        setup({
            dispatch,
            history
        }) { // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        *login({payload},{call,put}){
            // console.log('payload...',payload)
            let data = yield call(login,payload)
            // console.log('data...',data)
            yield put({
                type: 'save',
                action: data
            });
        },

        * fetch({ payload }, { call, put }) { // eslint-disable-line
            yield put({
                type: 'save'
            });
        },
    },

    // 同步操作
    reducers: {
        save(state, {action}) {
            console.log(state)
            state.user = action;
            return state;
        },
    },

};
