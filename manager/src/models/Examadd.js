import {Examadd} from '../services'
export default {
    // 命名空间
    namespace: 'Examadd',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *insertQuestionsType({payload},{call,put}){
          console.log(payload)
         let data = yield call(Examadd,payload)
         console.log(data)
      }
    },
  
    // 同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  