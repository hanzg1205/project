import { login, userInfo, getUserId, getData, userAdd} from '@/services'
import { setToken, getToken } from '@/utils/user';
import { routerRedux } from 'dva/router';

export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        isLogin: 0,
        userInfoData: {},
        getUserIDs:[],
        getUserDatas:[]
    },

    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }) { // eslint-disable-line
            return history.listen(({ pathname }) => {
                if(pathname.indexOf('/login') === -1){
                    // 不去登录页；做token检测
                    // 如果没有登录跳到登录页
                    if(!getToken()){
                        // 利用redux做路由跳转
                        dispatch(routerRedux.replace({
                            pathname: `/login`,
                            search: `?redirect=${encodeURIComponent(pathname)}`
                        }))
                    }
                }else{
                    // 去登录页，如果已经登录跳回首页
                    if(getToken()){
                        dispatch(routerRedux.replace({
                            pathname: '/'
                        }))
                    }
                }
            })
        },
    },

    // 异步操作
    effects: {
        *login({payload},{call,put}){
            // console.log('payload...',payload)
            let data = yield call(login,payload)
            // console.log('data...',data)

            // 设置登录态到cookie里
            if(data.code === 1){
                setToken(data.token)
            }

            yield put({
                type: 'save',
                action: data.code === 1 ? 1 : -1
            });
        },
        *userInfo({payload},{call,put}){
            let data = yield call(userInfo);
            console.log(data);
            yield put({
                type: 'getUserInfo',
                action: data.data
            });
        },
        *userID({payload},{call,put}){
            let data = yield call(getUserId);
            yield put({
                type:'getUserID',
                action:data.data
            })
        },
        *userData({payload},{call,put}){
            let data = yield call(getData)
            console.log(data.data)
            yield put({
                type:'getUserData',
                action:data.data
            })
        },
        *addUsers({payload},{call,put}){
            let data = yield call(userAdd,payload)
            console.log(data)
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
        getUserInfo(state, {action}){
            return {
                ...state,
                userInfoData: action
            };
        },
        getUserID(state,{action}){
            return {
                ...state,
                getUserIDs:action
            }
        },
        getUserData(state,{action}){
            return {
                ...state,
                getUserDatas:action
            }
        }
    },
};
