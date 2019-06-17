import { login, userInfo, userShow, userIdentity, userApi, userIdentity_api, userView_authority, userIdentity_view } from '@/services'
import { setToken, getToken } from '@/utils/user';
import { routerRedux } from 'dva/router';

export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        isLogin: 0,
        userInfoData: {},
        // 用户数据
        userData: [],
        // 身份数据 
        userIdentityData: [],
        // api接口权限
        userApiData: [],
        // 身份和api权限关系  
        userIdentity_apiData: [],
        // 视图接口权限   
        userView_authorityData: [],
        // 身份和视图权限关系
        userIdentity_viewData: []

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
            // console.log(data);
            yield put({
                type: 'getUserInfo',
                action: data.data
            });
        },
        // 用户数据
        *userShow({payload},{call,put}){
            let data = yield call(userShow);
            // console.log(data);
            yield put({
                type: 'getUserShow',
                action: data.data
            });
        },
        // 身份数据
        *userIdentity({payload},{call,put}){
            let data = yield call(userIdentity);
            // console.log(data);
            yield put({
                type: 'getUserIdentity',
                action: data.data
            });
        },
        // api接口权限
        *userApi({payload},{call,put}){
            let data = yield call(userApi);
            console.log(data);
            yield put({
                type: 'getUserApi',
                action: data.data
            });
        },
        // 身份和api权限关系  
        *userIdentity_api({payload},{call,put}){
            let data = yield call(userIdentity_api);
            console.log(data);
            yield put({
                type: 'getUserIdentity_api',
                action: data.data
            });
        },
        // 视图接口权限   
        *userView_authority({payload},{call,put}){
            let data = yield call(userView_authority);
            console.log(data);
            yield put({
                type: 'getUserView_authority',
                action: data.data
            });
        },
        // 身份和视图权限关系
        *userIdentity_view({payload},{call,put}){
            let data = yield call(userIdentity_view);
            console.log(data);
            yield put({
                type: 'getUserIdentity_view',
                action: data.data
            });
        },

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
        // 用户数据
        getUserShow(state, {action}){
            return {
                ...state,
                userData: action
            }
        },
        // 身份数据
        getUserIdentity(state, {action}){
            return {
                ...state,
                userIdentityData: action
            }
        },
        // api接口权限
        getUserApi(state, {action}){
            return {
                ...state,
                userApiData: action
            }
        },
        // 身份和api权限关系  
        getUserIdentity_api(state, {action}){
            return {
                ...state,
                userIdentity_apiData: action
            }
        },
        // 视图接口权限   
        getUserView_authority(state, {action}){
            return {
                ...state,
                userView_authorityData: action
            }
        },
        // 身份和视图权限关系
        getUserIdentity_view(state, {action}){
            return {
                ...state,
                userIdentity_viewData: action
            }
        },
    },
};
