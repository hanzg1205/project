import {exam} from '@/services'
export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        typeList:[]
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
        *getQuestionsType({plyload},{call,put}){
            let data = yield call(exam)
            yield put({
                type: 'save',
                action: data.data
            });
        }
    },

    // 同步操作
    reducers: {
        save(state, {action}) {
            return {
                ...state,
                typeList: action
            };
        },
    },
};
