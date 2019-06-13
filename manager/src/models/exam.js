import {exam,insertQuestions} from '@/services'
console.log(insertQuestions)
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
        },
        *insertQuestionsType({payload},{call,put}){
          console.log(payload)
         let data = yield call(insertQuestions,payload)
         console.log(data)
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
