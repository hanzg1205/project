import {login} from '../services'
export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        list: "123" ,
        user: {}
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
                type: 'userLogin',
                action: payload
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
        userLogin(state, {action}) {
            state.user = action;
            console.log(state)
            return state;
        },
    },

};
